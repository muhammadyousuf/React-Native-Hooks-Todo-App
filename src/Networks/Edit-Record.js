import {baseURL} from './Base-URL';
const axios = require('axios');

const editRecords = (data, id) => {
  return axios({
    method: 'patch',
    url: baseURL + id,
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

export default editRecords;
