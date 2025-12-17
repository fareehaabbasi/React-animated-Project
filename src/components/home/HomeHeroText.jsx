import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font300] text-center pt-5'>
      <div className='text-[9.5vw] flex items-center justify-center uppercase leading-[9vw]'>The spark for</div>
      <div className='text-[9.5vw] flex items-center justify-center uppercase leading-[9vw]'>all 
        <div className='h-[8vw] rounded-ful overflow-hidden'> <Video /> </div> things</div>
        <div className='text-[9.5vw] flex items-center justify-center uppercase leading-[9vw]'>creative</div>
    </div>
  )
}
export default HomeHeroText
