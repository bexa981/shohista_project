<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import Emailjs from "./Emailjs.vue";
onMounted(() => {
    AOS.init();
})
</script>
<template>
    <div class="book-main">
        <div data-aos="fade-right" data-aos-duration="1500" class="book-info">
            <h2>Energy Women's Academy</h2>
            <p class="title">Hayotda yomon narsani korayapmanmi yoki hayotni negativ orqali korayapmanmi</p>
            <p class="info">Academia 2021 yil tashkil qilingan va psixologiyaning Eng yetuk metodlaridan foydalangan holda
                kuchli psixologlar birgalikda faoliyat olib boradi. Academiyaning asosiy maqsadi insonlarni hayotga
                qaytarish. Hozirda akademiyaning 5000 dan ziyod mamnun mijozlari bor.</p>
            <div class="download">
                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Ariza
                    qoldirish</button>
                <Emailjs/>
            </div>
        </div>
        <div data-aos="fade-right" data-aos-duration="1500" class="book-photo">
            <img src="/images/books.jpg" alt="">
        </div>

    </div>
</template>

<style scoped>
.book-main {
    display: flex;

    padding: 40px;
    justify-content: space-around;

}

.book-info {
    width: 50%;
    padding: 40px;
}

.book-info h2 {
    margin-left: 100px;
    font-size: 40px;
    font-weight: 200;
    color: rgb(79, 78, 78);
    line-height: 3rem;
}

.book-info .title {
    margin-left: 100px;
    font-size: 35px;
    font-family: 'Caveat', cursive;
    margin-top: 10px;
    color: rgb(231, 35, 94);
}

.book-info .info {
    margin-left: 100px;
    margin-top: 40px;
    line-height: 40px;
    font-size: 18px;
    color: rgb(49, 48, 48);
}

.book-info .download {
    margin-left: 100px;
    margin-top: 40px;


}

.download button {
    font-size: 18px;
    padding: 15px 40px 15px 40px;
    border-radius: 30px;
    border: 3px solid rgb(231, 35, 94);
    background-color: rgb(231, 35, 94);
    color: white;
    transition: .3s;
    cursor: pointer;
}

.download button:hover {
    background-color: transparent;
    color: rgb(231, 35, 94);
}

.book-photo {
    width: 50%;
}

.book-photo img {
    width: 70%;
    margin-left: 40px;
    border-radius: 15px;
}

@media only screen and (max-width: 1000px) {

    .book-main {
        display: flex;
        flex-direction: column-reverse;
        width: 100%;
        padding: 0px;

    }

    .book-info {
        width: 100%;
        padding: 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
    }

    .book-photo {
        display: flex;
        justify-content: center;
        width: 100%;
        padding-top: 40px;
    }

    .book-photo img {
        width: 70%;
        align-self: center;
    }

    .book-info .download {
        margin-left: -100px;
        margin-top: 0px;
        display: flex;
        align-items: center;

    }

    .download button {
        margin: 40px;
    }

    .book-info h2 {
        margin-left: 0px;
        font-size: 27px;
        width: 500px;
        font-weight: 200;
        color: rgb(79, 78, 78);
        line-height: 3rem;
    }

    .book-info .title {
        margin-left: 0px;
        font-size: 25px;
        width: 500px;
        font-family: 'Caveat', cursive;
        margin-top: 10px;
        color: rgb(231, 35, 94);
    }

    .book-info .info {
        width: 500px;
        margin-left: 0px;
        margin-top: 40px;
        line-height: 35px;
        font-size: 15px;
        color: rgb(49, 48, 48);
    }

    .download {
        flex-direction: column;
        align-items: center;
        width: fit-content;
    }
}

@media only screen and (max-width: 600px) {
    .book-main {
        display: flex;
        flex-direction: column-reverse;
        width: 100%;
        padding: 0px;


    }

    .book-info {
        width: 100%;
        padding: 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
    }

    .book-photo {
        display: flex;
        justify-content: center;
        width: 100%;
        padding-top: 40px;
    }

    .book-photo img {
        width: 80%;
        align-self: center;
    }

    .book-info .download {
        margin-left: -100px;
        margin-top: 0px;
        display: flex;
        align-items: center;

    }

    .download button {
        margin: 40px;
    }

    .book-info h2 {
        margin-left: 0px;
        font-size: 27px;
        width: 300px;
        font-weight: 200;
        color: rgb(79, 78, 78);
        line-height: 3rem;
    }

    .book-info .title {
        margin-left: 0px;
        font-size: 25px;
        width: 300px;
        font-family: 'Caveat', cursive;
        margin-top: 10px;
        color: rgb(231, 35, 94);
    }

    .book-info .info {
        width: 300px;
        margin-left: 0px;
        margin-top: 40px;
        line-height: 35px;
        font-size: 15px;
        color: rgb(49, 48, 48);
    }

    .download {
        flex-direction: column;
        align-items: center;
        width: fit-content;
    }
}</style>