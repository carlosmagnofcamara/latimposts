import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
export default (props) => {
  return (
      <>
      <CssBaseline />
      <Container maxWidth="lg" >
        {props.children}      
      </Container>
      </>
  );
}