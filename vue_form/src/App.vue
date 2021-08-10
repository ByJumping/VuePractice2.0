<template>
  <div class="container">
    <form class="card" @submit.prevent="submitHandler">
      <h1>Анкета на Vue разработчика!</h1>
<!--      <div class="form-control" :class="{invalid : errors.name}">-->
<!--        <label for="name">Как тебя зовут?</label>-->
<!--        <input-->
<!--                v-model.trim="name"-->
<!--                type="text"-->
<!--                id="name"-->
<!--                placeholder="Введи имя">-->
<!--          <small v-if="errors.name"> {{ errors.name }}</small>-->
<!--      </div>-->

        <appinput
                placeholder="Введите имя"
                :error="errors.name"
                label="Как тебя зовут?"
                v-model:value="name"
        ></appinput>

      <div class="form-control">
        <label for="age">Выбери возраст</label>
        <input
                v-model.number="age"
                max="70"
                type="number"
                id="age"
                >
      </div>

      <div class="form-control">
        <label for="city">Твой город</label>
        <select
                v-model="city"
                id="city">
          <option value="spb">Санкт-Петербург</option>
          <option value="msk">Москва</option>
          <option value="kzn">Казань</option>
          <option value="nsk">Новосибирск</option>
        </select>
      </div>

      <div class="form-checkbox">
        <span class="label">Готов к переезду в Токио?</span>
        <div class="checkbox">
          <label><input
                  v-model="relocate"
                  type="radio" name="trip" value="yes"/> Да</label>
        </div>
        <div class="checkbox">
          <label><input
                  v-model="relocate"
                  type="radio" name="trip" value="no"/> Нет</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Что знаешь во Vue?</span>
        <div class="checkbox">
          <label><input
                  name="skills"
                  v-model="skills"
                  value="vuex"
                  type="checkbox"/> Vuex</label>
        </div>
        <div class="checkbox">
          <label><input
                  name="skills"
                  v-model="skills"
                  value="cli"
                  type="checkbox"/> Vue CLI</label>
        </div>
        <div class="checkbox">
          <label><input
                  name="skills"
                  v-model="skills"
                  value="router"
                  type="checkbox"/> Vue Router</label>
        </div>
      </div>

        <div class="form-checkbox">
            <span class="label">Правила нашей компании</span>
            <div class="checkbox">
                <label><input
                        v-model="agree"
                        type="checkbox"/> Ознакомлен</label>
            </div>
        </div>

      <button type="submit" class="btn primary">Отправить</button>
    </form>
  </div>
</template>

<script>
import Appinput from "./Appinput";

  export default {
      data() {
          return {
              name: '',
              age: 23,
              city: 'nsk',
              relocate: 'yes',
              skills: [],
              agree: false,
              errors: {
                  name: null
              }
          }
      },
      components: {Appinput},
      methods: {
          formIsValid() {
              let isValid = true
            if(this.name.length === 0) {
                this.errors.name = 'Имя не может быть пустым'
                isValid = false
            } else {
                this.errors.name = null
            }
            return isValid
          },
          submitHandler() {
            if(this.formIsValid()) {
                console.group('Form Data')
                console.log('Name', this.name)
                console.log('Age', this.age)
                console.log('City', this.city)
                console.log('To Tokyo', this.relocate)
                console.log('Skills', this.skills)
                console.log('Agree', this.agree)
            }
          }
      }
  }
</script>

<style>
.form-control small {
    color: #c25205;
}

.form-control.invalid input {
    border-color: #c25205;
}
</style>
