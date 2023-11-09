import React from "react";
import { useLocation } from "react-router-dom";
import thankyou from "../images/thank.svg";
import { Link } from "react-router-dom";

export default function About() {
  const selectedRating = location.pathname.split("/")[2];

  return (
    <div>
      <div className="container1 h-screen w-screen bg-black flex items-center justify-center">
        <div className="card-bg  bg-slate-900  w-screen flex items-center justify-center">
          <div className="card bg-slate-600  rounded-3xl h-72 w-64 ">
            <div className="my-6 flex justify-center">
              <img className="h-12 w-16" src={thankyou} alt="thankyouICON" />
            </div>

            <div className="text-orange-500 flex justify-center">
              <p className="bg-slate-800 p-1 px-3 rounded-2xl text-xs">
                You selected {selectedRating} out of 5
              </p>
            </div>
            <h2 className="text-center  text-white mt-4 text-xl">Thank You!</h2>
            <p className="p-3 text-center text-xs">
              We appreciate you taking the time to give a rating. If you need
              more support, don't hesitate to get in touch!
            </p>
            <div style={{ textAlign: "center" }}>
              <Link to="/home">
                {" "}
                <button className="bg-orange-500 text-white rounded-full hover:bg-white hover:text-orange-500 p-1 px-3 text-sm">
                  RATE AGAIN
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
