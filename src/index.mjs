
import nodeFetch from "node-fetch";


const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function fetch(url, options) {
    if (options === undefined) {
        return nodeFetch(url)
    }
    const { retry = 3,
        pause = 1000,
        timeout = -1,
        simultaneous = false,
        ...opts } = options;

    if (simultaneous) {
        let arr = new Array(retry).fill(nodeFetch(url, opts));
        return Promise.race(arr)
    }
    let timeoutFunc
    if (!opts.signal && timeout !== -1) {
        const controller = new AbortController();
        timeoutFunc = setTimeout(() => {
            controller.abort();
        }, timeout);
        opts.signal = controller.signal
    }


    return new Promise(async (resolve, reject) => {
        for (let i = 0; i <= retry; i++) {
            try {
                const res = await nodeFetch(url, opts)
                if (res.ok) {
                    resolve(res)
                    clearTimeout(timeoutFunc)
                    return
                }
                reject(res)
            } catch (error) {
                if (i >= retry) {
                    reject(error)
                    clearTimeout(timeoutFunc)
                }
                console.error(error);
                const sleepTime = (Array.isArray(pause)
                    ? pause.shift()
                    : pause) || 0

                await sleep(sleepTime)
            }
        }
    })
}

export default fetch