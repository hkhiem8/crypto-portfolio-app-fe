//show details of a single watchlist
// edit watchlist

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as watchlistService from '../../services/watchlistService';
import CoinCard from "../CoinList/CoinCard";


const ShowWatchlist = () => {
    const { id } = useParams();
    const [watchlist, setWatchlist] = useState(null);

    useEffect(() => {
        const fetchWatchlist = async () => {
            try {
                const fetchedWatchlist = await watchlistService.getWatchlistDetails(id); // Fetch the watchlist using the ID
                setWatchlist(fetchedWatchlist);
            } catch (error) {
                throw error
            }
        };

        fetchWatchlist();
    }, [id]);

    //If the watchlist is null, return early
    if (!watchlist) return <p>Loading...</p>;

    const coins = watchlist.coins || [];
    console.log("Coins array:", coins);

    return (
        <div>
            <h1>{watchlist.name}</h1>
            <p>Description: {watchlist.description}</p>
            <h2>Coins in this watchlist:</h2>

            {coins.length > 0 ? (
                <div className="coin-list">
                    {watchlist.coins.map((coin) => (
                        <CoinCard key={coin._id} coin={coin} watchlists={[]} />  // Render CoinCard
                    ))}
                </div>
            ) : (
                <p>This watchlist is empty</p>
            )}

        </div>
    );
};

export default ShowWatchlist;