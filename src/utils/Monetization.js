import { useEffect, useState } from "react";

export const Monetization = () => {
  const [Monetized, setMonetized] = useState(false);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    if (!document.monetization) {
      setLoading(false);
      setMonetized(false);
      return null;
    }

    if (document.monetization.state === "stopped") {
      setLoading(false);
      setMonetized(false);
    }

    document.monetization.addEventListener("monetizationstart", () => {
      setMonetized(true);
      setLoading(false);
    });
  }, []);

  return { Monetized, Loading };
};
