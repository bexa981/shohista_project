<script setup>

import Youtube from './icons/Youtube.vue';
import Instagram from './icons/Instagram.vue';
import Telegram from './icons/Telegram.vue';
import Facebook from './icons/Facebook.vue';
import { onMounted, ref } from "vue";
import AOS from "aos";
import Emailjs from './Emailjs.vue';


onMounted(() => {
    AOS.init();
})


</script>
<template>
    <div class="main">

        <div class="social-main">
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" class="logo">
                <img src="/images/logo.png" alt="logo">

            </div>
            <div class="links" data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
                <a href="https://www.youtube.com/@djurabayeva_shohistabonu">
                    <Youtube class="social youtube" />
                </a>
                <a href="#">
                    <Facebook class="social facebook" />
                </a>
                <a href="https://t.me/energywomensacademy">
                    <Telegram class="social telegram" />
                </a>
                <a href="https://www.instagram.com/ekspert_shohistabonu/">
                    <Instagram class="social instagram" />
                </a>
            </div>
        </div>

        <div class="profile-foto">
            <img class="profile1" src="/images/profile-foto.png" alt="profile-foto">
           

        </div>
        <div class="job-title">
            <p data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000">Shohista Djurabayeva</p>
            <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000">Genetik kvanti <br>
                tahlili yetuk <span>Mutahasisi</span>
            </h1>
            <p data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" class="with-name">Butun
                dunyo bôylan insonlarga g’alaba qozonishlari va omadga erishishlari uchun yordam beraman
            </p>
            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"
                data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000">Ariza qoldirish</button>
        </div>
        <Emailjs/>        
    </div>
</template>

<style scoped>
.modal-footer .send {
    background-color: rgb(231, 35, 94) !important;
    color: white;
}

.modal-footer .close {
    background-color: #fff;
    color: rgb(231, 35, 94);
    border: 3px solid rgb(231, 35, 94);
}

.main {
    background-image: url('https://www.10wallpaper.com/wallpaper/1920x1080/1604/Lines_red_background_bright-Design_Theme_HD_Wallpapers_1920x1080.jpg');
    background-repeat: no-repeat;
    justify-content: space-around;
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 0;
    height: 90vh;
}

.social-main {
    position: absolute;
    left: 10px;
    top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
}

.prifile2 {
    display: none;
}


.logo img {
    width: 180px;
}



.links {

    display: flex;
    flex-direction: column;
    gap: 40px;
}

.links a {


    width: fit-content;
}

.social {
    transition: .3s;
}

.facebook:hover {
    fill: blue;
}

.youtube:hover {
    fill: red;
}

.telegram:hover {
    fill: rgb(55, 117, 231);
}

.instagram:hover {
    fill: rgb(203, 70, 196);
}

.profile-foto {
    padding: 0;
    margin: 0;
    width: fit-content;
    position: absolute;
    left: 12em;
    top: 2.3em;
}

.profile-foto img {
    width: 580px;


}

.job-title {
    color: white;
    position: absolute;
    right: 10%;
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
}

.job-title h1 {
    font-size: 50px;
    font-weight: bold;
}

.job-title p {

    width: 50%;
}

.job-title h1 span {
    font-family: 'Caveat', cursive;
}

.kurs {
    font-family: 'Caveat', cursive;
    font-size: 30px;
    color: rgb(231, 35, 94);
}

.job-title button {
    padding: 20px 40px 20px 40px;
    color: rgb(231, 35, 94);
    font-size: 17px;
    font-weight: 600;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    margin-top: 50px;

}

.job-title button:hover {
    color: black;

}

@media only screen and (max-width: 900px) {
    .main {
        display: block;
        position: relative;
        padding: 0;
        height: 100vh;

    }

    .logo {
        position: absolute;
        top: 0;
        left: 0;
        margin-left: 0;

    }

    .profile-foto {
        position: absolute;
        top: 27vh;
        left: -3rem;
    }

    .profile1 {
        display: block;
    }

    .prifile2 {
        display: none;
    }

    .profile-foto img {
        width: 500px;
    }

    .job-title h1 {
        font-size: 2rem;
        font-weight: bold;
        line-height: 2.4rem;
        margin-bottom: 40px;
    }

    .job-title {
        position: absolute;
        top: 30vh;
        right: 10px;
    }

    .with-name {
        display: none;
    }

    .job-title button {
        padding: 10px 20px 10px 20px;
        color: rgb(231, 35, 94);
        font-size: 14px;
        font-weight: 600;
        border-radius: 30px;
        border: none;
        cursor: pointer;
        margin-top: 0px;
        transition: .3s;
    }


    .links {
        display: flex;
        flex-direction: column;
        gap: 70px;
        position: absolute;
        top: 35vh;
    }

    .links a {
        margin-left: 20px;
    }

}

@media only screen and (max-width: 1454px) {
    .main {
        flex-wrap: nowrap;
    }
}

@media only screen and (max-width: 600px) {
    .main {
        display: block;
        position: relative;
        padding: 0;
        height: 100vh;

    }

    .logo {
        position: absolute;
        top: 0;
        left: 0;
        margin-left: 0;

    }



    .prifile2 {
        display: none;
    }

    .profile1 {
        display: block;
    }

    .profile-foto img {
        width: 400px;
    }

    .job-title h1 {
        font-size: 1.6rem;
        font-weight: bold;
        line-height: 2.4rem;
    }

    .job-title {
        position: absolute;
        top: 30vh;
        right: 10px;
    }

    .with-name {
        display: none;
    }

    .job-title button {
        padding: 10px 20px 10px 20px;
        color: rgb(231, 35, 94);
        font-size: 14px;
        font-weight: 600;
        border-radius: 30px;
        border: none;
        cursor: pointer;
        margin-top: 0px;
        transition: .3s;
    }



    .links {
        display: flex;
        flex-direction: column;
        gap: 70px;
        position: absolute;
        top: 35vh;
    }

    .links a {
        margin-left: 20px;
    }
}

@media only screen and (max-width: 430px) {
    .job-title {
        position: absolute;
        top: 20vh;
        right: 10px;
    }

    .links {
        top: 25vh;
    }

    .logo h2 {
        position: absolute;
        top: 0;
        left: 0;
        margin-left: 0;
        width: 300px;
        font-size: 2rem;

    }

    .profile-foto {
        position: absolute;
        top: 64vh !important;
    }

    .profile-foto img {
        width: 300px !important;
    }
}

@media only screen and (max-width: 1900px) {
    .profile-foto {
        position: absolute;
        top: 15vh;
        left: 2rem;
    }
}

@media only screen and (max-width: 2800px) {
    .profile-foto {
        position: absolute;
        top: 20vh;
        left: 7rem;
    }
}

@media only screen and (max-width: 705px) {
    .profile-foto img {
        width: 80%;
    }

    .profile-foto {
        top: 50vh;
        left: 0em;
    }
}</style>