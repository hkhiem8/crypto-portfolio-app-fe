import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as watchlistService from '../../services/watchlistService';
import CoinCard from "../CoinList/CoinCard";


const ShowWatchlist = ({ coinData, removeWatchlist, refresh, setRefresh }) => {
    const { id } = useParams();
    const [watchlist, setWatchlist] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();

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
    }, [id, refresh]);

    //If the watchlist is null, return early
    if (!watchlist) return <p>Loading...</p>;

    const coinsInWatchlist = watchlist.coins || [];

    // Get coins not in the watchlist
    const coinsNotInWatchlist = coinData.filter(coin =>
        !coinsInWatchlist.some(watchlistCoin => watchlistCoin._id === coin._id)
    );

    // Handle removing a coin from the watchlist
    const handleRemoveCoin = async (coinId) => {
        try {
            await watchlistService.removeCoinFromWatchlist(watchlist._id, [coinId]);
            setRefresh((prev) => !prev)
            const updatedWatchlist = await watchlistService.getWatchlistDetails(watchlist._id);
            setWatchlist(updatedWatchlist.watchlist);
        } catch (error) {
            console.error(error);
        }
    };

    // Handle delete watchlist
    const handleDelete = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this watchlist?");
        if (confirmDelete) {
            try {
                await watchlistService.deleteWatchlist(watchlist._id);
                removeWatchlist(watchlist._id);  // Updates the parent state
                navigate("/watchlists"); // Navigate back to the index of watchlists
            } catch (error) {
                console.error(error);
            }
        }
    };

    // Toggle edit mode
    const toggleEditMode = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div>
            <h1>{watchlist.name}</h1>
            <p>Description: {watchlist.description}</p>
            <h2>Coins in this watchlist:</h2>

            {coinsInWatchlist.length > 0 ? (
                <div className="coin-list">
                    {coinsInWatchlist.map((coin) => (
                        <div key={`${coin._id}`} className="coin-row">
                            <span>{coin.name} ({coin.symbol})</span>
                            <span>Price: ${coin.currentPriceUSD}</span>
                            <span>24h Change: {coin.priceChange24Hrs}%</span>
                            {isEditing && <button onClick={() => handleRemoveCoin(coin._id)}>Remove</button>}
                        </div>
                    ))}
                </div>
            ) : (
                <p>This watchlist is empty</p>
            )}

            {isEditing && (
                <>
                    <button onClick={handleDelete}>
                        Delete Watchlist
                    </button>

                    {/* Render CoinCard for coins not in the watchlist */}
                    <div className="coin-card-list">
                        {coinsNotInWatchlist.map((coin) => (
                            <CoinCard
                                key={coin._id}
                                coin={coin}
                                watchlists={[]}
                                defaultWatchlistId={id}
                                setRefresh={setRefresh}
                            />
                        ))}
                    </div>
                </>
            )}

            <button onClick={toggleEditMode}>
                {isEditing ? "Done" : "Edit Watchlist"}
            </button>
        </div >
    );
};


export default ShowWatchlist;