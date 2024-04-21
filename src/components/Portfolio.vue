<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ResumeHeader',
  data() {
    return {}
  }
})
</script>

<template>
  <div class="wrapper">
    <div class="all">
      <section class="portfolio">
        <p class="portfolio-h1">Portfolio</p>
        <div class="container">
          <img class="photo-portfolio" src="https://s3-alpha-sig.figma.com/img/6d43/fbc0/19eb6e72d32e254c8b02825f0390f169?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pF-lhhN7VGWTBN~4INCKtAGUhui7PkJZ4Tr42nqkXSd5BPwllkwfCLy69M7iyhLeLWgoJVUOpn5V~RE-PVXYTfLc5ZEyGOEPRwAXdSwamhTqyNjmsdulmHugiLPfDvaSBT-KqUNcj0x5jHSFfCa0KIA3b3Wbf0yufusTIYawLep6ba2G3u0kA~C~dB-ZvWu8xm36fJEws8YJ9LORchtwwM-tbpnvXaEwds~mTgOzPRTFkr0TGUmmYiGYAJujqmbOix5rw2lC0A96F6G1EH5WLZSQsL7L6CrmZp0sA9dCvSpCr7fPSXtMlkQW77y6PuODhA-du-zfhXBW0FXdbjn-~g__" title="Foto woman" alt="Фото девушки" />
          <p class="portfolio-p">Online fashion store - Homepage</p>
          <img class="photo-portfolio" src="https://s3-alpha-sig.figma.com/img/4234/8d90/4dc19da808f0bf66bdd48c26c8228ec8?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HppRlPHvhsLFuYYMTrRXcxYgjAPqS644v249CQNcPiUg03Uk2FNkO30dvtQeRpaoLHxKdOfPUPzBJ5Ek859PvQT81W-z-HydAe6EMHorMDOciT6zmYJiJ7e7F08~BPXm12~rstxEVU3teK0Grv9kK3mpV~OQHs7pu2dsz62NGBzHdUKEirBT1OAMX0se1s-eNuYpd32P7tCMCaErpH9W~4OxgJsrIZHx-05wiaHaaWH3xL~a6FrwP-s4Mn2bD8Ahp9SDYlPyTpRXfyqO2KSYrv1jM6JYDIuM9GMg9igY3fUV6LsgI6i3PHLkyqcgXdHxzxJIBlWaU9QYYP6UxDqiAw__" title="Foto man" alt="Фото мужчины" />
          <p class="portfolio-p">Reebok Store - Concept</p>
          <img class="photo-portfolio" src="https://s3-alpha-sig.figma.com/img/7bc4/92d5/1d2a3f989e046251ea9557eedaee9136?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kq-oWK7F-Egv-RGIHiA2WAgzDQLfhhQCIrZIdsY6wHAAofBgqN9gZsRavhsV7re0mRRy5IQk7oQL1u6uBQ6-OumPuDEFZTUBrL9ZQHm8dkjxaB9weqLSHXtwz~4f7FTNyGChVfsbFw796UejqRF7bns2apl0CNGeaoarlemzifmpqEQK5DfeN0vJeK1ww79I9PWm33-RzwgElFAEUE-lGsHxqTrAVEXfZwZqZkSyxQ9zlm9OAZ6xmJ68BUrtCXViL1kT1QEUASbk8qUx2U2FCYNRHh8Kd9Cz3nKwduCAoNaUTTBIcQHeKv9nGjP4TfSU5iD3VBsicxNQuoLAPo8QUw__" title="Camera on the photo" alt="Фото камеры" />
          <p class="portfolio-p">Braun Landing Page - Concept</p>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.all {
  background-color: rgba(246, 246, 246, 1);
  padding-left: 29px;
	padding-right: 29px;
}
.portfolio{
  padding-top: 70px;
  padding-bottom: 40px;
  background-color: rgba(246, 246, 246, 1);
  width: 936px;
	max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.portfolio-h1 {
  text-align: center;
  font-weight: bold;
  font-size: 34px;
  font-family: "Arial";
  padding-bottom: 30px;
}
.container {
  display: flex;
  flex-direction: column;
  width: 936px;
	max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 14px;
}
.photo-portfolio {
  max-width: 100%;
  max-height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: block;
}
.portfolio-p {
  font-weight: bold;
  color: #282833;
  padding-top: 17px;
  padding-bottom: 50px;
  line-height: 21.83px;
  font-family: "Arial";
  font-size: 18px;
  line-height: 21.83px;
  text-align: center;
  text-decoration: underline;
}
</style>