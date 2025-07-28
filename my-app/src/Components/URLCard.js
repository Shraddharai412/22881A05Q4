import React from "react";

const URLCard = ({ shortUrl }) => {
  return (
    <div>
      <h3>Shortened URL:</h3>
      <a href={shortUrl} target="_blank" rel="noopener noreferrer">
        {shortUrl}
      </a>
    </div>
  );
};

export default URLCard;
