import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Story from "./Story";


export default function Api() {
  const [obj, setObj] = useState([]);
  const getData = async () => {
    try {
      const result = await axios.get("https://child.onrender.com/api/sciencefiction");
      console.log(result.data);
      setObj(result.data);
    } catch (error) {
      console.log("error .....", error);
    }
  };


  const getImage = async () => {
    try {
      const result = await axios.get("https://ik.imagekit.io/dev24/${data?.Image}");
      console.log(result.data);
      setObj(result.data);
    } catch (error) {
      console.log("error .....", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <div className="flex flex-wrap justify-center items-center">
      {obj.slice(0, 3).map((item, index) => (
        <Story item={item} key={index}/>
      ))}
    </div>
    </>
  );
}