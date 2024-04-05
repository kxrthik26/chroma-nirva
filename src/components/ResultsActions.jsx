import React from "react";
import {
  SlidersOutlined,
  ShareAltOutlined,
  DownloadOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

const ResultsActions = () => {
  return (
    <div className="results-actions-widget">
      <Button type="text" shape="circle" icon={<SlidersOutlined />} />
      <Button type="text" shape="circle" icon={<ShareAltOutlined />} />
      <Button type="text" shape="circle" icon={<DownloadOutlined />} />
      <Button type="text" shape="circle" icon={<ReloadOutlined />} />
    </div>
  );
};

export default ResultsActions;
