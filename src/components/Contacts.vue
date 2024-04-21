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
    <section class="contacts">
      <p class="contacts-h1">Contacts</p>
      <p class="contacts-p">Want to know more or just chat? <br>
      ou are welcome!</p>
      <p class="contacts-button">Send message</p>
      <div class="photo-contacts">
        <img class="photo-in" src="@/assets/in.png" title="In" alt="In" />
        <img class="photo-insta" src="@/assets/insta.png" title="Insta" alt="Insta" />
        <img class="photo-be" src="@/assets/behance.png" title="Be" alt="Be" />
        <img class="photo-b" src="@/assets/b.png" title="B" alt="B" />
      </div>
      <p class="contacts-footer">Like me on<br>
      LinkedIn, Instagram, Behance, Dribble</p>
    </section>
  </div>
</template>

<style scoped>
.contacts {
  padding-left: 29px;
	padding-right: 29px;
  background: rgba(255, 255, 255, 1);
  padding-top: 81px;
  height: 550px;
}
.contacts-h1 {
  text-align: center;
  font-weight: bold;
  font-size: 34px;
  margin-top: 20px;
}
.contacts-p {
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
  padding-top: 10px;
  background:  #282833;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  font-weight: 700;
  color: #FFFFFF;
  border-radius: 30px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  }
.photo-contacts{
  max-width: 100%;
  width: 936px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 86.64px;
  height: 40px;
  }
.contacts-footer {
  margin-top: 45.06px;
  color: rgba(130, 130, 130, 1);
  text-align: center;
  font-weight: bold;
  font-size: 14px;
}
</style>