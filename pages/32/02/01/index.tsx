import React from "react";
import LazyLoad from "react-lazy-load";

export default function LazyLoadPage() {
  return (
    <div>
      <div className="filler" />
      <LazyLoad height={600} offsetVertical={300}>
        <img
          src="https://cdn.pixabay.com/photo/2022/11/28/20/52/bird-7623166_1280.jpg"
          width={500}
          height={500}
        />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad height={600} offsetVertical={300}>
        <img
          src="https://cdn.pixabay.com/photo/2022/08/22/10/29/tihany-7403359_1280.jpg"
          width={500}
          height={500}
        />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad height={600} offsetVertical={300}>
        <img
          src="https://cdn.pixabay.com/photo/2022/11/29/16/34/bird-7624853__480.jpg"
          width={500}
          height={500}
        />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad height={600} offsetVertical={300}>
        <img
          src="https://cdn.pixabay.com/photo/2022/11/22/22/34/cat-7610765__480.jpg"
          width={500}
          height={500}
        />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad height={600} offsetVertical={300}>
        <img
          src="https://cdn.pixabay.com/photo/2022/11/14/13/39/brown-bear-7591629__480.jpg"
          width={500}
          height={500}
        />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad height={600} offsetVertical={300}>
        <img
          src="https://cdn.pixabay.com/photo/2022/02/09/03/48/oriental-garden-lizard-7002565__480.jpg"
          width={500}
          height={500}
        />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad height={600} offsetVertical={300}>
        <img
          src="https://cdn.pixabay.com/photo/2022/03/10/11/03/eastern-grey-kangaroo-7059640__480.jpg"
          width={500}
          height={500}
        />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad height={600} offsetVertical={300}>
        <img
          src="https://cdn.pixabay.com/photo/2022/05/23/14/48/dog-7216354__480.jpg"
          width={500}
          height={500}
        />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad height={600} offsetVertical={300}>
        <img
          src="https://cdn.pixabay.com/photo/2022/11/20/21/18/africa-7605276__480.jpg"
          width={500}
          height={500}
        />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad height={600} offsetVertical={300}>
        <img
          src="https://cdn.pixabay.com/photo/2022/11/11/09/26/cat-7584624__480.jpg"
          width={500}
          height={500}
        />
      </LazyLoad>
    </div>
  );
}