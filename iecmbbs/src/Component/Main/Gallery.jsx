import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Asian from "../../assets/Asian-medical.png";
import './Gallery.css'

export default function Gallery() {
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
     
      image: "https://iecmbbs.com/wp-content/uploads/2021/07/Xiamen-Group-300x225.jpg",
    },
    {
    
      image: 'https://iecmbbs.com/wp-content/uploads/2021/07/IMG_6504-scaled.jpg'
    },
    {
     
      image: 'https://iecmbbs.com/wp-content/uploads/2021/07/Nanchang-University-Students.jpg'
    },
    {
     
      image: 'https://iecmbbs.com/wp-content/uploads/2021/07/Graduation-LZMU.jpg'
    },
    {
     
        image: 'https://iecmbbs.com/wp-content/uploads/2021/07/20130302_140540-scaled.jpg'
      },
      {
     
        image: 'https://iecmbbs.com/wp-content/uploads/2021/07/DSC01990.jpg'
      },
      {
     
        image: 'https://iecmbbs.com/wp-content/uploads/2021/07/348-scaled.jpg'
      },
      

  ];

  return (
    <>

    <div className="slid-1">
 <h1 style={{textAlign:'center'}}>Gallery</h1>
      <div className="slid-2">
      <Slider {...settings}>
  {data.map((d, index) => (
    <div
      key={index}
      style={{
        backgroundColor: "white",
        height: "450px",
        color: "black",
        borderRadius: "20px",
        padding: "10px",
      }}
    >
      <div
        className="image-container" // Add this class
      >
        <img
          src={d.image}
          alt={`Image ${index + 1}`}
        />
      </div>
      <h3 style={{ textAlign: "center", marginTop: "10px" }}>{d.name}</h3>
    </div>
  ))}
</Slider>
      </div>
    </div>
    </>
  );
}
