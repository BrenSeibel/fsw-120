  
import React from 'react';
import './App.css'
import TweetsList from './TweetsList.js';
import {withAuth as WithAuth} from './AuthProvider'

const Home = () => {
  return (
    <div>
      <h1> Home </h1>
      <TweetsList />
    <WithAuth> loop </WithAuth>
    </div>
  );

  
}

export default Home