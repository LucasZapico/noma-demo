import React, { useState } from "react"
import Link from "gatsby-plugin-transition-link/AniLink"
import { IoIosArrowRoundForward, IoIosMenu, IoIosClose } from "react-icons/io"
import { useSpring, animated as a } from "react-spring"

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false)
  const props = useSpring({
    height: showMenu ? "100%" : "0%",
    config: { duration: 1000 },
  })
  return (
    <div className="nav__container w__100">
      <nav className="nav  flex justify__between  items__center">
        <div className="nav__mark nav__item">
          <Link className="" to="/" swipe direction="left">
            <img className="mark" src="noma-mark.png" />
          </Link>
        </div>
        <div
          onClick={() => setShowMenu(!showMenu)}
          className="h5 nav__item margin__right--m"
        >
          {!showMenu ? <IoIosMenu /> : <IoIosClose />}
        </div>
      </nav>

      <a.div style={props} className="nav menu w__100">
        <div className="flex flex__column padding__y--l">
          <Link
            className="link color__sec uppercase h4"
            to="/"
            swipe
            direction="left"
            onClick={() => setShowMenu(!showMenu)}
          >
            home <IoIosArrowRoundForward />
          </Link>
          <Link
            onClick={() => setShowMenu(!showMenu)}
            className="link uppercase h4"
            to="/reservation"
            swipe
            direction="right"
          >
            Reservations <IoIosArrowRoundForward />
          </Link>
          <Link
            className="link uppercase h4"
            to="/contact"
            onClick={() => setShowMenu(!showMenu)}
            swipe
            direction="right"
          >
            Contact <IoIosArrowRoundForward />
          </Link>
        </div>
      </a.div>
    </div>
  )
}

export default Navigation
