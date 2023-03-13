const fetch = require('qlu-fetch')

async function main() {

    let res = await fetch('https://randomuser.me/api', { method: 'GET', retry: 3, pause: [1000, 2000, 3000] })
    console.log("OUTPUT:", res)

}

main()