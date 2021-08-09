<template>
  <button class="btn" :class="color" @click="$emit('action')">
    <slot/>
  </button>
</template>

<script>
export default {
  emits: [
    'action',
],
  props: {
    text: {
      String,
      required: false
    },
    color: {
      type: String,
      default: '',
      validator(value) {
        return ['', 'primary', 'danger'].includes(value)
      }
    }
  },
  name: "AppButton"
}
</script>

<style scoped>

</style>
