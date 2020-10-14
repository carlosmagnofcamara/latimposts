import React from "react";
import { AppBar, Button, NavTitle, StyledLink } from './styles';

const Header = (props) => {
  const changePageComment = () =>{
    localStorage.removeItem('pageComment')
  }
  return (
    <div>
      <AppBar>
        <NavTitle>
        {props.titulo}
        </NavTitle>
      
    {props.bool ? (
      <StyledLink to='/' primary>
      <Button color="inherit" onClick={()=>changePageComment()}>
          Back
        </Button>
        </StyledLink>
    )
  :
  (
    false
  )}
</AppBar>
    </div>
  );
};
export default Header;
