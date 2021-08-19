const fetcher = (url) => {
    url = 'https://jsonplaceholder.typicode.com' + url
    return fetch(url).then((res) => res.json())
}

export default fetcher;