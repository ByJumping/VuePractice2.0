<template>
  <div class="container pt-1">
    <div class="card">
      <async-component></async-component>
      <h2>Динамические и асинхронные компоненты</h2>

      <app-button
        :color="oneColor"
        @action="active = 'one'"
      >One</app-button>
      <app-button
        :color="twoColor"
        @action="active = 'two'"
      >Two</app-button>
    </div>


    <keep-alive>
    <component :is="componentName"></component>
    </keep-alive>

  </div>
</template>

<script>

import AppTextOne from "./AppTextOne";
import AppTextTwo from "./AppTextTwo";
import AppButton from "./AppButton";
import AppAsyncComponent from "./AppAsyncComponent";
export default {
  data() {
    return {
      active: 'one' // two
    }
  },
  mounted() {
    setTimeout(() => {
      this.componentName = 'Новое название'
    }, 1500)
  },
  computed: {
    // componentName() {
    //   return 'app-text-' + this.active
    //  },

    componentName: {
      get() {
        return 'app-text-' + this.active
      },
      set(value) {
        console.log('Теперь название компонента', value)
      }
        },
     oneColor() {
      return this.active === 'one' ? 'primary' : ''
     },
    twoColor() {
      return this.active === 'two' ? 'primary' : ''
    }
  },
  components: {AppAsyncComponent, AppButton, AppTextOne, AppTextTwo}
}
</script>

<style scoped>

</style>
