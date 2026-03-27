import { defineStore } from 'pinia'

export const useNoteStore = defineStore ("note",{
    state: () =>({
        // 定義所有變數資料
        notes:[
            // {id:1, name:"APPLE", quantity:1, price:30, stocks:true},
            {id:1, title:'庫存盤點1', content:'確認麵粉', isPinned:true},
            {id:2, title:'拍照', content:'修圖發文', isPinned:true},
            {id:3, title:'取貨', content:'7-11', isPinned:false},
            {id:4, title:'庫存盤點4', content:'確認麵粉', isPinned:true},
            {id:5, title:'庫存盤點5', content:'確認麵粉', isPinned:true},
        ],
        

    }),
    getters: {
        // 預設取得資料的函式集
        showPinned(){
            return this.notes.filter(note => note.isPinned)
        },
        showUnpinned(){
            return this.notes.filter(note => !note.isPinned)
        }
    },
    actions: {
        // 設定要做的功能函式，例如加入購物車or移除購物車
        AddNote(item){
            console.log(item)
            const last_id = this.notes.length +1
            this.notes.push({
                id: last_id,
                title: item.title1,
                content: item.content1,
                isPinned: false
            })
            return true
        },
        EditNote(id, new_title, new_content){
            const note = this.note.find(note => note.id === id)
            if(!note) return false
            note.title = new_title
            note.content = new_content
            return true
        },
        deleteNote(id){

        },
        searchNotes(keyword){
            this.searchResults = this.notes.filter(note => note.title.includes(keyword) || note.content.includes(keyword))
            console.log(this.searchResults)
        }
    }
})