import React, { useState, useEffect } from 'react' ;
import { fetchData } from '../constants/fetchData';
import image1 from '../assets/Logo.svg';
import image2 from '../assets/Menu.svg';
import image3 from '../assets/Search.svg'
import imdbicon from '../assets/imdb.svg'
import tomatoesicon from '../assets/tomato.svg'
import playIcon from '../assets/Play.svg'
export const Header = () => {
    const [headerData, setheaderData] = useState([]);
    
    useEffect(()=>{
        fetchData('3/trending/movie/day?language=en-US').then( data=>{
            const {results} = data
            setheaderData(results[5])
            // console.log(results[0].backdrop_path)
        }
        )
    },[])

    // console.log(headerData)   
    const {title,overview,vote_average,backdrop_path} = headerData 
    const posterPath = backdrop_path
    const posterUrl = `https://image.tmdb.org/t/p/w500${posterPath}`
    const percentage = vote_average/0.1
  return (
    <header className=' w-full h-[570px] '>
        <img src={posterUrl} className=' w-full h-header-h relative z-10' />
      <nav className='px-8 py-7 flex items-center justify-between relative z-20 bottom-[530px] '>
        <div>
            <img src={image1} />
        </div>
        <div className=' flex'>
            <input type="text" className=' rounded-lg pl-3 pr-36 py-2 bg-transparent border-4 border-white text-white' placeholder='search a movie' />
            <button className=' relative right-7'>
                <img src={image3} alt='search' />
            </button>
        </div>
        <div className=' flex'>
            <a href="#" className=' text-white'>Sign in</a>
            <img src={image2} alt='menu' />
        </div>
      </nav>
      <div className=' relative z-20 bottom-[530px] px-8 py-7 w-1/3'>
        <h1 className=' text-3xl font-semibold text-white'>{title}</h1>
        <div className=' text-white flex my-4'>
            <img src={imdbicon} alt="imdb"  />
            <span>{vote_average}/10.0</span>
            <img src={tomatoesicon} alt="tomatoes" className=' ml-5' />
            <span>{percentage.toFixed(0)}%</span>
        </div>
        <div>
            <p className=' text-white font-medium mb-2'>{overview}</p>
            <button className=' flex text-white font-semibold bg-pink-600 rounded-lg px-5 py-2'>
                <img src={playIcon} alt="play-icon" srcset="" />
                watch trailer
            </button>
        </div>
      </div>
      
    </header>
  )
}


