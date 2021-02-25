<template>
  <div class="forgot-password">
    <h4>ForgotPassword form</h4>
     <v-form>
      <v-container class="d-flex justify-center align-center flex-column">
        <v-col cols="12" md="4">
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
        <v-btn @click="sendReset" class="mb-10">Reset password</v-btn>
      </v-container>
     </v-form>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'ForgotPassword',
  data () {
    return {
      form: {
        email: ''
      }
    }
  },
  validations: {
    form: {
      email: {
        email,
        required
      }
    }
  },
  methods: {
    sendReset () {
      try {
        this.$store.dispatch('auth/ResetPassword', this.form.email)
        this.$router.push({ name: 'Login' })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>

</style>
