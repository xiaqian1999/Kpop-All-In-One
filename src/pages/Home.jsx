import React, { useState } from 'react'
import Header from '../components/Header'
import ExplorePost from '../components/ExplorePost'
import InstaPostDisplay from '../components/InstaPostDisplay';
import SearchScammer from '../pages/SearchScammer';
// import './Home.css';

const Home = ({setShowScammerPopUp, searchScammerKeyword, setSearchScammerKeyword}) => {

  const [transactionType, setTransactionType] = useState("All");

  return (
    <div>
      <Header />
      <ExplorePost transactionType={transactionType} setTransactionType={setTransactionType} />
      <InstaPostDisplay transactionType={transactionType} />
      <SearchScammer 
        searchScammerKeyword={searchScammerKeyword} 
        setSearchScammerKeyword={setSearchScammerKeyword} 
        setShowScammerPopUp={setShowScammerPopUp}
      />
    </div>
  )
}

export default Home