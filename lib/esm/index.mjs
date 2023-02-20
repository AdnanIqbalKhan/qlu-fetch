import fetch from 'node-fetch';
export const QluFetch = async function (url, options = {}, retries = 3) {
    return fetch(url, options)
        .then(res => {
        if (res.ok) {
            return res.json();
        }
        if (retries > 0) {
            return QluFetch(url, options, retries - 1);
        }
        throw new Error(`ERROR: ${res.status}`);
    })
        .catch(error => console.error(error.message));
};
