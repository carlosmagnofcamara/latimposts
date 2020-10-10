import React, { useState, useEffect } from "react";
import CardActions from "@material-ui/core/CardActions";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { IconButton } from "@material-ui/core";

const Favorite = (props) => {
    const [fav, setFav] = useState(false);
    const favorite = (id) => {
      localStorage.setItem(`fav${id}`, true);
        setFav(true)
        if(fav){
          setFav(false);
          console.log(fav)
          localStorage.removeItem(`fav${id}`);
        }
      }
    const checkFavs = () =>{
        setFav(localStorage.getItem(`fav${props.id}`))
    }

    useEffect(()=>{
        checkFavs()
    },[])

  return (
      <>
    <CardActions>
      <IconButton aria-label="add to favorites" onClick={() => favorite(props.id)} >
          {fav ? <>
          <FavoriteIcon color="secondary" />
          </>
           : <FavoriteIcon />} 
      </IconButton>
    </CardActions>

    </>
  );
};
export default Favorite;
