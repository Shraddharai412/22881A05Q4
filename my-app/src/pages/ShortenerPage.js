import React, { useState } from "react";
import URLForm from "../Components/URLForm";
import URLCard from "../Components/URLCard";

const ShortenerPage = () => {
  const [shortUrl, setShortUrl] = useState(null);

  return (
    <div>
      
      <URLForm onShorten={setShortUrl} />
      {shortUrl && <URLCard shortUrl={shortUrl} />}
    </div>
  );
};

export default ShortenerPage;
