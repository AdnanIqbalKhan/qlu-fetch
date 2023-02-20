import nodeFetch, { RequestInit } from 'node-fetch';

interface FetchOpts extends RequestInit {
    retry: number,
    pause: Array<number> | number
}

export default async function fetch(url: string, options: FetchOpts): Promise<any> {
    const { retry, pause, ...opts } = options
    return nodeFetch(url, opts)
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            throw new Error(`ERROR: ${res.status}`)
        })
        .catch(error => {
            if (retry > 0) {
                return new Promise((resolve) => {
                    const sleep = Array.isArray(pause)
                        ? pause.length > 0
                            ? pause.shift()
                            : 1
                        : pause

                    setTimeout(() => {
                        resolve(fetch(url, { ...opts, retry, pause }));
                    }, sleep);
                });
            }
            console.error(error.message)
        })
}