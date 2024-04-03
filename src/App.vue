<script lang="ts">
import Headerr from '@/components/Header.vue'
import AboutMe from '@/components/AboutMe.vue'
import Skills from '@/components/Skills.vue'
import Portfolio from '@/components/Portfolio.vue'
import Contacts from '@/components/Contacts.vue'
import Foto from '@/components/Foto.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Website',
  components: {
    Headerr,
    AboutMe,
    Skills,
    Portfolio,
    Contacts,
    Foto,
  }
})
</script>

<template>
  <Headerr />

  <Foto />

  <AboutMe />

  <Skills />

  <Portfolio />

  <Contacts />
</template>

<style scoped>
</style>
