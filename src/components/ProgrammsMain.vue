<script setup>
import { ref } from "vue";
import image1 from '/images/kvant.jpg'
import image2 from '/images/neyroset.jpg'
import Emailjs from './Emailjs.vue';
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
    AOS.init();
})

const items = ref([{
    id: 1,
    photo: 'https://profayler.uz/wp-content/uploads/2021/03/unnamed-512x340.jpg',
    title: 'Psixologiya va kouchingdan chuqurroq anglagan holda',
    helpful: '. Gipnozlarsiz. NLP va manipulyatsiyalarsiz',
    info: 'Siz bilan birgalikda sizning hayotingizga tasiri bor bolgan kòrinmas neyronlarning òzaro bogliqligini anglaymiz. Shu bilan birgalikda qaytariluvchi jarayon va holatlarni genetik darajada òzgartiramiz.'
},
{
    id: 2,
    photo: image1,
    title: 'Fikrlashni òzgartir. Dunyo ozi òzgaradi',
    helpful: 'Neyronlar bizning shaxsiy hayotiy tajribamiz asosida shakllanadigan yo`llarga o`xshaydi',
    info: 'Neyron aloqalar ongimizda qanday qurilgan bo`lishidan qat`i nazar, biz ularni "haqiqat" sifatida qabul qilamiz. Inson esa dunyo aynan shunday ekaniga ishonib, o`z paradigma (andoza)sida yashaydi.Mening kvant taxlili seansim fikrlashning neyron darajasida, vaziyatga tashqi tomondan qarash va atrofingizdagi dunyoda yangi imkoniyatlarni ko`rish imkonini beradi'
},
{
    id: 3,
    photo: image2,
    title: ' Kvant taxlili metodi  ',
    helpful: 'Metod kvant fizikasi va psixalogiya qonuniyatlariga asoslangan.',
    info: 'Metod avtori psixoterapevt `Bert Xellinger` Ko`pchilik metodlar vaqtinchalik natija berib, mijozni og`riqli muammosini butunlay xal qilib bera olmaydi. Aynan Xellinger metodi ichida juda mashxur bo`lib, Germaniyada, Rossiyada shu metodni o`rgatuvchi va tadqiqot olib boruvchi ko`plab institutlar tashkil qilingan, Metod kvant fizikasi va psixalogiya qonuniyatlariga asoslangan.. '
}
])

</script>

<template>
    <div class="programs-main">
        <h2 data-aos="fade-up" class="title">Metodlarimiz haqida bilib oling</h2>
        <div class="cards">
            <div data-aos="fade-up" class="card" v-for="item in items" :key="item.id">
                
                <img :src="item.photo" alt="">
                <div>
                    <h2>{{ item.title }}</h2>
                <p class="helpful">{{ item.helpful }}</p>
                <p class="info">{{ item.info }}</p>
                <button  type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Ariza qoldirish</button>
                </div>
                <Emailjs/>
               
            </div>

        </div>
    </div>
</template>

<style scoped>
.programs-main{
    background-color: #e6e5ea;
    background-image: url('https://www.pixground.com/wp-content/uploads/2023/05/Windows-11-Abstract-Pink-Background-4K-Wallpaper.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding-top: 70px;
    padding-bottom: 70px;
}
.programs-main .title{
    text-align: center;
    color: white;
    font-weight: 300;
    font-size: 40px;
    padding-bottom: 30px;
}
.cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    
}

.card {
    width: 450px;
    background-color:#fff;
    border-radius: 10px;
    text-align: center;
    transition: .3s;
    height: fit-content;
}
.card:hover{
    box-shadow: 4px 4px 10px gray;
}
.card img{
    width: 100%;
    height: 40vh;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.card div{
    padding: 40px;
}
.card h2{
    font-size: 30px;
    font-weight: 400;
    color: rgb(74, 73, 73);
}
.card .helpful{
    font-family: 'Caveat', cursive;
    color: rgb(231, 35, 94);
    font-size: 30px;
    font-weight: 400;
    margin-bottom: 30px;
}
.card .info{
    text-align: justify;
    font-weight: 300;
    color: rgb(90, 90, 90);
    margin-bottom: 30px;
}
.card button{
    padding: 10px 30px 10px 30px;
    background-color: rgb(231, 35, 94);
    color: white;
    font-size: 17px;
    font-weight: 400;
    border-radius: 30px;
    border: 3px solid rgb(231, 35, 94);
    cursor: pointer;
    transition: .3s;
}
.card button:hover{
 background: transparent;
 color: rgb(231, 35, 94);

}
@media only screen and (max-width: 530px){
    .programs-main .title{
    text-align: center;
    color: white;
    font-weight: 300;
    padding: 10px;
    
    font-size: 25px;
    padding-bottom: 30px;
}
}
</style>