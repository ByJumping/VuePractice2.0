<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости {{now}}</h2>
      <span>Открыто: <strong>{{ openRate }} </strong> | Прочитано: <strong>{{ readRate }}</strong></span>
    </div>
    <app-news
      v-for="item in news"
      :key="item.id"
      :title="item.title"
      :id="item.id"
      :is-open="item.isOpen"
      @open-news="openNews"
      @read-news="readNews"
    />
  </div>
</template>

<script>


import AppNews from "./AppNews";

export default {
  name: 'App',
  components: {
    'app-news': AppNews
  },
  data: ()=> ({
    openRate: 0,
    readRate: 0,
    now: new Date().toLocaleDateString(),
    news: [
      {
        title: 'Джо байден победил на выборах в США',
        id: 1,
        isOpen: false
      },
      {
        title: 'Vue 3 успешно работает',
        id: 2,
        isOpen: false
      }
    ]
  }),
  methods: {
    readNews() {
      this.readRate++
    },
    openNews() {
      this.openRate++
    }
  }
}
</script>

<style>

</style>
