import React, { useContext } from "react";
import { Context } from "../App";
import ThankYou from "../images/Thankyou.svg";
function Result() {
  const [rating] = useContext(Context);

  return (
    <>
      <div className=" flex items-center justify-center h-screen w-screen ">
        <div className=" bg-DarkBlue rounded-2xl w-80 min-w-80 p-4">
          <div className="flex flex-col justify-center items-center text-center gap-3">
            <img className="  p-3 text-white " src={ThankYou} alt="" />

            <p className="bg-lightgray_button text-Orange rounded-full p-2 px-4">
              You selected {rating} out of 5
            </p>

            <h3 className="text-White text-2xl">Thank you!</h3>
            <p
              className="text-LightGrey my-2  text-xs  "
              style={{ lineHeight: "1.6" }}
            >
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Result;
