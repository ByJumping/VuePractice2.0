import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'
import translatePlugin from "./translatePlugin";
const ru = {
    app: {
        title: 'Как работают плагины во Vue?'
    }
}

const en = {
    app: {
        title: 'How plugins work in Vue?'
    }
}
const app = createApp(App)
app.use(translatePlugin, {

})


app.mount('#app')
