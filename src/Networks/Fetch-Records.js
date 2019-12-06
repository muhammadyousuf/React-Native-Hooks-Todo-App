import {baseURL} from './Base-URL';
const axios = require('axios');

const fetchRecords = () => {
  return axios({
    method: 'get',
    url: baseURL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      if (response.status === 200) {
        return response.data;
      }
    })
    .catch(err => console.log(err));
};

export default fetchRecords;
