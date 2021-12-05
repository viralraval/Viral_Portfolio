import React, { Component } from 'react';

export class Projects extends Component {

     render() {
        let {pname,pdesp,time,lo} = this.props;
        console.log(lo);
        return (
                <>
                <div className="lg:w-1/4 md:w-1/2 p-4">
                <a className="block relative h-48 rounded overflow-hidden">
                <img style={{border:"1px solid lightgrey",borderRadius:"5px",height:"auto",width:"auto"}} alt="ecommerce" className="object-cover object-center w-full h-full block"  src={lo}/>
                </a>

                <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium"><a href="" >{pname}</a></h2>
                <p className="mt-1" style={{color:"black"}}>Duration : {time}</p>

                <h3 className="mt-2 text-gray-550 text-xls tracking-widest title-font mb-1" >
                <p style={{color:"black"}}>Description : </p>{pdesp.slice(0,80)}...
                </h3>
               
                </div>
                </div>
       

   
                </>
        )
    }
}

export default Projects


