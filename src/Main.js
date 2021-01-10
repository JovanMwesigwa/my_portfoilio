import React from 'react';
import Hero from './components/Hero'
import BodyComponent from './components/Body';
import Navbar from './components/Navbar';


import Responsive from './assets/htmlcssjs.svg';
import ReactStack from './assets/stack.svg';
import Mobo from './assets/flutter.svg';
import Projects from './components/Projects';
import Footer from './components/Footer';
// Dark, lightText

//  
//                    
function Main() {

  const [ sections, setSections ] = React.useState([
    {id: 1,title: "welcome. ", description1: "Hi. My name is Jovan Mwesigwa B. I'm a passionate developer and backend systems designer. I've always had an interest in technology and software development ever since I had my first computer (back in 2008).",  description: "Since then, I've spent alot of my time to develop my skills upon to achieve the greatest heights, with building and working with best teams to build outstanding software. I'm extremely passionate about cutting-edge, user-friendly and the best optimised softwares for my clients.", dark: false, lightText: false, imageDark: true, flexed: false, image: Responsive,},
    {id: 2,title: "React Js", description1: "I use React Js to build fully responsive and user friendly UIs that look absolutely astonishing on first sight.", description: "Using styled components in combination with React Js speeds up my workflow, because of its flexibility and when i want something out of the box, Material UI is my go library.", dark: true, lightText: true, imageDark: false, flexed: true, image: ReactStack,},
    {id: 3,title: "mobile. ", description1: "When I want to go native in mobile apps, I use React Native or Flutter, given the fact that React Native is built off React Js itself.", description: "Actually these technologies are very exciting because they really speed up the development process in mobile apps. Because they are cross-platform (both iOS and Android), which means you write code once and deply it on both platforms.", dark: false, lightText: false, imageDark: true, flexed: false, image: Mobo,}
  ]);
  
  return (
      <>
        <Navbar />
        <Hero />
        {
            sections.map(section => (
                <BodyComponent item={section} />
            ))
        } 
        <Projects />  
        <Footer />    
      </>

  );
}

export default Main;
