import axios from 'axios';

export default {
    getList: async function (name, page) {
        try {
            let url;
            if (page != null & page > 1) {
                url = `${process.env.REACT_APP_BASE_URL}&s=${name}&page=${page}`
            } else {
                url = `${process.env.REACT_APP_BASE_URL}&s=${name}`
            }
            const response = await axios.get(url);
            return response;
        } catch (error) {
            throw error;
        }
    }
}