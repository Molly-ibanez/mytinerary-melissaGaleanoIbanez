import React, { useState } from 'react'
import NavBar from './NavBar.jsx'




const links = [
  { value: '#', content: 'Link 1', id: '1', active: true },
  { value: '#', content: 'Link 2', id: '2', active: false },
  { value: '#', content: 'Link 3', id: '3', active: false },
  { value: '#', content: 'Link 4', id: '4', active: false },
]

const Header = () => {

  const [show, setShow] = useState(false)
  return (
      <header className='flex h-[5vh] items-center px-16  justify-between '>
          <NavBar links={links} />

      </header>
  )
}

export default Header