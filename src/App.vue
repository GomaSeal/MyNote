<script setup>
import NoteList from './components/NoteList.vue';
import TopBar from './components/TopBar.vue';
import AddNote from './components/AddNote.vue';
import EditNote from './components/EditNote.vue';

</script>

<template>
<div class="container">
  <div class="row">
    <div class="col-12">
      <TopBar />
    </div>
    <div class="col-12 col-md-3">
      <NoteList />
    </div>
    <div class="col-12 col-md-9">
    <router-view></router-view>
  </div>
    <footer class="col-12">
      <p>copyright</p>
    </footer>
  </div>
</div>
</template>
<style>
footer{
  height: 50px;
  background-color: black;
  color: white;
  line-height: 50px;
}
</style>