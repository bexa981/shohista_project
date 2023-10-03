<script setup>


</script>

<template>
    <div class="modal fade">
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
                            <input type="text" class="form-control" id="recipient-name" :value="inputFieldReset" required>
                        </div>
                        <div class="mb-3">
                            <label for="phone-number" class="col-form-label">Telefon raqamingiz:</label>
                            <input type="text" class="form-control" id="phone-number" placeholder="+998"
                                :value="inputFieldReset" required>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn close" data-bs-dismiss="modal">Yopish</button>
                            <button type="button" class="btn send">Ariza Qoldirish</button>
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