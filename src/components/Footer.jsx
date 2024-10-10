import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-14 text-sm ">
        {/* left section */}
        <div>
            <img className="mb-5 w-40 " src={assets.logo} alt="" />
            <p className="w-full md:w-2/3 text-gray-600 leading-6  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius libero itaque aspernatur ea sed, magni accusamus quas eos sit consectetur quasi veniam cum similique tempore temporibus animi? Id, animi rerum!</p>
        </div>
        {/* center section  */}
        <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-2 text-gray-600">
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        {/* right section */}
        <div>
        <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
        <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-222-555-22-55</li>
            <li>great@gmail.com</li>
        </ul>

        </div>

      </div>
        <div>
          <hr />
          <p className="text-center py-5 text-sm">copyright 2024@ Prescripto - All Right Reseverd.</p>
        </div>
    </div>
  );
}

export default Footer;
