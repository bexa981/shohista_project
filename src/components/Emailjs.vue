<script >
import emailjs from '@emailjs/browser';
 

export default {
    data(){
   return{
    name: '',
    phone:'',
    
   }
    },
   
    methods: {
        sendEmail(event) {
            event.preventDefault();
            emailjs.sendForm('service_abqzihs', 'template_263nu0d', this.$refs.form, '5GcDMwXMSQshjU1YE')
                .then((result) => {
                    success(result);
                }, (error) => {
                    error(error.text) 
                });
        },
        success() {
      // Use sweetalert2
      this.$swal.fire({
  icon: 'success',
  title: 'Jo`natildi',
  text: 'Xabaringiz jo`natildi',
  
})
    },
    error() {
      // Use sweetalert2
      this.$swal.fire({
  icon: 'error',
  title: 'Xato..',
  text: 'Maydoni bo`sh qoldirmang!',
  
})
    },
    handleSuccess(){
        if(this.name && this.phone){
            
            this.success();
            this.name=''
            this.phone='' 
            
        }
        else{
            this.error()
        }
    }
    

}
}


</script>

<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" validate>
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Shohista Djurabayeva <span class="kurs">kursiga
                            yoziling!</span></h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="form" ref="form" @submit.prevent="sendEmail">
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Ismingiz:</label>
                            <input name="name" v-model="name" type="text" class="form-control" id="recipient-name" required>
                        </div>
                        <div class="mb-3">
                            <label for="phone-number" class="col-form-label">Telefon raqamingiz:</label>
                            <input name="phone" v-model="phone" type="text" class="form-control" id="phone-number" placeholder="+998"
                                required>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn close" data-bs-dismiss="modal">Yopish</button>
                            <button @click="handleSuccess" data-bs-toggle="modal"  data-bs-target="#exampleModal" type="submit"
                                class="btn send">Ariza Qoldirish</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
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
</style>