<template>
  <div>
    <h5>Welcome back, Login to continue</h5>
    <div class="loginPage">
      <center>
        <div class="login-field">
          <q-input
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'E-mail Required']"
            class="text-input"
            outlined
            v-model="email"
            @input="updateEmail()"
            label="E-mail"
          />
        </div>
        <div class="login-field1">
          <q-input
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Password Required']"
            class="text-input"
            outlined
            type="password"
            v-model="password"
            label="Password"
          />
          <h6 class="forgot">
            <router-link style="text-decoration: none;" to="/forgot"
              >*Forgot Password</router-link
            >
          </h6>
        </div>

        <q-btn
          class="login-button"
          color="primary"
          @click="goToHome()"
          label="Login"
        />

        <h6 class="bottom-line">
          Don't have an account?
          <router-link style="text-decoration: none;" to="/signup"
            >Sign Up</router-link
          >
        </h6>
      </center>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "Login",

  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    goToHome() {
      this.$router.push("/welcome");
    },
    goToSignUp() {
      this.$router.push("/signup");
    },
    ...mapActions({
      updateEmail: "updateEmail"
    }),
    updateEmail() {
      this.$store.commit("updateEmail", this.email);
    }
  },
  computed: {}
};
</script>
<style scoped>
h5 {
  text-align: center;
}
.text-input {
  width: 300px;
  align-content: center;
  /* left: 50%; */
}
.loginPage {
  align-items: auto;
  position: relative;
  /* margin-left: 480px; */
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
  margin-bottom: 10px;
  margin-top: 10px;
  position: relative;
  font-size: 15px;
  font: optional;
}
.login-button {
  width: 300px;
}
</style>
