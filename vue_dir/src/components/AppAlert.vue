<template>
    <div class="alert" :class="type">
        <p class="alert-title">{{ title }}</p>
        <p>{{text}}</p>
        <button class="btn" v-if="closable" @click="$emit('close')" :class="type">Закрыть</button>
    </div>
</template>

<script>
export default {
    emits: ['close'],
    props: {
        title: String,
        text: String,
        closable: {
            type: Boolean,
            required: false,
            default: false
        },
        type: {
            type: String,
            required: false,
            default: 'primary',
            validator(value) {
                return ['danger', 'warning', 'primary'].includes(value);
            }
        }
    },
    name: "AppAlert"
}
</script>

<style scoped>

</style>
