import axios from "axios";

const dataUrl = 'https://api.themoviedb.org' ;

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2NiMGFmNGJkNTZjOTUwNGViMDY5ODgxMThiMDZlNCIsInN1YiI6IjY0ZmYwMmZiNmEyMjI3MDBlMGYxOTA4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6x8TBz9jZR67mHQk3KUhyOCPtbWpvE-EKiD11l_Splw'
    }
  };


  const dataUrl2 = 'https://youtube-v31.p.rapidapi.com'


const options2 = {
    params: {
      part: 'snippet,id',
      maxResults: '50',
      
    },
    headers: {
      'X-RapidAPI-Key': '175522c218msh23f453fa53cebaep104b68jsn5acb452ab8ba',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  

export const fetchData = async(endpoint)=>{
    try {
        const {data} = await axios.get(`${dataUrl}/${endpoint}`, options);
        return data
        
    } catch (error) {
        console.log(error)
        alert(error.message)
    }
}

export const FetchData2 = async(url)=>{
  // destructring the data instead of response.data 
  try {
    const {data} = await axios.get(`${dataUrl2}/${url}`,options2)
    return data
  } catch (error) {
    return error
  }
}