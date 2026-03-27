<script setup>
import { useNoteStore } from '../stores/mynote_store'
import { storeToRefs } from 'pinia'
const noteStore = useNoteStore()

const { notes } = storeToRefs(noteStore)
</script>
<template>
<main id="result" class="container mt-4">
    <div class="row d-flex justify-content-start">
        <div class="col-4 mr-2 mb-4" v-for="(item, i) in notes">            
            <div class="card">
                <i v-if="item.isPinned" class="fa-solid fa-thumbtack me-3 mb-3 rotate"></i>
                <i v-else class="fa-solid fa-thumbtack me-3 mb-3"></i>
                <div class="card-body">
                    <h5 class="card-title">{{item.title}}</h5>
                    <hr>
                    <p class="card-text">{{item.content}}</p>
                </div>
            </div>
        </div>
        <!-- <div class="col-4 mr-2 mb-4">            
            <div class="card">
                <i class="fa-solid fa-thumbtack me-3 mb-3"></i>
                <div class="card-body">
                    <h5 class="card-title">筆記2</h5>
                    <hr>
                    <p class="card-text">12/1-12/12出國旅遊</p>
                </div>
            </div>
        </div> -->
    </div>
</main>
</template>

<style scoped>
.card i{
  position: relative;
  top: 10px;
  left: 10px;
}
.rotate{
  transform: rotate(45deg);
  color: red;
}
</style>