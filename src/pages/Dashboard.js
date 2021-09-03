import React from 'react';
import { motion } from 'framer-motion';
import { Info, Repos, User, Search, Navbar } from '../components';
import { pageAnimation } from '../utils/Animations';

const Dashboard = () => {
  return (
    <motion.main
      exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
    >
      <Search />
      <Info />
      <User />
      <Repos />
    </motion.main>
  );
};

export default Dashboard;
