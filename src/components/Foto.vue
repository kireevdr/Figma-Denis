<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios';

interface Menu {
  text: string,
  header: string,
  link: string,
  image: string,
  }

  interface DataObject {
  menuData: Array<Menu>
}

export default defineComponent({
  name: 'Foto',
  data(): DataObject{
    return {
		menuData:[
		]
	}
  },

	mounted() {
	axios.get('http://localhost:3000/foto')
	.then(response => {
	this.menuData = response.data
	})
	.catch((error => {
	console.error(error)
	}));
	}
	})
</script>

<template lang="pug">
section.b-information.container
	.b-information__flex.row.justify-content-between.align-items-end.no-gutters
		.b-information__name.col-auto(v-html="menuData.header")
			//- | Denis
			//- br
			//- |  Novik
		.b-information__minsk.col-auto(v-html="menuData.text")
			//- | UX | UI designer
			//- br
			//- | 24 years old, Minsk
		.b-information__flex2.col-auto
			p
				a.b-information__languge-eng(v-for='link in menuData.links' :key='link.text' :href="'link.link'") {{ link.text }}
				a.b-information__languge-ru
			//- p.b-information__languge-eng  | ENG
			//- p.b-information__languge-ru RU 
		//- div.w-100
	.row.row-foto.no-gutters
		img.b-information__photo.col-12(:key='menuData.image' v-bind:src="menuData.image")
		//- (:href ="'link.image'")

		//- img.b-information__photo.col-12(src='https://s3-alpha-sig.figma.com/img/4a3f/6358/473d92de61764f572524ac59200c7086?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R-jOI~8lkn1VMNTWXwy3~OX2QYAAmb~NUzbpn8l7S6099VcI4RdzhNbEIQrI2fHaoA-G7TnznqBcnCajYXNFvEukbBGbBwFPnayUXKEibVgxUjLAwRo-Jcf0k76ManIIuFA0fVQuqyNEUfjzJ-BFW8JpkIJDEBNkq-9SNuui4xhk-qjHGIjdgnUa5sNtxRsaYbrS3H~-CjNyB0HISDjINRa2NBv4he~qh8KWLVLqhdpywK69XMTRK5JBozOTWAsKLmFxPHtVZWZcouIuZa-JdEBPZK47Q1FLAu~wWwf0-RD66-uM~B9jHhzkiLwgSV10h5PaUE~cGxmmGFWRWSGf4Q__' rel="nofollow" title='Denis – UX/UI designer from Minsk' alt='Photo of the UX/UI designer Denis Novak from Minsk wearing glasses, a black hoodie and a cap.')
</template>

<style scoped lang="scss">
@import '../assets/styles.scss';
.b-information {
	width: $width;
	@include marg-max-width;
	padding: 0%;
}
.b-information__flex {
	// @include marg-max-width;
  	max-width: $width;	
}
p {
	color: #282833;
	font-family: $ffamily;
	font-size: 16px;
	transform: rotate(270deg);
	text-align: center;
	margin-bottom: 2.5rem;
}
.b-information__name {
	font-weight: 600;
	font-family: $ffamily; 
	font-size: rem(47.3408);
	color:  #282833;
}
.b-information__minsk {
	font-weight: 400;
	color: #282833;
	font-family: $ffamily;
	font-size: rem(18);
	padding-bottom: g(6);
}
.b-information__flex2 {
	margin-right: -22px;
}
.b-information__languge-eng {
	color: #282833;
	font-family: $ffamily;
	font-size: 16px;
	transform: rotate(270deg);
	text-align: center;
	
}
.b-information__languge-ru {
	color: #282833;
	font-family: $ffamily;
	font-size: 16px;
	transform: rotate(270deg);
	text-align: center;
	margin-bottom: 1.875rem;
}
.row-foto {
	margin-left: auto;
	margin-bottom: 60px;
}
.b-information__photo {
	max-width: $width;
	@include marg-max-width;
	display: block;
	object-fit: cover;
	object-position: 66% 44%;
	height: rem(387);
	
}
.b-information__languge-eng, .b-information__languge-ru {
	&:hover {
		font-weight: 900;
		color: black;
	}
	&:focus {
		color: green;
	}
}
</style>