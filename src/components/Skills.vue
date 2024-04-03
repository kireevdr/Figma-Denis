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
	<section class="skills">
		<h1 class="skills-h1">Skills</h1>
		<p class="skills-p">I work in such programs as</p>
		<section class="skills-ap">
			<div class="ap-ap">Ps</div>
			Adobe <br> Phoroshop <br>
			<div class="stars-ap">&#9733;  &#9733; &#9733; &#9733; <span style="color: rgba(229, 229, 229, 1);			">&#9733</span></div>
		</section>

	  	<section class="skills-ai">
			<div class="ai-ai">Ai</div>
			Adobe <br> Illustrator
			<div class="stars-ai">&#9733;  &#9733; &#9733;<span style="color: rgba(229, 229, 229, 1);
			">&#9733; &#9733</span></div>
		</section>
	
	  	<section class="skills-aae">
			<div class="aae-aae">Ae</div>
			Adobe <br> After Effects
			<div class="stars-aae">&#9733;  &#9733; &#9733; &#9733; <span style="color: rgba(229, 229, 229, 1);
			">&#9733</span></div>
		</section>

	  	<section class="skills-f">
			<div class="f-f">			
				<div class="f-f-red"></div>
				<div  class="f-f-orange"></div>
				<div  class="f-f-purple"></div>
				<div  class="f-f-blue"></div>
				<div  class="f-f-green"></div>
			</div>
			Figma
			<div class="stars-f">&#9733;  &#9733; &#9733; &#9733; <span style="color: rgba(229, 229, 229, 1);
			">&#9733</span></div>
		</section>
	</section>
</template>
  
  <style scoped>
 .skills{
	background-color: rgba(255, 255, 255, 1);
	color: #282833;
	width: 1445px;
	height: 650px;
}
.skills-h1 {
	text-align: center;
	font-weight: bold;
	font-size: 34px;
	font-family: Gilroy-Bold, sans-serif;
	padding-top: 91px;
	margin-top: 0px;
}
.skills-p {
	font-weight: bold;
	color: #282833;
	padding-top: 44px;
	line-height: 21.83px;
	font-family: Gilroy-Medium, sans-serif ;
	font-size: 18px;
	line-height: 21.83px;
	text-align: center;
}	
.skills-ap {
	float: left;
	margin-top: 84px;
	width: 166.46px;
	height: 206.29px;
	margin-left: 255.71px;
	text-align: center;
	color: rgba(130, 130, 130, 1);
	font-family: Gilroy-Bold, sans-serif;
	font-size: 14px;
}
.ap-ap {
	background: radial-gradient(75.99% 75.64% at 32.94% 22.44%, rgba(52, 54, 78, 0.98) 0%, #0C0824 100%);
	color: #31C5F0;
	font-size:54px;
	width: 89.07px;
	height: 88.41px;
	margin: auto;
	margin-bottom: 20px ;
	border-color:#31C5F0;
	border-width: 4px;
	border-style: solid;
	font-family: Gilroy-Bold, sans-serif;
	line-height: 90px;
}
.stars-ap {
	color: rgba(7, 7, 7, 1); 
	font-size:26px;
	border-radius: 1px;
	margin-top: 26.4px;
}
.skills-ai {
	width: 166.46px;
	height: 206.27px;
	float: left;
	margin-top: 84px;
	margin-left: 90px;
	text-align: center;
	color: rgba(130, 130, 130, 1);
	font-family: Gilroy-Bold, sans-serif;
	font-size: 14px;
}
.ai-ai {
	background: radial-gradient(75.99% 75.64% at 32.94% 22.44%, rgba(52, 54, 78, 0.98) 0%, #0C0824 100%);
	width: 89.07px;
	height: 88.41px;
	margin: auto;
	margin-bottom: 20px ;
	border-color:rgba(255, 127, 24, 1);
	color: rgba(255, 127, 24, 1);
	font-size:54px;
	border-width: 4px;
	border-style: solid;
	font-family: Gilroy-Bold, sans-serif;
	line-height: 90px;
}
.stars-ai {
	color: rgba(7, 7, 7, 1); 
	font-size:26px;
	margin-top: 26.4px;
}
.skills-aae {
	width: 166.46px;
	height: 206.27px;
	float: left;
	margin-left: 90px;
	margin-top: 84px;
	text-align: center;
	color: rgba(130, 130, 130, 1);
	font-family: Gilroy-Bold, sans-serif;
	font-size: 14px;
}
.aae-aae {
	background: radial-gradient(75.99% 75.64% at 32.94% 22.44%, rgba(52, 54, 78, 0.98) 0%, #0C0824 100%);
	margin: auto;
	width: 89.07px;
	height: 88.41px;
	margin-bottom: 20px ;
	border-color: rgba(216, 161, 255, 1);
	font-family: Gilroy-Bold, sans-serif;
	border-width: 4px;
	border-style: solid;
	color: rgba(216, 161, 255, 1);
	font-size:54px;
	line-height: 90px;
}
.stars-aae {
	margin-top: 26.4px;
	color: rgba(7, 7, 7, 1); 
	font-size:26px;
}
.skills-f {
	width: 166.46px;
	height: 205.27px;
	float: left;
	margin-top: 84px;
	margin-left: 90px;
	text-align: center;
	color: rgba(130, 130, 130, 1);
	font-family: Gilroy-Bold, sans-serif;
	font-size: 14px;
}
.f-f {
	background: white;
	width: 89.07px;
	height: 88.41px;
	margin: auto;
	margin-bottom: 20px ;
}
.stars-f {
	color: rgba(7, 7, 7, 1); 
	font-size:26px;
	margin-top: 43.4px;
}
.f-f-red {
	width: 29.12px;
	height: 29.67px;
	float: left;
	margin-left: 12px;
	background: rgba(242, 78, 30, 1);
	border-radius: 50% 0% 0% 50%;
}
.f-f-orange {
	border-radius: 0% 50% 50% 00%;
	float: left;
	background: rgba(255, 114, 98, 1);
	width: 29.12px;
	height: 29.67px;
}
.f-f-purple {
	border-radius: 50% 0% 0% 50%;
	margin-left: 12px;
	width: 29.12px;
	height: 29.67px;
	clear:left;
	float: left;
	background: rgba(162, 89, 255, 1);
}
.f-f-blue {
	border-radius: 50% 50% 50% 50%;
	float: left;
	background: rgba(26, 188, 254, 1);
	width: 29.12px;
	height: 29.67px;
}
.f-f-green {
	border-radius: 50% 0% 50% 50%;
	margin-left: 12px;
	width: 29.12px;
	height: 29.67px;
	clear:left;
	float: left;
	background: rgba(10, 207, 131, 1);
}
</style>

  