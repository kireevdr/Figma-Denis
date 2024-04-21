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

<template>
	<div class="wrapper">
		<div class="back">
			<nav class="header">
				<a class="header-nav" v-for="link in menuData" :key="link.text" :href="'link.link'">
					{{ link.text }}
				</a>	
			</nav>
			<div class="header-line">
				<hr class="hr-line">
			</div>
		</div>
	</div>
</template>

<style scoped>
.back {
	background-color: rgba(255, 255, 255, 1);
	padding-left: 29px;
	padding-right: 29px;
}
.header {
	background-color: rgba(255, 255, 255, 1);
	height: 60.94px;
	width: 936px;
	max-width: 100%;
	margin-left: auto;
	margin-right: auto;
	padding-bottom: 0px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding-top: 33px;
	font-family: "Arial"; 
	font-size: 18px;
}
.header-nav {
	background-color: rgba(255, 255, 255, 1);
	text-decoration:none;
	font-size: 18px;
	font-family: "Arial";
	color: rgba(130, 130, 130, 1);
	font-size: 18px;
	line-height: 22.28px;
	font-weight: revert;
}
.header-line{
	width: 936px;
	max-width: 100%;
	margin-left: auto;
	margin-right: auto;
	background-color: rgba(255, 255, 255, 1);
}
.hr-line {
	max-width: 100%;
	margin: 0;
	}
</style>
