import React, { useEffect, useState } from "react";
// import ig from "../assets/images/social/ig.svg";

export default function PatronCard(props) {
  const [img, setImg] = useState(null);
  useEffect(() => {
    import(`../assets/faculty/${props.photo}`)
      .then((module) => {
        setImg(module.default);
      })
      .catch((error) => {
        console.error("Error loading image:", error);
      });
  }, [props]);

  return (
    <div data-aos="fade-up" className="member-card">
      <img className="member-photo" src={img} alt="" />
      <p className="designation2">{props.designation}</p>
      <p className="member-name">{props.name}</p>
    </div>
  );
}
