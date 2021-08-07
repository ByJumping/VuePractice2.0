<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <button class="btn" @click="open">
      {{ isNewsOpen ? 'Закрыть' : 'Открыть' }}
    </button>
    <div v-if="isNewsOpen">
      <hr/>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque consequatur, cum enim
      iusto libero molestiae natus nobis nulla praesentium!</p>
      <button class="btn primary"
              @click="mark"
      >Прочесть новость</button>
    </div>
  </div>
</template>

<script>
export default {
  // props: ['title'],
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false
    },
  },
  // emits: ['open-news'],
  emits: {
    'open-news': null,
    'read-news': null,
  },
  name: "AppNews",
  data() {
    return {
      isNewsOpen: this.isOpen
    }
  },
  methods: {
    mark() {
      this.isNewsOpen = false
      this.$emit('read-news')
    },
    open() {
      this.isNewsOpen = !this.isNewsOpen
      if (this.isNewsOpen) {
        this.$emit('open-news')
      }
    }
  }

}
</script>

<style scoped>

</style>
