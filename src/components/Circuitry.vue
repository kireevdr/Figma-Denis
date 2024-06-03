<script lang="ts">
import { defineComponent, toValue } from 'vue'

export default defineComponent({
  data() {
    return {
		pathsData: [
			{
				value: 'M25 0.5 Q 0.5 0.5 0.5 25 V 100 H 47 V 100 H 159 V 0.5 Z'
			},
			{
				value: 'M159 0.5  H 317 V 100 H 159 Z'			
			},
			{
				value: 'M317 0.5 H 405 Q 430 0.5 429 25 V 118 H 370 V 125 H 352 V 100 H 317 Z'
			},
			{
				value: 'M 0.5 100 V 201 H 39 V 216 H 79 V 123 H 67 V 100 Z'
			},
			{
				value: 'M 79 119 H 154 V 216 H 79  Z'
			},
			{
				value: 'M 233 216 H 276 V 201 H 309 V 119 H 233  Z'
			},
			{
				value: 'M309 123 H 352 V 125 H 370 V 118 H 429 V 175 Q 430 202 404 201 H 309 Z'
			},
		]
	}
  }
})
</script>

<template lang="pug">
.container 
	.b-circuity.row
		img.col-12(src="/sxema.svg" alt="triangle with all three sides equal")
		svg.col-12( id="app" width='1444' height='1080' viewBox="0 0 429.9 218" xmlns="http://www.w3.org/2000/svg")
			path(v-for='item in pathsData' :key='item.value' :d="item.value")
			//- path(d='M25 0.5 Q 0.5 0.5 0.5 25 V 100 H 47 V 100 H 159 V 0.5 Z')
			//- path(d='M159 0.5  H 317 V 100 H 159 Z')
			//- path(d='M317 0.5 H 405 Q 430 0.5 429 25 V 118 H 370 V 125 H 352 V 100 H 317 Z')
			//- path(d='M 0.5 100 V 201 H 39 V 216 H 79 V 123 H 67 V 100 Z')
			//- path(d='M 79 119 H 154 V 216 H 79  Z')
			//- path(d='M 233 216 H 276 V 201 H 309 V 119 H 233  Z')
			//- path(d='M309 123 H 352 V 125 H 370 V 118 H 429 V 175 Q 430 202 404 201 H 309 Z')
</template>

<style scoped lang="scss">
@import '../assets/styles.scss';
svg {
	stroke-width:0.3%; 
	stroke:black;
	fill-opacity: 0.4;
	fill: brown;
}
.container{
	background-color: $backlor;
	max-width: 90.25rem;
	margin-left: auto;
	margin-right: auto; 
	width: $width;
	@include marg-max-width;
  	padding: 0%;
}
.b-circuity{
	position: relative;
	width: $width;
	@include marg-max-width;
}
.b-circuity img {
	max-width: 100%;
	max-height: 100%;
}
.b-circuity svg {
	position: absolute;
	max-width: 100%;
	max-height: 100%;
}
</style>