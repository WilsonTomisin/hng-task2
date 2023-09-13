import React from 'react'
import {AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter,AiFillYoutube} from 'react-icons/ai'

export const Footer = () => {
  return (
    <footer className=' flex flex-col items-center justify-between px-0 py-24'>
        <div className=' flex items-center text-3xl'>
            <AiFillFacebook className=' tablet:mx-8  ' />
            <AiOutlineInstagram/>
            <AiOutlineTwitter className=' tablet:mx-8 '/>
            <AiFillYoutube/>
        </div>
        <div className=' flex tablet:flex-row mobile:flex-col justify-between my-8'>
            <a href="#" className=' text-lg font-medium'>Conditions of Use</a>
            <a href="#" className=' tablet:mx-8 text-lg font-medium'>Privacy & Policy</a>
            <a href="#" className=' text-lg font-medium'>Press Room</a>
        </div>
        <div>
            <p className=' text-lg font-semibold text-gray-500 mobile:text-center'>&copy;2023 MovieBox by Wilson Oluwatomisin</p>
        </div>
    </footer>
  )
}

