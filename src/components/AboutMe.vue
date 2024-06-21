<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios';

interface Menu {
  text: string,
  title: string,
  link: string,
  }

  interface DataObject {
  aboutmeData: Array<Menu>
}

export default defineComponent({
  name: 'Aboutme',
  data(): DataObject{
    return {
		aboutmeData:[
		]
	}
  },

	mounted() {
	axios.get('http://localhost:3000/aboutme')
	.then(response => {
	this.aboutmeData = response.data
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
		.row.b-aboutme
			h1.b-aboutme__heading.col-12.justify-content-center {{ aboutmeData.title }}
			.b-aboutme__text.col-12(v-for='link in aboutmeData.items' :key='link.text' v-html="link.text")
				//- | Hi, I'm Denis – UX/UI designer from Minsk. 
				//- br
				//- | 			I'm interested in design and everything connected with it. 
				//- br
				//- p
				//- br
				//- | 			I'm studying at courses "Web and mobile design 
				//- br
				//- | 			interfaces" in IT-Academy.
				//- br
				//- p
				//- br
				//- | 			Ready to implement excellent projects
				//- br
				//- | 			with wonderful people. v-for

</template>

<style scoped lang="scss">
@import '../assets/styles.scss';
.wrapper {
	background-color: $backlor;
	margin-left: auto;
	margin-right: auto; 
	width: $width;
	@include marg-max-width;
	color: #282833;
}
.b-aboutme {
	@include marg-max-width;
	@include padding;
	background-color: $backlor;
	text-align: center;
	max-width: rem(600);
}
.b-aboutme__heading {
	color: #282833;
	@include align-fontw;
	font-size: 2.125rem;
	font-family: $ffamily;
	padding-top: g(12);
}
.b-aboutme__text {
	text-align: center;
	font-family: $ffamily;
	color: #282833;
	font-size: 1.125rem;
	padding-top: g(7);
	line-height: 1.3644rem;
}
</style>