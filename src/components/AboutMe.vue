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
.wrapper {
	background-color: $backlor;
	max-width: 90.25rem;
	margin-left: auto;
	margin-right: auto; 
	width: $width;
	@include marg-max-width;
	color: #282833;
}
.b-aboutme {
	height: 31.625rem;
	@include marg-max-width;
	@include padding;
	background-color: $backlor;
	text-align: center;
}
.b-aboutme__heading {
	color: #282833;
	@include align-fontw;
	font-size: 2.125rem;
	font-family: $ffamily;
	padding-top: g(13);
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