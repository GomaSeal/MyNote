import {createRouter, createWebHistory} from 'vue-router'
import NoteGrid from '../components/NoteGrid.vue'
import AddNote from '../components/AddNote.vue'
import EditNote from '../components/EditNote.vue'

const routes = [
    {path: '/', name:'home', component:NoteGrid, meta:{title:'My Note'}},
    {path: '/AddNote', name:'AddNote', component:AddNote, meta:{title:'Add Note | My Note'}},
    {path: '/EditNote/:id', name:'EditNote', component:EditNote, meta:{title:'Edit Note | My Note'}},
];

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router
