<script setup>
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
    AOS.init();
})
</script>
<template>
    <div class="advertisment">
        <h2 data-aos="fade-up" data-aos-duration="1500">Qayerdan boshlashni bilmayapsizmi?</h2>
        <p data-aos="fade-up" data-aos-duration="1500"> Start?
            I’ve put together a two week quickstart guide to set you off on your journey, full of recipes, inspiration and
            advice. <span>And it’s 100% FREE!</span> </p>
            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" data-aos="fade-up" data-aos-duration="1500">Joyni band qilish</button>

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
</template>
<style scoped>
 .advertisment{
    background-color: #f0d6d6;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    height: 30vh;
    align-items: center;
    flex-wrap: wrap;
 }
 .advertisment h2{
    font-size: 40px;
    font-weight: 300;
    color: rgb(73, 72, 72);
    width: 400px;
 }
 .advertisment p{
    width: 555px;
    line-height: 1.8em;
    font-size: 18px;
    color: rgb(117, 117, 117);
 }
 .advertisment p span{
    font-family: 'Caveat', cursive;
    font-size: 22px;
    font-weight: 600;
    color: rgb(231, 35, 94);
 }
 .advertisment button{
    padding: 15px 30px 15px 30px;
    border-radius: 30px;
    border: 3px solid rgb(231, 35, 94);
    color: white;
    background-color: rgb(231, 35, 94);
    cursor: pointer;
    font-size: 17px;
    transition: .3s;
 }
 .advertisment button:hover{
    color: rgb(231, 35, 94);
    background-color: #fff;
 }
 @media only screen and (max-width: 600px){

    .advertisment p{
        width: 400px;
    }
    .advertisment{
        height: auto;
        flex-direction: column;
    }
    .advertisment button{
        margin-top: 30px;
        margin-bottom: 30px;
        padding: 15px 45px 15px 45px;
        
    }
    
    
 }
 @media only screen and (max-width: 350px){
    .advertisment p{
        width: 300px;
    }
    .advertisment h2{
        width: 300px;
    }
 }

</style>