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
.container.b-skills-conteiner
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
				.b-skills__flex-stars-end
					| ★  ★ ★ ★ 
				span(style='color: rgba(229, 229, 229, 1);')
</template>
  
  <style scoped lang="scss">
  @import '../assets/styles.scss';
  .b-skills-conteiner {
	width: $width;
	@include marg-max-width;
	color: #282833;
  }
// .b-skills {
// }
.b-skills__heading {
	@include align-fontw;
	font-size: 2.125rem;
	font-family: $ffamily;
	padding-top: g(13);
}
.b-skills__text {
	@include align-fontw;
	color: #282833;
	padding-top: g(10);
	line-height: 1.3644rem;
	font-family: $ffamily ;
	font-size: 1.125rem;
}
.b-skills__flex {
	margin-top: g(13);
  	width: $width;
	@include marg-max-width;
	padding: 0%;
  	padding-bottom: g(12);
}
.b-skills__flex-ps {
	@include col-ff-align;
	font-size: 14px;
	padding: 0%;
}
.b-skills__flex-ps-img {
	background: radial-gradient(75.99% 75.64% at 32.94% 22.44%, rgba(52, 54, 78, 0.98) 0%, #0C0824 100%);
	color: #31C5F0;
	font-size: 3.375rem;
	width:5.5669rem;
	height: 5.5256rem;
	margin: auto;
	border-color:#31C5F0;
	border-width: 4px;
	border-style: solid;
	font-family: $ffamily;
	line-height: 5.625rem;
}
.b-skills__flex-text {
	height: 1.6875rem;
	padding-top: g(8);
	text-align: center;
}
.b-skills__flex-stars {
	color: rgba(7, 7, 7, 1); 
	font-size:1.625rem;
	border-radius: 1px;
	margin-top: g(9);
	text-align: center;
}
.b-skills__flex-stars-end {
	color: rgba(7, 7, 7, 1); 
	font-size:1.625rem;
	border-radius: 1px;
	margin-top: g(11);
	text-align: center;
	padding-top: g(7);
}
.b-skills__flex-ai {
	@include col-ff-align;
	font-size: 14px;
}
.b-skills__flex-ai-img {
	background: radial-gradient(75.99% 75.64% at 32.94% 22.44%, rgba(52, 54, 78, 0.98) 0%, #0C0824 100%);
	width: 5.5669rem;
	height: 5.5256rem;
	margin: auto;
	border-color:rgba(255, 127, 24, 1);
	color: rgba(255, 127, 24, 1);
	font-size:3.375rem;
	border-width: 4px;
	border-style: solid;
	font-family: $ffamily;
	line-height: 5.625rem;
	text-align: center;
}
.b-skills__flex-aae {
	@include col-ff-align;
	font-size: 14px;
}
.b-skills__flex-aae-img {
	background: radial-gradient(75.99% 75.64% at 32.94% 22.44%, rgba(52, 54, 78, 0.98) 0%, #0C0824 100%);
	margin: auto;
	width: 5.5669rem;
	height: 5.5256rem;
	border-color: rgba(216, 161, 255, 1);
	font-family: $ffamily;
	border-width: 4px;
	border-style: solid;
	color: rgba(216, 161, 255, 1);
	font-size:3.375rem;
	line-height: 5.625rem;
}
.b-skills__flex-f {
	@include col-ff-align;
	font-size: 14px;	
	padding: 0%;
}
.b-skills__flex-f-img {
	width: 3.7544rem;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	justify-content: flex-start;
 	background: white;
	width: 3.7544rem;
	height: 5.5256rem;
	margin: auto;
}
.b-skills__flex-f-img-red {
	width: 1.82rem;
	height: 1.875rem;
	background: rgba(242, 78, 30, 1);
	border-radius: 50% 0% 0% 50%;
	text-align: center;
}
.b-skills__flex-f-img-orange {
	border-radius: 0% 50% 50% 00%;
	background: rgba(255, 114, 98, 1);
	width: 1.82rem;
	height: 1.875rem;
	text-align: center;
}
.b-skills__flex-f-img-purple {
	border-radius: 50% 0% 0% 50%;
	width: 1.82rem;
	height: 1.875rem;
	background: rgba(162, 89, 255, 1);
}
.b-skills__flex-f-img-blue {
	border-radius: 50% 50% 50% 50%;
	background: rgba(26, 188, 254, 1);
	width: 1.82rem;
	height: 1.875rem;
}
.b-skills__flex-f-img-green {
	border-radius: 50% 0% 50% 50%;
	width: 1.82rem;
	height: 1.875rem;
	
	background: rgba(10, 207, 131, 1);
}
.b-skills__flex-f-text {
	height: 1.6875rem;
	padding-top: g(9);
	margin-bottom: g(9);
	text-align: center;
	padding-bottom: 2,5rem;
}
</style>

  