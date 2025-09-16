import { createContext,useEffect, useState } from "react";
import PropType from "prop-types";
import YouTube from "react-youtube";
import Model from "react-modal";

const customStyles = {
  overlay: {
    position: "fixed",
    zIndex: 9999,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const getVideoSize =() =>{
  if(window.innerWidth <400){
    return { height: "190", width: "290" };
  }else if(window.innerWidth < 768){
    return { height: "250", width: "400" };
  }else{
    return { height: "390", width: "640" };
  }
}
function ResponsiveYouTube({ videoId }) {
  const [opts,setOpts] = useState ({
  ...getVideoSize(),
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  }});

  useEffect(() => {
    const handleResize = () => {
      setOpts({
        ...getVideoSize(),
        playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,}
      })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  },[])
  return <YouTube videoId={videoId} opts={opts} />
}



const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [trailerKey, setTrailerKey] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleTrailer = async (id) => {
    setTrailerKey("");
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const movieKey = await fetch(url, options);
      const data = await movieKey.json();
      //   setTrailerKey(data.results[0].key);
      //   setModalIsOpen(true);
      if (data?.results?.length > 0 && data.results[0].key) {
        setTrailerKey(data.results[0].key);
        setModalIsOpen(true);
      } else {
        console.log("Không có trailer hợp lệ:", data);
        alert("Không có trailer hợp lệ");
        setModalIsOpen(false);
      }
    } catch (error) {
      setModalIsOpen(false);
      console.log(error);
    }
  };
  return (
    <MovieContext.Provider value={{ handleTrailer }}>
      {children}
      <Model
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ResponsiveYouTube videoId={trailerKey} />
      </Model>
    </MovieContext.Provider>
  );
};

MovieProvider.propTypes = {
  children: PropType.node,
};

export { MovieContext, MovieProvider };
