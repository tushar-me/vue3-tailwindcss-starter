<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
const modules = [Autoplay, Pagination, Navigation, EffectFade];
</script>

<template>
    <Swiper
    :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
    :effect="'fade'"
    :loop="true" 
    :speed=10
    
    :mousewheel="{
      forceToAxis: true
    }"
    :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
    :modules="modules"
    :grabCursor= "true"
    class="mySwiper"
  >
    <SwiperSlide > 
      <div class="relative w-full h-full">
        <img src="https://www.nicdarkthemes.com/themes/cake-bakery/wp/demo/bakery-wordpress-theme/wp-content/uploads/sites/5/2023/10/slide-02.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR2G_GQKblzNpQo-Pd1_fRwKNaQtvl1AB8pJmAUiFVGu5VtGQ0BxaOrwsqA_aem_DOSI03TPNlWs7fwOFIocAQ" class="w-full h-full" alt="">
        <div class="content text-center">
          <h3 class="text-7xl mb-5">Redefining Excellence</h3>
          <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, autem!</p>
          <button class="border-2 border-white px-10 py-2 text-whiite">More Info</button>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide > 
      <div class="relative w-full h-full">
        <img src="https://www.nicdarkthemes.com/themes/cake-bakery/wp/demo/bakery-wordpress-theme/wp-content/uploads/sites/5/2023/10/post-04-1024x683.jpg" class="w-full h-full"  alt="">
        <div class="content text-center">
          <h3 class="text-7xl mb-5">Redefining Excellence</h3>
          <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, autem!</p>
          <button class="border-2 border-white px-10 py-2 text-whiite">More Info</button>
        </div>
      </div>
    </SwiperSlide>
    <div class="swiper-button-prev">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#fff" d="M10.05 16.94v-4h8.92l.03-2.01h-8.95V6.94l-5 5Z"/></svg>
    </div>
    <div class="swiper-button-next">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#fff" d="M14 16.94v-4H5.08l-.03-2.01H14V6.94l5 5Z"/></svg>
    </div>
  </Swiper>
</template>


<style lang="scss" scoped>
.swiper {
    width: 100%;
    height: 100%;
    background: #000;
    &-slide {
        height: 100vh !important;
        color: #fff;
        position: relative;
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0, 0.6);
            z-index: 99;
        }
        img {
            transform: scale(1);
            transition: all ease-in-out 5s !important;
        }
        .content {
            position: absolute;
            top: 70%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0;
            z-index: 999;
        }
        &-active {
            img {
                transform: scale(1.2);
                transition: all ease-in-out 5s !important;
            }
            .content {
                top: 50%;
                transition: all 2s !important;
                opacity: 1;
            }   
        }
    }
}


.swiper-button-prev, .swiper-button-next{
    width:60px !important;
    height: 60px !important;
    border: 1px solid #fff !important;  
    border-radius: 999px;
    &::after {
        content: unset !important;
    }
}

.swiper-button-prev svg, .swiper-button-next svg {
    width: 30px !important;
    height: 30px !important;
}
</style>