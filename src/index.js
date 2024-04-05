import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ConfigProvider, theme } from "antd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          fontFamily: "GeneralSans-Variable",
          colorPrimary: "808080",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
