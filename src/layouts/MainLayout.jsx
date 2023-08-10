import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Header from '../components/Header'


const links = [
  { value: '#', content: 'Link 1', id: '1' },
  { value: '#', content: 'Link 2', id: '2' },
  { value: '#', content: 'Link 3', id: '3' },
  { value: '#', content: 'Link 4', id: '4' },
]


const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header>
      <NavBar links={links} />
      </Header>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default MainLayout;