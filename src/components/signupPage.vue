<template>
    <q-layout view="lHh Lpr lFf">
      <q-page-container>
        <q-page class="q-pa-lg q-pt-xl">
          <div class="q-gutter-none">
            <div class="flex flex-center  q-pl-md">
              <p class="text-weight-medium text-h6">Welcome,Create an Account</p>
            </div>
   
            <div class="row">
              <div class="col-4"></div>
                <div class="col-4">
                  <div class="col q-pt-lg q-py-none">
                    <q-input
                      outlined
                      v-model="firstName"
                      label="First Name"
                      lazy-rules
                      :rules="[ val => val && val.length > 0 || 'First Name Required']"
                    ></q-input>
                  </div>
                </div>
              <div class="col-4"></div>
            </div>
            <div class="row">
              <div class="col-4"></div>
                <div class="col-4">
                  <div class="col q-pt-lg q-py-none">
                    <q-input
                        outlined
                        v-model="lastName"
                        label="Last Name"
                        class="q-mt"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Last Name Required']"
                      >
                    </q-input>
                  </div>
                </div>
              <div class="col-4"></div>
            </div>
            
             <div class="row">
              <div class="col-4"></div>
                <div class="col-4">
                  <div class="col q-pt-lg q-py-none">
                    <q-input
                        outlined
                        v-model="phone"
                        label="Phone Number"
                        class="q-mt "
                        lazy-rules
                        :rules="[ val => val !== null && val !== '' || 'Phone Number required',
                                  val => val > 0 && val.length < 11 || 'Phone Number required']"
                        >
                      </q-input>
                  </div>
                </div>
              <div class="col-4"></div>
            </div>
            <div class="row">
              <div class="col-4"></div>
                <div class="col-4">
                  <div class="col q-pt-lg q-py-none">
                    <q-input
                        outlined
                        v-model="email"
                        label="E-mail"
                        class="q-mt "
                        lazy-rules
                        :rules="[val => (val && val.length > 0) || 'E-mail Required']"           
                        >
                      </q-input>
                  </div>
                </div>
              <div class="col-4"></div>
            </div>
             
            <div class="row">
              <div class="col-4"></div>
                <div class="col-4">
                  <div class="col q-pt-lg q-py-none">
                    <q-input
                        outlined
                        v-model="password"
                        label="Create Password"
                        class="q-mt "
                        lazy-rules
                        :rules="[ val => val && val.length > 7 || 'Password must have at least 7 characters long']"           
                        >
                      </q-input>
                  </div>
                </div>
              <div class="col-4"></div>
            </div>
            <div class="row">
              <div class="col-4"></div>
              <div class="col-4">
                <q-btn class="primary full-width q-px-xl" label="SignUp" color="primary" @click="onSubmit(), handeSubmit()"></q-btn>
              </div>
              <div class="col-4"></div>
            </div>
            <div class="row">
                <div class="col-4"></div>
                <div class="col-4">
                  <h6>
                    Already have an account?
                    <router-link style="text-decoration: none;" to="/">Login</router-link>
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
import axios from 'axios';
export default {
  name:'signup',
  data () {
    return {
      firstName: null,
      lastName:null,
      age: null,
      phone:null,
      email:null,
      password:null,
      accept: false
    }
  },

  methods: {
    onSubmit () {  
          this.$router.push('/welcome')
    },
    goToSignUp() {
      this.$router.push("/signup");
    },
    handeSubmit(){
    const data={      
        firstName: this.firstName,
        lastName:this.lastName,
        age: this.age,
        phone:this.phone,
        email:this.email,
        password:this.password,
      }; 
      console.log(data);
        axios.post('/user_SignUp.json', data)
        .then(res => console.log(res))
        .catch(error => console.log(error))
      }
    }

}
 
</script>