import React from 'react';
import Footer from '../Footer/Footer';
// import About from '../About/About';
import Contact from '../Contact/Contact';
import HeaderContent from '../HeaderContent/HeaderContent';
import Project from '../Project/Project';
import Skill from '../Skill/Skill';
import './Home.css'
const Home = () => {
    return (
        <div className="header">
            <HeaderContent></HeaderContent>
            {/* <About></About> */}
            <Project></Project>
            <Skill></Skill>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;