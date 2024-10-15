import React, { useEffect, useState } from "react";
import CoinCard from "./CoinCard";

const CoinList = ({ user, coinData, watchlists, setRefresh }) => {
  const CoinCards = [];

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
        {CoinCards}
      </div>
    </main>
  );
};

export default CoinList;
