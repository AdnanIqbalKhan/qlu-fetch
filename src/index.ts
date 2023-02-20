import fetch from 'node-fetch'


export const QluFetch = async function (url: string, options = {}, retries = 3, delay: Array<number> | number = 1): Promise<any> {
    return fetch(url, options)
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            throw new Error(`ERROR: ${res.status}`)
        })
        .catch(error => {
            if (retries > 0) {
                return new Promise((resolve) => {
                    const sleep = Array.isArray(delay)
                        ? delay.length > 0
                            ? delay.shift()
                            : 1
                        : delay

                    setTimeout(() => {
                        resolve(QluFetch(url, options, retries - 1));
                    }, sleep);
                });
            }
            console.error(error.message)
        })
}