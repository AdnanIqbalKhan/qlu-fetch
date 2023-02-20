import fetch from 'q-fetch'

async function main() {

    // const res = await QluFetch('https://randomuser.me/api1', {}, 3)
    let res = await fetch('https://randomuser.me/api', { method: 'GET', retry: 3, pause: 1000 })
    console.log("TTTT", res) // Parsed json response from the api

}

main()