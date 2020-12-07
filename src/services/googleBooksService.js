import axios from 'axios';

export default {
  query
}

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?printType=books'

async function query(endpoint, method = 'get', data = null) {
  try {
    const res = await axios({
      url: `${BASE_URL}&q=${endpoint}`,
      method,
      data
    })
    return res.data.items
  } catch (err) {
    console.dir(err);
    throw err;
  }
}
