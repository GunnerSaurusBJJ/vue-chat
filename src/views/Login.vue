<template>
  <div class="login-page d-flex justify-center align-center">
    <div class="content justify-center align-center">
      <div class="login-page__title d-flex justify-center align-center">
        <h1>LOGIN</h1>
      </div>
      <login-form />
    </div>
    <Notifier />
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'
import Notifier from '@/components/Notifier'
export default {
  name: 'Login',
  components: {
    LoginForm,
    Notifier
  }
}
</script>

<style lang="scss" scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  &__title {
    background: rgb(162, 215, 250);
    height: 100%;
    border-radius: 10px 0 0 10px;
  }
}
.content {
  background: #c4c4c430;
  display: grid;
  width: 60vw;
  grid-template-columns: 1fr 2fr;
  height: 500px;
  border-radius: 10px;
}
</style>
