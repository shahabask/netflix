import './Banner.css'
import axios from '../../axios'
import { API_KEY ,imageUrl} from '../../constants/constants'
import React, { useEffect } from 'react'
import { useState } from 'react'

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(()=>{
     axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      // console.log(response.data.results[0])
      let i=Math.floor(Math.random() * 21)
      setMovie(response.data.results[i])
      // console.log(movie)
     })
  },[])
  return (
    
    <div
    style={{backgroundImage:`url(${movie ? imageUrl + movie.backdrop_path : ''})`}} className='banner'>
       <div className='content'>
        <h1 className='title'>{movie ?movie.title:''}</h1>
        <div className='banner-buttons'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>


        </div>
        <h1 className='description'>{movie ? movie.overview : '' }</h1>
       </div>
       <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner;