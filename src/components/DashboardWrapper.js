import React from 'react';
import { Info, Repos, User, Search, Navbar } from './index';
import { motion } from 'framer-motion';
import { DashAnimation } from '../utils/Animations';

const DashboardWrapper = () => {
  return (
    <motion.div
      exit='exit'
      variants={DashAnimation}
      initial='hidden'
      animate='show'
    >
      <Info />
      <User />
      <Repos />
    </motion.div>
  );
};

export default DashboardWrapper;
