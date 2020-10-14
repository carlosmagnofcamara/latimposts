import React from 'react';
import GlobalStyle from './global';

export default (props) => {
  return (
      <>
      <GlobalStyle>
        {props.children} 
      </GlobalStyle>
      </>
  );
}