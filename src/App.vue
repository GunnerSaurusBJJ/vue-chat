<template>
  <v-app>
    <nav class="d-flex justify-center align-center">
      <v-btn @click.native="logOut" color="red" v-if="!isValidRoute"
        >LOGOUT</v-btn
      >
      <span @click="token">show token</span>
    </nav>
    <router-view></router-view>
  </v-app>
</template>

<script>
import firebase from '@/plugins/firebase'
export default {
  name: 'App',
  data () {
    return {
      routes: ['Login', 'SignUp', 'ForgotPassword']
    }
  },
  computed: {
    isValidRoute () {
      return this.routes.includes(this.$route.name)
    }
  },
  methods: {
    async logOut () {
      await this.$store.dispatch('auth/logOut')
      this.$router.push({ name: 'Login' })
    },
    token () {
      firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
        console.log(idToken)
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
