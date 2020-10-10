import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/content/Index";
import Container from "./Container";
import "./App.css";

function App() {
  return (
    <>
      <Container>
        <Content />
      </Container>
    </>
  );
}

export default App;
