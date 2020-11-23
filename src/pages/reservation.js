import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Link from "gatsby-plugin-transition-link/AniLink"
import { useForm } from "react-hook-form"
import { BsDash } from "react-icons/bs"
import { IoIosArrowRoundBack } from "react-icons/io"
import Layout from "../components/layout"

const ReservationPage = () => {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <Layout>
      <div className="page w__100 w__80--lg center padding__all">
        <div className="flex flex__column flex__row--md justify__between margin__y--m ">
          <div>
            <h1 className="uppercase color__sec h2">Reservation</h1>
            <h4 className="strong uppercase margin__bottom--m">
              Game & Forest
            </h4>
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
        <p className="body__lg measure">
          This menu will be celebration of fall abundance and the period of the
          year when meant will play a starring role at noma. You can expect the
          experience to last between two and three hours.
        </p>
        <p className="body__lg measure">
          A juice or wine pairing is not include in the menu price, but will be
          available on the day. All prices include 25% sales tax.
        </p>

        <p className="body__lg">
          <BsDash />
          Prepaid reservation for parties of 2 to 8
        </p>
        <p className="body__lg">
          <BsDash />
          DKK 2,800 per person
        </p>

        <div className="card padding__y--m">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w__50">
              <label className="db">Guests</label>
              <select name="Guests" ref={register}>
                <option value="1">one</option>
                <option value="2">two</option>
                <option value="3">three</option>
              </select>
            </div>
            <label>Group</label>
            <select name="Group" ref={register}>
              <option value="10:30">10:30</option>
              <option value="12:30">12:30</option>
              <option value="13:30">13:30</option>
            </select>
            <input
              name="reservationName"
              defaultValue="reservations name"
              ref={register({ required: true })}
            />

            {errors.reservationName && <span>This field is required</span>}

            <input type="submit" value="search" />
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default ReservationPage
