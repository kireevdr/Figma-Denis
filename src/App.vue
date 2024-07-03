<script lang="ts">
import Header from '@/components/Header.vue'
import AboutMe from '@/components/AboutMe.vue'
import Skills from '@/components/Skills.vue'
import Portfolio from '@/components/Portfolio.vue'
import Contacts from '@/components/Contacts.vue'
import Foto from '@/components/Foto.vue'
import Circuitry from '@/components/Circuitry.vue'
import ListUsers from '@/components/ListUsers.vue'
import {defineComponent} from 'vue'

export default defineComponent({
  data() {
    return {
      header: [],
      aboutme: [],
    }
  },

  name: 'Website',
  components: {
    Header,
    AboutMe,
    Skills,
    Portfolio,
    Contacts,
    Foto,
    Circuitry,
    ListUsers,
  }
})
</script>

<template>
  <Header/>

  <Foto/>

  <AboutMe/>

  <Skills/>

  <Portfolio/>

  <Contacts/>

  <Circuitry/>

  <ListUsers/>
</template>

<style scoped lang="scss">
</style>
