import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const key = '38070377-8dbe611b16263765ee807d393';

export const fetchImages = async (query, currentPage) => {
  const response = await axios.get(
    `/?q=${query}&page=${currentPage}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};
