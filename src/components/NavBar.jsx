import React from 'react'
import LiAndAnchor from './LiAndAnchor'



const NavBar = ({ links }) => {
  return (
    <header className='flex h-[15vh] items-center px-4 '>
      <h1>MYTINERARY</h1>
      <nav>
        <ul className='flex gap-6'>
          {
            links.map((link, indice) => {
              return (
                <div key={indice}>
                  <LiAndAnchor value={link.value} active={link.active} content={link.content} />
                </div>
              )
            })
          }
        </ul>
      </nav>
    </header>
  )
}

export default NavBar

