import { useState, useEffect } from "react";
import "./ScrollTop.css";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button className="scroll-top" onClick={scrollToTop}>
          <i class="ri-arrow-up-s-line"></i>
        </button>
      )}
    </>
  );
};

export default ScrollTop;
