import React,{ useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../constants/fetchData';
import imdbicon from '../assets/imdb.svg'
import tomatoesicon from '../assets/tomato.svg'

export const MovieDetails = () => {
    const [ movieDetails, setmovieDetails] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        fetchData(`/3/movie/${id}`).then(data=>{
          setmovieDetails(data)
        })
    },[id])
    console.log(movieDetails);
    const { title,backdrop_path,poster_path,runtime, release_date, overview,genres, vote_average} = movieDetails 
    const posterUrl = `https://image.tmdb.org/t/p/w200${poster_path}`
    const backDropUrl = `https://image.tmdb.org/t/p/w500${backdrop_path}`
    const percentage = vote_average/0.1
  return (
    <div className=' w-auto h-auto text-black'>
      
      <img src={backDropUrl} alt={`${title} image`} className=' mobile:w-full h-80' />
      <div className=' py-10 tablet:px-8 flex justify-between'>
        <div className=' w-3/4 tablet:text-left px-5'>
            <h1 className=' text-3xl font-bold pb-3' data-testid='movie-title'>{title}</h1>
            <h3 className=' text-base font-semibold text-gray-500' data-testid= 'movie-runtime'> Runtime: {runtime}m</h3>
            <p className=' text-lg font-medium  py-3' data-testid= 'movie-overview'>
              {overview}
            </p>
            <h3 className=' text-sm font-semibold text-gray-500' data-testid='movie-release-date'> 
              Release date: {release_date}
            </h3>
            <div className=' font-medium text-sm flex my-4'>
                <img src={imdbicon} alt="imdb"  />
                <span>{vote_average}/10.0</span>
                <img src={tomatoesicon} alt="tomatoes" className=' ml-5' />
                <span>{percentage.toFixed(0)}%</span>
            </div>
            <div>
              <span className=' mr-3 font-medium'>Genres:</span>
              {genres?.map((item,index)=>{
                // const margin = index == 1 ? 'mx-4' : '';
                return (
                <span key={item.id} className={`tablet:mx-4 tablet:inline-block mobile:block border-2 border-black rounded-lg px-4 py-1`} >
                  {item.name}
                </span>
                )
              })}
            </div>
            
        </div>
        <div className=' mobile:hidden tablet:inline-block w-1/4 '>
            <img src={posterUrl} alt="" className=' rounded-lg w-full' />
            
        </div>
      </div>

    </div>
  )
}


