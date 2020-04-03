import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "./svgs/svgs";

export const Menu = () => {
  return (
    <div className="bg-base pt-4 pb-2">
      <div className="flex justify-around items-center">
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="text-xl">
          <Link to="/how-it-works" className="text-white font-medium">
            How it works
          </Link>
          <Link to="/support" className="text-white font-medium ml-20">
            Support
          </Link>
        </div>
      </div>
    </div>
  );
};
