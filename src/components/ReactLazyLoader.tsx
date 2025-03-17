// import React from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
const ReactLazyLoader = ({ image }: { image: string }) => (
  <div>
    <img src={image} alt={image} width={image} height={image} loading="lazy" />
    {/* <LazyLoadImage alt={image} height={image} src={image} width={image} /> */}
  </div>
);

export default ReactLazyLoader;
