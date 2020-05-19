import React from "react";

import { Monetization } from "../utils/Monetization";

const Footer = () => {
  const { Loading, Monetized } = Monetization();
  let MonetizationStatus = "";
  if (Loading) {
    MonetizationStatus = "Loading for Monetization";
  } else if (Monetized) {
    MonetizationStatus = "Thanks for your Monetary Support";
  } else {
    MonetizationStatus = "Monetization Feature Available";
  }
  return (
    <span className="text-white font-weight-bold display-4 bg-secondary">
      {MonetizationStatus}
    </span>
  );
};

export default Footer;
