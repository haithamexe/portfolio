import React, { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionValueEvent,
} from "motion/react";

const colors = ["#cad2c5", "#84a98c", "#52796f", "#354f52", "#2f3e46"];

function StackedCards() {
  // const containerRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   container: containerRef,
  // });

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("scrolled", latest);
  // });

  const cards = [
    {
      title: "Card 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id dapibus dolor. Cras vitae accumsan lacus, vel viverra turpis. Nunc in risus nibh. Suspendisse aliquet consectetur augue, fringilla dictum risus. Cras sit amet sapien nulla. Praesent nec pulvinar tortor, ut tempus nunc. Nullam laoreet eleifend velit, id mollis eros dignissim eget. Praesent quis velit quis neque fringilla porttitor ac a ex. Maecenas et ex tincidunt, commodo odio nec, faucibus nunc. ",
      color: "red",
      image:
        "https://fastly.picsum.photos/id/269/1920/1080.jpg?hmac=QgG3ggM7gnP92yCZrV2e_moZfEFQkgrkeBPlYEl-_KQ",
    },
    {
      title: "Card 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id dapibus dolor. Cras vitae accumsan lacus, vel viverra turpis. Nunc in risus nibh. Suspendisse aliquet consectetur augue, fringilla dictum risus. Cras sit amet sapien nulla. Praesent nec pulvinar tortor, ut tempus nunc. Nullam laoreet eleifend velit, id mollis eros dignissim eget. Praesent quis velit quis neque fringilla porttitor ac a ex. Maecenas et ex tincidunt, commodo odio nec, faucibus nunc. ",
      color: "blue",
      image:
        "https://fastly.picsum.photos/id/170/1920/1080.jpg?hmac=TC7JWErs_9TssLjuJiTW3RaEK_AOHBebE1a9SKA5gXc",
    },
    {
      title: "Card 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id dapibus dolor. Cras vitae accumsan lacus, vel viverra turpis. Nunc in risus nibh. Suspendisse aliquet consectetur augue, fringilla dictum risus. Cras sit amet sapien nulla. Praesent nec pulvinar tortor, ut tempus nunc. Nullam laoreet eleifend velit, id mollis eros dignissim eget. Praesent quis velit quis neque fringilla porttitor ac a ex. Maecenas et ex tincidunt, commodo odio nec, faucibus nunc. ",
      color: " green",
      image:
        "https://fastly.picsum.photos/id/1049/1920/1080.jpg?hmac=ZWQrhCKsQbsjiSX6jcvW-aJ8H5YGNLJaf-QpG7-sO8k",
    },
    {
      title: "Card 4",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id dapibus dolor. Cras vitae accumsan lacus, vel viverra turpis. Nunc in risus nibh. Suspendisse aliquet consectetur augue, fringilla dictum risus. Cras sit amet sapien nulla. Praesent nec pulvinar tortor, ut tempus nunc. Nullam laoreet eleifend velit, id mollis eros dignissim eget. Praesent quis velit quis neque fringilla porttitor ac a ex. Maecenas et ex tincidunt, commodo odio nec, faucibus nunc. ",
      color: " purple",
      image:
        "https://fastly.picsum.photos/id/327/1920/1080.jpg?hmac=2zxvngs6jhNqLzD4qlLNop4cmmHfMTsQJ29pX4TeT6c",
    },
    {
      title: "Card 5",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id dapibus dolor. Cras vitae accumsan lacus, vel viverra turpis. Nunc in risus nibh. Suspendisse aliquet consectetur augue, fringilla dictum risus. Cras sit amet sapien nulla. Praesent nec pulvinar tortor, ut tempus nunc. Nullam laoreet eleifend velit, id mollis eros dignissim eget. Praesent quis velit quis neque fringilla porttitor ac a ex. Maecenas et ex tincidunt, commodo odio nec, faucibus nunc. ",
      color: "darkblue",
      image:
        "https://fastly.picsum.photos/id/603/1920/1080.jpg?hmac=Svsshlh0qWxuEJ6XWfm1cxvytvMFkEPTo2zvl7xoUH8",
    },
  ];

  return (
    <>
      <div className="stacked-cards-wrapper">
        {cards.map((card, index) => (
          <Item card={card} key={index} index={index} />
        ))}
        <div className="stacked-cards-footer-p">
          <p>No More Cards</p>
        </div>
      </div>
    </>
  );
}

const Item = ({ card, index }) => {
  // const target = useRef(null);
  // const containerRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   container: containerRef,
  //   target: target,
  // });

  // const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log(latest);
  // });

  return (
    <div className="stacked-cards-container" key={index}>
      <motion.div
        className="stacked-card"
        key={index}
        style={{
          backgroundColor: colors[index],
          top: -350 + index * 20 + "px",
          width: `${750 + index * 10}px`,
          // opacity: opacity,
        }}
      >
        <div className="stacked-card-content">
          <h1>{card.title}</h1>
          <div className="stacked-card-img-container">
            <motion.div
              className="stacked-card-img-inner"
              style={
                {
                  // opacity: scrollYProgress,
                }
              }
            >
              <img src={card.image} alt={card.title} />
            </motion.div>
          </div>
        </div>
        <p>{card.content}</p>
      </motion.div>
    </div>
  );
};

export default StackedCards;
