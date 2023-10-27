import { useState, useEffect } from "react";
import { BSBreakpointsResizerHookParams } from "../../types/hooktypes/BSBreakpointsResizerHookParam";

export function useBSBreakpointsResizer({
  lg,
  md,
  sm,
  xl,
  xs,
  xxl,
  initialHeight,
  initialWidth,
}: BSBreakpointsResizerHookParams) {
  const [xsWidth, xsHeight] = xs;
  const [smWidth, smHeight] = sm;
  const [mdWidth, mdHeight] = md;
  const [lgWidth, lgHeight] = lg;
  const [xlWidth, xlHeight] = xl;
  const [xxlWidth, xxlHeight] = xxl;

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      console.log(window.innerWidth);
      console.log(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);

    // Prevent an endless loop.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let width, height;

  if (windowSize.width < 576) {
    // XS
    width = (initialWidth * xsWidth) / 100;
    height = (initialHeight * xsHeight) / 100;
  } else if (windowSize.width < 768) {
    // SM
    width = (initialWidth * smWidth) / 100;
    height = (initialHeight * smHeight) / 100;
  } else if (windowSize.width < 992) {
    // MD
    width = (initialWidth * mdWidth) / 100;
    height = (initialHeight * mdHeight) / 100;
  } else if (windowSize.width < 1200) {
    // LG
    width = (initialWidth * lgWidth) / 100;
    height = (initialHeight * lgHeight) / 100;
  } else if (windowSize.width < 1400) {
    // XL
    width = (initialWidth * xlWidth) / 100;
    height = (initialHeight * xlHeight) / 100;
  } else if (windowSize.width > 1400) {
    // XXL
    width = (initialWidth * xxlWidth) / 100;
    height = (initialHeight * xxlHeight) / 100;
  }

  return [width, height];
}
