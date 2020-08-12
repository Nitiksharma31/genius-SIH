import React from 'react';
import Typical from "react-typical";

const Footer = () => {
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
                                        steps={["Our Idea 💡", 4000]}
                                    />
                                </h2>
                            </div>
                        </div>
                        <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-no-wrap">
                            <div className="md:w-full md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <h4 className="tracking-widest font-medium title-font text-red-500 mb-3">
                                    Idea/Organization Details
                  </h4>
                            </div>
                            <div className="md:flex-grow mt-3">
                                <p className="text-white">
                                  <span className='text-green-400 mr-2'>Ministry/Organization Name:</span>   Dr. B R Ambedkar Institute of Technology(DBRAIT)
                  <br />
                  <span className='text-green-400 mr-2'>Problem Statement:</span> Making the official activities to go paperless - like sending official
communications through e-media, automating procedures for protecting the
environment. Design a customizable workflow management system to handle
submission of documents and approval workflow with facility to sign the document
with approval seal. This system should have ability to intimate the concerned party by
email and also be manageable by email.(Paperless Office) <br />
<span className='text-green-400 mr-2'>Team Name:</span> Genius
<br />
<span className='text-green-400 mr-2'>Team Leader Name:</span> Abhishek Dubey
<br />
<span className='text-green-400 mr-2'>College Code:</span>  1-3512850176

                  </p>
                            </div>
                        </div>
                        <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-no-wrap">
                            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <h4 className="tracking-widest font-medium title-font text-red-500">
                                    IDEA
                  </h4>
                            </div>
                            <div className="md:flex-grow mt-3">
                                <p className="text-white">
                                We developed a system to centralize all the Departments of INDIA
Paperless.In this app any person can get the approval of Documents
according to his required department include most of the departments
that comes to Central Government attachment.By this app user can
check status of documents that are pending or approved.
<br />
<br />
Any officer can approve the document by using e-signature with the
effective security of e-token.The officer who handle the app can also
check the working of officer's that works under the government, if any
work is pending then officer get notification about pending work .An
officer can also get a email notification when any person send document
to him and person who send the document also get notification when
officer approve the document.
                  </p>
                            </div>
                        </div>
                       
                       
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer
