import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

export default (props) => {
  return (
      <>
      <CssBaseline />
      <Container maxWidth="lg">
        {props.children}
      </Container>
      </>
  );
}