import React from "react";
import Content from "./components/content/Index";
import Container from "./Container";
import "./App.css";

const App: React.FC = () => {
  return (
      <div>
      <Container>
        <Content />
      </Container>
      </div>
  );
}

export default App;
