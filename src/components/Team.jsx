import React from 'react'
import img3 from "../images/grouppic.jpg";
import Typical from "react-typical";
import Mentors from "./Mentors";
import Details from "./Details";

const Team = () => {
    return (
      <>
        <section className="text-gray-500 bg-gray-900 body-font">
          <div className="container mx-auto flex px-5 py-16 items-center justify-center flex-col">
            <div className="container px-5 py-8 mx-auto">
              <div className="flex flex-col">
                <div className="h-1 bg-gray-800 rounded overflow-hidden">
                  <div className="w-24 h-full bg-indigo-500"></div>
                </div>
                <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-2">
                  <h1 className="sm:w-full text-white font-medium title-font text-2xl mb-2 sm:mb-0">
                    <Typical
                      className="ml-2 text-red-300"
                      style={{
                        color: "lightseagreen",
                        borderBottom: "2px solid lightsalmon",
                      }}
                      loop={Infinity}
                      wrapper="b"
                      steps={["Team Genius 💡", 4000]}
                    />
                  </h1>
                </div>
              </div>
            </div>
            <img
              className="lg:w-2/3 md:w-2/3 w-5/6 mb-10 object-cover object-center rounded"
              alt="Team Genius"
              src={img3}
            />
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                TEAM DETAILS:😎
              </h1>
              <hr/>
              <p className="leading-relaxed mb-8">MENTORS:</p>
            </div>
            <Mentors />
            <Details />
          </div>
        </section>
      </>
    );
}

export default Team
