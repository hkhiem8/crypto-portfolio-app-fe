//displays coin data
//- name - symbol - price USD - 24hr change - add to watchlist button

// loop through Coin List and displays data in a card
//display item

import React, { useEffect, useState } from 'react';
import { addCoinToWatchlist } from '../../services/watchlistService';

const CoinCard = ({ coin }) => {

    // handleAddToWatchList = async () => {
    //     try {
    //         const watchlistId = `${watchlist._id}`
    //         await addCoinToWatchlist(watchlistId, coin._Id)
    //     } catch (error) {
    //         throw new error
    //     }
    // }

    return (
        <div className="coin-card">
        <img src={coin.image} alt={coin.name}/>
        <p>{coin.name}</p>
        <p>{coin.symbol}</p>
        <p>${coin.currentPriceUSD}</p>
        <p>24h % ${coin.priceChange24Hrs} </p>
        {/* <button onClick={handleAddToWatchlist}>Add to Watchlist</button> */}
        </div>
    );
};

export default CoinCard;