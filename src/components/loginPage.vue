<template>
    <q-layout view="1hH-Lpr-1fH">
        <q-page-container>
            <q-page class="q-pa-lg q-pt-xl">
            <div class="q-gutter">
                    <div class="flex flex-center q-pl-md">
                    <p class="text-weight-medium text-h6">Welcome, Login into your account</p>
                </div>
                <div class="row">
                    <div class="col-4"></div>
                    <div class="col-4">
                        <div class="col q-pt-lg q-py-none">
                            <q-input
                                lazy-rules
                                :rules="[val => (val && val.length > 0) || 'E-mail Required']"
                                class=" q-mt-sm q-mb-md"
                                outlined
                                v-model="email"
                                size="40px"
                                label="E-mail"
                             /> 
                        </div>
                    </div>
                    <div class="col-4"></div>
                </div>
             <div class="row">
                 <div class="col-4"></div>
                <div class="col-4">
                  <div class="  q-pt-sm q-py-none">
                    <div>
                    <q-input
                        outlined
                        type="password"
                        label="Password"
                        class="q-mt"
                        lazy-rules
                         v-model="password"
                       :rules="[ val => val && val.length > 7 || 'Password must have at least 7 characters long']"
                        />
                    </div>
                </div>
                </div>
                
            </div>
            <div class="row q-pt-md">
              <div class="col-4"></div>
              <div class="col-4">
                <q-btn class="primary full-width q-px-xl" label="SignUp" color="primary" @click="goToHome(), handleSubmit()"></q-btn>
              </div>
              <div class="col-4"></div>
            </div>
            <div class="row">
                <div class="col-4"></div>
                <div class="col-5">
                  <h6>
                    Don't have an account?
                    <router-link  style="text-decoration: none;" to="/signin">Sign Up</router-link>
                  </h6>
                </div>
                <div class="col-4"></div>
            </div>
            </div>
            </q-page>
        </q-page-container>

    </q-layout>
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
      this.$router.push("/signin");
    },
    ...mapActions({
      updateEmail: "updateEmail"
    }),
    updateEmail() {
      this.$store.commit("updateEmail", this.email);
    },
    handleSubmit() {
      //to check if data is being added to db
      const data = {
        email: this.email,

        password: this.password
      };
      console.log(data);
    }
  },
  computed: {}
};
</script>