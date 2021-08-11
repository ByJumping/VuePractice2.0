
import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'

createApp(App).mount('#app')


// const requestURL = 'https://jsonplaceholder.typicode.com/users'
//
// function sendRequest(method, url) {
//     return new Promise((resolve, reject)=> {
//         const xhr = new XMLHttpRequest()
//         xhr.open(method, url)
//         xhr.responseType = 'json'
//
//         xhr.onload = () => {
//             if (xhr.status >= 400) {
//                 reject(xhr.response)
//             } else {
//                 resolve(xhr.response)
//             }
//         }
//         xhr.onerror = () => {
//             reject(xhr.response)
//         }
//         xhr.send()
//     })
// }
//
// sendRequest('GET', requestURL)
//     .then(data=> console.log(data))
//     .catch(err=> console.error(err))


// const requestURL = 'https://jsonplaceholder.typicode.com/users'
//
// function sendRequest(method, url) {
//     return fetch(url).then(response=> {
//         return response.json()
//     })
// }
//
// sendRequest('GET', requestURL)
//     .then(data=> console.log(data[1].email))
//     .catch(err=> console.error(err))
