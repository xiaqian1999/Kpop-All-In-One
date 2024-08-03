import React, { useState } from 'react'
import Header from '../components/Header'
import ExplorePost from '../components/ExplorePost'
import InstaPostDisplay from '../components/InstaPostDisplay';
// import './Home.css';

const Home = () => {

  const [transactionType, setTransactionType] = useState("All");

  return (
    <div>
      <Header />
      <ExplorePost transactionType={transactionType} setTransactionType={setTransactionType} />
      <InstaPostDisplay transactionType={transactionType} />
    </div>
  )
}

export default Home