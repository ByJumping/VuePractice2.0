const App = {
    data() {
        return {
            placeholderString: "Введите название заметки",
            title: "Список заметок",
            inputValue: "",
            notes: ['Заметка 1', "Заметка 2"]
        }
    },
    methods: {
        inputChangeHandler(e) {
            this.inputValue = e.target.value
        },
        addNewNote() {
            this.notes.push(this.inputValue)
            this.inputValue = ''
        },
        removeNote(idx) {
            this.notes.splice(idx, 1)
        }
    }
}


Vue.createApp(App).mount('#app');

