import React, { Component } from 'react';
import Projects from './Projects';
import story from '../staticimages/story.png';
import black from '../staticimages/blackhole.jpg';
import linearr from '../staticimages/linear.jpg';
import jelly from '../staticimages/jelly.jpg';
import IB from '../staticimages/IB.jpg';
import JD from '../staticimages/JD.jpg';
import MJ from '../staticimages/MJ.jpg';
import koen from '../staticimages/koingsegg.jpg';

export class Products extends Component {
  proj = [
    {
        projectname : "InterviewByte",
        projdescription : "Online Mock Interview Platform Integrated With In-Built Random Apptitude Questions Based Quiz With Multiple Challenging Levels",
        duration : "July 2021 - October 2021",
        loca : IB
    },
    {
      projectname : "Jeevandaan / Mrityunjay V.2.0",
      projdescription : "Platform for Organ Donation and Reception With Autonomous Assignment of Donor to Recipient. Enhanced Security With OTP & QR Code Based Login",
      duration : "February 2021 - May 2021",
      loca : JD
    },
    {
      projectname : "Mrityunjay V.1.0",
      projdescription : "Online Platform For Searcing Blood Donors, Children Education Funds Donors, Organ Tranplantation Donors.",
      duration : "January 2020 - May 2020",
      loca : MJ
    },
    {
      projectname : "EDA On Sports Dataset",
      projdescription : "Performed EDA on Sports Dataset To Find Features Like Top 10 Player, Man of The Match, Top 5 Winning Teams etc",
      duration : "July 2021 - August 2021",
      loca : story
    },
    {
      projectname : " Student's Percentage Prediction Using Linear Regression",
      projdescription : "Predicted Student Percentage Using Simple Linear Regression On Student Dataset. This Was My Internship Task.",
      duration : "July 2021 - August 2021",
      loca : linearr
    },
    {
      projectname : "Black Hole Animation - Blender 3D",
      projdescription : "Black Hole and its components like gravitational lensing, accretion disk and event horizon were Depicted By Using Shaders & Node Map On Blender 3D.",
      duration : "February 2021 - March 2021",
      loca : black
    },
    {
      projectname : "Jelly Animation - Blender 3D",
      projdescription : "Jelly Was Simulated By Applying Soft Body Physics To Mesh Object and Adding Various Shaders.",
      duration : "November 2020 - December 2020",
      loca : jelly
    },
    {
      projectname : "Koenigsegg Agera R Animation - Blender 3D & RigaCar",
      projdescription : "Koenigsegg Car Animation With Rigged Car Mesh Object Using RigaCar and Application of Principled BSDF Shader",
      duration : "September 2020 - October 2020",
      loca : koen
    }
]

constructor(){
    super();
    this.state = {

        proj : this.proj 

    }
}
  render() {
    return (
     
          <>
          <section className="text-gray-600 body-font" >
          <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
          {this.state.proj.map((element)=>{

            return <Projects lo={element.loca} key={element.projectname} pname={element.projectname} pdesp={element.projdescription} time={element.duration}/>
                   

          })}
            </div>
            </div>
            </section>
          </>

      
    )
  }
}

export default Products

