import React from "react";
import img1 from "../../assert/img1.jpg";
import img2 from "../../assert/img2.jpg";
import img3 from "../../assert/img3.jpg";
import img4 from "../../assert/img4.jpg";
import img5 from "../../assert/img5.jpg";
import img6 from "../../assert/img6.jpg";
import { ImageList, ImageListItem } from "@material-ui/core";

import "./index.css";

const Gallery = () => {
  const imageList = [img1, img2, img3, img4, img5, img6];
  return (
    <div className="gallery">
      {imageList.map((item) => (
        <div className="image-item">
          <img src={item} className="item" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
