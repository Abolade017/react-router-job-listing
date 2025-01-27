// import { useState } from 'react'
import "./App.css";
import {
  // Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
// import Contact from "./pages/Contact";
import RootLayout from "./layout/RootLayout";
import ContactLayout from "./layout/ContactLayout";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import NotFound from "./pages/NotFound";
import JobsLayout from "./layout/JobsLayout";
import Jobs, { jobsLoader } from "./pages/Jobs";
import JobDetails, { JobDetailsLoader } from "./components/JobDetails";
import { Error } from "./components/Error";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/contact" element={<ContactLayout />}>
          <Route path="info" element={<ContactInfo />} />
          <Route path="form" element={<ContactForm />} />
        </Route>
        <Route path="jobs" element={<JobsLayout />} errorElement={<Error />}>
          <Route index element={<Jobs />} loader={jobsLoader} />
          <Route
            path=":id"
            element={<JobDetails />}
            loader={JobDetailsLoader}
          />
        </Route>
        <Route path="*" element={<NotFound />} />

        {/* <Route path="/" element={<Home />}></Route> */}
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
