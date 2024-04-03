<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',
  data() {
    return {}
  }
})
</script>

<template>
	<nav class="header">
    	<h1 class="header-home-h1">Home</h1>
		<h1 class="header-aboutme-h1"> About me </h1>
		<h1 class="header-all-h1">Skills Portfolio Contacts</h1>
		<hr class="hr-line">
	</nav>
</template>

<style scoped>
.header {
	background-color: rgba(255, 255, 255, 1);
}
.header-home-h1 {
	float: left;
	font-size: 18px;
	font-family: Gilroy-Bold, sans-serif;
	margin-bottom: 8px;
	margin-left: 250px;
	margin-top: 33px;
	padding-right: 1px;
	color: rgba(7, 7, 7, 1);
	height: 88px;
}
.header-aboutme-h1 {
	float: left;
	font-size: 18px;
	font-family: Gilroy-Bold, sans-serif;
	margin-bottom: 8px;
	margin-top: 33px;
	margin-left: 156px;
	color:rgba(130, 130, 130, 1);
	height: 88px;
}
.header-all-h1 {
	font-size: 18px;
	font-family: Gilroy-Bold, sans-serif;
	float: left;
	margin-bottom: 8px;
	color: rgba(130, 130, 130, 1);
	margin-top: 33px;
	margin-left: 156px;
	margin-right: 250px;
	padding-top: 0px;
	height: 88px;
	word-spacing: 135px;
}
.hr-line {
	color: rgba(130, 130, 130, 1) ;
	clear:left;
	margin-left: 250px;
	margin-right: 250px;
	margin-bottom: 0px;
	border-top: 1px solid rgba(130, 130, 130, 1);
	}
</style>

