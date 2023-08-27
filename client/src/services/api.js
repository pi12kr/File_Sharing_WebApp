import axios from 'axios'; // axios library use to call a api

const API_URL = 'http://localhost:8000';
// api_url backend ka url backend kaha chal rha h yaha pr backend localhost:8000 pr chal rha h

export const uploadFile = async (data) =>{
    try {
        let response = await axios.post(`${API_URL}/upload`, data); 
        return response.data; // axios return object which conatins response header, request header, data

        // for sending a data, post api is used.

        // post api contain to compontents first is api_url and second is data(post api body)

        //${API_URL}/upload here /upload is end point 

        // axios.post is a asynchronous function which return promise that's why we write await befor axios.post (await async function me chalta h isiliye (const uploadFile = async (data)) likhe h)
        
    } catch (error) {
        console.log('Error while calling the api', error.message); // error contain lots of infomation which also contains a key named as message that's why we write error.message
    }
}



