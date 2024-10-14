// get all the coins

const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;


const getCoins = async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/coins/list`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    const json = await res.json();
    if (json.error) {
      throw new Error(json.error);
    }
    if (json.coins) {
        return json.coins
    } else {
        throw new Error('coin data is missing')
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export {getCoins}