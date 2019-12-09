import {baseURL} from './Base-URL';
const axios = require('axios');

const deleteRecord = id => {
  return axios({
    method: 'delete',
    url: baseURL + id,
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

export default deleteRecord;
