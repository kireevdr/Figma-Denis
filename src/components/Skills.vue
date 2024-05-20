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
	section.b-skills.row
		p.b-skills__heading.col-12 Skills
		p.b-skills__text.col-12 I work in such programs as
		.b-skills__flex.col-12.row.justify-content-between
			section.b-skills__flex-ps.col-auto
				.b-skills__flex-ps-img Ps
				.b-skills__flex-text
				| Adobe 
				br
				|  Phoroshop 
				br
				.b-skills__flex-stars
					| ★  ★ ★ ★ 
				span(style='color: rgba(229, 229, 229, 1);			')
			section.b-skills__flex-ai.col-auto
				.b-skills__flex-ai-img Ai
				.b-skills__flex-text
				| Adobe 
				br
				|  Illustrator
				.b-skills__flex-stars
					| ★  ★ ★
				span(style='color: rgba(229, 229, 229, 1);')
			section.b-skills__flex-aae.col-auto
				.b-skills__flex-aae-img Ae
				.b-skills__flex-text
				| Adobe 
				br
				|  After Effects
				.b-skills__flex-stars
					| ★  ★ ★ ★ 
				span(style='color: rgba(229, 229, 229, 1);')
			section.b-skills__flex-f.col-auto
				.b-skills__flex-f-img
					.b-skills__flex-f-img-red
					.b-skills__flex-f-img-orange
					.b-skills__flex-f-img-purple
					.b-skills__flex-f-img-blue
					.b-skills__flex-f-img-green
				.b-skills__flex-f-text Figma
				.b-skills__flex-stars
					| ★  ★ ★ ★ 
				span(style='color: rgba(229, 229, 229, 1);')
</template>
  
  <style scoped lang="scss">
  @import '../assets/styles.scss';
.b-skills {
	@include padding;
	color: #282833;
}
.b-skills__heading {
	@include align-fontw;
	font-size: 34px;
	font-family: $ffamily;
	padding-top: 91px;
	margin-bottom: 10px;
	margin-top: 0px;
}
.b-skills__text {
	@include align-fontw;
	color: #282833;
	padding-top: 44px;
	line-height: 21.83px;
	font-family: $ffamily ;
	font-size: 18px;
	line-height: 21.83px;
}
.b-skills__flex {
	margin-top: 84px;
  	width: $width;
	@include marg-max-width;
  	padding-bottom: 76px;
}
.b-skills__flex-ps {
	@include col-ff-align;
	font-size: 14px;
}
.b-skills__flex-ps-img {
	background: radial-gradient(75.99% 75.64% at 32.94% 22.44%, rgba(52, 54, 78, 0.98) 0%, #0C0824 100%);
	color: #31C5F0;
	font-size:54px;
	width: 89.07px;
	height: 88.41px;
	margin: auto;
	border-color:#31C5F0;
	border-width: 4px;
	border-style: solid;
	font-family: $ffamily;
	line-height: 90px;
}
.b-skills__flex-text{
	height: 27px;
	padding-top: 20px;
	text-align: center;
}
.b-skills__flex-stars {
	color: rgba(7, 7, 7, 1); 
	font-size:26px;
	border-radius: 1px;
	margin-top: 26.4px;
	text-align: center;
}
.b-skills__flex-ai {
	@include col-ff-align;
	font-size: 14px;
}
.b-skills__flex-ai-img {
	background: radial-gradient(75.99% 75.64% at 32.94% 22.44%, rgba(52, 54, 78, 0.98) 0%, #0C0824 100%);
	width: 89.07px;
	height: 88.41px;
	margin: auto;
	border-color:rgba(255, 127, 24, 1);
	color: rgba(255, 127, 24, 1);
	font-size:54px;
	border-width: 4px;
	border-style: solid;
	font-family: $ffamily;
	line-height: 90px;
	text-align: center;
}
.b-skills__flex-aae {
	@include col-ff-align;
	font-size: 14px;
}
.b-skills__flex-aae-img {
	background: radial-gradient(75.99% 75.64% at 32.94% 22.44%, rgba(52, 54, 78, 0.98) 0%, #0C0824 100%);
	margin: auto;
	width: 89.07px;
	height: 88.41px;
	border-color: rgba(216, 161, 255, 1);
	font-family: $ffamily;
	border-width: 4px;
	border-style: solid;
	color: rgba(216, 161, 255, 1);
	font-size:54px;
	line-height: 90px;
}
.b-skills__flex-f {
	@include col-ff-align;
	font-size: 14px;	
}
.b-skills__flex-f-img {
	width: 60.07px;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	justify-content: flex-start;
 	background: white;
	width: 60.07px;
	height: 88.41px;
	margin: auto;
}
.b-skills__flex-f-img-red {
	width: 29.12px;
	height: 30px;
	background: rgba(242, 78, 30, 1);
	border-radius: 50% 0% 0% 50%;
	text-align: center;
}
.b-skills__flex-f-img-orange {
	border-radius: 0% 50% 50% 00%;
	background: rgba(255, 114, 98, 1);
	width: 29.12px;
	height: 30px;
	text-align: center;
}
.b-skills__flex-f-img-purple {
	border-radius: 50% 0% 0% 50%;
	width: 29.12px;
	height: 30px;
	background: rgba(162, 89, 255, 1);
}
.b-skills__flex-f-img-blue {
	border-radius: 50% 50% 50% 50%;
	background: rgba(26, 188, 254, 1);
	width: 29.12px;
	height: 30px;
}
.b-skills__flex-f-img-green {
	border-radius: 50% 0% 50% 50%;
	width: 29.12px;
	height: 30px;
	background: rgba(10, 207, 131, 1);
}
.b-skills__flex-f-text {
	height: 27px;
	padding-top: 26px;
	text-align: center;
	padding-bottom: 40px;
}
</style>

  