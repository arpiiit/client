import React from "react";
import articalContent from "./Artical-content";
import artical from "./Artical-content";
import { Link } from "react-router-dom";
import Articals from "../components/Articals";



const ArticalList = () => {
  return (
    <div>
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
        Articals
      </h1>
      <div className="container py-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          {/* {articalContent.map((artical, i) => (
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
                        <h3 className="text-lg font-medium text-gray-900 mb-3">{artical.title}</h3>
                    </Link>
                    <hr/>
                    <p className="leading-relaxed mb-3 ">
                        {artical.content[0].substring(0,110)}...
                    </p>
                    <div className="flex items-center flex-wrap">
                        <Link to={`/artical/${artical.name}`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                            Learn more..
                        </Link>
                    </div>
                </div>
              </div>
            </div>
          ))} */}
          <Articals articals={articalContent}/>
        </div>
      </div>
    </div>
  );
};

export default ArticalList;
