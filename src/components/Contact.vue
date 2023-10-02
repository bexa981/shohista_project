<script setup>
import Youtube from './icons/Youtube.vue';
import Instagram from './icons/Instagram.vue';
import Telegram from './icons/Telegram.vue';
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
    AOS.init();
})
</script>
<template>
    <div class="contact-main">
        <div class="contacts">


            <div class="links-contact">
                <div data-aos="flip-right" data-aos-duration="1500" class="links">
                    <a href="#" title="yotube">
                        <Youtube class="logo logo1" />
                    </a>
                    <a href="#" title="instagram">
                        <Instagram class="logo logo2" />
                    </a>
                    <a href="#" title="telegram">
                        <Telegram class="logo logo3" />
                    </a>
                </div>
                <div data-aos="flip-right" data-aos-duration="1500" class="phone">
                    <img src="/images/speech.webp" alt="">
                    <h2>Aloqa uchun</h2>
                    <p class="info">Agar qandaydir savolaringiz bo'lsa <br> men buni eshitishdan hursand bo'lardim</p>
                    <a href="tel:123-456-7890">
                        <p class="phone-number">+1 78 123 5461</p>
                    </a>
                </div>
            </div>
            <div data-aos="flip-right" data-aos-duration="1500" class="recommendations">
                <h2>Hayotingizni bir kunda o'zgartiring!</h2>
                <p>Bepul maslahatlar</p>
                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
                    data-bs-whatever="@mdo">Bog'lanish</button>

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Shohista Djurabayeva <span
                                        class="kurs">kursiga yoziling!</span></h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="mb-3">
                                        <label for="recipient-name" class="col-form-label">Ismingiz:</label>
                                        <input type="text" class="form-control" id="recipient-name" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="phone-number" class="col-form-label">Telefon raqamingiz:</label>
                                        <input type="text" class="form-control" id="phone-number" placeholder="+998"
                                            required>
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
        </div>
        <div class="message">
            <h2>Bepul maslahat so'rang</h2>
            <p>Menga nimaga erishmoqchi ekanligingiz haqida bir necha so'z bilan xabar yuboring va biz sog'ligingiz tarixi
                va maqsadlaringizni muhokama qilish uchun BEPUL boshlang'ich rejalar tuzishimiz mumkin
            </p>
            <div class="forms">
                <form>
                    <div class="inputs" data-aos="fade-up" data-aos-duration="1500">
                        <input class="name" type="text" placeholder="Ism">
                        <input class="name" type="number" placeholder="+998">
                    </div>
                    <textarea data-aos="fade-up" data-aos-duration="1500" name="" id="" cols="40" rows="6"
                        placeholder="Xabar..."></textarea>
                    <button data-aos="fade-up" data-aos-duration="1500">Xabar jo'natish</button>
                </form>
            </div>
        </div>
    </div>
</template>
<style scoped>
.contact-main {
    display: flex;

    flex-wrap: wrap;
    width: 100%;

}

.contacts {
    width: 50%;
    display: flex;
    margin: 0;
    padding: 0;
}

.logo {
    background-color: #fff;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    fill: black;
    transition: .3s;
}

.links-contact {
    width: 55%;
    display: flex;
    flex-direction: column;

}

.links {
    width: 100%;
    height: 400px;
    background-color: aquamarine;
    background-image: url('/images/breadcrumbs_bg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: space-evenly;
}

.links a {
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 50%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    transition: .3s;
}


.links a:hover .logo1 {
    fill: red;
}

.links a:hover .logo2 {
    fill: rgb(226, 43, 150);
}

.links a:hover .logo3 {
    fill: rgb(63, 170, 232);
}

.phone {
    width: 100%;
    height: 400px;
    background-color: gray;
    background-image: url('/images/city.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

}

.phone img {
    margin-top: 50px;
    width: 70px;
}

.phone h2 {
    font-weight: 300;
    font-size: 37px;
    margin-top: 40px;
}

.phone .info {
    text-align: center;
    padding: 20px;
}

.phone .phone-number {
    font-size: 27px;
}

.phone a {
    text-decoration: none;
    color: white;
}

.recommendations {
    width: 45%;
    height: 800px;
    background-color: blanchedalmond;
    background-image: url('/images/bg-dark.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: end;

}

.recommendations h2 {


    font-size: 40px;
    color: white;
    font-weight: 400;
}

.recommendations p {

    font-size: 35px;
    font-family: 'Caveat', cursive;
    color: rgb(29, 222, 222);
}

.recommendations button {
    padding: 20px 40px 20px 40px;
    color: rgb(231, 35, 94);
    font-size: 17px;
    font-weight: 600;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    margin-top: 50px;
    transition: .3s;
    margin-bottom: 40px;
}

.recommendations button:hover {
    color: rgb(29, 222, 222);
}

.message {
    width: 50%;
    height: 800px;
    background-color: #f9f9f9;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url('https://images7.alphacoders.com/133/1330620.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.message h2 {
    margin-top: 50px;
    font-size: 40px;
    font-weight: 300;
    color: #fff;
}

.message p {
    margin-top: 20px;
    font-weight: 300;
    color: #fff;
    font-size: 18px;
    width: 600px;
}

.forms {
    margin-top: 50px;
}

.inputs {
    display: flex;
    gap: 10px;
}

.name {
    padding: 10px;
    font-size: 20px;
    border: none;
    border-radius: 10px;
    outline: none;
}

textarea {
    margin-top: 20px;
    width: 550px;
    font-size: 20px;
    outline: none;
    border: none;
    border-radius: 10px;
    padding: 5px;
}

form button {
    padding: 15px 30px 15px 30px;
    border-radius: 30px;
    border: 3px solid white;
    color: red;
    background-color: #fff;
    cursor: pointer;
    font-size: 17px;
    margin-top: 40px;
    transition: .3s !important;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

form button:hover {
    color: rgb(231, 35, 94);
    background-color: #fff;
    border: 3px solid rgb(231, 35, 94);

}

@media only screen and (max-width: 1250px) {
    .links-contact {
        display: none;
    }

    .contact-main {
        flex-direction: column;
        width: 100%;
    }

    .contacts {
        width: 100%;
    }

    .message {
        width: 100%;
    }

    .message p {
        width: auto;
    }

    .recommendations {
        width: 100%;
    }

    .inputs {
        display: flex;
        flex-direction: column;
        width: 100%;

    }

    form {
        width: 100%;
    }

    .inputs input {
        width: auto;
    }

    .message input {
        font-size: 18px;
    }

    textarea {
        width: auto;
    }

    .message {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

}

@media only screen and (max-width: 850px) {
    .links-contact {
        display: none;
    }

    .contact-main {
        flex-direction: column;
        width: 100%;
    }

    .contacts {
        width: 100%;
    }

    .message {
        width: 100%;
    }

    .message p {
        width: auto;
    }

    .recommendations {
        width: 100%;
    }

    .inputs {
        display: flex;
        flex-direction: column;
        width: 100%;

    }

    form {
        width: 100%;
    }

    .inputs input {
        width: auto;
    }

    .message input {
        font-size: 18px;
    }

    textarea {
        width: auto;
    }

    .message {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
}

@media only screen and (max-width: 443px) {
    .message .inputs {
        width: 80%;
    }

    .message textarea {
        width: 80%;
    }
}</style>