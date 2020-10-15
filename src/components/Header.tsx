import React from "react";
import { AppBar, Button, NavTitle, StyledLink } from './styles';

const Header = (props: any) => {
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
      <StyledLink 
      secondary={false}
      paginate={false}
      primary={true}
      to='/'>
      <Button 
      secondary={false}
      paginate={false}
      primary={false}
      color="inherit" onClick={()=>changePageComment()}>
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
