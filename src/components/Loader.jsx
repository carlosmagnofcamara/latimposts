import React from "react";
import Header from "./Header";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from '../Container';

const Loader = () => {
  return (
    <>
      <Container>
        <Header titulo={"Loading..."} bool={false} />
        <div style={{ textAlign: "center", margin: "50px" }}>
          <CircularProgress />
        </div>
      </Container>
    </>
  );
};

export default Loader;
