import React, { useContext, useState } from "react";
import star from "../images/star.svg";
import { useNavigate } from "react-router-dom";
import { Context } from "../App";

function Rating() {
  const navigate = useNavigate();
  const [rating, setRating] = useContext(Context);
  const nums = [1, 2, 3, 4, 5];

  const handleClick = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    rating ? navigate("/result") : "";
  };

  return (
    <>
      <div className=" flex items-center justify-center h-screen w-screen ">
        <div className=" bg-DarkBlue rounded-2xl w-80 min-w-80 p-4">
          <img
            className="bg-lightgray_button   p-3 text-white rounded-full m-2"
            src={star}
            alt=""
          />

          <div className=" ">
            <div className="  px-4">
              <h3 className="text-White text-2xl ">How did we do?</h3>
              <p
                className="text-LightGrey my-2  text-xs  "
                style={{ lineHeight: "1.6" }}
              >
                {" "}
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>
            </div>
            <div className="text-center">
              {nums.map((x, i) => (
                <button
                  key={i}
                  onClick={() => handleClick(x)}
                  className={`bg-lightgray_button p-2 px-4 text-LightGrey rounded-full m-2 hover:bg-Orange text-center ${
                    rating == x ? "bg-white" : "bg-lightgray_button"
                  }`}
                >
                  {x}
                </button>
              ))}
            </div>
          </div>
          <button
            className="bg-Orange hover:bg-white w-full rounded-3xl p-2 mt-2"
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </>
  );
}

export default Rating;
