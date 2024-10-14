//get watchlists
//add coin to watchlist

const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;

const getWatchlists = async () => {
  try {
    //get token
    const token = localStorage.getItem("token");
    //if no token, throw error
    if (!token) {
      throw new Error("Invalid token or no token found");
    }
    //build header for bearer token
    const res = await fetch(`${BACKEND_URL}/watchlists/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer ${token}",
      },
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

const addCoinToWatchlist = async (watchlistId, coins) => {
    try {
      //get token
      const token = localStorage.getItem("token");
      //if no token, throw error
      if (!token) {
        throw new Error("Invalid user");
      }
      //patch request to add coins to the watchlist
      const res = await fetch(`${BACKEND_URL}/watchlists/${watchlistId}/add-coin`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer ${token}",
        },
        body: JSON({ coins }), // is this request body code correct?
      });
  
      const json = await res.json();

      //check for errors in backend
      if (!res.ok) {
        throw new Error(json.error);
      }
      return json;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  // create a new watchlist
  // remove coin from watchlist
  // delete watchlist

export { getWatchlists, addCoinToWatchlist }