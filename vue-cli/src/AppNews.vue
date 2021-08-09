<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <app-button @action="open">{{ isNewsOpen ? 'Закрыть' : 'Открыть' }}</app-button>
    <app-button color="danger"
            v-if="wasRead"
            @action="unmark"
    >Отметить непрочитанной</app-button>
    <div v-if="isNewsOpen">
      <hr/>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque consequatur, cum enim
      iusto libero molestiae natus nobis nulla praesentium!</p>
      <app-button v-if="!wasRead" color="primary"
              @action="mark"
      >Прочесть новость</app-button>

      <app-news-list></app-news-list>
    </div>
  </div>
</template>

<script>
import AppButton from "./AppButton";
import AppNewsList from "./AppNewsList";

export default {
  // props: ['title'],
  props: {
    wasRead: Boolean,
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
    'read-news'(id) {
      if(id) {
        return true
      }
      console.warn('Нет параметра id для emit read-news')
    },
    unmark: null
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
      this.$emit('read-news', this.id)
    },
    open() {
      this.isNewsOpen = !this.isNewsOpen
      if (this.isNewsOpen) {
        this.$emit('open-news')
      }
    },
    unmark() {
      this.$emit('unmark', this.id)
    }
  },

  components: {
    AppButton, AppNewsList,
  }

}
</script>

<style scoped>

</style>
