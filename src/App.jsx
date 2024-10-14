import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import CoinList from './components/CoinList/CoinList';
//import EditWatchlist
//import IndexWatchlists
//import ShowWatchlist
import SignupForm from './components/SignupForm/SignupForm';
import SigninForm from './components/SigninForm/SigninForm';
import * as authService from './services/authService';
import * as getCoinService from './services/getCoinService'

const App = () => {
  const [user, setUser] = useState(authService.getUser());
  const [coinData, setCoinData] = useState([]);
  const [watchlists, setWatchlists] = useState([]);

  //Fetch coin data using service function and set coin data state on app load
  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const coins = await getCoinService.getCoins();
        setCoinData(coins)
      } catch (error) {
        console.error(error);
      }
    }
    fetchCoinData();
  }, []);

  const handleSignout = () => {
    authService.signout()
    setUser(null)
  }

  return (
    <>
      <NavBar user={user} handleSignout={handleSignout} />
      <Routes>
        {user ? (
          <>
          <Route path="/" element={<CoinList user={user} coinData={coinData} watchlists={watchlists}/>} />
          <Route path="/watchlists" element={<IndexWatchlist user={user} watchlists={watchlists}/>} />
          <Route path="/watchlists/:id" element={<ShowWatchlist user={user} watchlists={watchlists}  />} />
          </>
        ) : (
          <Route path="/" element={<Landing />} />
        )}
        <Route path="/signup" element={<SignupForm setUser={setUser} />} />
        <Route path='/signin' element={<SigninForm setUser={setUser} />} />
      </Routes>
    </>
  );
};

export default App