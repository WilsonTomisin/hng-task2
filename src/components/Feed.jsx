import React,{ useState, useEffect} from 'react'
import { fetchData } from '../constants/fetchData'
import { IoIosArrowForward} from 'react-icons/io';
import { AiFillHeart} from 'react-icons/ai';
import imdbicon from '../assets/imdb.svg'
import tomatoesicon from '../assets/tomato.svg'
import '../App.css'
import { Link } from 'react-router-dom';

export const Feed = () => {
    const [movies, setmovies] = useState([]);
    const [updatedMovies, setupdatedMovies] = useState(movies)
    const [favouritedMovie, setfavouritedMovie] = useState('')

    useEffect(()=>{
        fetchData('3/movie/top_rated?language=en-US&page=1').then(data=>{
            const {results} = data
            setTimeout(()=>(
                setmovies(results)
            ),2000)
        
        }).then(()=>{
            setupdatedMovies( movies.map((item)=>{
                return{
                    ...item,
                    isFavourite: false
                }
            }))
        }).catch(e=> console.log(e))
    },[movies,updatedMovies])
    // console.log(updatedMovies);
    const handleFav =(itemId)=>{
        const newMovie = updatedMovies.map((item)=>(
            itemId === item.id ? { ...item , isFavourite: !item.isFavourite} : item
        ))
        setupdatedMovies(newMovie)
    }
    
  return (
    <div className='px-8 py-7 '>
        <div className=' flex justify-between'>
            <h1 className=' text-4xl font-bold '>Featured Movie</h1>
            <h2 className='flex items-center justify-between text-2xl font-semibold text-pink-600'>
                <span>see more</span>
                <IoIosArrowForward/> 
            </h2>
        </div>
        <div className=' grid laptop:grid-cols-4 tablet:grid-cols-3 gap-4 py-16'>
            {updatedMovies.length > 0 ? movies.map((item,index)=>{
                const posterPath = item.poster_path
                const posterUrl = `https://image.tmdb.org/t/p/w200${posterPath}`
                const percentage = item.vote_average/0.1
                const favourite = item.title == favouritedMovie ? ' text-red-700' :'text-gray-700'
                
            
                return(
                    index < 10 
                    && 
                    <div key={item.id} className=' px-5 duration-150 ease-in-out hover:scale-110' data-testid='movie-card'>
                                              
                            <img src={posterUrl} alt={item.title + ' picture'} className=' rounded-lg w-full' data-testid='movie-poster' />
                            <AiFillHeart className={` favourite-btn ${favourite} hover:animate-pulse text-4xl`} onClick={()=>setfavouritedMovie(item.title)}/>
                        <Link to={`/movie/${item.id}`}> 
                            <p className=' text-sm text-slate-500 font-medium my-3' data-testid='movie-release-date'>
                                release date: {item.release_date}
                            </p>
                            
                                <h1 className=' text-2xl font-semibold ' data-testid='movie-title' >{item.title}</h1>
                                <div className=' text-black font-medium text-sm flex my-4'>
                                    <img src={imdbicon} alt="imdb"  />
                                    <span>{item.vote_average.toFixed(1)}/10.0</span>
                                    <img src={tomatoesicon} alt="tomatoes" className=' ml-5' />
                                    <span>{percentage.toFixed(0)}%</span>
                                </div>
                        </Link>
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

