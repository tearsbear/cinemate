import axios from 'axios';

export default {
    getItem: async function (id) {
        try {
            let url;
            console.log(id)
            url = `${process.env.REACT_APP_BASE_URL}&i=${id}`
            const response = await axios.get(url);
            return response;
        } catch (error) {
            throw error;
        }
    }
}