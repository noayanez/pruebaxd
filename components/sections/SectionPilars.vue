<template >
  <section
    id="Pilars"
    class="uk-flex uk-flex-column uk-flex-center uk-padding pilars-responsive"
    style="background-color:black; padding-top: 90px;">
    <div
      class="uk-width-1-1"
      style="height: 15%;">
      <div
        class="uk-h2 uk-margin-remove uk-text-bold uk-text-center  uk-text-uppercase"
        style="color:white">
        <span class="size-title">{{ pilars.pilarsSectionTitle }}</span>
      </div>
      <div
        class="uk-h3 uk-margin-remove uk-text-bold uk-text-center"
        style="color:white">
        <span class="size-subtitle">{{ pilars.pilarsSectionSubtitle }}</span>
      </div>
    </div>
    <div
      style="background-color:transparent;"
      uk-flex
      uk-scrollspy="cls: uk-animation-scale-down; target: > div > div > div; delay: 400; repeat: false"
      class="uk-flex uk-flex-wrap uk-flex-stretch uk-flex-center uk-margin-remove uk-visible@m">
      <!-- 80px = navbar size -->
      <div
        v-for="(section, key) in pilars.pilarsGroup"
        :key="key"
        class="uk-width-1-3@m uk-witdth-1-1 uk-height-1-1 uk-padding-small"
        style="background: transparent;">
        <div
          class="uk-padding-small uk-height-1-1"
          style="border-radius: 20px; color: black; background: transparent;">
          <div
            class="uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-child-width-1-2 uk-child-width-1-1@s ">
            <div
              :style="`background-image: url(${section.singlePilar.singlePilarImage};`"
              style="background-size:cover; background-position: 50% 50%;"
              class="uk-height-1-1 uk-padding uk-align-center container-image"/>
            <div
              class="uk-width-4-5 uk-text-center">
              <div style="color:white">
                <span class="size-pilar">{{ section.singlePilar.singlePilarTitle }}</span>
              </div>
              <div style="color:white; padding-top: 10px;width: 50%; margin:auto">
                <span class="size-description"> {{ section.singlePilar.singlePilarDescription }} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="uk-hidden@m"
      style="height: 70%;">
      <!-- autoplay: true; autoplay-interval: 4000; -->
      <div
        uk-slideshow="animation: slide;  min-height: 350; max-height: 600"
        style="height: 100%;">
        <div
          class="uk-position-relative uk-visible-toggle">
          <ul
            class="uk-slideshow-items"
            style="height: 100%;">
            <li
              v-for="(section, key) in pilars.pilarsGroup"
              :key="key"
              class="uk-flex uk-flex-column uk-flex-center uk-flex-middle"
              style="z-index: 10; height: 100%;">
              <div
                :style="`background-image: url(${section.singlePilar.singlePilarImage};`"
                style="z-index: -1; margin: 0px auto;"
                class="uk-height-1-1 uk-padding uk-align-center image-slidex"/>
              <div
                class="uk-width-4-5 uk-text-center container-description"
                style="z-index: -1; margin: 20px 0px;">
                <div style="color:white;z-index: -1;">
                  {{ section.singlePilar.singlePilarTitle }}
                </div>
                <div
                  class="description size-subtitle"
                  style="color:white; padding-top: 10px; z-index: -1;">
                  {{ section.singlePilar.singlePilarDescription }}
                </div>
              </div>
            </li>
          </ul>
          <ul
            class="uk-slideshow-nav uk-dotnav uk-flex-center"
            style="margin: 10px 0px 10px 0px; padding: 0px;"/>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  props:{
     pilars:{
      type: Object,
      default: function(){
        return{message: "Pilars"}
      }
    }
  },
  data(){
    return{
      effect: false,
      device:''
    }
  },
  mounted(){
    var userAgent = navigator.userAgent || navigator.vendor || window.opera
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        this.device = true
      }
  }
}
</script>

<style scoped>
.gradient {
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#000000+0,000000+100&0.65+0,0+100;Neutral+Density */
  background: -moz-linear-gradient(top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */
}
.height-pilars{
  height: 100vh;
}
.imageContainer{
  background-position:50% 50%;
  height: 150px;
  width: 150px;
  border:4px solid #e41c43;
  background-color:#e41c43;
  background-size:75%;
}

.textStyle{
  padding-top: 2em;
}

.container-image{
  background-position:50% 50%;
  height: 160px;
  width: 160px;
  background-size:75%;
}
.image-slidex{
  background-size:contain;
  background-repeat: no-repeat;
  background-position:50% 50%;
  width: 70%;
  border-radius: 30px;
  height: 35vh;
}
.description{
  width: 50%;
  margin:auto
}
.size-title{
  font-size: 1.5rem;
  font-family: futura !important;
  font-weight: 800 !important;
}
.size-subtitle{
  font-size: 1.2rem;
  font-family: futura !important;
  font-weight: 700 !important;
}
@media(min-width: 1600px){
  .height-pilars{
    height: 60vh;
  }
  .size-title{
    font-size: 3rem;
  }
  .size-subtitle{
    font-size: 2rem;
  }
  .size-pilar{
    font-size: 1.5rem;
  }
  .size-description{
    font-size: 1.4rem;
  }
}
@media (max-width: 420px){
  .description{
    width: 100%;
    margin:auto
  }
  .image-slidex{
    width: 100%;
  }
  .container-description{
    margin:auto;
  }
  .height-pilars{
    height: 100%;
  }
}
.uk-padding-remove bottom {
  min-height:80vh;
  height: -webkit-fill-available;
}
@media(min-height: 1000px){
  .uk-padding-remove bottom {
    min-height: 0px;
    height:800px;
  }
}
</style>
