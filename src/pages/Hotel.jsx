import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Footer, Header, MailList, Navbar } from "../components";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { ButtonPrimary } from "../components/utilities";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const hotelImages = [
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1546845776-dcdf70fd09e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80",
    "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1705318778520-3367daf5ace7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546845776-dcdf70fd09e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80",
    "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    if (direction === "next")
      slideNumber === hotelImages.length - 1
        ? setSlideNumber(0)
        : setSlideNumber(slideNumber + 1);

    if (direction === "prev")
      slideNumber === 0
        ? setSlideNumber(hotelImages.length - 1)
        : setSlideNumber(slideNumber - 1);
  };
  return (
    <div>
      {open && (
        <div className="slider">
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="close"
            onClick={() => setOpen(false)}
          />
          <FontAwesomeIcon
            icon={faCircleArrowLeft}
            className="arrow"
            onClick={() => handleMove("prev")}
          />
          <div className="sliderWrapper">
            <img
              src={hotelImages[slideNumber]}
              alt="Hotel"
              className="sliderImage"
            />
          </div>
          <FontAwesomeIcon
            icon={faCircleArrowRight}
            className="arrow"
            onClick={() => handleMove("next")}
          />
        </div>
      )}
      <div className="wrapper">
        <Navbar />
        <Header type="list" />
      </div>
      <div className="homeContainer">
        <div className="hotelWrapper">
          <ButtonPrimary
            style={{
              position: "absolute",
              top: "10px",
              right: "0",
              padding: "1rem",
            }}
          >
            Reserve or Book Now!
          </ButtonPrimary>

          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 123 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this proprty and get a free airport taxi
          </span>
          <div className="hotelImages">
            {hotelImages.map((image, i) => (
              <div className="hotelImageWrapper" key={i}>
                <img onClick={() => handleOpen(i)} src={image} alt="hotel" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hoteTitle">Stay in the heart of krakow</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Towe
                r Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Krak6+alice, 16.1 km from
                Tower Street Apartments, and the property offers a paid air ort
                shuttle service.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, excellent location score of
                9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <ButtonPrimary style={{ padding: "1rem" }}>
                Reserve or Book Now!
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </div>

      <MailList />
      <Footer />
    </div>
  );
};
export default Hotel;
