import React from "react";
import Styles from "./Reason.module.scss";
import SectionHeader from "./SectionHeader";

import data from "../constants/sponsor";
import SponsorCard from "./SponsorCard";

const Reason = () => {
  return (
    <section id="grid-section" className={Styles["service-section"]}>
      <SectionHeader color="#f05" heading="Our" along="SPONSORS" />
      <div className="sponsor-list">
        {data.map((sponsor, i) => (
          <SponsorCard key={i} {...sponsor} />
        ))}
      </div>
    </section>
  );
};

export default Reason;
