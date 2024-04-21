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
		<div class="back-aboutme">
			<section class="aboutme">
				<p class="aboutme-h1">About me</p>
				<section class="aboutme-p">
					Hi, I'm Denis – UX/UI designer from Minsk. <br>
					I'm interested in design and everything connected with it. <br>
					<p></p><br>
					I'm studying at courses "Web and mobile design <br>
					interfaces" in IT-Academy.<br>
					<p></p><br>
					Ready to implement excellent projects<br>
					with wonderful people.
				</section>
			</section>
		</div>
	</div>
</template>

<style scoped>
.aboutme{
	background-color: rgba(246, 246, 246, 1);
	height: 506px;
	width: 936px;
	max-width: 100%;
	margin-left: auto;
	margin-right: auto;
}
.back-aboutme {
	padding-left: 29px;
	padding-right: 29px;
	background-color: rgba(246, 246, 246, 1);
}
.aboutme-h1 {
	text-align: center;
	font-weight: bold;
	font-size: 34px;
	font-family: "Arial";
	margin-top: 0px; 
	padding-top: 100px;
}
.aboutme-p {
	text-align: center;
	font-family: "Arial";
	color: #282833;
	font-size: 18px;
	padding-top: 17.75px;
	line-height: 21.83px;
}
</style>