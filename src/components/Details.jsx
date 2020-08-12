import React from 'react'

const Details = () => {
    return (
      <>
        <div className="container-fluid">
          <section className="text-gray-500 bg-gray-900 body-font">
            <div className="container px-5 py-4 mx-auto">
              <div className="flex flex-col text-center w-full mb-2">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                  Our Team
                </h1>
              </div>
              <div className="flex flex-wrap -m-2">
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                  <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                    <div className="flex-grow">
                      <h5
                        className="text-red-300 title-font font-medium"
                        style={{ fontWeight: "bold" }}
                      >
                        Abhishek Dubey
                      </h5>
                      <hr />
                      <p className="text-gray-400">Itsmead1999@gmail.com</p>
                      <p className="text-gray-400">9696155536</p>
                      <p
                        className="text-red-300"
                        style={{ fontWeight: "bold" }}
                      >
                        LEADER
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                  <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                    <div className="flex-grow">
                      <h5 className="text-white title-font font-medium">
                        Yash Sharma
                      </h5>
                      <hr />
                      <p className="text-gray-500">Syash9588@gmail.com</p>
                      <p className="text-gray-500">8739897983</p>
                    </div>
                  </div>
                </div>
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                  <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                    <div className="flex-grow">
                      <h5 className="text-white title-font font-medium">
                        Nitik Sharma
                      </h5>
                      <hr />
                      <p className="text-gray-500">NitikSharma31@gmail.com</p>
                      <p className="text-gray-500">9097010264</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container px-5 py-2 mt-3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                  <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                    <div className="flex-grow">
                      <h5 className="text-white title-font font-medium">
                        Lakshita Acharya
                      </h5>
                      <hr />
                      <p className="text-gray-400">Laxita1122@gmail.com</p>
                      <p className="text-gray-400">9461639396</p>
                    </div>
                  </div>
                </div>
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                  <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                    <div className="flex-grow">
                      <h5 className="text-white title-font font-medium">
                        Jyoti Verma
                      </h5>
                      <hr />
                      <p className="text-gray-500">Shiku1382000@gmail.com</p>
                      <p className="text-gray-500">7424806401</p>
                    </div>
                  </div>
                </div>
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                  <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                    <div className="flex-grow">
                      <h5 className="text-white title-font font-medium">
                        Shubham Rathore
                      </h5>
                      <hr />
                      <p className="text-gray-500">Subhrathor2000@gmail.com</p>
                      <p className="text-gray-500">7297887994</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
}

export default Details
