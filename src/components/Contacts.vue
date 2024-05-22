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
  section.b-contacts.row.justify-content-center
    p.b-contacts__heading.col-12 Contacts
    p.b-contacts__text.col-12
      | Want to know more or just chat? 
      br
      | ou are welcome!
    p.b-contacts__button.col-12 Send message
    .w-100
    .b-contacts__menu.row.justify-content-between
      img.col-auto.b-contacts__menu-in(src='/in.png' title='In' alt='In')
      img.col-auto.b-contacts__menu-insta(src='/insta.png' title='Insta' alt='Insta')
      img.col-auto.b-contacts__menu-be(src='/behance.png' title='Be' alt='Be')
      img.col-auto.b-contacts__menu-b(src='/b.png' title='B' alt='B')
    p.b-contacts__footer.col-12
      | Like me on
      br
      | LinkedIn, Instagram, Behance, Dribble
</template>

<style scoped lang="scss">
@import '../assets/styles.scss';
.b-contacts {
  width: $width;
	@include marg-max-width;
  @include padding;
  padding-top: g(12);
  height: 40.625rem;
  background-color: $back;
  color: #282833;
}
.b-contacts__heading {
  @include align-fontw;
  font-size: 2.125rem;
  margin-top: g(8);
}
.b-contacts__text {
  margin-top: g(10);
  line-height: 1.3644rem;	
  font-size: 1.125rem;
  text-align: center;
  font-weight: 500;
}
.b-contacts__button {
  width: 11.2813rem;
  height: 2.625rem;
  margin-top: g(9);
  padding-top: g(7);
  background:  #282833;
  font-size: 1.125rem;
  line-height: 12px;
  text-align: center;
  font-weight: 700;
  color: #FFFFFF;
  border-radius: 1.875rem;
}
.b-contacts__menu {
  @include marg-max-width;
  width: $width;
  margin-top: g(12);
  height: 1.875rem;
}
/* .b-contacts__menu-in {
}
.b-contacts__menu-insta {
}
.b-contacts__menu-be {
}
.b-contacts__menu-b {
} */
.b-contacts__footer {
  margin-top: g(11);
  color: $col;
  @include align-fontw;
  font-size: 14px;
  padding-bottom: g(12);
}
@mixin col-ff-align {
	text-align: center;
	color: $col;
	font-family: $ffamily;
}
a {
	&:hover {
		color: black;
	}
	&:focus {
		color: green;
	}
}
.b-contacts__button {
	&:hover {
	color: red
}
}
</style>