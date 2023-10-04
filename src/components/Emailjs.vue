<script>
import Swal from 'sweetalert2/dist/sweetalert2.js'
import emailjs from 'emailjs-com';
import {ref} from 'vue';

export default {
 setup() {
    const form = ref(null);
    const inputFieldReset = ref(null);

    const sendMail = () => {
        emailjs.sendForm('service_abqzihs', 'template_263nu0d', form.value, '5GcDMwXMSQshjU1YE')
        .then(() => {
            Swal.fire({
        icon: 'success',
        title: 'Jo`natildi',
        text: 'Xabaringiz jo`natildi',

    })
          inputFieldReset.value = " ";
        }, (error) => {
            Swal.fire({
        icon: 'error',
        title: 'Xato..',
        text: 'Xabar jo`natishda xatolik bor! '+error,

    });
        }); 
      }
      return{
    form,
    inputFieldReset,
    sendMail
  }
    }


 }



// let name = ref('')
// let phone = ref('')
// const form = ref(null)

// function sendEmail(event) {
//     event.preventDefault();
//     emailjs.sendForm('service_abqzihs', 'template_263nu0d', form.value, '5GcDMwXMSQshjU1YE')
//         .then((result) => {
//             console.log(result+`good`);;
//         }, (error) => {
//             console.log(error+`error`);
//         });
// }
// function success() {
//     // Use sweetalert2
//     Swal.fire({
//         icon: 'success',
//         title: 'Jo`natildi',
//         text: 'Xabaringiz jo`natildi',

//     })
// }

// function error() {
//     // Use sweetalert2
//     Swal.fire({
//         icon: 'error',
//         title: 'Xato..',
//         text: 'Maydoni bo`sh qoldirmang!',

//     })
// }
// function handleSuccess() {
//     if (name.value && phone.value ) {
        
//         success();
//         name.value = ''
//         phone.value = ''
    
//     }
//     else {
//         error()
//     }
// }


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
                    <form class="form" ref="form" @submit.prevent="sendMail">
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Ismingiz:</label>
                            <input name="name"  type="text" class="form-control" id="recipient-name" :value="inputFieldReset" required>
                        </div>
                        <div class="mb-3">
                            <label for="phone-number" class="col-form-label">Telefon raqamingiz:</label>
                            <input name="phone"  type="text" class="form-control" id="phone-number" :value="inputFieldReset" placeholder="+998"
                                required>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn close" data-bs-dismiss="modal">Yopish</button>
                            <button name="send" data-bs-toggle="modal"   data-bs-target="#exampleModal" type="submit"
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