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
      <div className="page w__100 w__80--lg center">
        <div className="flex flex__column flex__row--md justify__between margin__y--m">
          <div>
            <h1 className="uppercase color__sec h2">Reservation</h1>
            <h4 className="strong uppercase margin__bottom--m">
              Game & Forest
            </h4>
          </div>
          <Link className="link link__pri lg" to="/" swipe direction="right">
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

        <div className="card margin__y--l">
          {/* <form onSubmit={handleSubmit(onSubmit)}>
          
            <input name="guest" defaultValue="test" ref={register} />

          
            <input name="data" ref={register({ required: true })} />
          
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="Search" />
          </form> */}
        </div>
      </div>
    </Layout>
  )
}

export default ReservationPage
