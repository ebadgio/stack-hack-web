import React from 'react';

// Components
import Navbar from "../components/Navbar";
import Cover from "../components/Cover";
import Overview from "../components/Overview";
import Syllabus from "../components/Syllabus";
import Pricing from "../components/Pricing";
import Bottom from "../components/Bottom";

// Elements
import Scalene from "../components/elements/Scalene";

const Main = () => {
  return (
    <div className="flex-col fill" id="main-wrapper">
        <Navbar />
        <Cover />
        <Scalene fill={'#3884FF'} className={"wide-scalene"}/>
        <Overview />
        <Syllabus/>
        <Scalene fill={'#183055'} className={"wide-scalene"}/>
        <Pricing />
        <Bottom />
    </div>
  )
}

export default Main;
