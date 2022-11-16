import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Wrapper = styled.div`
  height: 300px;
  background-color: pink;
`;
const Image = styled.img`
  height: 300px;
  width: 500px;
  object-fit: fill;
`;

export default function LayoutBanner(): JSX.Element {
  const settings = {
    dots: true,
    arrows : true,
    infinite: true,
    // prevArrow : "<button type='button' class='slick-prev'>Previous</button>",
    // nextArrow : "<button type='button' class='slick-next'>Next</button>",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
  const StyledSlider = styled(Slider)`
  .slick-prev:before,
  .slick-next:before {
    color: black;
    opacity: 1;
    font-size: 30px;
  }
  .slick-prev {
    left: 30px;
    z-index: 9;
  }
  .slick-next {
    right: 30px;
    z-index: 9;
  }
  .slick-slide img {
    margin: 0 auto;
  }
  .slick-dots {
    position: relative;
    bottom: 11px;
  }
  `;
  
  return(
    <>
    <Wrapper>
    <StyledSlider {...settings}>
        <div>
          <Image src="/babyjjanggu.jpeg" alt="london"></Image>
        </div>
        <div>
          <Image src="/frogjjanggu.jpeg" alt="london"></Image>
        </div>
        <div>
          <Image src="/jjanggu1.png" alt="london"></Image>
        </div>
        {/* <div>
          <Image src="/boards/banner/banner1.jpg" alt="london"></Image>
        </div>
        <div>
          <Image src="/boards/banner/banner2.jpg" alt="london"></Image>
        </div>
        <div>
          <Image src="/boards/banner/banner3.jpg" alt="london"></Image>
        </div> */}
      </StyledSlider>
    </Wrapper>
    </>
  )
}
