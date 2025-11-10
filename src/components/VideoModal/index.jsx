import React, { useState } from "react";
import Spacing from "../Spacing";
import parse from "html-react-parser";

export default function VideoModal({ videoSrc, bgUrl, title, titleVariant }) {
  const [iframeSrc, setIframeSrc] = useState("about:blank");
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setIframeSrc(videoSrc);
    setToggle(!toggle);
  };

  const handleClose = () => {
    setIframeSrc("about:blank");
    setToggle(!toggle);
  };

  return (
    <>
      {title && (
        <>
          <h2
            className={`cs_video_block_1_title cs_fs_68 text-center mb-0 ${
              titleVariant || "text-uppercase"
            }`}
          >
            {parse(title)}
          </h2>
          <Spacing
            lg="80"
            md="45"
          />
        </>
      )}

      <div
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          borderRadius: "15px",
        }}
      >
        <img
          src={bgUrl}
          alt="video background"
          onClick={handleClick}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            objectFit: "cover",
            borderRadius: "15px",
            cursor: "pointer",
          }}
        />
      </div>
    </>
  );
}
