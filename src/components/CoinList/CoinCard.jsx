//displays coin data
//- name - symbol - price USD - 24hr change - add to watchlist button

// loop through Coin List and displays data in a card


import React, { useEffect, useState } from 'react';
// import * as getCoinService from '../../services/getCoinService'

const CoinCard = ({ Coin }) => {
    return (
        <div className="coin-card">
        <img src={Coin.image} alt={Coin.name}/>
        <p>{Coin.name}</p>
        <p>{Coin.symbol}</p>
        <p>${Coin.currentPriceUSD}</p>
        <p>24h % ${Coin.priceChange24Hrs} </p>
        {/* button to add to watchlist */}
        </div>
    );
};

export default CoinCard;