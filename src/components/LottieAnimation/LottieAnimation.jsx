import lottie from "lottie-web";
import { useRef, useEffect } from "react";
import spaceAnimation from "../../assets/web-design-animation.json";

const LottieAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: spaceAnimation,
    });

    return () => {
      anim.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "45%",
        position: 'relative',
        zIndex: "-1",
        left: "55%",
        opacity: "0.5",
        filter: "grayscale(20%)",
      }}
    />
  );
};

export default LottieAnimation;
