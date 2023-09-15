import React,{ useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { BsDot} from 'react-icons/bs';
import { IoIosArrowDown} from 'react-icons/io'
import { fetchData } from '../constants/fetchData';
import { FetchData2 } from '../constants/fetchData';
import {IoTicketSharp} from 'react-icons/io5'
import { TfiMenuAlt} from 'react-icons/tfi'
import logout from '../assets/Logout.svg'
import ReactPlayer from 'react-player';
import { sideBarLinks } from '../constants/constants';
import logo from "../assets/Logo.svg"
import { AiFillStar} from 'react-icons/ai'

export const MovieDetails = () => {
    const [ movieDetails, setmovieDetails] = useState([])
    const [selected, setSelected] = useState('Movies')
    const [youtubeId, setyoutubeId] = useState('')
    const {id} = useParams()

    useEffect(()=>{
        fetchData(`/3/movie/${id}`).then(data=>{
          setmovieDetails(data)
        }).catch(e=>console.log(e))
        
    },[id])

    useEffect(()=>{
      FetchData2(`search?q=${movieDetails.title} trailer&part='snippet,id'`).then(data=>{
        console.log(data);
        // console.log(data.items[0].id.videoId);
        console.log(movieDetails.title);
        const{items}= data
      
        setyoutubeId(items[0].id.videoId)
      })
    },[movieDetails])
    // console.log(movieDetails);
    const { title,backdrop_path,poster_path,runtime, release_date, overview,genres, vote_average} = movieDetails 
    const posterUrl = `https://image.tmdb.org/t/p/w200${poster_path}`
    // const backDropUrl = `https://image.tmdb.org/t/p/w500${backdrop_path}`
    // const percentage = vote_average/0.1
    // const isAdded = isFavourite == true ? ' text-red-600 animate-pulse' : 'text-slate-500'
    // const favouriteText = isFavourite == true ? 'added to favourites' : 'add to favourites'
  return (
    
    <div className=' flex justify-between    '>
      <div className=' laptop:w-1/4 mobile:w-2/5 border-r-4 border-gray-500  py-12 rounded-3xl text-gray-600 '>
        <img src={logo} alt="site-logo" className=' bg-slate-600 py-3 laptop:ml-5 px-2 rounded-lg' />
        <div className=' py-7  '>
          {sideBarLinks.map((item,index)=>{
            const selectedText = selected == item.name ? 'isSelected bg-pink-200 text-pink-800' : ''
            return(
              <div key={index}
              className={` cursor-pointer duration-150 ease-in-out transition-all
              ${selectedText}
              flex items-center 
              px-5 py-3 my-5 font-semibold 
              laptop:text-lg mobile:text-sm `}
              onClick={()=>{
                setSelected(item.name)
              }}>
                <img src={item.icon} alt={item.name+' icon'} className=' mr-4' />
                <span>{item.name}</span>
              </div>
            )
          })}
        </div>
        <div className=' bg-pink-100 border-2 border-pink-700 p-5 laptop:mx-5 mobile:mx-2 rounded-xl text-left'>
            <h1 className=' text-lg font-medium'>Play movie quizes and earn free tickets</h1>
            <span className=' text-xs font-medium'> 50k people are playing now</span>
            <button className=' text-pink-900 text-xs font-semibold bg-pink-300 px-2 py-1 rounded-xl'> start playing now </button>
        </div>
        <div className=' flex items-center py-5 font-semibold text-lg laptop:mx-5 mobile:mx-2'>
          <img src={logout} alt="logout icon" />
          <span>Log out</span>
        </div>
      </div>
      <div className=' laptop:w-3/4'>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${youtubeId}`} controls className=' react-player' />
        <div className=' p-7 flex justify-between laptop:flex-row mobile:flex-col'>
           <div className=' laptop:w-3/4 mobile:w-full'>
            <div className=' flex items-center laptop:flex-row mobile:flex-col  text-xl font-bold text-gray-700 pb-5'>
              <h1 data-testid='movie-title'>{title}</h1>
              <BsDot/>
              <h1 data-testid="movie-release-date">{release_date}</h1>
              <BsDot/>
              <h1> PG-13</h1>
              <BsDot/>
              <h1 data-testid="movie-runtime" > {runtime}m </h1>
              <div className=' items-center'>
                {genres?.map((item,index)=>{
                    // const margin = index == 1 ? 'mx-4' : '';
                  return (
                    <span key={item.id} className={` text-sm border-2 border-pink-800 text-pink-800 rounded-lg px-2 py-1 mx-2`} >
                      {item.name}
                    </span>
                  )
                })}
              </div>
            </div>
            <p className=' font-medium text-gray-900 leading-7' data-testid="movie-overview">
              {overview}
            </p>
            <div className=' my-8 font-semibold text-gray-900'>
              <h1 className=' mb-5'>
                Directors: <span className=' text-pink-600'>not available</span>
              </h1>
              <h1 className=' mb-5'>
                Writers: <span className=' text-pink-600'> not available</span>
              </h1>
              <h1 className=' mb-5'>
                Stars: <span className=' text-pink-600'> not available</span>
              </h1>
            </div>
            <div>
                <button className=' flex items-center justify-between border-2 border-gray-500 rounded-s-xl rounded-e-lg w-3/4 font-semibold text-gray-500'>
                  <button className=' bg-pink-800 rounded-lg  text-white px-2 py-4  font-semibold'>  Top rated movie #65 </button>
                  <span>Awards 9 nominations</span>
                  <IoIosArrowDown/>
                </button>
                
                
            </div>
           </div>
           <div className=' laptop:w-1/4 mobile:w-full mobile:mt-5'>
                <div className=' flex justify-end text-xl text-gray-600 font-semibold items-center'>
                  <AiFillStar className={` text-yellow-300 text-xl`} onClick={()=> console.log('clicked')}/>
                
                  <span className=' text-gray-400'>8.5</span>
                  |
                  <span>350k</span>
                </div>
                <button className=' px-4 py-2 w-full flex justify-center items-center my-4 bg-pink-800 text-white rounded-lg font-semibold'>
                  <IoTicketSharp/>
                  <span>See Showtimes</span>
                </button>
                <button className='px-4 py-2 w-full mb-5 flex items-center justify-center bg-pink-200 border-2 border-pink-800 rounded-lg font-semibold text-gray-700'>
                  <TfiMenuAlt/>
                  <span>More watch options</span>
                </button>
                <img src={posterUrl} alt={title+ ' image poster'} className=' rounded-lg' />
           </div>
        </div>

      </div>
    </div>
  )
}


