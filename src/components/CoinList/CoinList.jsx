import React, { useEffect, useState } from "react";
import CoinCard from "./CoinCard";
import '../../App.css'

const CoinList = ({ user, coinData, watchlists, setRefresh }) => {
  const CoinCards = [];

  // Coin Cards
  coinData.map((coin) => {
    CoinCards.push(
      <CoinCard
        key={coin.name}
        coin={coin}
        watchlists={watchlists || []}
        setRefresh={setRefresh}
      />);
  });

  return (
    <main>
      <h1>Welcome, {user.username}</h1>
      <h2>Today's Cryptocurrency Prices</h2>
      <div className="coin-list">
        {/* Headers */}
        <div className="coin-info-header">
          <span>Logo</span>
          <span>Name</span>
          <span>Symbol</span>
          <span>Current Price</span>
          <span>24h Change</span>
          <span>Select Watchlist</span>
          <span>Add to Watchlist</span>
        </div>
        {CoinCards}
      </div>
    </main>
  );
};

export default CoinList;
