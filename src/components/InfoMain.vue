<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import Emailjs from './Emailjs.vue';
onMounted(() => {
    AOS.init();
})
</script>
<template>
    <div class="info-main">
        <div class="left-info">
            <img src="/images/left-info.jpg" alt="">
            

        </div>
        <div  class="right-info">
            <img src="/images/hello.webp" alt="">
            <h2 data-aos="fade-up" data-aos-duration="1500">Men bu sohani <br> tanlaganim sababi</h2>
            <p data-aos="fade-up" data-aos-duration="1500" class="making">Keling, o'zimni qisqacha tanishtiraman</p>
            <p data-aos="fade-up" data-aos-duration="1500" class="hello">Salom! Man Shohista Djurabayeva oliy ma’lumotli vrach, psixogenetik, kvant taxlili yetuk
                ekspertiman. Ôzim Toshkent Tibbiyot Akademiyasini tamomlaganim sababli Inson hayotida genetika Va neyron
                tizimlari qanchalik ahamiyatli ekanini aniq bilaman. Bunga isbot sifatida ôzim 35.000$ qarzdorlikdan va
                munosabatlardagi muammolardan ortiqcha qiyinchiliklarsiz chiqib keta olganimni korsatishim mumkin. Aynan
                kvant taxlili metodi orqali qarzdorlikdan qutildim Va munosabatlarda garmoniyaga erisha oldim. Shundan sông
                bu metodni chuqur ôzlashtirishni boshladim. Bugungi kunga kelib esa 5000 dan ziyod mijozlarga kvant metodi
                asosida hayotlarini yaxshilashga yordam berib kelmoqdaman.
            </p>
            <button data-aos="fade-up" data-aos-duration="1500" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Ariza
                qoldirish</button>
          <Emailjs/>
            
        </div>
    </div>
</template>
<style scoped>
.info-main {
    width: 100%;
    display: flex;
    text-align: center;
}

.left-info {
    width: 50%;
    background-color: #b4b4b4;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    position: relative;
}

.left-info img {
    width: 600px;
}

.left-info p {
    font-size: 30px;
    color: rgb(231, 35, 94);
    position: absolute;
    right: 12%;
    text-align: end;
    top: 17%;
    font-family: 'Dela Gothic One', cursive;
}

.left-info p img {
    width: 30px;
    height: 30px;
    margin-left: 5px;
}

.left-info p span {
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: rgb(165, 60, 221);
}

.right-info {
    width: 50%;
    padding: 20px;
    background-image: url('https://i.pinimg.com/originals/c2/94/26/c2942668d5ddfa81cb4181a0b1265251.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

}

.right-info h2 {
    color: white;
    font-size: 35px;
    margin-bottom: 20px;
}

.right-info .making {
    font-size: 35px;
    font-family: 'Caveat', cursive;
    color: rgb(231, 35, 94);
    margin-bottom: 40px;
}

.right-info .hello {
    font-size: 20px;
    color: white;
    margin-bottom: 30px;
    width: 500px;
    text-align: start;
    margin-left: 140px;
}

.right-info button {
    padding: 15px 30px 15px 30px;
    border-radius: 30px;
    border: 3px solid rgb(231, 35, 94);
    color: white;
    background-color: rgb(231, 35, 94);
    cursor: pointer;
    font-size: 17px;
    transition: .3s;
}

.right-info button:hover {
    color: rgb(231, 35, 94);
    background-color: #fff;
}

@media only screen and (max-width: 1000px) {
    .info-main {
        width: 100%;
        display: flex;
        text-align: center;
        flex-wrap: wrap;
        flex-direction: column;

    }

    .left-info {
        width: 100%;
    }

    .left-info img {
        width: 50%;
    }

    .right-info {
        width: 100%;
        padding: 0;
        padding-top: 40px;
        padding-bottom: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }

    .left-info p {
        font-size: 18px;
        color: rgb(231, 35, 94);
        position: absolute;
        right: 5%;
        text-align: end;
        top: 17%;
        font-family: 'Dela Gothic One', cursive;
    }

    .right-info .making {
        font-size: 25px;
        font-family: 'Caveat', cursive;
        color: rgb(29, 222, 222);
        margin-bottom: 70px;
    }

    .right-info .hello {
        width: 500px;
        margin: 0;
    }
}

@media only screen and (max-width: 600px) {
    .info-main {
        width: 100%;
        display: flex;
        text-align: center;
        flex-wrap: wrap;
        flex-direction: column;
    }

    .left-info {
        width: 100%;
    }

    .left-info img {
        width: 80%;
    }

    .right-info {
        width: 100%;
        padding: 0;
        padding-bottom: 20px;
    }

    .left-info p {
        font-size: 18px;
        color: rgb(231, 35, 94);
        position: absolute;
        right: 5%;
        text-align: end;
        top: 17%;
        font-family: 'Dela Gothic One', cursive;
    }

    .right-info .making {
        font-size: 25px;
        font-family: 'Caveat', cursive;
        color: rgb(29, 222, 222);
        margin-bottom: 70px;
    }

    .right-info .hello {
        margin-left: 5%;
        width: 350px;
    }

}</style>