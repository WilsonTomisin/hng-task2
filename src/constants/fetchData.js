import axios from "axios";

const dataUrl = 'https://api.themoviedb.org' ;

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2NiMGFmNGJkNTZjOTUwNGViMDY5ODgxMThiMDZlNCIsInN1YiI6IjY0ZmYwMmZiNmEyMjI3MDBlMGYxOTA4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6x8TBz9jZR67mHQk3KUhyOCPtbWpvE-EKiD11l_Splw'
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