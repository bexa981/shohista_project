<script setup>
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
   AOS.init();
})
</script>
<template>
   <div class="blog-main">
      <h2 data-aos="fade-up" data-aos-duration="1500">Foydali videolar</h2>
      <p data-aos="fade-up" data-aos-duration="1500" class="title">Hayot tarzingizni yaxshi tomonga o'zgartiring</p>



      <div class="blog videous">

         <div data-aos="fade-right" data-aos-duration="1500" class="left-video">
            <div class="player-container">
               <vue3-video-player @play="your_method" src="/videos/video11.mp4"
                  ></vue3-video-player>
            </div>
         </div>

         <div class="right-video">

            <div data-aos="fade-up" data-aos-duration="1500" class="right-one">
               <div class="video1 video">
                  <div class="player-container">
               <vue3-video-player @play="your_method" src="/videos/video8.mp4"
                  :view-core="viewCore"></vue3-video-player>
            </div>
               </div>
               <div class="video2 video">
                  <div class="player-container">
               <vue3-video-player @play="your_method" src="/videos/video7.mp4"
                  :view-core="viewCore"></vue3-video-player>
            </div>
               </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="1500" class="right-one">
               <div class="video3 video">
                  <div class="player-container">
               <vue3-video-player @play="your_method" src="/videos/video6.mp4"
                  :view-core="viewCore"></vue3-video-player>
            </div>
               </div>
               <div class="video4 video"> <div class="player-container">
               <vue3-video-player @play="your_method" src="/videos/video5.mp4"
                  :view-core="viewCore"></vue3-video-player>
            </div></div>
            </div>

         </div>


      </div>
   </div>
</template>

<style>
.blog-main {
   width: 100%;
   padding: 50px 0 50px 0;
   background-image: url('https://papers.co/wallpaper/papers.co-vy78-circle-red-simple-minimal-pattern-background-23-wallpaper.jpg');
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;

}

.blog-main h2 {
   text-align: center;
   font-size: 40px;
   font-weight: 300;
   color: white;

}

.blog-main p {
   text-align: center;
   color: white;
   font-family: 'Caveat', cursive;
   font-size: 30px;
   margin-top: 10px;
   margin-bottom: 30px;
}

.blog {
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   gap: 30px;
   color: white;
   text-align: center;
   width: 100%;
}

.left-video {
   width: 550px;
   height: 520px;
   background-color: gray;
   
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
}
.player-container{
   height: 100%;
}

.right-video {
   display: flex;
   flex-direction: column;
   gap: 20px;

}

.right-one {
   display: flex;
   justify-content: space-between;
   gap: 20px;
}

.video {
   width: 300px;
   height: 250px;
   background-color: gray;
   
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
}

@media only screen and (max-width: 650px) {
   .right-one {
      flex-direction: column;
   }

   .right-one .video {
      width: 550px;
      height: 350px;
   }

}

@media only screen and (max-width: 580px) {
   .right-one .video {
      width: 400px;
      height: 330px;
   }

   .left-video {
      width: 400px;
      height: 400px;
      background-color: gray;
   }
}

@media only screen and (max-width: 580px) {
   .right-one .video {
      width: 300px;
      height: 270px;
   }

   .left-video {
      width: 300px;
      height: 300px;
      background-color: gray;
   }
}</style>