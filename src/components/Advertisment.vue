<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import Emailjs from './Emailjs.vue';
onMounted(() => {
    AOS.init();
})
</script>
<template>
    <div class="advertisment">
        <h2 data-aos="fade-up" data-aos-duration="1500">Qayerdan boshlashni bilmayapsizmi?</h2>
        <p data-aos="fade-up" data-aos-duration="1500"> Start?
            Hoziroq bizga qongiroq qiling Va aynan sizning holatingizni yaxshilashda Nima yordam berishini  <span>BEPUL bilib oling !</span> </p>
            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" data-aos="fade-up" data-aos-duration="1500">Joyni band qilish</button>

            <Emailjs/>
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
    .advertisment h2{
        font-size: 25px;
        padding-top: 20px;
        text-align: center;
    }
    .advertisment p{
        width: 100%;
        padding: 10px;
    }
    .advertisment{
        height: auto;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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