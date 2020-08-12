import React from 'react';
import img1 from '../images/officialpic.jpeg';
import img2 from '../images/news.jpg';
import img3 from '../images/sihbanner2.png';
import img4 from '../images/off.jpeg';
import Typical from "react-typical";

const Carausol = () => {
    return (
      <>
        <section className="text-gray-500 bg-gray-900 body-font">
          <div className="container px-5 py-16 mx-auto">
            <div className="flex flex-col">
              <div className="h-1 bg-gray-800 rounded overflow-hidden">
                <div className="w-24 h-full bg-indigo-500"></div>
              </div>
              <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-6">
                <h1 className="sm:w-full text-white font-medium title-font text-2xl mb-2 sm:mb-0">
                  Welcome To The Official Website of 
                  <Typical
                    className="ml-2 text-red-300"
                    style={{
                      color: "lightseagreen",
                      borderBottom: "2px solid lightsalmon",
                    }}
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                      "Team Genius 💡",
                      4000,
                      "SIH-2020 Finalist",
                      2000,
                    ]}
                  />
                </h1>
              </div>
            </div>
            <div className="p-4 md:w-full sm:mb-0 mb-3">
              <div className="rounded-lg h-128 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={img1}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-white mt-4">
                We Are{" "}
                <span style={{ color: "teal", fontWeight: "bold" }}>
                  TEAM GENIUS
                </span>
              </h2>
              <p className="text-base leading-relaxed mt-2">
                We as a part of India's Biggest Hacktahon feel very proud and
                hounered to represent our college{" "}
                <span style={{ color: "white", fontWeight: "bold" }}>
                  GEC, Jhalawar
                </span>{" "}
                on National Platform
              </p>
              <h2
                className="text-xl font-medium title-font text-teal-600 mt-4"
                style={{ fontWeight: "bold" }}
              >
                OUR IDEA
              </h2>
              <p className="text-white mt-2">
                Our Idea was to make PAPERLESS OFFICE APPLICATION which can
                make the tideous and time consuming work of carrying documents
                of respective means to the respective Govt. offices to get the
                permission or scholarship or any other work easy , fast and
                timely-efficient. <br /> We build a
                MOBILE APPLICATION to overcome the problems and make this work
                MOBILE and EASY. <br />
                We also provided the security and all the respective needs to make this app work efficiently and powerfully
              </p>
            </div>
            <div className="p-4 md:w-full sm:mb-0 mb-3">
              <div className="rounded-lg h-128 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={img3}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-white mt-5">
                  The{" "}
                  <span style={{ color: "teal", fontWeight: "bold" }}>
                    SMART INDIA HACKATHON 2020
                  </span>{" "}
                </h2>
                <p className="text-base leading-relaxed mt-2">
                  Under the observation of MHRD ministry the SIH-2020 was
                  announced on 1-3 Aug 2020. <br />
                  Smart India Hackathon 2020 is a nationwide initiative to provide students a platform to solve some of the pressing problems we face in our daily lives, and thus inculcate a culture of product innovation and a mindset of problem solving
                </p>
             
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div className="p-4 md:w-1/2 sm:mb-0 mb-4">
                <div className="rounded-lg h-128 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={img4}
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-white mt-5">
                  The &nbsp;
                  <span style={{ color: "teal", fontWeight: "bold" }}>
                    OFFICIAL DOCUMENT 
                  </span>{" "}
                </h2>
                <p className="text-base leading-relaxed mt-2">
                  This is the OFFICIAL APPROVAL LETTER from the PRINCIPAL of our INSTITUTE GEC,JHALAWAR <br />
                  Thus Providing us the opertunity to represent our renowned INSTITUTE on NATIONAL LEVEL HACKATHON i.e. SIH-2020
                </p>
              </div>
              <div className="p-4 md:w-1/2 sm:mb-0 mb-4">
                <div className="rounded-lg h-128 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={img2}
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-white mt-5">
                  Our Software
                </h2>
                <p className="text-base leading-relaxed mt-2">
                  After the successful completion of our project at{" "}
                  <span style={{ color: "white", fontWeight: "bold" }}>
                    SIH 2020.
                  </span>
                  The local newspaper Rajasthan Patrika wrote our success story and
                  our App description
                  <span style={{ color: "teal", fontWeight: "bold" }}>
                    📰 PAPERLESS OFFICE
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Carausol
