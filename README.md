# qlu-fetch



## Getting started

    import { QluFetch } from 'qlu-fetch'

    const res = await QluFetch('https://randomuser.me/api', {}, 3)
 

 ### functions
    const QluFetch = async function (url: string, options = {}, retries = 3): Promise<any>