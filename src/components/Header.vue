<script lang="ts">
// import { text } from 'stream/consumers'
import { defineComponent } from 'vue'

interface Menu {
  text: string,
  link: string
  }

  interface DataObject {
  menuData: Array<Menu>
}

export default defineComponent({
  name: 'Header',
  data(): DataObject{
    return {
		menuData:[
			{
				text: 'Home',
				link: '/home'
			},
			{
				text: 'About me',
				link: '/about me'
			},
			{
				text: 'Skills',
				link: '/skills'
			},
			{
				text: 'Portfolio',
				link: '/portfolio'
			},
			{
				text: 'Contacts',
				link: '/contacts'
			},		
		]
	}
  }
})
</script>

<template lang="pug">
.b-header.container
	.b-header__menu.row.justify-content-between.no-gutters
		a.b-header__menu-item.col-auto(v-for='link in menuData' :key='link.text' :href="'link.link'") {{ link.text }}
		.b-header__line.col-12
			hr(classs='b-header__hr-line')
</template>

<style scoped lang="scss">
@import '../assets/styles.scss';
.b-header {
	width: $width;
	background-color: $back;
}
.b-header__menu {
	background-color: $back;
	width: $width;
	@include marg-max-width;
	padding-top: g(10);
	font-family: $ffamily; 
}
.b-header__menu-item {
	font-weight: 600;
	background-color: $back;
	text-decoration:none;
	font-family: $ffamily;
	color: $col;
	font-size: 1,125rem;
	line-height: 1,3925rem;
}
.b-header__line {
	@include marg-max-width;
	background-color: $back;
	padding-top: g(8);
}
.b-header__hr-line{
	max-width: 100%;
}
a {
	&:hover {
		color: black;
	}
	&:focus {
		color: green;
	}
}
</style>
