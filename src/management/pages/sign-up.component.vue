<template>
  <body>
    <div class="grid grid-nogutter surface-section text-900">
      <div class="col-12 md:col-6 overflow-hidden">
        <img
          src="https://i.ibb.co/YLzWHKD/signup.png"
          alt="Image"
          class="md:ml-auto block md:h-full md:w-full"
        />
      </div>

      <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div class="form-demo">
          <pv-dialog
            v-model:visible="showMessage"
            :breakpoints="{ '960px': '80vw' }"
            :style="{ width: '30vw' }"
            position="top"
          >
            <div class="flex align-items-center flex-column pt-6 px-3">
              <i
                class="pi pi-check-circle"
                :style="{ fontSize: '5rem', color: 'var(--green-500)' }"
              ></i>
              <h5>Registration Successful!</h5>
              <p :style="{ lineHeight: 1.5, textIndent: '1rem' }">
                Your account is registered under name <b>{{ namev }}</b> ; it'll
                be valid . Please check <b>{{ email }}</b> for activation
                instructions.
              </p>
            </div>
            <template #footer>
              <div class="flex justify-content-center">
                <pv-button label="OK" @click="goHome" class="p-button-text" />
              </div>
            </template>
          </pv-dialog>

          <div class="flex justify-content-center">
            <div class="card">
              <h1 class="text-center">Register</h1>
              <form
                @submit.prevent="handleSubmit(!v$.$invalid)"
                class="p-fluid"
              >
                <div class="field">
                  <div class="p-float-label">
                    <pv-input-text
                      :id="namev"
                      v-model="v$.namev.$model"
                      :class="{ 'p-invalid': v$.namev.$invalid && submitted }"
                    />
                    <label
                      for="namev"
                      :class="{ 'p-error': v$.namev.$invalid && submitted }"
                      >Name*</label
                    >
                  </div>
                  <small
                    v-if="
                      (v$.namev.$invalid && submitted) ||
                      v$.namev.$pending.$response
                    "
                    class="p-error"
                    >{{
                      v$.namev.required.$message.replace("Value", "Namev")
                    }}</small
                  >
                </div>
                <div class="field">
                  <div class="p-float-label">
                    <pv-input-text
                      :id="lastn"
                      v-model="v$.lastn.$model"
                      :class="{ 'p-invalid': v$.lastn.$invalid && submitted }"
                    />
                    <label
                      for="lastn"
                      :class="{ 'p-error': v$.lastn.$invalid && submitted }"
                      >Last Name*</label
                    >
                  </div>
                  <small
                    v-if="
                      (v$.namev.$invalid && submitted) ||
                      v$.namev.$pending.$response
                    "
                    class="p-error"
                    >{{
                      v$.namev.required.$message.replace("Value", "Namev")
                    }}</small
                  >
                </div>
                <div class="field">
                  <div class="p-float-label p-input-icon-right">
                    <i class="pi pi-envelope" />
                    <pv-input-text
                      :id="email"
                      v-model="v$.email.$model"
                      :class="{ 'p-invalid': v$.email.$invalid && submitted }"
                      aria-describedby="email-error"
                    />
                    <label
                      for="email"
                      :class="{ 'p-error': v$.email.$invalid && submitted }"
                      >Email*</label
                    >
                  </div>
                  <span v-if="v$.email.$error && submitted">
                    <span
                      id="email-error"
                      v-for="(error, index) of v$.email.$errors"
                      :key="index"
                    >
                      <small class="p-error">{{ error.$message }}</small>
                    </span>
                  </span>
                  <small
                    v-else-if="
                      (v$.email.$invalid && submitted) ||
                      v$.email.$pending.$response
                    "
                    class="p-error"
                    >{{
                      v$.email.required.$message.replace("Value", "Email")
                    }}</small
                  >
                </div>
                <div class="field">
                  <div class="p-float-label">
                    <pv-password
                      :id="password"
                      v-model="v$.password.$model"
                      :class="{
                        'p-invalid': v$.password.$invalid && submitted,
                      }"
                      toggleMask
                    >
                      <template #header>
                        <h6>Pick a password</h6>
                      </template>
                      <template #footer="sp">
                        {{ sp.level }}
                        <Divider />
                        <p class="mt-2">Suggestions</p>
                        <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                          <li>At least one lowercase</li>
                          <li>At least one uppercase</li>
                          <li>At least one numeric</li>
                          <li>Minimum 8 characters</li>
                        </ul>
                      </template>
                    </pv-password>
                    <label
                      for="password"
                      :class="{ 'p-error': v$.password.$invalid && submitted }"
                      >Password*</label
                    >
                  </div>
                  <small
                    v-if="
                      (v$.password.$invalid && submitted) ||
                      v$.password.$pending.$response
                    "
                    class="p-error"
                    >{{
                      v$.password.required.$message.replace("Value", "Password")
                    }}</small
                  >
                </div>
                <div class="field">
                  <div class="p-float-label">
                    <pv-calendar :id="date" v-model="date" :showIcon="true" />
                    <label for="date">Birthday</label>
                  </div>
                </div>
                <div class="field-checkbox">
                  <pv-checkbox
                    :id="accept"
                    namev="accept"
                    value="Accept"
                    v-model="v$.accept.$model"
                    :class="{ 'p-invalid': v$.accept.$invalid && submitted }"
                  />
                  <label
                    for="accept"
                    :class="{ 'p-error': v$.accept.$invalid && submitted }"
                    >I agree to the terms and conditions*</label
                  >
                </div>

                <pv-button type="submit" label="Submit" class="mt-2" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
export default {
  name: "sign-up.component",
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      namev: "",
      lastn: "",
      email: "",
      password: "",
      date: null,
      country: null,
      accept: null,
      submitted: false,
      showMessage: false,
    };
  },
  countryService: null,
  validations() {
    return {
      namev: {
        required,
      },
      lastn: {
        required,
      },
      email: {
        required,
        email,
      },
      password: {
        required,
      },
      accept: {
        required,
      },
    };
  },
  methods: {
    handleSubmit(isFormValid) {
      this.submitted = true;
      if (!isFormValid) {
        return;
      }
      this.toggleDialog();
    },
    toggleDialog() {
      this.showMessage = !this.showMessage;
      if (!this.showMessage) {
        this.resetForm();
      }
    },
    goHome() {
      this.$router.push("/sign-in");
    },
    resetForm() {
      this.namev = "";
      this.lastn = "";
      this.email = "";
      this.password = "";
      this.date = null;
      this.accept = null;
      this.submitted = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.form-demo {
  .card {
    min-width: 65%;
    form {
      margin-top: 2rem;
    }
    .field {
      margin-bottom: 1.5rem;
    }
  }
  .h1 {
    font-size: large;
  }
  @media screen and (max-width: 960px) {
    .card {
      width: 80%;
    }
  }
}
</style>
