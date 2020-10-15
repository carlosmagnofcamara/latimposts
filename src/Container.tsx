import React from 'react';
import GlobalStyle from './global';

interface Props {

}

const Container: React.FC<Props> = (props) => {
  return (
      <>
      <GlobalStyle>
        {props.children} 
      </GlobalStyle>
      </>
  );
}

export default Container;