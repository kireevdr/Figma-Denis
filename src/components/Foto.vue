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
section.b-information.container
	.b-information__flex.row.justify-content-between.align-items-end.no-gutters
		p.b-information__name.col-auto
			| Denis
			br
			|  Novik
		p.b-information__minsk.col-auto
			| UX | UI designer
			br
			| 24 years old, Minsk
		.b-information__flex2.col-auto
			p.b-information__languge-eng  | ENG
			p.b-information__languge-ru RU 
		//- div.w-100
	.row.row-foto.no-gutters
		img.b-information__photo.col-12(src='https://s3-alpha-sig.figma.com/img/4a3f/6358/473d92de61764f572524ac59200c7086?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EVl3~s8-LJLdDjW4fCh0ixzNfcxU5oP8S9pvx8m3AExSBsz3YX1YaVMtNZ86lmG50ucQ~3RDzjPjATW-Fy-AIcLazkUD7~-qQBnvAnAe4scjBsJzsUoAuHA7vt6afhdViXTan4LajbK7zS8oDq0HXvpDWAvDG~6PWMhJfuKheawCAcxtLB6~DaAdBGLf66Kk~D8rwj8MbptpqYVbLAVzPyT38k5~K47Q0WQj6gm3m~Iw7tSjHA2l46ye3-xfM3K33lwbB~cc-Xp6-CaJgKVf2I~0niT42~YWlFvBbp-0E~8dcsRqcQrrIYw2knK-12VCF7Ci4P1vpgITNmGh5isdOg__' rel="nofollow" title='Denis – UX/UI designer from Minsk' alt='Photo of the UX/UI designer Denis Novak from Minsk wearing glasses, a black hoodie and a cap.')
</template>

<style scoped lang="scss">
@import '../assets/styles.scss';
.b-information {
	width: $width;
	@include marg-max-width;
	padding: 0%;
}
.b-information__flex {
	// @include marg-max-width;
  	max-width: $width;	
}
.b-information__name {
	font-weight: 600;
	font-family: $ffamily; 
	font-size: rem(47.3408);
	color:  #282833;
}
.b-information__minsk {
	font-weight: 400;
	color: #282833;
	font-family: $ffamily;
	font-size: rem(18);
	padding-bottom: g(6);
}
.b-information__flex2 {
	margin-right: -15px;
}
.b-information__languge-eng {
	color: #282833;
	font-family: $ffamily;
	font-size: 16px;
	transform: rotate(270deg);
	text-align: center;
}
.b-information__languge-ru {
	color: #282833;
	font-family: $ffamily;
	font-size: 16px;
	transform: rotate(270deg);
	text-align: center;
	margin-bottom: 1.875rem;
}
.row-foto {
	margin-left: auto;
}
.b-information__photo {
	max-width: $width;
	@include marg-max-width;
	display: block;
	object-fit: cover;
	object-position: 66% 44%;
	height: rem(387);
	
}
.b-information__languge-eng, .b-information__languge-ru {
	&:hover {
		font-weight: 900
	}
}
</style>