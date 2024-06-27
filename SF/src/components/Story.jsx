import React from "react";

export default function Story({ item }) {
  return (
    <div className="flex mx-5 w-80 p-4 h-80 overflow-hidden hide-scrollbar">
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img
        className="rounded-t-lg"
        src="/docs/images/blog/image-1.jpg"
        alt=""
      />
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {item.Storyadvenure.Storytitle}
        </h5>
      </a>
      <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">

      <p className="my-3">
        {item.Storyadvenure.content[0].Paragraph}
        <img src={item.Storyadvenure.content[0].Storyimage} alt="Err in api" className="w-40 h-10"/>
      </p>
      <p>
        {item.Storyadvenure.content[1].Paragraph}
        <img src={item.Storyadvenure.content[0].Storyimage} alt="Err in api" className="w-40 h-10"/>
      </p>

      </div>
     
    </div>
  </div>
  </div>
  );
}
