import React, { useState } from 'react'
import Header from '../components/Header'
import ExplorePost from '../components/ExplorePost'
// import './Home.css';

const Home = () => {

  const [transactionType, setTransactionType] = useState("All");

  return (
    <div>
      <Header />
      <ExplorePost transactionType={transactionType} setTransactionType={setTransactionType} />
    </div>
  )
}

export default Home