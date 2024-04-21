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
	<section class="skills">
		<p class="skills-h1">Skills</p>
		<p class="skills-p">I work in such programs as</p>
		<div class="back-skills">
			<div class="flex">
				<section class="skills-ps">
					<div class="ps-ps">Ps</div>
					<div class="text-ps">
					Adobe <br> Phoroshop <br>
					</div>
					<div class="stars-ps">&#9733;  &#9733; &#9733; &#9733; <span style="color: rgba(229, 229, 229, 1);			">&#9733</span></div>
				</section>

				<section class="skills-ai">
					<div class="ai-ai">Ai</div>
					<div class="text-ai">
					Adobe <br> Illustrator
					</div>
					<div class="stars-ai">&#9733;  &#9733; &#9733;<span style="color: rgba(229, 229, 229, 1);
					">&#9733; &#9733</span></div>
				</section>
			
				<section class="skills-aae">
					<div class="aae-aae">Ae</div>
					<div class="text-aae">
					Adobe <br> After Effects
					</div>
					<div class="stars-aae">&#9733;  &#9733; &#9733; &#9733; <span style="color: rgba(229, 229, 229, 1);
					">&#9733</span></div>
				</section>

				<section class="skills-f">
					<div class="f-f">			
						<div class="f-container">
								<div class="f-f-red"></div>
								<div  class="f-f-orange"></div>
								<div  class="f-f-purple"></div>
								<div  class="f-f-blue"></div>
								<div  class="f-f-green"></div>
						</div>
					</div>
					<div class="text-f">
						Figma
					</div>
					<div class="stars-f">&#9733;  &#9733; &#9733; &#9733; <span style="color: rgba(229, 229, 229, 1);
						">&#9733</span>
					</div>
				</section>
			</div>
		</div>
	</section>
</div>
</template>
  
  <style scoped>
 .skills{
	padding-left: 29px;
	padding-right: 29px;
	background-color: rgba(255, 255, 255, 1);
	color: #282833;
}
.back-skills{
	background-color: rgba(255, 255, 255, 1);
}
.skills-h1 {
	text-align: center;
	font-weight: bold;
	font-size: 34px;
	font-family: "Arial";
	padding-top: 91px;
	margin-bottom: 10px;
	margin-top: 0px;
}
.skills-p {
	font-weight: bold;
	color: #282833;
	padding-top: 44px;
	line-height: 21.83px;
	font-family: "Arial" ;
	font-size: 18px;
	line-height: 21.83px;
	text-align: center;
}	
.flex {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-top: 84px;
  	width: 936px;
	max-width: 100%;
	margin-left: auto;
	margin-right: auto;
  	padding-bottom: 76px;
}
.skills-ps {
	text-align: center;
	color: rgba(130, 130, 130, 1);
	font-family: "Arial";
	font-size: 14px;
}
.ps-ps {
	background: radial-gradient(75.99% 75.64% at 32.94% 22.44%, rgba(52, 54, 78, 0.98) 0%, #0C0824 100%);
	color: #31C5F0;
	font-size:54px;
	width: 89.07px;
	height: 88.41px;
	margin: auto;
	border-color:#31C5F0;
	border-width: 4px;
	border-style: solid;
	font-family: "Arial";
	line-height: 90px;
}
.text-ps {
	height: 27px;
	padding-top: 20px;
	text-align: center;
}
.stars-ps {
	color: rgba(7, 7, 7, 1); 
	font-size:26px;
	border-radius: 1px;
	margin-top: 26.4px;
	text-align: center;
}
.skills-ai {
	text-align: center;
	color: rgba(130, 130, 130, 1);
	font-family: "Arial";
	font-size: 14px;
	text-align: center;
}
.ai-ai {
	background: radial-gradient(75.99% 75.64% at 32.94% 22.44%, rgba(52, 54, 78, 0.98) 0%, #0C0824 100%);
	width: 89.07px;
	height: 88.41px;
	margin: auto;
	border-color:rgba(255, 127, 24, 1);
	color: rgba(255, 127, 24, 1);
	font-size:54px;
	border-width: 4px;
	border-style: solid;
	font-family: "Arial";
	line-height: 90px;
	text-align: center;
}
.text-ai {
	height: 27px;
	padding-top: 20px;
	text-align: center;
}
.stars-ai {
	color: rgba(7, 7, 7, 1); 
	font-size:26px;
	margin-top: 26.4px;
	text-align: center;
}
.skills-aae {
	text-align: center;
	color: rgba(130, 130, 130, 1);
	font-family: "Arial";
	font-size: 14px;
}
.aae-aae {
	background: radial-gradient(75.99% 75.64% at 32.94% 22.44%, rgba(52, 54, 78, 0.98) 0%, #0C0824 100%);
	margin: auto;
	width: 89.07px;
	height: 88.41px;
	border-color: rgba(216, 161, 255, 1);
	font-family: "Arial";
	border-width: 4px;
	border-style: solid;
	color: rgba(216, 161, 255, 1);
	font-size:54px;
	line-height: 90px;
}
.text-aae {
	height: 27px;
	padding-top: 20px;
	text-align: center;
}
.stars-aae {
	margin-top: 26.4px;
	color: rgba(7, 7, 7, 1); 
	font-size:26px;
	text-align: center;
}
.skills-f {
	text-align: center;
	color: rgba(130, 130, 130, 1);
	font-family: "Arial";
	font-size: 14px;
}
 .f-container {
	width: 60.07px;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	justify-content: flex-start;
 }
.f-f {
	background: white;
	width: 60.07px;
	height: 88.41px;
	margin: auto;
}
.text-f {
	height: 27px;
	padding-top: 26px;
	text-align: center;
}
.stars-f {
	color: rgba(7, 7, 7, 1); 
	font-size:26px;
	margin-top: 25.4px;
	text-align: center;
}
.f-f-red {
	width: 29.12px;
	height: 30px;
	background: rgba(242, 78, 30, 1);
	border-radius: 50% 0% 0% 50%;
	text-align: center;
}
.f-f-orange {
	border-radius: 0% 50% 50% 00%;
	background: rgba(255, 114, 98, 1);
	width: 29.12px;
	height: 30px;
	text-align: center;
}
.f-f-purple {
	border-radius: 50% 0% 0% 50%;
	width: 29.12px;
	height: 30px;
	background: rgba(162, 89, 255, 1);
}
.f-f-blue {
	border-radius: 50% 50% 50% 50%;
	background: rgba(26, 188, 254, 1);
	width: 29.12px;
	height: 30px;
}
.f-f-green {
	border-radius: 50% 0% 50% 50%;
	width: 29.12px;
	height: 30px;
	background: rgba(10, 207, 131, 1);
}
</style>

  