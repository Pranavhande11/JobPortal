import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import SearchDiv from "./Components/SearchDiv/SearchDiv";
import JobsDiv from "./Components/JobDiv/JobsDiv";
import ValueDiv from "./Components/ValueDiv/ValueDiv";
import Footer from "./Components/FooterDiv/Footer";

const App = () => {
  return (
    <div className="w-[85%] m-auto bg-white">
      <NavBar />
      <SearchDiv />
      <JobsDiv />
      <ValueDiv />
      <Footer />
    </div>
  );
};

export default App;
