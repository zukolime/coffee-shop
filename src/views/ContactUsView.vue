<template>
  <main>
    <div class="banner contactspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <header-title :text="title.text" />
      </div>
    </div>
    <section class="contacts">
      <div class="container">
        <div class="row">
          <div class="col col-12 col-lg-6 offset-0 offset-lg-3">
            <div class="title mt-5">Tell us about your tastes</div>
            <img
              class="beanslogo mt-5"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />

            <form @submit.prevent="submit" action="#" class="mt-5">
              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="name-input" class="mb-0">
                    Name
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    v-model="v$.name.$model"
                    type="text"
                    class="form-control"
                    id="name-input"
                  />
                  <span
                    class="error-message"
                    v-for="error in v$.name.$errors"
                    :key="error.$uid"
                    >{{ error.$message }}</span
                  >
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="email-input" class="mb-0">
                    E-mail
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    v-model="v$.email.$model"
                    type="text"
                    class="form-control"
                    id="email-input"
                  />
                  <span
                    class="error-message"
                    v-for="error in v$.email.$errors"
                    :key="error.$uid"
                    >{{ error.$message }}</span
                  >
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="phone-input" class="mb-0"> Phone </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input
                    v-model="v$.phone.$model"
                    type="text"
                    class="form-control"
                    id="phone-input"
                  />
                  <span
                    class="error-message"
                    v-for="error in v$.phone.$errors"
                    :key="error.$uid"
                    >{{ error.$message }}</span
                  >
                </div>
              </div>

              <div class="form-group row textarea">
                <div class="col col-12 d-flex justify-content-start">
                  <label for="pmessage" class="mb-3 mt-3 text-center">
                    Your message
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12">
                  <textarea
                    v-model="v$.message.$model"
                    class="form-control"
                    name="message"
                    id="message"
                    rows="5"
                    placeholder="Leave your comments here"
                  ></textarea>
                  <span
                    class="error-message"
                    v-for="error in v$.message.$errors"
                    :key="error.$uid"
                    >{{ error.$message }}
                  </span>
                  <div class="checkbox-wrapper">
                    <input
                      v-model="v$.checkbox.$model"
                      type="checkbox"
                      name="checkbox"
                      id="checkbox"
                      checked
                    />
                    <template v-if="checkbox">
                      <label for="checkbox"
                        >I accept the terms of the offer</label
                      >
                    </template>
                    <template v-else
                      ><label
                        class="error-message"
                        v-for="error in v$.checkbox.$errors"
                        :key="error.$uid"
                        >I accept the terms of the offer -
                        {{ error.$message || "Value is required" }}</label
                      ></template
                    >
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <button class="btn btn-outline-dark send-btn">Send us</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import HeaderTitle from "@/components/HeaderTitle.vue";

import { useVuelidate } from "@vuelidate/core";
import { required, email, maxLength } from "@vuelidate/validators";
import { helpers } from "@vuelidate/validators";
import { minLength } from "../validators/minLength";

export default {
  components: { NavBarComponent, HeaderTitle },

  setup() {
    return { v$: useVuelidate() };
  },

  data() {
    return {
      title: {
        text: "Contact us",
      },

      name: "",
      email: "",
      phone: "",
      message: "",
      checkbox: true,
    };
  },

  validations() {
    return {
      name: { required },
      email: { required, email },
      phone: {},
      message: {
        required,
        maxLength: maxLength(20),
        minLength: helpers.withMessage(
          " The minimum length allowed is 5",
          minLength
        ),
      },
      checkbox: { required: (v) => v },
    };
  },

  methods: {
    async submit() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;

      const message = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message,
        checkbox: this.checkbox,
      };

      try {
        const response = await fetch("http://localhost:3000/contacts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(message),
        });

        if (response.ok) {
          this.name = "";
          this.email = "";
          this.phone = "";
          this.message = "";
          this.checkbox = true;
          this.v$.$reset();
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.checkbox-wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  input {
    box-shadow: none;
  }

  label {
    margin: 0;
  }
}

.error-message {
  color: red;
}
</style>
