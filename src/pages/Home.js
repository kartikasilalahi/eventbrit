import React from 'react';
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import UpcomingEvent from '../components/UpcomingEvent'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <Carousel />
      <UpcomingEvent />
      <Footer />
    </React.Fragment>
  )
}

export default HomePage;