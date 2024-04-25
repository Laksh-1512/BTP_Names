import React from "react";

const RightNavbar = ({ response }) => {
  return (
    <div className="h-full border-l p-4 flex flex-col justify-center gap-4 text-xl">
      {response ? (
        <>
          <p>
           Name : {response.name} 
          </p>
          <p>Gender: {response.gender}</p>
          <p>Country of Origin : {response.country}</p>
          <p>
            Accuracy score :{" "}
            {response.probability}
          </p>
        </>
      ) : (
        <p>Try searching..</p>
      )}
    </div>
  );
};

export default RightNavbar;
