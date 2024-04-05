import React from "react";
import BackgroundGradient from "../components/BackgroundGradient";
import Header from "../components/Header";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: false,
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const UploadImage = () => {
  return (
    <div className="app-container">
      <BackgroundGradient />
      <Header />
      <div className="app-content">
        <Dragger {...props} style={{ height: "100%" }}>
          <p>
            Drag & Drop or Click Anywhere <br /> to Upload an Image
          </p>
        </Dragger>
        <div className="upload-instructions-section">
          <div className="upload-guidelines-wrapper">
            <h5>Upload Guidelines</h5>
            <ul>
              <li>
                Ensure your NIR images are in common file formats such as JPEG
                or PNG.
              </li>
              <li>For best results, use high-resolution images.</li>
              <li>
                Avoid images with heavy distortion or artifacts for optimal
                colorization.
              </li>
            </ul>
          </div>
          <Button
            className="btn-custom-animation"
            icon={<ArrowRightOutlined />}
            iconPlacement="right"
            shape="round"
          >
            Colorize
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
