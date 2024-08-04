import React, { useState } from 'react'
import Header from '../components/Header'
import ExplorePost from '../components/ExplorePost'
import InstaPostDisplay from '../components/InstaPostDisplay';
import SearchScammer from '../components/SearchScammer';
// import './Home.css';

const Home = () => {

  const [transactionType, setTransactionType] = useState("All");
  const [searchScammerKeyword, setSearchScammerKeyword] = useState('');

  return (
    <div>
      <Header />
      <ExplorePost transactionType={transactionType} setTransactionType={setTransactionType} />
      <InstaPostDisplay transactionType={transactionType} />
      <SearchScammer searchScammerKeyword={searchScammerKeyword} setSearchScammerKeyword={setSearchScammerKeyword}/>
    </div>
  )
}

export default Home