import { useEffect, useState } from "react";

const IS_MOBILE_BREAKPOINT = 768;

const useScreenSize = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= IS_MOBILE_BREAKPOINT;

  return { isMobile };
};

export default useScreenSize;
