import React from 'react';

export default function Hcontent() {
    return (
        <div>
            <section className="text-gray-800 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Viral Raval
              <br className="hidden lg:inline-block"/><p style={{color:"purple",fontSize:"x-large"}}>Computer Engineer</p>
            </h1>
            <p className="mb-8 leading-relaxed">Excellent Problem-solving skills and ability to perform well in a team. Passionate about coding and learning new skills in context of industry.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800 rounded text-lg">Sign Up</button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Sign In</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="https://source.unsplash.com/720x550/?computers,laptop"/>
          </div>
        </div>
      </section>

      <section className="text-gray-800 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Skills</h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">These Services are Available With Usage Of Cutting Edge Technlogies To Provide Customer Satisfaction & Seamless Experience</p>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503"/>
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Software Development</h2>
              <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
              <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1204x504"/>
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">IT Hardware Distribution</h2>
              <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
              <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1205x505"/>
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Software & Hardware Maintainance</h2>
              <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
              <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <hr/>
      <section className="text-gray-800 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font font-medium text-xl mb-2 text-gray-900">Our Statistics</h1>
              <div className="leading-relaxed">Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">100K</h2>
              <p className="leading-relaxed">Users</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">95k</h2>
              <p className="leading-relaxed">Satisfied Customers</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">350+</h2>
              <p className="leading-relaxed">Worldwide Partners</p>
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img className="object-cover object-center w-full h-full" src="https://source.unsplash.com/500x300/?happy,customer,smile" alt="stats"/>
          </div>
        </div>
      </section>

      
        </div>
    )
}
