import React, { useRef } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { IoIosArrowRoundForward, IoIosRocket } from "react-icons/io"

const StyleGuidePage = () => {
  const colorsCore = useRef(null)
  const colorsGrey = useRef(null)

  if (colorsCore.current != null) {
    Array.from(colorsCore.current.children).forEach(el => {
      const hex = getStyles("background-color", el)

      function createMarkup() {
        return { __html: hex }
      }
      el.setAttribute("dangerouslySetInnerHTML", hex)
      // el.innerHTML = hex
    })
  }

  function getStyles(attribute, ref) {
    if (typeof window != "undefined") {
      const value = window.getComputedStyle(ref).getPropertyValue(attribute)
      const rgbArr = value.replace(/[a-z,(,)]/gi, "").split(" ")
      const hex = fullColorHex(rgbArr[0], rgbArr[1], rgbArr[2])
      return hex
    }
  }

  function rgbToHex(rgb) {
    const hex = Number(rgb).toString(16)
    if (hex.length < 2) {
      hex = "0" + hex
    }
    return hex
  }

  function fullColorHex(r, g, b) {
    const red = rgbToHex(r)
    const green = rgbToHex(g)
    const blue = rgbToHex(b)
    return red + green + blue
  }

  return (
    <Layout>
      <div className="page container style-guide">
        <div className="container__content style-guide">
          <h1>Style Guide</h1>
          <section className="color section">
            <h3 className="h4">Color</h3>
            <div className="core margin__all">
              <div ref={colorsCore} className="core__ratio">
                <div className="pri"></div>
                <div className="sec"></div>
                <div className="ter"></div>
                <div className="quad"></div>
              </div>
            </div>
            <div className="grey-scale margin__all">
              <div className="bg-light"></div>
              <div className="bg-grey-1"></div>
              <div className="bg-grey-2"></div>
              <div className="bg-grey-3"></div>
              <div className="bg-grey-4"></div>
              <div className="bg-grey-5"></div>
              <div className="bg-grey-6"></div>
              <div className="bg-grey-7"></div>
              <div className="bg-grey-8"></div>
              <div className="bg-dark"></div>
            </div>
          </section>
          <section className="section margin__y--l">
            <h3 className="h4">Typography</h3>
            <div className="">
              <div className="display">Display</div>
              <div className="h1">Header 1</div>
              <div className="h2">Header 2</div>
              <div className="h3">Header 3</div>
              <div className="h4">Header 4</div>
              <div className="h5">Header 5</div>
              <div className="h6">Header 6</div>
              <div className="body__lg char__readable margin__y">
                Nisi nostrud eu in ex sit culpa labore officia ut amet
                reprehenderit. Nisi magna occaecat ullamco enim aliquip ipsum
                consectetur non tempor mollit sunt id. Ut id velit ut laborum
                ipsum minim labore.
              </div>
              <div className="body char__readable margin__y">
                Nisi nostrud eu in ex sit culpa labore officia ut amet
                reprehenderit. Nisi magna occaecat ullamco enim aliquip ipsum
                consectetur non tempor mollit sunt id. Ut id velit ut laborum
                ipsum minim labore.
              </div>
              <div className="body__sm char__readable margin__y">
                Nisi nostrud eu in ex sit culpa labore officia ut amet
                reprehenderit. Nisi magna occaecat ullamco enim aliquip ipsum
                consectetur non tempor mollit sunt id. Ut id velit ut laborum
                ipsum minim labore.
              </div>
            </div>
          </section>
          <section className="section margin__y--l">
            <h3 className="h4">Buttons And Links</h3>
            <h3 className="h5">Links</h3>
            <div className="flex">
              <div className="margin__y--m">
                <Link to="/style-guide" className="link margin__right--l">
                  link default
                </Link>
                <Link to="/style-guide" className="icon__arrow link">
                  link with icon {""} <IoIosArrowRoundForward />
                </Link>
              </div>
            </div>
            <div className="flex justify__start margin__y--m">
              <Link to="/style-guide" className="link link__pri ">
                link Primary
              </Link>
              <Link to="/style-guide" className="icon__arrow link link__pri ">
                <IoIosArrowRoundForward /> link Primary with icon
              </Link>
            </div>
          </section>
          <section className="section margin__y--l">
            <h3 className="h4">Card</h3>

            <div className="card">
              <div className="post__header">
                <h4 className="post__title">Title</h4>
                <div className="post__date">Date</div>
              </div>
              <div className="post__body">
                <h6 className="body__large post__description">
                  Eu enim consequat sunt ipsum aliqua laborum.
                </h6>
              </div>
            </div>
          </section>
          <section className="section margin__y--l">
            <h3 className="h4">Categories and Tags</h3>
            <div className="container">
              <div className="">Categories</div>
              <div className="container flex ">
                <div className="category margin__right">category-one,</div>
                <div className="category margin__right">category-two</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default StyleGuidePage
