import axios from 'axios';

const getApi = async () => {
    console.log("entramos a llamar a la api!!")
    const res = await axios.get('https://random-palette-generator.p.rapidapi.com/palette/Monochromatic/1/4',{
        headers: {
            'X-RapidAPI-Host' : 'random-palette-generator.p.rapidapi.com',
            
        }
    })

    return res.data.data[0].palette
}

export default getApi