import classes from "./StartingPageContent.module.css";
import { useEffect, useRef, useState } from "react";
import about from "../../Assests/about.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { init } from "ityped";
import ImageGellery from "./ImageGellery";
import Cards from "./Cards";
const StartingPageContent = () => {
  const [Gellery, setGellery] = useState(ImageGellery);
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 2000,
      easing: "ease",
    });
  });
  const txtref = useRef();
  useEffect(() => {
    init(txtref.current, {
      showCursor: false,
      cursorChar: "|",
      typeSpeed: 100,
      backSpeed: 50,
      strings: ["Fronted Devloper", "WordPress Devloper"],
    });
  }, []);
  const checkcategory = (filterImage) => {
    const filteredImage = Gellery.filter((current) => {
      return current.catetogry === filterImage;
    });
    setGellery(filteredImage);
  };
  return (
    <>
      <section className={classes.backgroundImage}>
        <h4 data-aos="fade-down" className={classes.backgroundHeading4}>
          HELLO
        </h4>
        <h1 data-aos="fade-left"> Welcome on Board!</h1>

        <h5 className=" text-white text-center">
          {" I am  "}
          <span ref={txtref}></span>
        </h5>
        <div data-aos="fade-up" class="text-center">
          <span class="fa-stack fa-2x">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
          </span>
          <span class="fa-stack fa-2x">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-github fa-stack-1x fa-inverse"></i>
          </span>{" "}
          <span class="fa-stack fa-2x">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa  fa-linkedin fa-stack-1x fa-inverse"></i>
          </span>
        </div>
      </section>
      <div className="container">
        <div
          className="row mt-5 mb-3 "
          style={{ boxShadow: "0px 0px 5px grey", backgroundColor: "#efefef" }}
        >
          <div
            data-aos="fade-up-right"
            className="col-6"
            style={{ marginTop: "90px", paddingLeft: "60px" }}
          >
            <h1>About Me</h1>

            <p>
              I am Jhone Deo Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever It has survived not only five centuries,
              but also the leap into electronic but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing.I am Jhone Deo Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </p>
            <button className="btn bg-dark text-white">Read More</button>
          </div>
          <div data-aos="fade-up-left" className="col-6">
            <img src={about} alt="" srcset="" />
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="row gy-4">
            <h1 className="text-center text-black mb-3">Our Portfolio</h1>
            <div className="d-flex" style={{ justifyContent: "space-evenly" }}>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => setGellery(ImageGellery)}
              >
                ALL
              </button>
              <button
                className="btn btn-sm btn-outline-danger "
                onClick={() => checkcategory("web")}
              >
                Web Devlopment
              </button>
              <button
                className="btn btn-sm btn-outline-danger "
                onClick={() => checkcategory("marketing")}
              >
                Marketing
              </button>
            </div>
            {Gellery.map((item) => {
              return <Cards imgsrc={item.image} />;
            })}
          </div>
        </div>
      </div>
      <div className="container ">
        <h1 className="text-center text-black mb-3">Contact with Me</h1>
        <div className="row contact">
          <div className="col-md-4">
            <img src={about} height="250" alt="" srcset="" />
            <h2>Nevine Acotanza</h2>
            <p>
              I am available for freelance work. Connect with me via and call in
              to my account.
            </p>
            <p>Phone : <a href="tel:+3057176599">+3057176599</a></p>
            <p>Email : <a href="tel:+3057176599">ubaidrana755@gmail.com</a></p>
          </div>
          <div className="col-md-8">
            <form>
              <div class="row">
                <div class="col">
                  <label for="formGroupExampleInput">YOUR NAME</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="col">
                  <label for="formGroupExampleInput">PHONE NUMBER</label>
                  <input type="number" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="formGroupExampleInput">EMAIL</label>
                  <input
                    type="email"
                    class="form-control"
                    id="formGroupExampleInput"
                  />
                </div>
                <div class="form-group">
                  <label for="formGroupExampleInput2">YOUR MESSAGE</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <button className="btn btn-outline-danger w-100 mt-3">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="top-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.0900646420287!2d74.2172644154355!3d31.411644559645158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190191643b7269%3A0x250d613c164bf80d!2sRavian%20Marketing%20%7C%20Digital%20Media%20Marketing%20Agency%20%7C%20Business%20Advertising%20Agency!5e0!3m2!1sen!2s!4v1635312013412!5m2!1sen!2s"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div id="about" class="card-footer bg-dark text-center text-white">
        <p>
          copyright © 2021 All Rights Reserved. Powered By ABIXION DIGITAL
          MARKETING PVT LTD
        </p>
      </div>
    </>
  );
};

export default StartingPageContent;
