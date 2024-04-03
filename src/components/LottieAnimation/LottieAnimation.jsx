import lottie from "lottie-web";
import { useRef, useEffect, useState } from "react";
import spaceAnimation from "../../assets/web-design-animation.json";

const LottieAnimation = () => {
  const containerRef = useRef(null);
  const [animationInstance, setAnimationInstance] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!initialLoadComplete) {
      setInitialLoadComplete(true);
      return;
    }

    if (windowWidth > 900 && !animationInstance) {
      const anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: spaceAnimation,
      });
      setAnimationInstance(anim);
    } else if (windowWidth <= 900 && animationInstance) {
      animationInstance.destroy();
      setAnimationInstance(null);
    }
  }, [windowWidth, animationInstance, initialLoadComplete]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "18.5rem",
        zIndex: "-999",
        opacity: "0.7",
        display: windowWidth > 900 ? "block" : "none",
      }}
    />
  );
};

export default LottieAnimation;
