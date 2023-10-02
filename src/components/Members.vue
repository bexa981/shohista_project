<script setup>

import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
    AOS.init();
})

</script>

<template>
    <div class="members">
        <div data-aos="fade-right" data-aos-duration="1500" class="memebers-info">
            <h2>Our Members' <br> Achievements</h2>
            <p class="title">Lillie Watson lost 90 pounds</p>
            <p class="info">“Melanie will completely transform your mindset towards food and your relationship with your body. I’m now
                kinder to myself and am happier, not just because I lost weight, but because I learned to appreciate and
                take care of myself.”</p>
                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Ariza qoldirish</button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Shohista Djurabayeva <span class="kurs">kursiga yoziling!</span></h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Ismingiz:</label>
                                    <input type="text" class="form-control" id="recipient-name" required>
                                </div>
                                <div class="mb-3">
                                    <label for="phone-number" class="col-form-label" >Telefon raqamingiz:</label>
                                    <input type="text" class="form-control" id="phone-number" placeholder="+998" required>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn close" data-bs-dismiss="modal">Yopish</button>
                            <button type="button" class="btn send">Ariza Qoldirish</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="1500" class="member-video">
            <iframe width="100%" height="470" src="https://www.youtube.com/embed/hrqH4tGqpXI" title="ERIM O&#39;Z MASULYATINI BO&#39;YNIGA OLSIN YOKI AJRASHSIN!!!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
             
        </div>
    </div>
</template>

<style scoped>
.members{
    width: 100%;
    
    background-image: url('https://www.10wallpaper.com/wallpaper/1920x1080/1604/Lines_red_background_bright-Design_Theme_HD_Wallpapers_1920x1080.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding-top: 100px;
    padding-bottom: 100px;
}
.memebers-info{
    width: 500px;
}
.member-video{
    width: 600px;
}
.memebers-info h2{
    font-size: 40px;
    font-weight: 400;
    line-height: 1.2em;
    color: white;
    margin-bottom: 10px;
}
.memebers-info .title{
    font-size: 35px;
    font-family: 'Caveat', cursive;
    color: white;
    margin-bottom: 30px;
}
.memebers-info .info{
    font-size: 19px;
    line-height: 1.9em;
    color: white;
}
.memebers-info button{
    padding: 20px 40px 20px 40px;
    color: rgb(231, 35, 94);
    font-size: 17px;
    font-weight: 600;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    margin-top: 50px;
    transition: .3s;
    margin-bottom: 20px;
}
.memebers-info button:hover{
    color: rgb(29, 222, 222);
}
@media only screen and (max-width: 600px) {
    .members{
        padding: 30px 0 30px 0;
        
    }
    .member-video{
        margin-top: 50px;
        width: 420px;
    }
    .member-video iframe{
        height: 320px;
    }
    .memebers-info {
        width: 400px;
    }
}
@media only screen and (max-width: 400px) {
    .members{
        padding: 0;
        
    }
    .memebers-info{
        width: 300px;
    }
    .member-video{
        width: 320px;
    }
    .member-video iframe{
        height: 250px;
        padding: 2px;
    }

}
</style>