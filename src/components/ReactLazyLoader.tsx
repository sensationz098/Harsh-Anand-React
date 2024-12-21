import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
const 
ReactLazyLoader = ({image}:{image:string}) => (
  
  
  <div>
    
    <LazyLoadImage
      alt={image}
      height={image}
      src={image} 
      width={image}
    />
  </div>
);

export default ReactLazyLoader;
