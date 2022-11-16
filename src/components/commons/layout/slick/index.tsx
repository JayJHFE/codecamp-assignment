import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1111111</h3>
          </div>
          <div>
            <h3>2222222</h3>
          </div>
          <div>
            <h3>33333333</h3>
          </div>
          <div>
            <h3>44444444</h3>
          </div>
          <div>
            <h3>555555555</h3>
          </div>
          <div>
            <h3>66666666</h3>
          </div>
        </Slider>
      </div>
    );
  }
}