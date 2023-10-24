<script setup>
import { ref } from "vue";
import Emailjs from './Emailjs.vue';
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
    AOS.init();
})


const items = ref([{
    id: 1,
    title: 'Diagnostik qabul-sizning holatingiz chuqur taxlil qilinadi Va aynan qaysi nuqtalarda ishlanishi kerakligi aniqlanad',

    animation: 'fade-right'

},
{
    id: 2,
    title: 'Kvant taxlili seansi tashkil qilinadi-muammo yechiladi Va bu holat takrorlanmasligi uchun yangi neyron hosil qilinadi ',

    animation: 'fade-right'
},
{
    id: 3,
    title: 'Adaptatsiya jarayoni- atrof muhit ôzgarishi ',

    animation: 'fade-right'
},
{
    id: 4,
    title: 'Gormoniya va energiyaga toyinish',
    animation: 'fade-right'
},

])
</script>

<template>
    <div class="psychologic">
        <div class="profile-foto">
            <img src="/images/aboutme.png" alt="">
        </div>
        <div class="programs">
            <div class="prog-main">


                <h2 data-aos="fade-down" data-aos-duration="1500">Kvant taxlili seansi programmasi </h2>
                <p data-aos="fade-down" data-aos-duration="1500" class="fresh">Qanday bosqichlarni birgalikda bosib
                    otamiz</p>
                <ul>
                    <li v-for="item in items" :key="item.id" :data-aos="item.animation" data-aos-duration="1500">
                        <h4>{{ item.title }}.</h4>
                        <p>{{ item.info }}</p>
                    </li>
                </ul>
                <div class="uzum-market">
                    <button data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
                        data-bs-whatever="@mdo">Kursga yozilish</button>
                    <a target="_blank" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000"
                        class="uzum" href="https://www.apelsin.uz/open-service?serviceId=498611485">
                        <div></div>
                    </a>
                </div>

                <Emailjs />
            </div>
        </div>
    </div>
</template>

<style scoped>
.psychologic {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.uzum-market{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.uzum {
    margin-top: 20px;


}
.prog-main{
    width: 550px;
}

.uzum div {
    border-radius: 30px;
    width: 200px!important;
    box-shadow: 5px 5px 10px gray;
    height: 73px;
    background-image: url('https://marketing.uz/brend-goda-2022/uz/uploads/works/covers/95aaab99575626de5ca661c102320241.jpg');
    background-size: cover;
    background-position: center;
    transition: .3s;


}
.uzum div:hover{
    box-shadow: 5px 5px 10px rgb(46, 46, 174);
}
.profile-foto {
    width: 50%;
    background-color: #e6e5ea;
}

.profile-foto img {
    width: 100%;
}

.programs {
    width: 50%;
    background-color: #f9f9f9;
    padding-top: 100px;
    display: flex;
    justify-content: center;
}



.programs h2 {
    font-size: 40px;
    font-weight: 200;
    margin-bottom: 10px;
}

.programs .fresh {
    font-family: 'Caveat', cursive;
    font-size: 38px;
    margin-bottom: 50px;
    color: rgb(231, 35, 94);
}

.programs button {
    padding: 20px 40px 20px 40px;
    border-radius: 30px;
    background-color: rgb(231, 35, 94);
    color: white;
    font-weight: 500;
    font-size: 18px;
    margin-top: 40px;
    border: 3px solid rgb(231, 35, 94);
    transition: .3s;
    cursor: pointer;
    margin-bottom: 20px;
}

.programs button:hover {
    color: rgb(231, 35, 94);
    background-color: transparent;
}

ul {
    position: relative;
    padding-left: 4.65em;
    list-style-type: none;
}

ul::before {
    border: 1px dashed #ddd;
    content: "";
    position: absolute;
    left: 9px;
    top: 0;
    height: 100%;
}

li {
    position: relative;
    margin-top: 40px;
    font-weight: 300;

}

li h4 {
    font-size: 25px;
    font-weight: 300;
    line-height: 1.2em;
    color: rgb(90, 90, 90);
}

li p {
    margin-top: 20px;
}

li::before {
    content: '+';
    color: #fff;
    font-size: 1.8em;
    font-weight: 100;
    left: -2.95em;
    top: -0.1em;
    width: 1.4em;
    height: 1.4em;
    background: rgb(231, 35, 94);
    border-radius: 50%;
    text-align: center;
    position: absolute;
    display: inline-block;

}

@media only screen and (max-width: 600px) {
     
    .programs .fresh{
        font-size: 25px;
    }
    .prog-main{
    width: fit-content;
}
    ul{
        padding-left: 2em;
    }
    li::before {
        left: -1.45em;
    }
    ul::before{
        display: none;
    }
    .uzum-market{
        flex-direction: column;
        margin-bottom: 20px;
    }
    .psychologic {
        display: flex;
        flex-direction: column;
    }

    .profile-foto {
        width: 100%;
    }

    .programs {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding-top: 30px;

    }
    

    ul {
        width: 100%!important;
       
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .programs button {

        margin-left: 10px;
        margin-bottom: 10px;
    }

    .programs h2 {
        text-align: center;
        font-size: 28px;
    }

    .programs .fresh {
        text-align: center;
    }

    li {
        padding: 5px;
        width: fit-content;
        margin-top: 0;
    }
    li h4{
        font-size: 20px!important;
        width: 300px;
        
    }

}</style>