import React from "react";

const Agency = () => {
  return (
    <div>
      <div className="section-1">
      <div className="h-[19vw] overflow-hidden rounded-3xl w-[14vw] bg-red-700 absolute top-32 left-[30vw]">
        <img
          className="w-full h-full object-cover"
          src="/src/assets/images/agency-img/first-sec-img.jpg"
          alt="first-img"
        />
      </div>
      <div className="relative">
        <div className="mt-[55vh] font-[font500]">
          <h1 className="text-[19vw] text-center uppercase leading-[17vw]">
            SEVEN7Y <br />
            TWO
          </h1>
        </div>
        <div className="flex flex-col md:items-end items-center justify-center font-[font300] md:text-6xl text-3xl md:mr-9 max-w-2xl mx-auto p-4 ">
          <p className="text-end">We’re inquisitive</p>
          <p className="leading-[4.7vw] md:w-[60vw]">
            and open-minded, and we make sure creativity crowds out ego from
            every corner. A brand is a living thing, with values, a personality
            and a story. If we ignore that, we can achieve short-term success,
            but not influence that goes the distance. We bring that perspective
            to every brand story we help tell.
          </p>
        </div>
      </div>
    </div>
    <div className="section-2 h-screen">

    </div>
    </div>
  );
};

export default Agency;
