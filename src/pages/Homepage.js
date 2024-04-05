import React from "react";

//Custom Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "antd";
import BackgroundGradient from "../components/BackgroundGradient";
import { HighlightOutlined } from "@ant-design/icons";

const Homepage = () => {
  return (
    <div className="app-container">
      <BackgroundGradient />
      <Header />
      <div className="app-content">
        <div className="hero-section">
          <h1>Awaken the Spectrum</h1>
          <p>Bring Your Near-Infrared Images to Life with ChromaNirva</p>
          <Button icon={<HighlightOutlined />}>Try ChromaNirva</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
