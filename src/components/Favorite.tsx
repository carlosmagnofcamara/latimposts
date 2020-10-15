import React, { useState, useEffect } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { IconButton } from "@material-ui/core";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import { SocialMedias } from "./styles";

const Favorite = (props: any) => {
  
  const [fav, setFav] = useState(false);
  const favorite = (id: number) => {
    localStorage.setItem(`fav${id}`, (true).toString());
    setFav(true);
    if (fav) {
      setFav(false);
      console.log(fav);
      localStorage.removeItem(`fav${id}`);
    }
  };
  const checkFavs = () => {
    const check: any = localStorage.getItem(`fav${props.id}`);
    setFav(check?check:null);
  };

  useEffect(() => {
    checkFavs();
  }, []);

  return (
    <>
    <SocialMedias>
    <IconButton
          aria-label="add to favorites"
          onClick={() => favorite(props.id)}
        >
          {fav ? (
            <>
              <FavoriteIcon color="secondary" /> 
            </>
          ) : (
            <>
              <FavoriteIcon /> 
            </>
          )}
        </IconButton>
        <FacebookShareButton
          url={`https://latimposts.herokuapp.com/posts/${props.id}`}
        >
          <FacebookIcon size={40} round={true} /> 
        </FacebookShareButton>

        <TwitterShareButton
          url={`https://latimposts.herokuapp.com/posts/${props.id}`}
        >
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>
    </SocialMedias>
    </>
  );
};
export default Favorite;
