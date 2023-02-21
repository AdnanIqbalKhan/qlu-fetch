const nodeFetch = require("node-fetch")

async function fetch(url, options) {
    const { retry = 3, pause = 1000, ...opts } = options;
    return nodeFetch(url, opts)
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            throw new Error(`ERROR: ${res.status}`);
        })
        .catch((error) => {
            if (retry > 0) {
                return new Promise((resolve) => {
                    const sleep = Array.isArray(pause)
                        ? pause.length > 0
                            ? pause.shift()
                            : 1
                        : pause;
                    setTimeout(() => {
                        resolve(fetch(url, { ...opts, retry, pause }));
                    }, sleep);
                });
            }
            console.error(error.message);
        });
}

module.exports = fetch