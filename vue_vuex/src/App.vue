<template>
    <the-navbar></the-navbar>
    <div class="container with-nav">
        <div class="card">
            <h1>{{upperTitle}}</h1>
            <h2>Счетчик {{ counter }} ({{ doubleCounter }})</h2>
            <button class="btn primary" @click="add">Добавить</button>
            <button class="btn danger" @click="incrementAsync({value: 10, delay: 1000})">Добавить 10</button>
        </div>
    </div>
</template>

<script>
import TheNavbar from './TheNavbar'
import {mapGetters, mapMutations, mapActions} from 'vuex'

export default {
    components: {TheNavbar},
    // computed: mapGetters(['counter', 'doubleCounter', 'upperTitle']),
    computed: {
        ...mapGetters(['upperTitle']),
        ...mapGetters('count',['counter', 'doubleCounter'])
    },
    // data() {.0
    //   return {
    //       counter: 0
    //   }
    // },
    methods: {
        ...mapMutations({
            add: 'count/increment'
        }),
        ...mapActions('count', ['incrementAsync'])
        // incrementAsync() {
        //     this.$store.dispatch('incrementAsync', {
        //         value: 10,
        //         delay: 2000
        //     })
        // }
    },
}
</script>
