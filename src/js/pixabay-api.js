import axios from 'axios';

const url = 'https://pixabay.com/api/';

const defaultConf = {
  key: '40945002-e125ab8d3394997b1a8dc0871',
  safesearch: true,
  orientation: 'horizontal',
  image_type: 'photo',
};

export default async function getImagesFromPixabay(searchWord, config = {}) {
  return axios.get(url, {
    params: { ...defaultConf, ...config, q: searchWord },
  });
}
