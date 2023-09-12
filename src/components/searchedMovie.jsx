import React,{ useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../constants/fetchData'
import imdbicon from '../assets/imdb.svg'
import tomatoesicon from '../assets/tomato.svg'
import '../App.css'

export const SearchedMovie = () => {
    const [searchedVideos, setsearchedVideos] = useState([])
    


    const { searchTerm} = useParams()
    useEffect(()=>{
        fetchData(`/3/search/movie?query=${searchTerm}`).then(data=>{
            const { results} = data
            setTimeout(()=>setsearchedVideos(results), 4000)
            console.log(results)
        }).catch()
    },[])
  return (
    <div className=' px-11 py-6 '>
        <h1 className=' text-4xl font-bold text-blue-500 '>
             showing search results for:
              <span className=' text-red-600'> {searchTerm}</span>
        </h1>
        <div className=' grid grid-cols-4 gap-3 py-11'>
            {searchedVideos.length > 1 ? searchedVideos.map((item,index)=>{
                const posterPath = item.poster_path
                const posterUrl = `https://image.tmdb.org/t/p/w500${posterPath}`
                const percentage = item.vote_average/0.1
                return(
                    <div key={index} className=' w-48 '>
                        <img src={posterUrl} alt={`${item.title} poster`} className=' rounded-lg '  />
                        <p className=' text-sm text-slate-500 font-medium my-3 px-3'>release date: {item.release_date}</p>
                        <h1 className=' text-md font-semibold px-3'>{ item.title} </h1>
                        <div className=' text-black font-medium text-sm flex my-4 px-3'>
                            <img src={imdbicon} alt="imdb"  />
                            <span>{item.vote_average}/10.0</span>
                            <img src={tomatoesicon} alt="tomatoes" className=' ml-5' />
                            <span>{percentage.toFixed(0)}%</span>
                        </div>
                    </div>
                )
            }) :<div class="loader-container">
                    <div class="loader"> </div>
                    <span className=' font-medium text-blue-500'>loading results...</span>
                </div>}
        </div>
    </div>
  )
}

