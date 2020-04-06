import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "./svgs/svgs";
import "../styles/Menu.scss";
import { stack as MobileMenu } from "react-burger-menu";

export const Menu = () => {
  return (
    <div className="bg-base pt-4 pb-2">
      <div className="ml-4 sm:ml-0 sm:flex sm:justify-around sm:items-center">
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="hidden sm:block text-xl">
          <Link to="/dashboard" className="text-white font-medium mr-10">
            Dashboard
          </Link>
          <Link
            to="/how-it-works"
            className="text-white font-medium hover:bg-white hover:text-purple-600 mr-10"
          >
            How it works
          </Link>
          <Link to="/support" className="text-white font-medium mr-10">
            Support
          </Link>
          <Link to="/" className="text-white font-medium">
            Logout
          </Link>
        </div>
      </div>
      <div className="sm:hidden">
        <MobileMenu noOverlay right>
          <div>
            <Link to="/dashboard" className="text-white font-medium ">
              Dashboard
            </Link>
          </div>

          <Link to="/how-it-works" className="text-white font-medium ">
            How it works
          </Link>
          <Link to="/support" className="text-white font-medium">
            Support
          </Link>
          <Link to="/support" className="text-white font-medium">
            Logout
          </Link>
        </MobileMenu>
      </div>
    </div>
  );
};
