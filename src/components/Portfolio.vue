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
  <section class="portfolio">
    <h1 class="portfolio-h1">Portfolio</h1>
    <img class="photo-portfolio" src="https://s3-alpha-sig.figma.com/img/6d43/fbc0/19eb6e72d32e254c8b02825f0390f169?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IJzsjZ4h4Xt7KcOI4lmsGUKYQk48B0Jwz30jww~96CFxFRItXkv73vr-6rFDxbSMgSE623m24mYLCIhgQuKKuQ23UzfUhjAfErTBrbMN8Q848VvubEIk3xvWh5QR~vnN6gpRyHVpEcnDAsZssrUHmeOm2ahKnyjjvne~WZ9EHOoTOHttzI~b5wShkBK9FkQV~ovd67CjXlUeNQnXDOg2zvs1nN~XzFHOZTHS8ui9BQMvRPQ5xLGl0ziRn5hXMB08XGRDW8SorDGreVC~k80omnFm2nvLr3dIZvHm36PWiBqfdE1uALcfin-Z2WGOzezTcNjZf7NeKosWPoM1Jp7s7g__" title="Foto woman" alt="Фото девушки" />
    <p class="portfolio-p">Online fashion store - Homepage</p>
    <img class="photo-portfolio" src="https://s3-alpha-sig.figma.com/img/4234/8d90/4dc19da808f0bf66bdd48c26c8228ec8?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LKn~KlOQgWqnqAuiS9cnJAvOH~lUjadI0xiRNZtwAPXHgTJFb-fpFECoC3byYVhweRZaDPszdvqHSU-CVAbWste-b900b~2Do1ZqW-EviIhJEwTujNnjxazKX8cSnPxn-tYCOKNV3QZXjyXOq9L3JFvo2c8Ed1mMYncT~AFJnDQecLEhAgGxLLZVCTtmReTa99fC~yTTjpsZEzfaR2E4EBv~YbnZdKVZ~qWrgYEkF4dMjJlAAuV7tncodGPRtJPyT-3682Ic0FJAQOroy5FxbRiLpdAEq2UfynEIajAovh8Og3HLy1Z8NGqpGgg5C5FdZ5T76K4D6o4TOnsxu9sCPA__" title="Foto man" alt="Фото мужчины" />
    <p class="portfolio-p">Reebok Store - Concept</p>
    <img class="photo-portfolio" src="https://s3-alpha-sig.figma.com/img/7bc4/92d5/1d2a3f989e046251ea9557eedaee9136?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j0SuJ7~vxi1ZOfdT5LTq3kQ2pv0uGKfdzu0zB5MZpRuT9T6rrGciRS8g~IpSpgT-2wiFB3OZKwWGJXis7s0Gg6IFg9URRsgNPPJ22uw7ox4N2YaKk1uYZvf1eIHgiRehBFuivvlmqM1Q5ymEghN1x0uG4JMYLpfYsiAuG6ARcZbRuzMu-x9hARZ~iFQKTwQWXyXEwdtR1PvJ1KQsxTs93qAbGOix3JSHeuBknp1MNfpwaSyKCNhNsVDAnFPJzyk6XRyY2UAhSAmYxPC0NZYhx7gDpgIUwZykNlqRQqKCqQseNVZtr0WFd5hT4k0YR26ypb0-g2NIrDqxeWMRebxLcA__" title="Camera on the photo" alt="Фото камеры" />
    <p class="portfolio-p">Braun Landing Page - Concept</p>
  </section>
</template>

<style scoped>
.portfolio{
  width: 1445px;
  height: 2165px;
  padding-top: 70px;
  background-color: rgba(246, 246, 246, 1);
}
.portfolio-h1 {
  padding-top: 50px;
  text-align: center;
  font-weight: bold;
  font-size: 34px;
  font-family: Gilroy-Bold, sans-serif;
  margin-bottom: px;
}
.photo-portfolio {
  margin-left: 257.7px;
  width: 936.24px;
  height: 510px;
  margin-top: 45px;
}
.portfolio-p {
  font-weight: bold;
  color: #282833;
  padding-top: 27px;
  padding-bottom: 10px;
  line-height: 21.83px;
  font-family: Gilroy-Medium, sans-serif ;
  font-size: 18px;
  line-height: 21.83px;
  text-align: center;
}
</style>