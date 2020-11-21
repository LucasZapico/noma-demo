import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Link from "gatsby-plugin-transition-link/AniLink"
import { SideNav } from "../components/sidenav"
import Layout from "../components/layout"
import { IoIosArrowRoundForward, IoIosArrowRoundDown } from "react-icons/io"
import { BsDash } from "react-icons/bs"
import { useSpring, animated as a } from "react-spring"
import { useMeasure } from "../helpers"

const initMenu = {
  gameMenu: false,
  summerMenu: false,
}

const Featured = ({ data }) => {
  const [bind, { height }] = useMeasure()
  const [showMenu, setShowMenu] = useState(initMenu)
  const props = useSpring({
    height: showMenu.gameMenu ? height : 0,
    config: { duration: 1000 },
  })
  return (
    <div className="hero margin__y--m">
      <div>
        <div className="flex items__center justify__center justify__between--md">
          <h1 className="display color__sec">Game</h1>
          <h1 className="display margin__x--m">&</h1>
          <div className=" no-sm flex">
            <Link
              className="link link__pri lg"
              to="/reservation"
              swipe
              direction="left"
            >
              <IoIosArrowRoundForward /> Book Now
            </Link>
            <div
              className="link link__pri lg "
              onClick={() =>
                setShowMenu({ ...showMenu, gameMenu: !showMenu.gameMenu })
              }
            >
              <IoIosArrowRoundDown /> View Menu
            </div>
          </div>
        </div>
        <div className="flex items__center justify__center justify__between--md">
          <div className="flex items__center justify__between no-sm">
            <div className="hero__img ">
              <Img
                fluid={data.heroImgOne.childImageSharp.fluid}
                objectFit="contain"
              />
            </div>
            <div className="hero__img">
              <Img
                fluid={data.heroImgTwo.childImageSharp.fluid}
                objectFit="contain"
              />
            </div>
            <div className="hero__img">
              <Img
                fluid={data.heroImgThree.childImageSharp.fluid}
                objectFit="contain"
              />
            </div>
            <div className="hero__img">
              <Img
                fluid={data.heroImgFour.childImageSharp.fluid}
                objectFit="contain"
              />
            </div>
          </div>
          <h1 className="color__sec display">Forest</h1>
        </div>
        <div className=" only-sm flex justify__center">
          <Link
            className="link link__pri"
            to="/reservation"
            swipe
            direction="left"
          >
            <IoIosArrowRoundForward /> Book Now
          </Link>
          <div
            className="link link__pri"
            onClick={() =>
              setShowMenu({ ...showMenu, gameMenu: !showMenu.gameMenu })
            }
          >
            <IoIosArrowRoundDown /> View Menu
          </div>
        </div>
      </div>
      <a.div className="menu hidden margin__y--m" style={props}>
        <div {...bind} className=" ">
          <div className="flex flex__column flex__row--m">
            <div className="h5 measure">
              This is the only period of the year when meat will play a starring
              role at noma,and we will serve everything we can get our hands on:
            </div>
            <ul className="h6 margin__y">
              <li>
                <BsDash />a teal for 2
              </li>
              <li>
                <BsDash /> a goose for 4
              </li>
              <li>
                <BsDash />
                leg of moose
              </li>
              <li>
                <BsDash />
                reindeer tongue
              </li>
              <li>
                <BsDash />
                wild duck
              </li>
            </ul>
          </div>
          <div className="flex justify__between margin__y ">
            <div className="menu__img ">
              <Img
                fluid={data.heroImgOne.childImageSharp.fluid}
                objectFit="contain"
              />
            </div>
            <div className="menu__img">
              <Img
                fluid={data.heroImgTwo.childImageSharp.fluid}
                objectFit="contain"
              />
            </div>
            <div className="menu__img">
              <Img
                fluid={data.heroImgThree.childImageSharp.fluid}
                objectFit="contain"
              />
            </div>
            <div className="menu__img">
              <Img
                fluid={data.heroImgFour.childImageSharp.fluid}
                objectFit="contain"
              />
            </div>
          </div>
          <div className="flex margin__y--l flex__column flex__row--m">
            <div className="h5 measure">
              The Game and Forest Season menu will also pay homage to everything
              that grows in the forest:
            </div>
            <ul className="h6 margin__y">
              <li>
                <BsDash />
                berries
              </li>
              <li>
                <BsDash />
                mushrooms
              </li>
              <li>
                <BsDash />
                nuts
              </li>
              <li>
                <BsDash />
                and all of the wild plants
              </li>
            </ul>
          </div>
          <h5 className="measure">
            It’s of course also the harvest season, so truly one of the most
            bountiful moments of the year. This season will be a celebration of
            autumnal abundance.
          </h5>
        </div>
      </a.div>
    </div>
  )
}

const HomePage = ({ data }) => {
  const docs = data.docs.edges
  const [bind, { height }] = useMeasure()
  const [showMenu, setShowMenu] = useState(initMenu)
  const props = useSpring({
    height: showMenu.summerMenu ? height : 0,
    config: { duration: 1000 },
  })

  return (
    <Layout>
      <div className="page w__100 w__80--lg center padding__all">
        <div className="margin__y--l">
          <Featured data={data} />
          {/* <h4 className="uppercase strong">
            Menu <IoIosArrowRoundDown />
          </h4> */}
          <div className=" card  padding__y--m">
            <div className="flex flex__column flex__row--md justify__between items__center">
              <div>
                <h3 className="uppercase">Summer Season</h3>
                <h5 className="">July 9th - October 3rd</h5>
              </div>
              <div className="flex margin__y">
                <Link
                  className="link link__pri"
                  to="reservation"
                  swipe
                  direction="right"
                >
                  <IoIosArrowRoundForward /> Book Now
                </Link>
                <div
                  className="link link__pri "
                  onClick={() =>
                    setShowMenu({
                      ...showMenu,
                      summerMenu: !showMenu.summerMenu,
                    })
                  }
                >
                  <IoIosArrowRoundDown /> View Menu
                </div>
              </div>
            </div>
            <a.div className="menu hidden margin__y--m" style={props}>
              <div {...bind} className=" ">
                <div className="flex">
                  <div className="h6 measure">
                    Usually during the summer months, we would be serving our
                    vegetable season menu. Instead, this summer, we will reopen
                    with a menu that celebrates the best of what we’ve offered
                    these past two years. This also gives us the chance to work
                    with, and support, as many people in our supply network as
                    possible. So, alongside the best of what’s to offer from the
                    plant kingdom, expect to find a piece of grilled seafood and
                    perhaps a cut of meat on the menu during this period (we can
                    of course accommodate dietary restrictions).
                  </div>
                </div>
                <div className="flex justify__between margin__y">
                  <div className="menu__img ">
                    <Img
                      fluid={data.sumImgOne.childImageSharp.fluid}
                      objectFit="contain"
                    />
                  </div>
                  <div className="menu__img">
                    <Img
                      fluid={data.sumImgTwo.childImageSharp.fluid}
                      objectFit="contain"
                    />
                  </div>
                  <div className="menu__img">
                    <Img
                      fluid={data.sumImgThree.childImageSharp.fluid}
                      objectFit="contain"
                    />
                  </div>
                  <div className="menu__img">
                    <Img
                      fluid={data.sumImgFour.childImageSharp.fluid}
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
            </a.div>
          </div>
          {/* <div className="flex card  justify__between  items__center padding__y--m">
            <div>
              <h3 className="uppercase">Winter Season</h3>
              <h5 className="">October 3rd - July 9th</h5>
            </div>
            <div className="flex">
              <Link
                className="link link__pri"
                to="reservation"
                swipe
                direction="right"
              >
                <IoIosArrowRoundForward /> Book Now
              </Link>
              <Link
                className="link link__pri"
                to="reservation"
                swipe
                direction="right"
              >
                <IoIosArrowRoundForward /> View Menu
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    heroImgOne: file(
      relativePath: { eq: "brooke-lark-1Rm9GLHV0UA-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 350) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    heroImgTwo: file(
      relativePath: { eq: "brooke-lark-M4E7X3z80PQ-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 350) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    heroImgThree: file(
      relativePath: { eq: "cayla1-w6ftFbPCs9I-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 350) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    heroImgFour: file(
      relativePath: { eq: "dragne-marius-ennARkXrF74-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 350) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sumImgOne: file(relativePath: { eq: "summer/001.png" }) {
      childImageSharp {
        fluid(maxWidth: 450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sumImgTwo: file(relativePath: { eq: "summer/004.png" }) {
      childImageSharp {
        fluid(maxWidth: 450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sumImgThree: file(relativePath: { eq: "summer/009.png" }) {
      childImageSharp {
        fluid(maxWidth: 450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sumImgFour: file(relativePath: { eq: "summer/007.png" }) {
      childImageSharp {
        fluid(maxWidth: 450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    docs: allMarkdownRemark {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            categories
            description
            path
            date_created
          }
        }
        next {
          id
        }
        previous {
          id
        }
      }
    }
  }
`
