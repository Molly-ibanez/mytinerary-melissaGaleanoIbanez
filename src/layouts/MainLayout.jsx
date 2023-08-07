import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const MainLayout = ({ children }) => {
  return (
    <div>
      
      <NavBar></NavBar>
      <main>
        <h1>Find the perfect destination</h1>
        <p>Our app will help you find the perfect path for your next trip.
         With an easy-to-use interface and a host of itinerary options, 
         planning your next trip has never been easier.</p>
        <button>View More</button>
        {children}
      </main>
      <Footer></Footer>
    </div>
  )
}

export default MainLayout