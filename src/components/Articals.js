import React from "react";
import { Link } from "react-router-dom";

const Articals = ({ articals }) => {
  return (
    <>
      {articals.map((artical, i) => (
        <div key={i} className="p-4 md:w-1/2">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <Link to={`/artical/${artical.name}`}>
              <img
                className="lg:h-48 mf:h-36 w-full object-cover object-center"
                src={artical.thumbnail}
                alt="blog"
              />
            </Link>
            <div className="p-6">
              <Link key={i} to={`/artical/${artical.name}`}>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  {artical.title}
                </h3>
              </Link>
              <hr />
              <p className="leading-relaxed mb-3 ">
                {artical.content[0].substring(0, 110)}...
              </p>
              <div className="flex items-center flex-wrap">
                <Link
                  to={`/artical/${artical.name}`}
                  className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                >
                  Learn more..
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Articals;
