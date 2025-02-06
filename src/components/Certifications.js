import React from "react";
import CertificationsData from "../data/certifications";

const Certifications = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="p-4 pt-0 mx-auto md:p-5 md:mx-20 lg:mx-32 xl:mx-56">
        <div id="certifications" className="flex flex-wrap w-full mb-4 flex-col justify-center text-center md:mb-7">
          <h1 className="sm:text-4xl text-3xl font-medium mb-2 text-gray-900">Certifications</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {CertificationsData.map((certification, index) => (
            <div key={index} className="flex justify-center">
              <img src={certification.image} alt={certification.name} className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 transition duration-700 hover:scale-110" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
