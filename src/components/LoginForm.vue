<template>
  <v-form class="form">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="form.email"
            label="E-mail"
            required
          ></v-text-field>
          <p
            class="error"
            v-if="$v.form.email.$dirty && !$v.form.email.required"
          >
            Email is required
          </p>
          <p class="error" v-if="$v.form.email.$dirty && !$v.form.email.email">
            Email is not correct
          </p>
        </v-col>

        <v-col cols="12">
          <v-text-field
            v-model="form.password"
            label="Pasword"
            required
          ></v-text-field>
          <p
            class="error"
            v-if="$v.form.password.$dirty && !$v.form.password.required"
          >
            Password is required
          </p>
          <p
            class="error"
            v-if="$v.form.password.$dirty && !$v.form.password.minLength"
          >
            Password must be at least 4 symbols
          </p>
        </v-col>
      </v-row>
    </v-container>
    <router-link :to="{name: 'ForgotPassword'}">forgot password</router-link>
    <br>
    <v-btn class="btn" color="primary" @click.native="onSubmit" :loading="loginInProgress" >Login</v-btn>
    Don't have an account? <router-link :to="{name: 'SignUp'}">sign up</router-link>
  </v-form>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'

import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'LoginForm',
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  validations: {
    form: {
      email: {
        email,
        required
      },
      password: {
        required,
        minLength: minLength(4)
      }
    }
  },
  computed: {
    ...mapGetters({
      loginInProgress: 'auth/loginInProgress'
    })
  },
  methods: {
    ...mapActions({
      login: 'auth/login'
    }),
    onSubmit () {
      this.$v.form.$touch()
      if (!this.$v.form.$invalid) {
        const user = {
          email: this.form.email,
          password: this.form.password
        }
        this.login(user)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  padding: 0 35px;
}
.btn {
  margin: 20px auto;
  display: block;
  width: 200px;
}
</style>
