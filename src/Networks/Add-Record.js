import {baseURL} from './Base-URL';
const axios = require('axios');

const AddRecord = data => {
  return axios({
    method: 'post',
    url: baseURL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: data,
  })
    .then(response => {
      if (response.status === 200) {
        return response.data;
      }
    })
    .catch(err => console.log(err));
};

export default AddRecord;
