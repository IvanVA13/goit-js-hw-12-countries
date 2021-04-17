const BASE_URL = 'https://restcountries.eu/rest/v2/name'


function fetchCountries(searchQuery) {
    return fetch(`${BASE_URL}/${searchQuery}`).then(res=>{if (res.ok) {
        return res.json()
    }
        throw res
    })
}

export default fetchCountries