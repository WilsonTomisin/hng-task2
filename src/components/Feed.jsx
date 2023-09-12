import React,{ useState, useEffect} from 'react'
import { fetchData } from '../constants/fetchData'
import { IoIosArrowForward} from 'react-icons/io';
import imdbicon from '../assets/imdb.svg'
import tomatoesicon from '../assets/tomato.svg'
import '../App.css'

export const Feed = () => {
    const [movies, setmovies] = useState([])

    useEffect(()=>{
        fetchData('3/movie/top_rated?language=en-US&page=1').then(data=>{
            // console.log(data)
            const {results} = data
            setTimeout(()=>(
                setmovies(results)
            ),2000)
        }).catch(e=> console.log(e))
    },[movies])
    console.log(movies)
  return (
    <div className='px-8 py-7'>
        <div className=' flex justify-between'>
            <h1 className=' text-4xl font-bold '>Featured Movie</h1>
            <h2 className='flex items-center justify-between text-2xl font-semibold text-pink-600'>
                <span>see more</span>
                <IoIosArrowForward/> 
            </h2>
        </div>
        <div className=' grid grid-cols-4 gap-4 py-16'>
            {movies.length > 0 ? movies.map((item,index)=>{
                const posterPath = item.poster_path
                const posterUrl = `https://image.tmdb.org/t/p/w200${posterPath}`
                const percentage = item.vote_average/0.1
                console.log(posterUrl)
                return(
                    index < 10 
                    && 
                    <div key={index} className=' px-5'>
                        <img src={posterUrl} alt={item.title + ' picture'} className=' rounded-lg w-full' />
                        <p className=' text-sm text-slate-500 font-medium my-3'>release date: {item.release_date}</p>
                        <h1 className=' text-2xl font-semibold '>{item.title}</h1>
                        <div className=' text-black font-medium text-sm flex my-4'>
                            <img src={imdbicon} alt="imdb"  />
                            <span>{item.vote_average}/10.0</span>
                            <img src={tomatoesicon} alt="tomatoes" className=' ml-5' />
                            <span>{percentage.toFixed(0)}%</span>
                        </div>
                    </div>
                )
            }): <div class="loader-container">
                    <div class="loader"></div>
                    <span className=' font-medium text-blue-500'>loading movies...</span>
                </div>}
        </div>
    </div>
  )
}

