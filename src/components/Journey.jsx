import React from 'react';
import Typical from "react-typical";


const Journey = () => {
    return (
      <>
        <section className="text-gray-500 bg-gray-900 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="-my-8">
              <div className="py-8 flex flex-wrap md:flex-no-wrap">
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-white title-font mb-2">
                    <Typical
                      className="ml-2 text-red-300"
                      style={{
                        color: "lightseagreen",
                        borderBottom: "2px solid lightsalmon",
                      }}
                      loop={Infinity}
                      wrapper="b"
                      steps={["Our Journey 🚌", 4000]}
                    />
                  </h2>
                </div>
              </div>
              <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-no-wrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="tracking-widest font-medium title-font text-red-500 mb-3">
                    Firstly
                  </span>
                </div>
                <div className="md:flex-grow ">
                  <p className="text-white">
                    Firstly, Genius team from Government Engineering College
                    Jhalawar has participate in internal hackathon of Smart
                    India Hackathon 2020. In this hackathon six teams
                    participated in which 5 teams are selected for software
                    edition. Our team comes at 3rd position in our college in
                    internal hackathon. <br /> After some time we get an email
                    from Smart India Hackathon 2020.In which we get the
                    information that our team is selected for software edition
                    Grand finale of Smart India Hackathon 2020. We felt very
                    glad for having this wonderful and honorable opportunity.
                    Then we check at SIH website we saw our team name in DS171
                    PS at 2nd position at India level.
                  </p>
                </div>
              </div>
              <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-no-wrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="tracking-widest font-medium title-font text-green-400">
                    Secondly
                  </span>
                </div>
                <div className="md:flex-grow mt-3">
                  <p className="text-white">
                    In some time, we get information from Smart India Hackathon
                    website about nodal center. We get our nodal center asTechno
                    India University at West Bengal. Our problem statement is
                    provided by this university. We have to define an efficient
                    or workable solution for that. <br /> Then we choose 2
                    mentors from our college Shri Anil Kumar Prajapati and Shri
                    Sunil kale for software development according to our Idea
                    and register our team in SIH portal. <br /> Then we start
                    our project with the help of our college mentors.Firstly, we
                    clear our idea and discuss our idea with our mentors or
                    other teachers from our college. <br /> Around at 25 July we
                    get information that Prime Minister Shri Narendra Modi Ji
                    addresses this Smart India hackathon on the basis of idea
                    quality and the problem statement provided by the nodal
                    center. <br /> We get two mentor from ournodal center Mr.
                    Abhro Mukherjee Sir and Mr. Brijesh Sir. They help usfor
                    developing our project. And they also encourage us for
                    making our project more beneficial and efficient.
                  </p>
                </div>
              </div>
              <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-no-wrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="tracking-widest font-medium title-font text-green-400">
                    Aug 1st, Starting Day
                  </span>
                </div>
                <div className="md:flex-grow mt-3">
                  <p className="text-white">
                    At 1 August virtual hackathon start and Shri Narendra Modi
                    started addressing all finalist of SIH 2020 at 4 pm.The
                    first round of evaluation start at 1 August from 5 pm. Five
                    teams are competing against us for the problem statement
                    provided by the nodal center of West Bengal.
                    <br /> Then the evaluation process starts the process is
                    held on Google meet application. We have to present our
                    project to the evaluators of Smart India Hackathon 2020.
                    <br /> In the First day of our evaluation we present the
                    evaluators about 50 % of our project.
                    <br /> In second day of evaluationour team completed 75% of
                    our project which we have to present to the evaluators.
                    Third day at 4 pm our team stop codingpart of our project
                    then upload the code on GitHub and give final presentation
                    to the evaluators.
                  </p>
                </div>
              </div>
              <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-no-wrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="tracking-widest font-medium title-font text-green-400">
                    Aug 4th, Results Day
                  </span>
                </div>
                <div className="md:flex-grow mt-3">
                  <p className="text-white">
                    At 4th August the announcement of SIH 2020 result was held.
                    Our team was very excited because our final presentation was
                    shown in theresult announcement ceremony of Smart India
                    Hackathon.We had not won the Smart India Hackathon 2020.{" "}
                    <br /> But It was a very wonderful experience and we gained
                    a lot of knowledge we have appreciated our college and our
                    teachers for providing us such an opportunity. <br /> At the
                    end of this we decided to open a company in collaborationand
                    then we decide to make a potential business product by
                    collaboration.
                  </p>
                </div>
              </div>
              <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-no-wrap">
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-white title-font mb-0">
                    Thanks to all for helping us !
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Journey
