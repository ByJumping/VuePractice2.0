<template>
  <header class="navbar">
    Счетчик {{counter}}

      <button class="btn" @click="add">Add 5</button>
  </header>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

  export default {
    computed: {
        // counter() {
        //     return this.$store.getters.counter
        // },
        ...mapGetters('count', ['counter'])
    },
      methods: {
        ...mapMutations({
            addFive: 'count/add'
        }),
        // add() {
        //     this.$store.commit('add', 5)
        // }
          add() {
            this.addFive({value: 5})
              // this.$store.commit({
              //     type: 'add',
              //     value: 5
              // })
          }
      }
  }
</script>
