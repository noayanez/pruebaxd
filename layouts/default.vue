<template>
  <div>
    <div v-if="boolcontent !== ''">
      <no-ssr>
        <Navbar style="z-index: 100"/>
      </no-ssr>
      <nuxt />
      <no-ssr>
        <!-- <Footer /> -->
      </no-ssr>
    </div>
    <div
      v-if="bool2"
      class="uk-flex uk-flex-middle uk-flex-center uk-height-1-1 uk-width-1-1"
      style="position: fixed; top:0; background-color:#303e47; z-index: 1000;">
      <div class="pulse-btn">
        <img
          class="width-img-onload"
          src="logo-principal.png"
          alt="Logo">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Navbar from '~/components/general/Navbar'


export default {
  components : {
    Navbar
  },
  data(){
    return{
      boolcontent: false,
      bool2: true,
      infoGeneral:'',
      boolcontetnt: false
    }
  },
  async mounted() {
    this.consumer()
    await wait(1300)
    this.bool2 = false
  },
  methods:{
    async consumer(){
      try {
        this.content = await this.$axios.$get('/site/page')
        console.log(this.content)
        this.infoGeneral = await this.$axios.$get('/site/general-info')
        this.$router.app.$store.commit(
          'SET_DATA_VIEW',this.content
        )
        this.$router.app.$store.commit(
          'SET_GENERAL_INFORMATION',this.infoGeneral
        )
      } catch (error) {
        console.log('error')
      } finally {
        this.boolcontent = true
      }
    }
  }
}
function wait(n) {
   return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve()
    }, n)
  })
}
</script>

<style>
h1,h2,h3,a,div{
  font-family: 'Futura';
  font-weight: 800 !important;
}
p,span,input,textarea{
  font-family: 'Futura';
  font-weight: 700 !important;
}
.pulse-btn {
    position: relative;
    margin:100px auto;
    width: 400px;
    height: auto;
    animation: pulse 2000ms infinite;
}
@keyframes pulse {
  0%, 100% {
     tranform: scale(1);
  }
  50% {
     transform: scale(1.2);
  }
}

.width-img-onload{
  max-width: 80%;
}

</style>
