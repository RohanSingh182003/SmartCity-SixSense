import React from "react";
import { AiOutlineLogout, AiOutlineMenuUnfold } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-primary text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label htmlFor="my-drawer">
              <AiOutlineMenuUnfold className="text-2xl cursor-pointer" />
            </label>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-2xl primary-heading font-bold">
            Smart City
          </a>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0}>
              <button className="btn btn-ghost btn-circle">
                <div className="avatar">
                  <div className="w-8 rounded-full">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
              </button>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow rounded-box text-primary w-52"
            >
              <li>
                <a><AiOutlineLogout className="text-xl"/> Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
