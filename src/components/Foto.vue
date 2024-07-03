<script lang="ts">
import {defineComponent} from 'vue'
import axios from 'axios';

interface Menu {
  text: string,
  header: string,
  link: string,
  image: string,
}

interface DataObject {
  menuData: Array<Menu>
}

export default defineComponent({
  name: 'Foto',
  data(): DataObject {
    return {
      menuData: []
    }
  },

  mounted() {
    axios.get('http://localhost:3000/foto')
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
  section.b-information.container
    .b-information__flex.row.justify-content-between.align-items-end.no-gutters
      .b-information__name.col-auto(v-html="menuData.header")
      .b-information__minsk.col-auto(v-html="menuData.text")
      .b-information__flex2.col-auto
        p
          a.b-information__languge-eng(v-for='link in menuData.links' :key='link.text' :href="'link.link'") {{ link.text }}
          a.b-information__languge-ru
    .row.row-foto.no-gutters
      img.b-information__photo.col-12(:key='menuData.image' v-bind:src="menuData.image")
</template>

<style scoped lang="scss">
@import '../assets/styles.scss';
.b-information {
  width: $width;
  @include marg-max-width;
  padding: 0%;
}
.b-information__flex {
  max-width: $width;
}
p {
  color: #282833;
  font-family: $ffamily;
  font-size: 16px;
  transform: rotate(270deg);
  text-align: center;
  margin-bottom: 2.5rem;
}
.b-information__name {
  font-weight: 600;
  font-family: $ffamily;
  font-size: rem(47.3408);
  color: #282833;
}
.b-information__minsk {
  font-weight: 400;
  color: #282833;
  font-family: $ffamily;
  font-size: rem(18);
  padding-bottom: g(6);
}
.b-information__flex2 {
  margin-right: -22px;
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
  margin-bottom: 60px;
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
    font-weight: 900;
    color: black;
  }
  &:focus {
    color: green;
  }
}
</style>