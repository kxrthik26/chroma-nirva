import React from "react";

//Custom Components
import Header from "../components/Header";
import BackgroundGradient from "../components/BackgroundGradient";
import ResultsActions from "../components/ResultsActions";

const DisplayResult = () => {
  return (
    <div className="app-container">
      <BackgroundGradient />
      <Header />
      <div className="app-content">
        <div className="results-wrapper">
          <img alt="nir_image" />
          <img alt="colorized_image" />
        </div>
        <ResultsActions />
      </div>
    </div>
  );
};

export default DisplayResult;
