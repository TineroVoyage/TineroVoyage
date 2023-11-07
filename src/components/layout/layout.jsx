import PropTypes from "prop-types";
import Nav from "./nav";
import Footer from "./footer";
import { useEffect, useState } from "react";

function Layout({ children }) {
  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShowScroll(window.scrollY > 350);
    });
  }, []);

  return (
    <>
      <Nav />
      {children}
      <Footer />
      <a
        href="#"
        className={showScroll ? "scrollup show-scroll" : "scrollup"}
        id="scroll-up"
      >
        <i className="ri-arrow-up-line"></i>
      </a>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
