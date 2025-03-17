import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
} from "react-router-dom";
// Ensure this is properly imported
import App from "../App";
import HeroSectio from "./hero";

// Define routes properly
export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="">
      <Route path="/" element={<App />} />
      <Route path="/:id" element={<HeroSectio />} />
    </Route>
  )
);
