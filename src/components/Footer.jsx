import { Button } from "@material-ui/core";
import React from "react";

const Footer = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);
    }
  return (
      <nav style={{textAlign: 'center', margin: '20px 0px'}}>
              {pageNumbers.map((element)=>{
                  return <Button key={element} color="primary" onClick={()=> paginate(element)}>{element}</Button>
              })}
      </nav>
  );
};
export default Footer;