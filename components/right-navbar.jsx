import React from "react";

const RightNavbar = ({ response }) => {
  return (
    <div className="h-full border-l p-4 flex flex-col justify-center gap-4 text-xl">
      {response ? (
        <>
          <p>
            Full Name : {response.firstName} {response.lastName}
          </p>
          <p>Country of Origin : {response.countryOrigin}</p>
          <p>Alt country of origin : {response.countryOriginAlt}</p>
          <p>
            Accuracy score :{" "}
            {response.probabilityAltCalibrated.toFixed(3) * 100}
          </p>
        </>
      ) : (
        <p>Try searching..</p>
      )}
    </div>
  );
};

export default RightNavbar;
