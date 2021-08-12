import React from 'react';
import { Info, Repos, User, Search } from '../components';

const Dashboard = () => {
  return (
    <main>
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
