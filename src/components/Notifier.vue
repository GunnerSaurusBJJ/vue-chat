<template>
  <div></div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Notifier',
  data () {
    return {
    }
  },
  watch: {
    lastMessage: 'showMessage'
  },
  methods: {
    showMessage () {
      this.$toasted.show(this.lastMessage, {
        theme: 'bubble',
        duration: 5000
      })
    }
  },
  computed: {
    ...mapGetters({
      lastMessage: 'lastMessage'
    })
  }
}
</script>

<style>
</style>
