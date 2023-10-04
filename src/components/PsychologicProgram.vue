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
    
    animation: 'fade-left'
},
{
    id: 3,
    title: 'Adaptatsiya jarayoni- atrof muhit ôzgarishi ',
    
    animation: 'fade-right'
},
{
    id: 4,
    title: 'Gormoniya va energiyaga toyinish',
   
},

])
</script>

<template>
    <div class="psychologic">
        <div class="profile-foto">
            <img src="/images/aboutme.png" alt="">
        </div>
        <div class="programs">
            <div>

     
            <h2 data-aos="zoom-out-down" data-aos-duration="1500">Kvant taxlili seansi programmasi </h2>
            <p data-aos="zoom-out-down" data-aos-duration="1500" class="fresh">Qanday bosqichlarni birgalikda bosib otamiz</p>
            <ul>
                <li  v-for="item in items" :key="item.id" :data-aos="item.animation" data-aos-duration="1500">
                    <h4>{{item.title}}.</h4>
                    <p>{{item.info}}</p>
                </li>
            </ul>
         <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Kursga yozilish</button>
        <Emailjs/>
        </div>
    </div>
    </div>
</template>

<style scoped>
.psychologic{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.profile-foto{
    width: 50%;
    background-color: #e6e5ea;
}
.profile-foto img{
    width: 100%;
}
.programs{
    width: 50%;
    background-color: #f9f9f9;
    padding-top: 100px;
   display: flex;
   justify-content: center;
}
.programs div{
    width: 550px;
}
.programs h2{
    font-size: 40px;
    font-weight: 200;
    margin-bottom: 10px;
}
.programs .fresh{
    font-family: 'Caveat', cursive;
    font-size: 38px;
    margin-bottom: 50px;
    color: rgb(231, 35, 94);
}
.programs button{
    padding: 20px 40px 20px 40px;
    border-radius: 30px;
    background-color:  rgb(231, 35, 94);
    color: white;
    font-weight: 500;
    font-size: 18px;
    margin-top: 40px;
    border: 3px solid rgb(231, 35, 94);
    transition: .3s;
    cursor: pointer;
    margin-bottom: 20px;
}
.programs button:hover{
  color:rgb(231, 35, 94) ;
  background-color: transparent;
}
ul{
    position: relative;
    padding-left: 4.65em;
    list-style-type: none;
}
ul::before{
    border: 1px dashed #ddd;
    content: "";
    position: absolute;
    left: 9px;
    top: 0;
    height: 100%;
}
li{
    position: relative;
    margin-top: 40px;
    font-weight: 300;
    
}
li h4{
    font-size: 25px;
    font-weight: 300;
    line-height: 1.2em;
    color: rgb(90, 90, 90);
}
li p{
    margin-top: 20px;
}
li::before{
 content: '+';
 color: #fff;
 font-size:1.8em;
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
@media only screen and (max-width: 600px){
    .psychologic{
        display: flex;
        flex-direction: column;
    }
    .profile-foto{
        width: 100%;
    }
    .programs{
        width: 100%;
        padding-top: 30px;
        
    }
    ul{
    margin-left: 20px;
    }
    .programs button{
         
        margin-left: 10px;
        margin-bottom: 10px;
    }
    .programs h2{
        text-align: center;
    }
    .programs .fresh{
        text-align: center;
    }
    li{
        padding: 5px;
    }

}
</style>