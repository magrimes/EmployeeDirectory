import React from "react";
import Main from "./components/Main/Main";
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";


function App() {
  return (
  <div className="App">
    <Wrapper>
      <Header />
      <Main />
    </Wrapper>
  </div>
  );
}

export default App;