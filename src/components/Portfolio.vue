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
      img.col-12.b-portfolio__photo(src='https://s3-alpha-sig.figma.com/img/6d43/fbc0/19eb6e72d32e254c8b02825f0390f169?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ow5IHIZk4kGw3N9dlHIvHBXRyTCIX7Zc9Q2ErYKYj0xbNG2u102yWT0QksGBgw~WEgfUL-mGUZ~a3Z0pXwdlH3f14zsmKSSol5CiWVLh~szfv-xjXPBh8DbUrK~HHY5WVMDfaSka-We97PO4l2xPpIfK9VUG~F33oVFhJShWv4c2IwwxxM2FdoedwM8jnVbBag2XWywOHoPMoLk~LurpDYou2nuyPAo35yekprBYn47JZytCpIE1MHD2G-PLXhAbJ1B7yiCYplwUkBiHqNLHocRJpHsN-bSJyL-stsIFFqtzk-gme776bamCvj~efvlQduak7xvb-VkbDGVgoymbBw__' title='Foto woman' alt='Фото девушки')
      p.b-portfolio__text.col-12 Online fashion store - Homepage
      img.col-12.b-portfolio__photo(src='https://s3-alpha-sig.figma.com/img/4234/8d90/4dc19da808f0bf66bdd48c26c8228ec8?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WSCyXJ8evbtO0klYvQWVUsUtVr5vwVpwJrcqmxCFjZBOw060i907K4p~TLBpWCstyDWF9krTUWW-rWHMz3Tia1gYIG7IL-eSouruPMi2fY0iJ2IEzZD4Lphoy0VInOlA63W-fyOnmSyeMju7Zw6D95vakHuIzkOFAQbRn5jUFInVifDD2-Ockvezve4xKAP5fmOTc8oBBpU5DK7GQ-5Rf14i91f5nFc40x5YkTqPNeHYKMWlJTUkw49P5ksriTcc94GJM7y9vU61niJwY1Fz4zehENTn33IaFIYZ3z6PKrCUaeXVJhQBx~A2BHJzrk8SbiRphf9v1rathezmIV1FLg__' title='Foto man' alt='Фото мужчины')
      p.b-portfolio__text.col-12 Reebok Store - Concept
      img.col-12.b-portfolio__photo(src='https://s3-alpha-sig.figma.com/img/7bc4/92d5/1d2a3f989e046251ea9557eedaee9136?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PthJeTUPC-n-Pttw4xVyKboaQsCGyXkVPrB2N5orMUfPq0-nRBUZG6xpICq8k6paF4tt8~mW71BiEibVvKSm4gaSXpOsUUSr~7Peg~8VigNr2sXQ7lYvopGuozTUYtk4luvbCYd0dlTtl09zYVVlKW1em4jRExratynQzxVWTy8QXjnb6J-sT~fnVigfAYS930K8nvsWw1gt11J0QbXRuiNP6bz~SFR6qilBD3Qy95LisOXYp8lZQcL-9NWr6b9P4evn-ZoqKbOyHRRWWH4g~9ffW-8xFMX0bGGSp415dEIVDHL80nAKoBJmwMpI3rKoGQDWFE2FW38GurWlmcpgKQ__' title='Camera on the photo' alt='Фото камеры')
      p.b-portfolio__text.col-12 Braun Landing Page - Concept
</template>

<style scoped lang="scss">
@import '../assets/styles.scss';
.wrapper {
	background-color: $backlor;
	max-width: 90.25rem;
	margin-left: auto;
	margin-right: auto; 
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