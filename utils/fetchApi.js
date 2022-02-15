import axios from 'axios';

export const baseUrl = "https://bayut.p.rapidapi.com"


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'c374c79fd6msh8b5db2a7d9c2556p1933c0jsn3d551188b8b5'
          }        
    });

    return data
}
