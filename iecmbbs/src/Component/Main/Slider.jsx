import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Asian from "../../assets/Asian-medical.png";
import Al from '../../assets/slider/al.jpg'
import asfen from '../../assets/slider/asfen.jpg';
import bashik from '../../assets/slider/bashik.jpg';
import belgo from '../../assets/slider/belgo.jpg';
import dhaka from '../../assets/slider/dhaka.jpg';
import Eastern from '../../assets/slider/East.jpg';
import eastern from '../../assets/slider/eastern.jpg'
import jsc from '../../assets/slider/jsc.jpg';
import kaz from '../../assets/slider/kaz.jpg';
import kyr from '../../assets/slider/kyr.jpg';
import pskov from '../../assets/slider/pskov.jpg';
import seme from '../../assets/slider/seme.jpg';
import us from '../../assets/slider/us.jpg';
import virgen from '../../assets/slider/virgen.jpg'

import './Slider.css'

export default function SliderNew() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true, // Enable navigation arrows
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1000, // Set autoplay interval
    responsive: [
      {
        breakpoint: 1024, // Medium screen
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Small screen
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      name: "Asian-Medical-Institute",
      image: Asian,
    },
    {
      name: "Another Institute",
      image: Al, // Replace with a different image
    },
    {
      name: "Third Institute",
      image: asfen, // Replace with a different image
    },
    {
      name: "Fourth Institute",
      image: bashik, // Replace with a different image
    },
    {
        name: "Asian-Medical-Institute",
        image: belgo,
      },
      {
        name: "Asian-Medical-Institute",
        image: dhaka,
      },
      {
        name: "Asian-Medical-Institute",
        image: Eastern,
      },
      {
        name: "Asian-Medical-Institute",
        image: eastern,
      },
      {
        name: "Asian-Medical-Institute",
        image: jsc,
      },
      {
        name: "Asian-Medical-Institute",
        image: kaz,
      },
      {
        name: "Asian-Medical-Institute",
        image: kyr,
      },
      {
        name: "Asian-Medical-Institute",
        image: pskov,
      },
      {
        name: "Asian-Medical-Institute",
        image: seme,
      },
      {
        name: "Asian-Medical-Institute",
        image: us,
      },
      {
        name: "Asian-Medical-Institute",
        image: virgen,
      },
      
  ];

  return (
    <div className="slid-1">
         <h1 style={{textAlign:'center'}}>POPULAR UNIVERSITIES TO STUDY ABROAD</h1>
      <div className="slid-2">
        <Slider {...settings}>
          {data.map((d) => (
            <div
              key={d.name}
              style={{
                backgroundColor: "white",
                height: "450px",
                color: "black",
                borderRadius: "20px",
                padding: "10px",
              }}
            >
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <img
                  className="slider-image"
                  src={d.image}
                  alt={d.name}
                />
              </div>
              <h3 style={{ textAlign: "center", marginTop: "10px" }}>{d.name}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
  
}
