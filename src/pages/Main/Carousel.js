import React from "react";
import { Carousel, ConfigProvider, Col, Row, Image } from "antd";

import styles from "./main.module.css";

const contentStyle = {
  height: "400px",
  color: "#fff",
  textAlign: "center",
  justifyContent: "center",
  background: "#364d79",
};

const MainCarousel = () => (
  <ConfigProvider
    theme={{
      token: {},
    }}
  >
    <Carousel autoplay>
      <div style={contentStyle}>
        <img
          className={styles.img}
          src="https://cdn.pixabay.com/photo/2018/09/27/09/22/artificial-intelligence-3706562_960_720.jpg"
        />
      </div>
      <div style={contentStyle}>
        <img
          className={styles.img}
          src="https://cdn.pixabay.com/photo/2018/12/02/10/07/web-3850917_960_720.jpg"
        />
      </div>
      {/* <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div> */}
    </Carousel>
  </ConfigProvider>
);
export default MainCarousel;

// import React, { Component } from "react";
// import {
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselCaption,
// } from "reactstrap";

// const items = [
//   {
//     id: 1,
//     altText: "Slide 1",
//     caption: "Slide 1",
//   },
//   {
//     id: 2,
//     altText: "Slide 2",
//     caption: "Slide 2",
//   },
//   {
//     id: 3,
//     altText: "Slide 3",
//     caption: "Slide 3",
//   },
// ];

// class CarouselComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { activeIndex: 0 };
//     this.next = this.next.bind(this);
//     this.previous = this.previous.bind(this);
//     this.goToIndex = this.goToIndex.bind(this);
//     this.onExiting = this.onExiting.bind(this);
//     this.onExited = this.onExited.bind(this);
//   }

//   onExiting() {
//     this.animating = true;
//   }

//   onExited() {
//     this.animating = false;
//   }

//   next() {
//     if (this.animating) return;
//     const nextIndex =
//       this.state.activeIndex === items.length - 1
//         ? 0
//         : this.state.activeIndex + 1;
//     this.setState({ activeIndex: nextIndex });
//   }

//   previous() {
//     if (this.animating) return;
//     const nextIndex =
//       this.state.activeIndex === 0
//         ? items.length - 1
//         : this.state.activeIndex - 1;
//     this.setState({ activeIndex: nextIndex });
//   }

//   goToIndex(newIndex) {
//     if (this.animating) return;
//     this.setState({ activeIndex: newIndex });
//   }

//   render() {
//     const { activeIndex } = this.state;

//     const slides = items.map((item) => {
//       return (
//         <CarouselItem
//           className="custom-tag"
//           tag="div"
//           key={item.id}
//           onExiting={this.onExiting}
//           onExited={this.onExited}
//         >
//           <CarouselCaption
//             className="text-danger"
//             captionText={item.caption}
//             captionHeader={item.caption}
//           />
//         </CarouselItem>
//       );
//     });

//     return (
//       <div>
//         <style>
//           {`.custom-tag {
//                 max-width: 100%;
//                 height: 500px;
//                 background: black;
//               }`}
//         </style>
//         <Carousel
//           activeIndex={activeIndex}
//           next={this.next}
//           previous={this.previous}
//         >
//           <CarouselIndicators
//             items={items}
//             activeIndex={activeIndex}
//             onClickHandler={this.goToIndex}
//           />
//           {slides}
//           <CarouselControl
//             direction="prev"
//             directionText="Previous"
//             onClickHandler={this.previous}
//           />
//           <CarouselControl
//             direction="next"
//             directionText="Next"
//             onClickHandler={this.next}
//           />
//         </Carousel>
//       </div>
//     );
//   }
// }

// export default CarouselComponent;
