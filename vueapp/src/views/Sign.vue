<template>
  <v-app>
    <v-container>
      <v-btn @click="signinWithGoogle()" icon>
        구글 로그인
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-container>
  </v-app>
</template>
<script>
export default {
  methods: {
    async signinWithGoogle () {
      const provider = new this.$firebase.auth.GoogleAuthProvider()
      this.$firebase.auth().languageCode = 'ko'
      const r = await this.$firebase.auth().signInWithPopup(provider)
      console.log(r)
    }
  },
  data () {
    return {
    }
  }
}
</script>
