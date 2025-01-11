
import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdArrowDropUp } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-2 z-10 flex items-center justify-center  p-2 bg-white rounded-full shadow-md cursor-pointer hover:bg-gray-200"
      style={{ top: "50%", transform: "translateY(-50%)" }}
      aria-label="Previous"
    >
      <MdOutlineKeyboardArrowLeft className="text-base text-gray-700" size={30} />
    </button>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-2 z-10 flex items-center justify-center  p-2 bg-white rounded-full shadow-md cursor-pointer hover:bg-gray-200"
      style={{ top: "50%", transform: "translateY(-50%)" }}
      aria-label="Next"
    >
      <MdOutlineKeyboardArrowRight className="text-base text-gray-700" size={30} />
    </button>
  );
};

function Crousalele({ database, deviceType }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 4,
      slidesToSlide: 4,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 2,
      slidesToSlide: 2,
    },
  };

  return (
    <div className="px-2 md:px-4">
      <Carousel
        ssr={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={deviceType !== "mobile" ? false : true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        transitionDuration={500}
        removeArrowOnDeviceType={[]}
        deviceType={deviceType}
        containerStyle={{ background: "transparent" }}
        className="p-2 md:p-4"
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        customTransition="transform 1000ms ease-in-out"
      >
        {database.map((items, index) => (
          <div
            className="flex flex-col h-full border-2 m-1 md:m-2 rounded-lg p-2 md:p-4 bg-white"
            key={index}
          >
            <div className="flex gap-2 justify-between mb-2 md:mb-3">
              <div className="flex gap-2">
                <div>
                  <img
                    src={items.item.thumb}
                    alt={items.item.symbol}
                    className="w-10 h-10 md:w-16 md:h-16 object-cover"
                  />
                </div>
                <div className="text-xs md:text-sm font-medium break-words">
                  {items.item.symbol}
                </div>
              </div>
              <div className="flex bg-[#EBF9F4] h-6 md:h-8 p-1 md:p-2 rounded text-[#14B079]">
                <MdArrowDropUp className="text-base md:text-lg" />
                <div className="text-xs md:text-sm">
                  {`${items.item.data.price_change_percentage_24h.usd}`.substring(
                    0,
                    4
                  )}%
                </div>
              </div>
            </div>

            <div className="font-bold text-xs md:text-base">
              {`${items.item.data.price}`.substring(0, 10)}
            </div>
            <div className="flex justify-center items-center mt-2">
              <img
                src={items.item.data.sparkline}
                alt="Sparkline"
                className="w-full h-auto max-h-16 md:max-h-24"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

Crousalele.propTypes = {
  database: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.shape({
        thumb: PropTypes.string.isRequired,
        symbol: PropTypes.string.isRequired,
        data: PropTypes.shape({
          price_change_percentage_24h: PropTypes.shape({
            usd: PropTypes.number.isRequired,
          }).isRequired,
          price: PropTypes.string.isRequired,
          sparkline: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    })
  ).isRequired,
  deviceType: PropTypes.string.isRequired,
};

export default Crousalele;
