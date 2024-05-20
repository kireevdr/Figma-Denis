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
.container
	.row.b-aboutme
		p.b-aboutme__heading.col-12.justify-content-center About me
		.b-aboutme__text.col-12
			| Hi, I'm Denis – UX/UI designer from Minsk. 
			br
			| 			I'm interested in design and everything connected with it. 
			br
			p
			br
			| 			I'm studying at courses "Web and mobile design 
			br
			| 			interfaces" in IT-Academy.
			br
			p
			br
			| 			Ready to implement excellent projects
			br
			| 			with wonderful people.

</template>

<style scoped lang="scss">
@import '../assets/styles.scss';
.b-aboutme {
	background-color: $backlor;
	height: 506px;
	@include padding;
	background-color: $backlor;
	text-align: center;
}
.b-aboutme__heading {
	@include align-fontw;
	font-size: 34px;
	font-family: $ffamily;
	margin-top: 0px; 
	padding-top: 100px;
}
.b-aboutme__text {
	text-align: center;
	font-family: $ffamily;
	color: #282833;
	font-size: 18px;
	padding-top: 17.75px;
	line-height: 21.83px;
}
</style>