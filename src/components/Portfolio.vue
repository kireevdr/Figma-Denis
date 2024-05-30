<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ResumeHeader',
  data() {
    return {}
  }
})
</script>

<template lang="pug">
.wrapper
  .container    
    section.b-portfolio.row
      p.b-portfolio__heading.col-12 Portfolio
      img.col-12.b-portfolio__photo(src='/portfolio-1.png' loading="lazy" title='Foto woman' alt='Фото девушки')
      p.b-portfolio__text.col-12 Online fashion store - Homepage
      img.col-12.b-portfolio__photo(src='/portfolio-2.png' loading="lazy" title='Foto man' alt='Фото мужчины')
      p.b-portfolio__text.col-12 Reebok Store - Concept
      img.col-12.b-portfolio__photo(src='/portfolio-3.png' loading="lazy" title='Camera on the photo' alt='Фото камеры')
      p.b-portfolio__text.col-12 Braun Landing Page - Concept
</template>

<style scoped lang="scss">
@import '../assets/styles.scss';
.wrapper {
	background-color: $backlor;
	max-width: 90.25rem;
	margin-left: auto;
	margin-right: auto; 
	width: $width;
	@include marg-max-width;
  padding: 0%;
}
.container {
  padding: 0%;
}    
.b-portfolio {
  padding-bottom: g(10);
  padding-top: g(7);
  color: #282833;
  width: $width;
	@include marg-max-width;
}
.b-portfolio__heading {
  @include align-fontw;
  font-size: 2.125rem;
  font-family: $ffamily;
  padding-bottom: g(10);
  padding-top: g(11);
}
.b-portfolio__photo {
  max-height: 100%;
  display: block;
  padding-left: 0%;
	padding-right: 0%;
  max-width: $width;
}
.b-portfolio__text {
  @include align-fontw;
  color: #282833;
  padding-top: g(10);
  padding-bottom: g(11);
  line-height: 1.3644rem;
  font-family: $ffamily;
  font-size: 1.125rem;
  line-height: 1.3644rem;
  text-decoration: underline;
}
</style>