<template>
    <div v-if="people.length !==0">
        <div class="card line" v-for="person in people" :key="person.id">
            <h3>{{ person.firstName }} </h3>
            <button class="btn danger" @click="$emit('delete', person.id)">Удалить</button>
        </div>
    </div>
    <div class="card center" v-else>
        <h4>Людей пока нет.</h4>
        <button class="btn" @click="$emit('load')">Загрузить список</button>
    </div>
</template>

<script>
export default {
    emits: [
        'load',
        'delete'
    ],
    name: "AppPeopleList",
    props: ['people']
}
</script>

<style scoped>
.line {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
