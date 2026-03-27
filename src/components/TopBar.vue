<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">

    <router-link class="navbar-brand" to="/"><img class="chiikawa" src="../../public/character+chii.webp" alt=""> My Note</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <form class="d-flex ms-auto" role="search" @submit.prevent="searchNotes">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="keyword"/>
        <button class="btn btn-outline-success pink" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
    </form>
    </div>
</div>
</nav>
</template>

<script setup>
import { ref } from 'vue'
import { useNoteStore } from '../stores/mynote_store';
import { useRouter } from 'vue-router';
const NoteStore = useNoteStore()
const router = useRouter()
const keyword = ref("")
async function searchNotes(){
    const results = await NoteStore.searchNotes(keyword.value);
    if(results.length > 0){
        router.push({ name:'search'});
    }
}
</script>

<style scoped>
.chiikawa{
    width: 50px;
}
.pink:hover{
    background-color: #f8b0e9;
}
</style>