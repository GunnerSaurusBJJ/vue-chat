<template>
  <div class="signup-page">
    <v-form>
      <v-container class="d-flex justify-center align-center flex-column">
        <v-col cols="12" md="4">
          <v-text-field
            v-model="form.firstname"
            label="First name"
            required
          ></v-text-field>
          <p
            class="error"
            v-if="$v.form.firstname.$dirty && !$v.form.firstname.required"
          >
            Firstname is required
          </p>
          <p
            class="error"
            v-if="$v.form.firstname.$dirty && !$v.form.firstname.minLength"
          >
            Firstname must be at least 4 symbols
          </p>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="form.lastname"
            label="Last name"
            required
          ></v-text-field>
          <p
            class="error"
            v-if="$v.form.lastname.$dirty && !$v.form.lastname.required"
          >
            Lastname is required
          </p>
          <p
            class="error"
            v-if="$v.form.lastname.$dirty && !$v.form.lastname.minLength"
          >
            Lastname must be at least 4 symbols
          </p>
        </v-col>

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

        <v-col cols="12" md="4">
          <v-text-field
            v-model="form.password"
            label="Password"
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

        <v-col cols="12" md="4">
          <v-text-field
            v-model="form.confirmPassword"
            label="Confirm password"
            required
          ></v-text-field>
          <p
            class="error"
            v-if="
              $v.form.confirmPassword.$dirty &&
                !$v.form.confirmPassword.required
            "
          >
            Password is required
          </p>
          <p
            class="error"
            v-if="
              $v.form.confirmPassword.$dirty &&
                !$v.form.confirmPassword.minLength
            "
          >
            Password must be at least 4 symbols
          </p>
          <p
            class="error"
            v-if="
              $v.form.confirmPassword.$dirty &&
                !$v.form.confirmPassword.isConfirmed
            "
          >
            Password must be confirmed
          </p>
        </v-col>

        <v-btn color="primary" @click="signUp">Sign Up</v-btn>
        <p>Already have an account? <router-link :to="{name: 'Login'}">Login</router-link></p>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex'
export default {
  name: 'SignUp',
  data () {
    return {
      form: {
        firstname: '',
        lastname: '',
        password: '',
        confirmPassword: '',
        email: ''
      }
    }
  },
  validations: {
    form: {
      firstname: {
        required,
        minLength: minLength(4)
      },
      lastname: {
        required,
        minLength: minLength(4)
      },
      email: {
        email,
        required
      },
      password: {
        required,
        minLength: minLength(4)
      },
      confirmPassword: {
        required,
        minLength: minLength(4),
        isConfirmed (value) {
          return value === this.form.password
        }
      }
    }
  },
  computed: {
    ...mapGetters({
      isFirstLogin: 'auth/isFirstLogin'
    })
  },
  watch: {
    isFirstLogin: 'redirectToFirstLogin'
  },
  methods: {
    signUp () {
      this.$v.form.$touch()
      if (!this.$v.form.$invalid) {
        const user = {
          firstname: this.form.firstname,
          lastname: this.form.lastname,
          email: this.form.email,
          password: this.form.password
        }
        this.$store.dispatch('auth/SignUp', user)
      }
    },
    redirectToFirstLogin (val) {
      if (val) {
        this.$router.push({ name: 'FirstLoginSettings' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.signup-page {
  min-height: 100vh;
  background: #e4d5d5;
}
</style>
