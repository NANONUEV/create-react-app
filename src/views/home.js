import React from 'react'

import { Helmet } from 'react-helmet'

import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>MP2</title>
        <meta property="og:title" content="MP2" />
      </Helmet>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Home
