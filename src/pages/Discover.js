import React, { useEffect, useState } from "react";
import axios from "axios";

const Discover = () => {
  const [pics, setPics] = useState([]);
  const clientId = "fThk0qnqDvaxXfXN87YljOp57a-H6YIVmrzgvYC70fY";

  const getImages = () => {
    axios
      .get("https://api.unsplash.com/photos/", {
        params: {
          client_id: clientId,
          count: 10,
        },
      })
      .then((response) => {
        setPics(response.data);
        console.log(pics);
      });
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div>
      아ㅠ 왜 안되노
      {pics.map((image) => (
        <img src={image.urls.thumb} />
      ))}
    </div>
  );
};

export default Discover;
