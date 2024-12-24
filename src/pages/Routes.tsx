import { createRoutesFromElements, Route, createBrowserRouter, } from "react-router-dom";
import HeroSection from "./Layout";
import { ParallaxProvider } from "react-scroll-parallax";
import App from "../App";


export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="">
      <Route path="/" element={<App/>}/>
      <Route
        path="/:id"
        element={
          <ParallaxProvider>
            <HeroSection />
          </ParallaxProvider>
        }
      />
    </Route>
  )
);