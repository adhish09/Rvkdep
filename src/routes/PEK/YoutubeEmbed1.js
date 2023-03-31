import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed1 = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="330"
      height="250"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed1.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed1;