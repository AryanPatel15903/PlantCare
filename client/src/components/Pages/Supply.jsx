import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import submit from "./../../assests/submit.webp";

function Supply() {
  // Use the useLocation hook to get passed state
  const location = useLocation();
  const { disease, description, steps, supplement_name, supplement_image } =
    location.state || {};

    const navigate = useNavigate();

    // Function to handle redirection to service page
    const goToServicePage = () => {
      navigate("/service"); // Navigate to the service page
    };

  return (
    <div className="relative ">
      
      <img
        src={submit}
        alt="Plant Disease Detection"
        className="w-full h-[200vh] z-0"
      />

      {/* Button to redirect to the service page */}
      <div className="absolute top-4 right-4 z-10">
        <button
          className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300 font-semibold"
          onClick={goToServicePage}
        >
          Go to Service
        </button>
      </div>

      <div className="absolute top-0 container text-white text-3xl font-bold mx-auto p-4 mt-5">
        {disease && <h2>Detected Disease: {disease}</h2>}
      </div>

      <div className="absolute top-0 pt-[120px] left-0 w-full h-full container mx-auto flex flex-col items-center">
        <div className="w-[80%] bg-white p-4 rounded-lg shadow-lg border border-green-500 mb-4">
          <h5 className="text-lg font-semibold mb-2">Disease Description:</h5>
          <div className="text-left">
          {description && (
            <ul className="list-disc pl-5">
              {description.split('.').map((sentence, index) => (
                sentence.trim() && (
                  <li key={index}>{sentence}.</li>
                )
              ))}
            </ul>
          )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[80%]">
          <div className="bg-white p-4 rounded-lg shadow-lg border border-green-500">
            <h5 className="text-lg font-semibold mb-2">Possible Steps:</h5>
            <div className="text-left">
            {steps && (
              <ul className="list-disc pl-5">
                {steps.split('.').map((sentence, index) => (
                  sentence.trim() && (
                    <li key={index}>{sentence}.</li>
                  )
                ))}
              </ul>
            )}
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg border border-green-500 flex flex-col items-center">
            <h5 className="text-lg font-semibold mb-2">Supplement Information:</h5>
            {supplement_image && (
              <div className="mb-4">
                <img
                  src={supplement_image}
                  alt="Supplement"
                  className="object-contain h-[400px] w-96"
                />
              </div>
            )}
            {supplement_name && <h3 className="text-lg font-semibold">{supplement_name}</h3>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Supply;
