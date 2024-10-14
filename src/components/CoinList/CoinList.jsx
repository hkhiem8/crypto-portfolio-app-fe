import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CoinCard from "./CoinCard";

const CoinList = ({ user, coinData }) => {
  const CoinCards = [];

  coinData.map((coin) => {
    CoinCards.push(<CoinCard coin={coin} />);
  });

  return (
    <main>
      <h1>Welcome, {user.username}</h1>
      <p>
        This is the dashboard page where you, and only you, can see a dashboard
        of all of your things. list of all coin cards add to watch list shortcut
        button next to coin
      </p>
      <div className="coin-list">
        {CoinCards}
        </div>
    </main>
  );
};

export default CoinList;

//when app loads, service gets coins, put coin data as a state
// state: array of coins
