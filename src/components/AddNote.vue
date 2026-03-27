<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
import { useNoteStore } from '../stores/mynote_store';
import { ref } from 'vue'
const title = ref('')
const content = ref('')
const noteStore = useNoteStore()
const showAlert = ref(false)
const invalidShow1 = ref(false)
const invalidShow2 = ref(false)

function clearPlaceholder(){
  document.querySelector('#title').placeholder = ''
  invalidShow1.value = false
}
function addPlaceholder(){
  document.querySelector('#title').placeholder = '請輸入標題'
  if(title.value === '') invalidShow1.value = true
}
function checkContent(){
  if(content.value === '') invalidShow2.value = true
  else invalidShow2.value = false
}
function createNote(){
  if(title.value === '') return
  const res = noteStore.AddNote({
    title1: title.value,
    content1: content.value
  })
  if(res){
    // title.value = ''
    // content.value = ''
    showAlert.value = true
    setTimeout(function(){
    showAlert.value = false
    router.push('/')
  }, 2000)
  }
}
</script>
<template>
<div class="container p-5">
  <div v-show="showAlert" class="alert alert-success text-left" role="alert">
    新增成功!
  </div>
  <h2 class="mb-5">新增筆記</h2>
  <form @submit.prevent="createNote">
    <div class="mb-3">
        <input type="text" class="form-control" id="title" placeholder="請輸入標題..." @focus="clearPlaceholder" @blur="addPlaceholder" v-model="title">
        <p v-show="invalidShow1" class="invalid">請輸入標題</p>
    </div>
    <div class="mb-3">
        <textarea class="form-control" id="note" rows="10" v-model="content" @blur="checkContent" @focus="invalidShow2=false"></textarea>
        <p v-show="invalidShow2" class="invalid">請輸入內容</p>
    </div>
    <button class="btn btn-outline-success">新增 <i class="fa-solid fa-floppy-disk"></i></button>
  </form>
</div>
</template>

<style scoped>
  
</style>