import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import Youtube from 'react-youtube'
import { imageUrl } from '../../constants/constants'
import { API_KEY } from '../../constants/constants'
function RowPost(props) {
 const [movies, setMovies] = useState([])
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      // console.log(response.data)
      setMovies(response.data.results)
    }).catch(error=>{
      console.log('err')
    })
  },[])
const [urlId,setUrlId]=useState('')
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
   const [trailerScreen, setTrailerScreen] = useState(false)
  const handleMovie=(id)=>{
 axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then((response)=>{
  if(response.data.results.length !== 0){
     setUrlId(response.data.results[0])
     setTrailerScreen(true)
  }else{

  }
 })
  }
  return (

    <div className='row'>
         <h2>{props.title}</h2>
         <div className='posters'>
      {
        movies.map((obj)=>(

          <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ?'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
        ))
      }
           
         </div>
       { trailerScreen &&  (
              <div className="overlay">
                <div style={{width:'80%'}}>
                  <Youtube opts={opts} videoId={urlId.key}/>
                  <button className='close-button' onClick={()=>{setTrailerScreen(false)}}>Close</button>
                </div>
              </div>)} 
    </div>
  )
}

export default RowPost