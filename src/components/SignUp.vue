<template>
  <div class="signup">
    <h5>Welcome, Create a new account!</h5>
    <div class="loginPage">
      <div class="login-field">
        <label for="email">First Name*</label>
        <q-input
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'First Name Required']"
          class="text-input"
          outlined
          v-model="firstName"
        />
      </div>
      <div class="login-field">
        <label for="email">Last Name*</label>
        <q-input
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Last Name Required']"
          class="text-input"
          outlined
          v-model="lastName"
        />
      </div>
      <div class="login-field">
        <label for="email">Email*</label>
        <q-input
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'E-mail Required']"
          class="text-input"
          outlined
          v-model="email"
        />
      </div>
      <div class="login-field">
        <label for="email">Phone Number*</label>
        <q-input
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Phone Number Required']"
          class="text-input"
          outlined
          v-model="phoneNumber"
        />
      </div>
      <div class="login-field1">
        <label for="password">Password*</label>
        <q-input
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Password Required']"
          class="text-input"
          outlined
          type="password"
          v-model="password"
        />
      </div>

      <q-btn
        class="signup-button"
        color="primary"
        @click="handleSubmit()"
        label="Sign Up"
      />

      <h6 class="bottom-line">
        Already have an account?
        <router-link style="text-decoration: none;" to="/">Login</router-link>
      </h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: ""
    };
  },
  methods: {
    goToHome() {
      this.$router.push("/welcome");
    },
    goToSignUp() {
      this.$router.push("/signup");
    },
    handleSubmit() {
      //to check if data is being added to db
      const data = {
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        phoneNumber: this.phoneNumber,
        password: this.password
      };
      console.log(data);
    }
  }
};
</script>
<style scoped>
.signup {
  align-content: center;
}
h5 {
  text-align: center;
}
.text-input {
  width: 300px;
  align-content: center;
  left: 50%;
}
.loginPage {
  align-items: center;
  margin-left: 810px;
}
.login-field {
  padding-bottom: 17px;
}
.login-field1 {
  padding-bottom: 0px;
}
/* .loginbb {
  padding-bottom: 2px;
} */

.span {
  padding-top: 20px;
  padding-left: 27px;
}
.forgot {
  color: blue;
  margin-bottom: 10px;
  margin-top: 0px;
  position: relative;
  font-size: 15px;
  font: optional;
  /* text-decoration: none; */
}
.bottom-line {
  color: blue;
  margin-bottom: 5px;
  margin-top: 10px;
  position: relative;
  font-size: 15px;

  font: optional;
}
.signup-button {
  width: 300px;
}
</style>
