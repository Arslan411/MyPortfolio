// import logo from './logo.svg';
import "./App.css";
import { NavLink, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
// import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../src/Screens/Home";
import About from "../src/Screens/About";
import Contact from "../src/Screens/Contact";
import Navbar from "./Components/Navbar";

function App() {
  // const router = createBrowserRouter([
  //   {path:'/', element:<>   <Navbar/> <Home/> </>},
  //   {path:'/about', element:<>   <Navbar/> <About/> </>},
  //   {path:'/contact', element:<>   <Navbar/> <Contact/> </>},
  // ])

  return (
    <>
      {/* <RouterProvider router={router}/> */} <Navbar />
    </>
  );
}

export default App;
