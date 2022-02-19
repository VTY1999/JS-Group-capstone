import { involvementApi } from './utitls.js';

const likes = async (id) => {
  const response = await fetch(`${involvementApi}/likes`);
  const storeLikes = await response.json();
  for (let i = 0; i < storeLikes.length; i += 1) {
    if (storeLikes[i].item_id === id) {
      return storeLikes[i].likes;
    }
  }
  return undefined;
};

export default likes;