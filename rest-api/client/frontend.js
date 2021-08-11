import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js'


Vue.component('loader', {
    template: `
        <div style="display: flex; justify-content: center; align-items: center">
        <div class="spinner-border" role="status">
        <span class="sr-only"></span>
</div>
</div>
    `
})

new Vue({
    el: '#app',
    data() {
        return {
            loading: false,
            form: {
                name: '',
                value: ''
            },
            contacts: []
        }
    },
    computed: {
        canCreate() {
            return this.form.value && this.form.name
        }
    },
    methods: {
        async createContact() {
            const {...contact} = this.form

            const newContact = await request('/api/contacts', 'POST', contact)
            this.contacts.push(newContact)
            this.form.name = this.form.value = ''
        },
        markContact(id) {
            const contact = this.contacts.find(item => item.id === id)

            contact.marked = true
        },
        removeContact(id) {
            this.contacts = this.contacts.filter(item => item.id !== id)
        }
    },
    async mounted() {
        this.loading = true
        this.contacts = await request('/api/contacts')
        this.loading = false
    }
})

async function request(url, method = "GET", data = null) {
    try {
        const headers = {}
        let body
        if (data) {
            headers['Content-Type'] = 'application/json'
            body = JSON.stringify(data)
        }
        const response = await fetch(url, {
            method,
            headers,
            body
        })
        return await response.json()
    } catch (e) {
        console.log('Error', e.message)
    }
}
