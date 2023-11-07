import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function Nav() {
  const [isActive, setIsActive] = useState(false);
  const [scroll, setScroll] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });

    window.addEventListener("click", function clickOutside(event) {
      let get = document.getElementById("nav");
      let item1 = document.getElementById("navItem1");
      let item2 = document.getElementById("navItem2");
      let item3 = document.getElementById("navItem3");
      let item4 = document.getElementById("navItem4");
      if (!get.contains(event.target)) {
        setIsActive(false);
      }
      if (
        item1.contains(event.target) ||
        item2.contains(event.target) ||
        item3.contains(event.target) ||
        item4.contains(event.target)
      ) {
        setIsActive(false);
      }
    });
  }, []);

  return (
    <header className={scroll ? "blur-header header" : "header"} id="header">
      <nav id="nav" className="nav container">
        <NavLink to="/" className={"nav__logo"}>
          Tinero Voyage
        </NavLink>

        <div
          className={isActive ? "nav__menu show-menu" : "nav__menu"}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                id="navItem1"
                to="/"
                className={
                  pathname === "/" ? "nav__link active-link" : "nav__link"
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink
                id="navItem2"
                to="/excursions"
                className={
                  pathname === "/excursions"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                Excursii
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink
                id="navItem3"
                to="/frequentQuestions"
                className={
                  pathname === "/frequentQuestions"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                Întrebări frecvente
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink
                id="navItem4"
                to="/comeToOurTeam"
                className={
                  pathname === "/comeToOurTeam"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                Vino în echipa noastră
              </NavLink>
            </li>
          </ul>
          <div className="nav__close" id="nav-close">
            <i onClick={() => setIsActive(false)} className="ri-close-line"></i>
          </div>
        </div>
        <div className="nav__toggle" id="nav-toggle">
          <i onClick={() => setIsActive(true)} className="ri-menu-line"></i>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
