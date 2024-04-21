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
		<section class="information-about-denis">
			<div class="flex">
				<p class="denis-h1">Denis<br/> Novik</p>
				<p class="minsk-p">UX | UI designer<br/>24 years old, Minsk </p>
				<div class="flex2">
					<p class="languge-eng"> | ENG</p>
					<p class="languge-ru">RU </p>
				</div>
			</div>
		</section>
		<div class="section-photo">
			<img class="photo" src="https://s3-alpha-sig.figma.com/img/4a3f/6358/473d92de61764f572524ac59200c7086?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BZUJfDld~E0cUjVxWcqwgBaiVMY3MVQjrSkq~OGnyN4VmnaQEUfaC~TDYH293awf2VoA0KGEat~9EZJMk6CU8UYefJflOgq3NsXxIwrlEC3lrA0myPmSSmHAb~gp4uHXBgjbOioVbi1Dzl-w~yQs1T6o5tWVEkNJk8tg8F2eWHJM1xmWer-6ccd1iyR4N-VK3S1ncuCAfN0jcTymMV88hG-NbUv4SbLEbiknCPHXZaF69gxorT7PnR9x6mc770GfJAWmVt7~h5TujYxi0y9qV2Zqw-Ut~ZtCEJKZF0SvdJ2CPru-ktPu5bQMOja4p1maf216fY4I3oMZwWNsSxqVig__" title="Foto" alt="Фото профиля" />
		</div>
	</div>
</template>

<style scoped>
.information-about-denis{
	background-color: white;
	padding-left: 29px;
	padding-right: 29px;
}
.flex {
	width: 936px;
	max-width: 100%;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	flex-wrap: wrap;
  	justify-content: space-between;
}
.flex2 {
	margin-right: -10px;
}
.section-photo {
	padding-left: 29px;
	padding-right: 29px;
	background-color: white;
	margin-left: auto;
	margin-right: auto;
	padding-bottom: 14px;
	padding-top: 34px;
}
.denis-h1 {
	font-weight: 600;
	font-family: 'Arial'; 
	font-size: 47.34px;
	margin-bottom: 8px;
	margin-top: 40px;
}
.minsk-p {
	color: #282833;
	font-family: "Arial";
	font-size: 18px;
	margin-top: 100px;
}
.languge-eng {
	color: #282833;
	font-family: 'Arial';
	font-weight: 900;
	font-size: 16px;
	margin-top: 70px;
	transform: rotate(270deg);
	font-family: Gilroy-Bold;
}
.languge-ru {
	color: #282833;
	font-family: "Arial";
	font-size: 16px;
	transform: rotate(270deg);
	font-family: Gilroy-Bold;
}
.photo {
	max-width: 100%;
 	max-height: 100%;
	display: block;
	object-fit: cover;
	object-position: 56% 44%;
	width: 936px;
	height: 387px;
	margin-left: auto;
	margin-right: auto;
	padding-top: 50px;
	padding-bottom: 104px;
}
</style>