import React, { useState } from "react";
import styled from "styled-components";
import MultiItemCarousel01 from "./MultiItemCrousel01";
import MultiItemCarousel02 from "./MultiItemCrousel02";
import MultiItemCarousel03 from "./MultiItemCrousel03";
import MultiItemCarousel04 from "./MultiItemCrousel04";
import Galleryrvk from "./Galleryrvk.png";
import "./Gallery.css";

const Image = styled.img`
  width: 100%;
  height: 400px;
  align-items: center;
`;

const Div = styled.div`
  color: #d9d9d;
`;

function Gallery() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // Submit form data to server
  }

  return (
    <div>
      {" "}
      <div className="eventallimage">
        <Image src={Galleryrvk} />
      </div>
      <div className="gallery097">
      <div className="latest">
        <div className="lat1">Media Gallery</div>
        <MultiItemCarousel01 />
        <div className="break"></div>
        <div className="lat1">Glimpses</div>
        <MultiItemCarousel02 />
        <div className="break"></div>
        <div className="lat1">TV Interviews</div>
        <MultiItemCarousel03 />
        <div className="break"></div>
        <div className="lat1">Radio Interviews</div>
        <MultiItemCarousel04 />
        <div className="break"></div>
      </div></div>
    </div>
  );
}

export default Gallery;
