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
    return json;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export {getCoins}