import "./App.css";
import React, { useEffect, useState } from "react";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

import MainPage from "./Components/Project Pages/MainPage";

import Navbar from "./Components/Fixed Components/Navbar";
import Footer from "./Components/Fixed Components/Footer";
import Landing from "./Components/Landing";
import About from "./Components/About";
import Education from "./Components/Education";
import Project from "./Components/Project";
import Hobbies from "./Components/Hobbies";
import Socials from "./Components/Socials";
import Contact from "./Components/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import CombinedMainPg from "./CombinedMainPg";
import ProjectDetailsData from "./Components/Data/ProjectDetailsData";

// console.log(ProjectDetailsData);

function App() {
  const [ProjectData, setProjectData] = useState(ProjectDetailsData);
  console.log(ProjectData);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<CombinedMainPg />} />
          <Route path="/#landing" exact element={<Landing />} />
          <Route path="/#about" exact element={<About />} />
          <Route path="/#education" exact element={<Education />} />
          <Route path="/#projects" exact element={<Project />} />
          <Route path="/hobby" exact element={<Hobbies />} />
          <Route path="/#socials" exact element={<Socials />} />
          <Route path="/#contact" exact element={<Contact />} />



 {/* <Route path="/academia" exact  element={<MainPage  data={ProjectData[0]}/>}/>
    <Route path="/crownresto" element={<MainPage data={ProjectData[1]}/>}/>
    <Route path="/freelancing" element={<MainPage data={ProjectData[2]}/>}/>


    <Route path="/cassio" element={<MainPage data={ProjectData[3]}/>}/>
    <Route path="/stonepaperscissor" element={<MainPage data={ProjectData[4]}/>}/>
    <Route path="/tictactoe" element={<MainPage data={ProjectData[5]}/>}/>
    
    
    <Route path="/weatherwhisper" element={<MainPage data={ProjectData[6]}/>}/>
    <Route path="/audiocorner" element={<MainPage data={ProjectData[7]}/>}/>
    
    
    <Route path="/nike" element={<MainPage data={ProjectData[8]}/>}/>
    <Route path="/gym" element={<MainPage data={ProjectData[9]}/>}/> */}
      
      
      
         <Route path="/projects/:id" element={<MainPage />} />

        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
