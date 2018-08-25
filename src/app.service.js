import axios from 'axios';

axios.defaults.baseURL = 'https://localhost:5001/api';

const appService = {

    getBugs() {
        return new Promise((resolve) => {
            axios.get('/bug')
                .then(response => {
                    resolve(response.data)
                })
        })
    }
}
export default appService;