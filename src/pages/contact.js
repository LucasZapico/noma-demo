import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Link from "gatsby-plugin-transition-link/AniLink"
import { useForm } from "react-hook-form"
import { BsDash } from "react-icons/bs"
import { IoIosArrowRoundBack } from "react-icons/io"
import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout>
      <div className="page w__100 w__80--lg center padding__all">
        <div className="flex justify__between--md justify__center  flex__column flex__row--md margin__y--m ">
          <div>
            <h1 className="uppercase color__sec">Contact</h1>
          </div>
          <Link
            className="link link__pri lg"
            to="/"
            swipe
            top="entry"
            direction="right"
          >
            <IoIosArrowRoundBack /> Back Home
          </Link>
        </div>
        <div className="flex card  justify__start flex__column flex__row--md  items__center padding__y--m">
          <h5 className=" strong">Opening Hours:</h5>
          <h5 className="margin__left--m">
            Tuesday -Friday, 17:00 - 00:00, Saturday 11:30 - 19:00
          </h5>
        </div>
        <div className="flex card  justify__start flex__column flex__row--md items__center padding__y--m">
          <h5 className=" strong">5 3296 3297</h5>
          <h5 className="margin__left--m">
            (the phone line is open between Monday - Friday, 11:00 - 16:00)
          </h5>
        </div>
        <div className="flex card  justify__start flex__column flex__row--md items__center padding__y--m">
          <h5 className=" strong">noma@noma.dk</h5>
          <h5 className="margin__left--m">
            (Please note that we don't take reservations through this e-mail
            address)
          </h5>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
