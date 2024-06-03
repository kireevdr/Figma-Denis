<script lang="ts">
import Headerr from '@/components/Header.vue'
import AboutMe from '@/components/AboutMe.vue'
import Skills from '@/components/Skills.vue'
import Portfolio from '@/components/Portfolio.vue'
import Contacts from '@/components/Contacts.vue'
import Foto from '@/components/Foto.vue'
import Circuitry from '@/components/Circuitry.vue'

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
    Circuitry,
  }
})
</script>

<template>

    <!-- <div class="wrapper"> -->
  <Headerr />
<!-- </div> -->

<!-- <div class="wrapper"> -->
  <Foto />
<!-- </div> -->

<!-- <div class="wrapper"> -->
  <AboutMe />
<!-- </div> -->

<!-- <div class="wrapper"> -->
  <Skills />
<!-- </div> -->

<!-- <div class="wrapper"> -->
  <Portfolio />
<!-- </div> -->

  <!-- <div class="wrapper"> -->
  <Contacts />
<!-- </div> -->
  <Circuitry />

</template>

<style scoped lang="scss">
// @import './assets/styles.scss';
// @import './assets/styles.scss';
</style>
