import React, { useState } from "react";
import star from "../images/icon.svg";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

function Rating() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);

  const handleRatingSelection = (value) => {
    setRating(value);
  };
  const handleSubmit = () => {
    if (rating !== 0) {
      navigate(`/about/${rating}`);
    }
  };
  return (
    <div>
      <div className="container1 h-screen w-screen bg-black flex items-center justify-center">
        <div className="card-bg  bg-slate-900 w-screen  flex items-center justify-center">
          <div className="card bg-slate-600 rounded-3xl h-72 w-64 ">
            <div className="img w-8 h-8 bg-slate-300 rounded-full flex items-center justify-center m-4 ">
              <img src={star} alt="STAR_ICON" />
            </div>

            <h1 className="font-extrabold text-xl text-white ml-8 ">
              How did we do?
            </h1>

            <p className="pl-4 pt-4 pr-4 text-center text-xs">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
            <div className="flex items-center gap-6  pl-8 pr-8 mt-5  justify-center  text-xs">
              {[1, 2, 3, 4, 5].map((number) => (
                <div
                  key={number}
                  className={
                    rating === number
                      ? "rating_container active"
                      : "rating_container"
                  }
                  onClick={() => handleRatingSelection(number)}
                >
                  {number}
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center" }}>
              <Link to={rating !== 0 ? `/about/${rating}` : "/about"}>
                <button
                  onClick={handleSubmit}
                  className="bg-orange-500 text-white rounded-full hover:bg-white hover:text-orange-500 p-2 px-8 text-xs mt-5 "
                >
                  SUBMIT
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rating;
