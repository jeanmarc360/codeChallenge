import axios from 'axios';

const instance = axios.create();

export const get = async (url: string) => {
  console.log(url);
  const res = await instance.get(url);
  return res;
};

/*export const post = async (url: string, param: string) => {
  try {
    const res = await instance({
      method: 'POST',
      url: url,
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      data: param,
    });

    return res;
  } catch (e) {
    const errors = e && e.response ? e.response.data : e;
    console.log('post errors ------------>', errors);

    return errors;
  }
};

export const get = async (url: string, token: string) => {
  try {
    const res = await instance.get(url, {
      headers: {
        'content-type': 'application/json',
        Authorization: 'Bearer ' + token.trim(),
      },
      timeout: 120000, // 2minutes
    });

    return res;
  } catch (e) {
    console.log('get errorsnnn ------------>', url);
    const errors = e && e.response ? e.response.data : e;
    console.log('get errorsnnn ------------>', e);
    return errors;
  }
};*/
