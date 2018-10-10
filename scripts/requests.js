// Async and Awaite functions
const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get new puzzle')
    }
}

// A function that binds other Async Functions
const getCurrentCountry = async () => {
    const location = await getLocation()
    const country = await getCountry(location .country)
    return country
}

// Async and Await function
const getCountry = async (countryCode) => {

    const response = await fetch('//restcountries.eu/rest/v2/all')

    if (response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
        
    } else {
        throw new Error('Unable to get data')
    }
}

// Async and Await functions
const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=6ff7eed3db48f4')

    if (response.status === 200) {
        return await response.json()
    } else {
        throw new Error('Unable to fetch location')
    }
}

