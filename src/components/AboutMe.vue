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
	<section class="aboutme">
		<h1 class="aboutme-h1">About me</h1>
    	<section class="aboutme-p">Hi, I'm Denis – UX/UI designer from Minsk. <br>
		I'm interested in design and everything connected with it. <br>
		<p></p><br>
		I'm studying at courses "Web and mobile design <br>
		interfaces" in IT-Academy.<br>
		<p></p><br>
		Ready to implement excellent projects<br>
		with wonderful people.</section>
		</section>
</template>

<style scoped>
.aboutme{
	background-color: rgba(246, 246, 246, 1);
	color: #282833;
	width: 1445px;
	height: 506px;
}
.aboutme-h1 {
	text-align: center;
	font-weight: bold;
	font-size: 34px;
	font-family: Gilroy-Bold, sans-serif;
	margin-top: 0px; 
	padding-top: 100px;
}
.aboutme-p {
	text-align: center;
	font-family: Gilroy-Bold, sans-serif;
	font-weight: bold;
	color: #282833;
	font-size: 18px;
	padding-top: 17.75px;
	line-height: 21.83px;
}
</style>