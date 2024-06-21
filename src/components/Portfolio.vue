<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios';

interface Menu {
  text: string,
  title: string,
  link: string,
  image: string
  alt: string,
  loading: string,
  }

  interface DataObject {
  portfolioData: Array<Menu>
}

export default defineComponent({
  name: 'Portfolio',
  data(): DataObject{
    return {
		portfolioData:[
		]
	}
  },

	mounted() {
	axios.get('http://localhost:3000/portfolio')
	.then(response => {
	this.portfolioData = response.data
	})
	.catch((error => {
	console.error(error)
	}));
	}
	})

</script>

<template lang="pug">
.wrapper
  .container    
    section.b-portfolio.row
      .b-portfolio__heading.col-12 {{ portfolioData.title }}
      div.col-12.div(v-for='link in portfolioData.items')
        img.col-12.b-portfolio__photo(:key='link.image' v-bind:src="link.image" v-bind:alt="link.alt" v-bind:title="link.title" v-bind:loading="link.loading")
        p
          a.col-12.b-portfolio__text(:key='link.text' :href="'link.link'") {{ link.text }}
            
      //- img.col-12.b-portfolio__photo(v-for='link in portfolioData' :key='link.image' v-bind:src="link.image")
      //- p.col-12.b-portfolio__text(v-for='link in portfolioData' :key='link.text' :href="'link.link'") {{ link.text }}
      
      //- img.col-12.b-portfolio__photo(src='/portfolio-1.png' loading="lazy" title='An example of the design of an online fashion store - Hompage' alt='Online fashion store')
      //- p.b-portfolio__text.col-12 Online fashion store - Homepage
      //- img.col-12.b-portfolio__photo(src='/portfolio-2.png' loading="lazy" title='An example of the design of Reebok Store - Concept' alt='Reebok Store - Concept')
      //- p.b-portfolio__text.col-12 Reebok Store - Concept
      //- img.col-12.b-portfolio__photo(src='/portfolio-3.png' loading="lazy" title='An example of the design of Braun Landing Page - Concept' alt='Braun Landing Page - Concept')
      //- p.b-portfolio__text.col-12 Braun Landing Page - Concept
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
p {
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
.div{
  max-height: 100%;
  display: block;
  padding-left: 0%;
	padding-right: 0%;
  max-width: $width;
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
  &:hover {
		color: red;
	}
  &:focus {
		color: green;
	}
}
</style>