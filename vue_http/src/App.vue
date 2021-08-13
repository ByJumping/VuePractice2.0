<template>
    <div class="container">
        <app-alert :alert="alert" @close="alert = null"></app-alert>

        <form class="card" @submit.prevent="createPerson">
            <h2>Работа с базой данных</h2>

            <div class="form-control">
                <label for="name">Введите имя</label>
                <input type="text" id="name" v-model.trim="name">
            </div>

            <button class="btn primary" :disabled="name.length === 0">Создать человека</button>
        </form>

        <app-loader v-if="loading"></app-loader>

        <app-people-list
                v-else
                @load="loadPeople"
                @delete="deletePerson"
                :people="people"></app-people-list>
    </div>
</template>

<script>

import AppPeopleList from "./AppPeopleList";
import axios from 'axios'
import AppAlert from "./AppAlert";
import AppLoader from "./AppLoader";

export default {
    data() {
        return {
            name: '',
            people: [],
            alert: null,
            loading: false
        }
    },
    mounted() {
        this.loadPeople()
    },
    methods: {
        async createPerson() {
            const response = await fetch('https://vue-with-http-d98a9-default-rtdb.europe-west1.firebasedatabase.app/people.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName: this.name
                })
            })
            const firebaseData = await response.json()
            this.people.push({
                firstName: this.name,
                id: firebaseData.name
            })
            this.name = ''
        },

        loadPeople() {
            this.loading = true
            setTimeout(async ()=> {
                try {
                    const {data} = await axios.get('https://vue-with-http-d98a9-default-rtdb.europe-west1.firebasedatabase.app/people.json')
                    if (!data) {
                        throw new Error('Список людей пуст')
                    }
                    this.people = Object.keys(data).map(key => {
                        return {
                            id: key,
                            ...data[key]
                        }
                    })
                    this.loading = false
                } catch (e) {
                    this.loading = false
                    this.alert = {
                        type: 'danger',
                        title: 'Ошибка',
                        text: e.message
                    }
                }
            }, 1000)
        },

        async deletePerson(id) {
            try {
                const name = this.people.find(p=> p.id === id).firstName
                await axios.delete(`https://vue-with-http-d98a9-default-rtdb.europe-west1.firebasedatabase.app/people/${id}.json`)
                this.people = this.people.filter(item => item.id !== id)
                this.alert = {
                    type: 'primary',
                    title: 'Успешно!',
                    text: `Пользователь с именем "${name}" был удален!`
                }
            } catch(e) {

            }
        }
    },
    components: {
        AppPeopleList,
        AppAlert,
        AppLoader
    }
}
</script>

<style>

</style>
