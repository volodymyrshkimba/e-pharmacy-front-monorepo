import { useEffect, useState } from "react";

export const useIsTablet = () => {
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const onResize = () => setIsTablet(window.innerWidth >= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return isTablet;
};
