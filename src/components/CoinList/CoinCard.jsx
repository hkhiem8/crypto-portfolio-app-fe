import React, { useEffect, useState } from 'react';
import { addCoinToWatchlist } from '../../services/watchlistService';

const CoinCard = ({ coin, watchlists = [], defaultWatchlistId, setRefresh }) => {
    const [selectedWatchlist, setSelectedWatchlist] = useState(defaultWatchlistId || '');

    // Handle watchlist selection
    const handleWatchlistChange = (e) => {
        setSelectedWatchlist(e.target.value);
    };

    const handleAddToWatchlist = async () => {
        try {
            const watchlistId = defaultWatchlistId || selectedWatchlist;
            await addCoinToWatchlist(watchlistId, [coin._id])
            setRefresh((prev) => !prev);
        } catch (error) {
            throw error
        }
    }

    return (
        <div className="coin-card">
            <img src={coin.image} alt={coin.name} />
            <p>{coin.name}</p>
            <p>{coin.symbol}</p>
            <p>${coin.currentPriceUSD}</p>
            <p>24h % ${coin.priceChange24Hrs} </p>

            {/* Dropdown for selecting a watchlist */}
            {!defaultWatchlistId && (
                <select onChange={handleWatchlistChange} value={selectedWatchlist}>
                    <option value="">Select a watchlist</option>
                    {watchlists.map((watchlist) => (
                        <option key={watchlist._id} value={watchlist._id}>
                            {watchlist.name}
                        </option>
                    ))}
                </select>
            )}

            <button onClick={handleAddToWatchlist}>Add to Watchlist</button>
        </div>
    );
};

export default CoinCard;