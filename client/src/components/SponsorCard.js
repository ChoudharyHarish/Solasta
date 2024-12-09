import React, { useState, useEffect } from "react";

export default function SponsorCard(props) {
  const [img, setImg] = useState(null);
  useEffect(() => {
    import(`../assets/sponsors/${props.img}`)
      .then((module) => {
        setImg(module.default);
      })
      .catch((error) => {
        console.error("Error loading image:", error);
      });
  }, [props]);

  return (
    <div data-aos="fade-up" className="sponsor-card">
      <img className="sponsor-photo" src={img} alt="" />
      <p className="designation2">{props.name}</p>
      <p className="member-name">{props.type}</p>
    </div>
  );
}
