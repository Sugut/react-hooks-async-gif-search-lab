import React,{ useState,useEffect} from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'
const GifListContainer = () => {

    const[gif, setGif] = useState([])
    const [search, setSearch] = useState("dolphins");
    
    useEffect(()=>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=4zvn8LAsGeWzCERgjsPoT0DAJ2ubv0hk&rating=g`)
        .then((res)=>res.json())
        .then(({data})=>{
            const gifs = data.slice(0,3).map((gif) => ({ url: gif.images.original.url }));
            setGif(gifs);
            
        })
    
    },[search])


  return (
    <div style={{display:'flex',justifyContent:'space-around'}}>
     <GifList  gifs={gif} />
      <GifSearch onSubmitQuery={setSearch} />
    </div>
  )
}

export default GifListContainer