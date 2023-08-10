import React from 'react'

const Hero = ({ children }) => {

    return (
        <main className='w-full md:w-3/4 min-h-[70vh] flex items-center justify-center flex-1 mt-20'>
            <div className='w-11/12 xl:w-3/4 h-full bg-pink-600 border rounded-lg border-white flex flex-col items-center overflow-hidden'>
                <img className='w-full h-96 object-cover' src="https://png.pngtree.com/thumb_back/fw800/back_pic/04/29/94/9458401a0ca2e51.jpg" alt="asdasd" />
                <div className='border-t border-t-black py-8 flex items-center justify-center flex-1 w-full'>
                    {children}
                </div>
            </div>

        </main>
    )
}
export default Hero