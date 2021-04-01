import React from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import teamSearch from "./components/EmployeeSearch";


function App() {
  return (
    <Header />
    <Container>
      <EmployeeSearch />
    </Container>
  );
}

export default App;
