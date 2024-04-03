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
	<section class="information-about-denis">
		<p class="denis-h1">Denis<br/> Novik</p>
    	<p class="minsk-p">UX | UI designer<br/>24 years old, Minsk </p>
		<p class="languge-eng"> | ENG</p>
		<p class="languge-ru">RU </p>
	</section>
	<div class="section-photo">
  		<img class="photo" src="https://s3-alpha-sig.figma.com/img/4a3f/6358/473d92de61764f572524ac59200c7086?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GSVcM7IppLUhf7XzDNIs4f1E~jP7mzMpmXScQ0kfMe3tjrfcz6UeosXymVp-~9NuWzTTyrCD9USona0H0BJrIU8T2L~q832UjY9rIIxZPyLmQPibbjbLw9ykLCtCMCAlHXi8dX3~nNsmHY1RHz~q~r8XZCjf16ufh~-IunfVmdpQK8Yzmk-KUf0qut8P-39zmU3Bb95decohcA70NrG4x8pN9HTfXBkeGkBz40PUt7bV6yN7Uli7dDyhDKi7L7Fl0YCRJeaYOtt-0foRSstICnopp8u4VC5TuH17tJRKd3~7gFY31VFElqGbihkd~9NCXEeh6xmLpis1oHeFTafexQ__" title="Foto" alt="Фото профиля" />
	</div>
</template>

<style scoped>
.information-about-denis{
	background-color: white;
}
.section-photo {
	background-color: white;
}
.denis-h1 {
	font-weight: bold;
	float: left;
	font-family: Gilroy-Bold, sans-serif;
	font-size: 47.34px;
	margin-bottom: 8px;
	margin-top: 40px;
	margin-left: 251px;
}
.minsk-p {
	float: left;
	color: #282833;
	font-family: Gilroy-Bold, sans-serif;
	font-weight: bold;
	font-size: 24px;
	margin-left: 297px;
	margin-top: 95px;
}
.languge-eng {
	float: right;
	color: #282833;
	font-family: Gilroy-Bold, sans-serif;
	font-weight: 900;
	font-size: 16px;
	margin-right: 230px;
	margin-top: 90px;
	transform: rotate(270deg);
	font-family: Gilroy-Bold;
}
.languge-ru {
	clear: right;
	float: right;
	color: #282833;
	font-family: Gilroy-Bold, sans-serif;
	font-size: 16px;
	margin-right: 240px;
	margin-top: 0px;
	transform: rotate(270deg);
	font-family: Gilroy-Bold;
}
.photo {
	object-fit: cover;
	object-position: 56% 44%;
	width: 943px;
	height: 387px;
	clear:left;
	margin-top: 50px;
	margin-left: 251px;
	margin-right: 251px;
	margin-bottom: 104px;	
}
</style>