import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const RequestPartner = () => {
  const [partners, setPartners] = useState({
    partners: [
      { id: 1, userName: "Rosales", curriculum: "React.js" },
      { id: 2, userName: "Freddy", curriculum: "JavaScript" },
      { id: 3, userName: "Pedro", curriculum: "HTML & CSS" }
    ]
  });

  const displayPartnersList = partners.partners.map(partner => (
    <div key={uuidv4()} className="grid grid-cols-2 mb-2">
      <div>
        <p className="font-semibold text-xl">{partner.userName}</p>
      </div>
      <div>
        <p className="text-xl">{partner.curriculum}</p>
      </div>
    </div>
  ));
  return (
    <div className="lg:max-w-6xl md:max-w-md m-auto">
      <div className="lg:grid grid-cols-4 bg-white ">
        <div className="col-span-3 mt-20 mb-20 mx-6">
          <h1 className="base-color text-2xl">Request a partner</h1>
          <p className="sm:mt-10 text-3xl">
            You're currently in the HTML & CSS Track.
          </p>
        </div>
        <div className="bg-base rounded-lg py-8 px-4  max-w-md m-auto md:mt-10 mx-6">
          <div className="ml-4 mt-4">
            <h1 className="text-2xl text-white font-semibold">
              Available partners
            </h1>
            <div className="bg-white h-2 w-48 rounded-full"></div>
            <div className="mt-2 text-white">
              <p>Select a partner below to send a request.</p>
            </div>
            <div className="mt-4 text-white">{displayPartnersList}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RequestPartner;
