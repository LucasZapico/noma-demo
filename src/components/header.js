import PropTypes from "prop-types"
import React, { useState } from "react"
import { IoIosMenu, IoIosClose } from "react-icons/io"
import Navigation from "./nav"

const Header = ({ siteTitle }) => {
  return (
    <header className="">
      <Navigation />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "",
}

export default Header
