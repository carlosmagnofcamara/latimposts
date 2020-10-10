import { Button } from "@material-ui/core";
import React, { useState } from "react";

const Footer = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);
    }
  return (
      <nav style={{textAlign: 'center', margin: '20px 0px'}}>
              {pageNumbers.map((element)=>{
                  if(element === Number(localStorage.getItem('page'))){
                    return <Button key={element} color="primary" variant='outlined' onClick={()=>paginate(element)}>{element}</Button>
                  }
                  return <Button key={element} color="primary" onClick={()=>paginate(element)}>{element}</Button>
              })}
      </nav>
  );
};
export default Footer;