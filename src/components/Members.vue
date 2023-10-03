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
            <h2>Bizning mijozimiz erishgan natijalari</h2>
            <p class="title">Mijozimizning keltirilgan so'zlari</p>
            <p class="info">“Holatim ancha yaxshi qaysiki bo'ladigan munosabatlar va moliyaviy, tinchlik, hotirjamlik topishda anchagina yaxshilanganligini o'zimda sezdim.Bugungi kunda bu kurslar menga anchagina yordam bermoqda. Xar bir erkak kishida bolganidek mendaham moliyaviy va munosabatga oid muamolar bo'lgan va bularni yengib ketishimda bu kurslar ancha yordam berdi.”</p>
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
            <div class="player-container">
               <vue3-video-player @play="your_method" src="/videos/klent2info.mp4"
                  ></vue3-video-player>
            </div>
             
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
    height: 50vh;
}
.player-container{
    height: 100%;
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