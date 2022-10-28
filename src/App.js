import React from "react";
import './App.css';
import AnimatedCursor from "react-animated-cursor"

//components
import Experience from "./components/ExperienceAccordians";
import Expertise from "./components/Expertise";
import Header from "./components/Header";
import Skills from "./components/Skills";
import PersonalInfo from "./components/PersonalAccordians";
import SocialLinks from "./components/SocialLInks";

function App() {
  return (
    <>
      <Header />
      <Skills />
      <Expertise />
      <Experience />
      <PersonalInfo />
      <SocialLinks />
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color='255,255,255'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
    </>
  );
}

export default App;
