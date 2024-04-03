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
  <section class="contacts">
    <h1 class="contacts-h1">Contacts</h1>
    <p class="contacts-p">FWant to know more or just chat? <br>
You are welcome!</p>
<p class="contacts-button">Send message</p>
<img class="photo-in" src="@/assets/in.png" title="In" alt="In" />
<img class="photo-insta" src="@/assets/insta.png" title="Insta" alt="Insta" />
<img class="photo-be" src="@/assets/behance.png" title="Be" alt="Be" />
<img class="photo-b" src="@/assets/b.png" title="B" alt="B" />
<p class="contacts-footer">Like me on<br>
LinkedIn, Instagram, Behance, Dribble</p>
</section>
</template>

<style scoped>
.contacts {
  background: rgba(255, 255, 255, 1);
  padding-top: 81px;
  width: 1445px;
  height: 550px;
}
.contacts-h1 {
  text-align: center;
  font-weight: bold;
  font-size: 34px;
  font-family: Gilroy-Bold, sans-serif;
}
.contacts-p {
  font-family: Gilroy-Medium, sans-serif ;
  font-weight: bold;
  color: #282833;
  margin-top: 45px;
  line-height: 21.83px;	
  font-size: 18px;
  line-height: 21.83px;
  text-align: center;
}
.contacts-button {
  width: 180.5px;
  height: 32px;
  margin-top: 29.6px;
  text-align: center;
  margin-left: 634.76px;
  padding-top: 10px;
  background:  #282833;
  font-family: 'Gilroy-Bold', sans-serif;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  font-weight: 700;
  color: #FFFFFF;
  border-radius: 30px;
}
.photo-in {
  margin-left: 552.29px;
  margin-top: 86.64px;
}
.photo-insta {
  margin-left: 60.54px;
  margin-top: 86.64px;
}
.photo-be {
  margin-left: 60.54px;
  margin-top: 86.64px;
}
.photo-b {
  margin-left: 60.54px;
  margin-top: 86.64px;
}
.contacts-footer {
  margin-top: 45.06px;
  color: rgba(130, 130, 130, 1);
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  font-family: Gilroy-Bold, sans-serif;
}
</style>