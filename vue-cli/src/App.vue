<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Slots</h2>
    </div>

    <app-list>
      <template #default="{idx, iter}">
      <span style="color: darkred">
        <strong>{{ idx + 1 }}</strong>
        Item: {{ iter }}</span>
      </template>
    </app-list>

    <app-block>
      <p>Это самый важный текст этого блока</p>
      <template #header>
        <h3>Это заголовок!</h3>
      </template>
      <template #footer>
        <hr/>
        Это футер
      </template>
    </app-block>
  </div>
</template>

<script>
import AppBlock from "./AppBlock";
import AppList from "./AppList";

export default {
  components: {AppBlock, AppList}
}
</script>

<style scoped>

</style>
