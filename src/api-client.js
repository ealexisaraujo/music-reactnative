const URL = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=mexico&api_key=7306e3dc35bee44b0a74e673eb28ff3d&format=json'


function getArtist()
{
    return fetch(URL)
    .then(response => response.json())
    .then(data => data.topartists.artist)
    .then(artist => artist.map(artist => ({
            id: artist.mbid,
            name: artist.name,
            image: artist.image[3]['#text'],
            comments: 140,
    })))
}

    export {getArtist} 
