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
  @include padding;
  padding-top: 81px;
  height: 650px;
  background-color: $back;

}
.b-contacts__heading {
  @include align-fontw;
  font-size: 34px;
  margin-top: 20px;
}
.b-contacts__text {
  color: #282833;
  margin-top: 45px;
  line-height: 21.83px;	
  font-size: 18px;
  line-height: 21.83px;
  text-align: center;
  font-weight: 500;
}
.b-contacts__button {
  width: 180.5px;
  height: 42px;
  margin-top: 29.6px;
  padding-top: 11px;
  background:  #282833;
  font-size: 18px;
  line-height: 12px;
  text-align: center;
  font-weight: 700;
  color: #FFFFFF;
  border-radius: 30px;
}
.b-contacts__menu {
  @include marg-max-width;
  width: $width;
  margin-top: 86.64px;
  height: 40px;
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
  margin-top: 45.06px;
  color: $col;
  @include align-fontw;
  font-size: 14px;
  padding-bottom: 65px;
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