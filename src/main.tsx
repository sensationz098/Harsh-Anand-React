import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./pages/Routes";
import RootLayout from "./components/Root-Layout";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <RootLayout>
      <RouterProvider router={routes} />
    </RootLayout>
  </StrictMode>
);
