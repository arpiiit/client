import React from "react";
import { useParams } from "react-router-dom";
import articalContent from "./Artical-content";
import Articals from "../components/Articals";


const Artical = () => {
  const { name } = useParams();
  const artical = articalContent.find((artical) => artical.name === name);

  if (!artical) return <h1>Artical doesn't exit. Comming Soon.....</h1>;
  const otherArtical=articalContent.filter(artical=>artical.name!==name)
  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
        {artical.title}
      </h1>
      <img
        className="lg:h-48 mf:h-36 w-full object-cover rounded-md my-6 object-center"
        src={artical.thumbnail}
        alt="blog"
      />
      {artical.content.map((paragraph, i) => (
        <p className="mx-auto leading-relaxed text-base mb-4" key={i}>
          {paragraph}
        </p>
      ))}
      <h1 className="sm:text-2xl text-xl font-bold my-4 text-gray-900">Other Articals</h1>
      <div className="flex flex-wrap -m-4">
        <Articals articals={otherArtical}/>
      </div>
    </>
  );
};

export default Artical;
