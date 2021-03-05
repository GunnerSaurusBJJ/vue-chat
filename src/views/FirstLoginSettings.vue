<template>
  <div class="first-login-page my-10">
    <div class="page-title d-flex justify-center align-center flex-column">
      <h2>First Login Settings</h2>
      <p>Tell us about yourself</p>
    </div>

    <v-form>
      <v-container class="d-flex justify-center align-center flex-column">
        <v-col cols="12" md="4">
          <v-text-field
            v-model="form.firstName"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="form.lastName"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="form.country"
            label="Country"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="form.city"
            label="City"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="form.phoneNumber"
            label="Phone number"
            required
          ></v-text-field>
        </v-col>

        <v-btn color="primary" @click="submit">Submit</v-btn>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'FirstLoginSettings',
  data () {
    return {
      form: {
        firstName: '',
        lastName: '',
        country: '',
        city: '',
        phoneNumber: ''
      }
    }
  },
  methods: {
    submit () {
      this.$store.dispatch('user/createUserInfo', this.form)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
