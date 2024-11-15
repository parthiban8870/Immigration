
import React from 'react';
import Navbar from './Components/Navbar/Navbar/Navbar'
import Footer from './Components/Footer/Footer';  // Assuming your Footer is in the same directory
import Places from "./Components/Places/Places"
import Contactus from './Components/Reviewform/Contactus'
import Slider from './Components/Carousel/Carousel/Slider'
import Visa from './Components/Visa/Visa/Visa'
import Carousel from './Components/Carousel feedback/Carousel'
// import DarkVariantExample from './Components/Slider/DarkVariantExample';


import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap CSS


const App = () => {
  return (
    <div>
      {/* Add your other components here (header, main content, etc.) */}
      
      <div className="content">
        {/* <h1>Welcome to NIC Immigration Services</h1>
        <p>This is the main content of your website</p>
        {/* You can add more sections for your app here */}
      </div>
      {/* <DarkVariantExample/> */}
      <Navbar/>
      <Slider/>
      <Visa/>
      <Places/>
      <Carousel/>
     
     <Contactus/>
      <Footer /> 
    </div>
  );
}

export default App;

