import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Info, Repos, User, Search, Navbar } from '../components';
import { pageAnimation } from '../utils/Animations';
import { GithubContext } from '../context/context';
import Loader from '../components/Loader';
import DashboardWrapper from '../components/DashboardWrapper';

const Dashboard = () => {
  const { isLoading } = useContext(GithubContext);

  return (
    <motion.main
      exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
    >
      <Search />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <DashboardWrapper />
        </>
      )}
    </motion.main>
  );
};

export default Dashboard;
