<script lang="ts">
import {defineComponent} from 'vue'
import axios from 'axios';

interface Menu {
  text: string,
  header: string,
  link: string,
  image: string,
  title: string,
  three: string,
  four: string,
  name: string,
  button: string,
  iconin: string,
  alt: string,
  loading: string,
  rel: string
}

interface DataObject {
  menuData: Array<Menu>
}

export default defineComponent({
  name: 'Contacts',
  data(): DataObject {
    return {
      menuData: []
    }
  },

  mounted() {
    axios.get('http://localhost:3000/contacts')
        .then(response => {
          this.menuData = response.data
        })
        .catch((error => {
          console.error(error)
        }));
  }
})
</script>

<template lang="pug">
  .container.b-contacts-container
    section.b-contacts.row.justify-content-center
      p.b-contacts__heading.col-12 {{ menuData.title }}
      p.b-contacts__text.col-12(v-html="menuData.text")
      span
        a.b-contacts__button.col-12(:key='menuData.button' :href="'link.link'") {{ menuData.button }}
      .w-100
      .b-contacts__menu.row.justify-content-between(v-for='link in menuData.icons')
        img.col-auto.b-contacts__menu-in(:key='link.iconin' v-bind:src="link.iconin" v-bind:alt="link.alt" v-bind:title="link.title" v-bind:loading="link.loading" v-bind:rel="link.rel" )
      p.b-contacts__footer.col-12(v-html="menuData.footer")
</template>

<style scoped lang="scss">
@import '../assets/styles.scss';
.b-contacts-container {
  @include marg-max-width;
  padding: 0%;
  max-width: rem(342);
}
span {
  height: 2.625rem;
  margin-top: g(9);
  padding-top: g(7);
  background: #282833;
  font-size: 1.125rem;
  line-height: 12px;
  text-align: center;
  font-weight: 700;
  color: #FFFFFF;
  border-radius: 1.875rem;
  max-width: rem(180);
}
.b-contacts {
  width: $width;
  @include marg-max-width;
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
  text-align: center;
  font-weight: 700;
  color: #FFFFFF;
}
.b-contacts__menu {
  @include marg-max-width;
  margin-top: g(12);
  height: 1.875rem;
}
.b-contacts__menu-in {
}
.b-contacts__menu-insta {
  padding: 0%;
}
.b-contacts__menu-be {
  padding: 0%;
}
.b-contacts__menu-b {
  padding: 0%;
}
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