import { QluFetch } from 'qlu-fetch'

const res = await QluFetch('https://randomuser.me/api1', {}, 3)
console.log("TTTT", res) // Parsed json response from the api
