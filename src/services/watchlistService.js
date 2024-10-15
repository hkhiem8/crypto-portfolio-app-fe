const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;

// Create a new watchlist
const createWatchlist = async (name, description, coins) => {
  try {
    const token = localStorage.getItem("token");
    //if no token, throw error
    if (!token) {
      throw new Error("Invalid user");
    }

    const res = await fetch(`${BACKEND_URL}/watchlists/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer ${token}",
      },
      body: JSON.stringify({ name, description, coins }), // is this request body code correct?
    });

    const json = await res.json();

    if (!res.ok) {
      throw new Error(json.error);
    }
    return json;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// Add coins to the watchlist
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
      body: JSON.stringify({ coins }),
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

// Remove coins from watchlist

const removeCoinFromWatchlist = async (watchlistId, coins) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Invalid user");
    }

    const res = await fetch(`${BACKEND_URL}/watchlists/${watchlistId}/remove-coin`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer ${token}",
      },
      body: JSON.stringify({ coins }),
    });

    const json = await res.json();

    if (!res.ok) {
      throw new Error(json.error);
    }
    return json;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Get all watchlists
const getWatchlists = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Invalid token or no token found");
    }

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

// Delete a watchlist
const deleteWatchlist = async (watchlistId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Invalid token or no token found");
      }
  
      const res = await fetch(`${BACKEND_URL}/watchlists/${watchlistId}`, {
        method: "DELETE",
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

export { createWatchlist, addCoinToWatchlist, removeCoinFromWatchlist, getWatchlists, deleteWatchlist}