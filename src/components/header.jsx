import React, { useState, useEffect } from 'react' ;
import { fetchData } from '../constants/fetchData';
import image1 from '../assets/Logo.svg';
import image2 from '../assets/Menu.svg';
import image3 from '../assets/Search.svg'
import imdbicon from '../assets/imdb.svg'
import tomatoesicon from '../assets/tomato.svg'
import playIcon from '../assets/Play.svg';
import { useNavigate } from 'react-router-dom';
export const Header = () => {
    const [headerData, setheaderData] = useState([]);
    const [ search, setSearch] = useState('')
    const navigate = useNavigate()
    
    useEffect(()=>{
        fetchData('3/search/movie?query=John Wick: Chapter 3 - Parabellum').then( data=>{
            const {results} = data
            setheaderData(results[0])
            // console.log(data)
        }
        )
    },[])
    const handleSearch =()=>{

      if (search.length > 2) {
        navigate(`/search/${search}`)
        setSearch('')
      } else {
        alert('search value is not valid!')
      }
    }

    // console.log(headerData)   
    const {title,overview,vote_average,backdrop_path} = headerData 
    const posterPath = backdrop_path
    const posterUrl = `https://image.tmdb.org/t/p/w500${posterPath}`
    const percentage = vote_average/0.1
  return (
    <header className=' w-full h-[570px] '>
        <img src={posterUrl} className=' mobile:w-full h-header-h tablet:relative z-10' />
      <nav className='tablet:px-8 tablet:py-7 flex tablet:flex-row mobile:flex-col items-center justify-between relative z-20 bottom-[530px] '>
        <div>
            <img src={image1} className=' mobile:mb-5 tablet:mb-0' />
        </div>
        <div className=' flex'>
            <input type="text"
            className=' rounded-lg pl-3 tablet:pr-36 py-2 bg-transparent border-4 border-white text-white font-bold' 
            placeholder='search a movie'
            value={search}
            onChange={e=>setSearch(e.currentTarget.value)} />
            <button 
            className=' relative right-7'
            onClick={handleSearch}>
                <img src={image3} alt='search' />
            </button>
        </div>
        <div className=' tablet:flex items-center mobile:hidden'>
            <a href="#" className=' text-white'>Sign in</a>
            <img src={image2} alt='menu' />
        </div>
      </nav>
      <div className=' relative z-20 bottom-[530px] px-8 py-7 tablet:w-1/3 mobile:w-full'>
        <h1 className=' text-3xl font-semibold text-white'>{title}</h1>
        <div className=' text-white flex my-4 font-medium'>
            <img src={imdbicon} alt="imdbicon"  />
            <span>{vote_average}/10.0</span>
            <img src={tomatoesicon} alt="tomatoesicon" className=' ml-5' />
            <span>{percentage.toFixed(0)}%</span>
        </div>
        <div>
            <p className=' text-white font-medium mb-2 '>{overview}</p>
            <button className=' flex text-white font-semibold bg-pink-600 rounded-lg px-5 py-2'>
                <img src={playIcon} alt="play-icon" srcset="" />
                watch trailer
            </button>
        </div>
      </div>
      
    </header>
  )
}


