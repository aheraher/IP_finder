"use client";
import React, {useState} from "react";

const ip_data = async () => {
  let data = await fetch("https://ipapi.co/json");
  data = await data.json();
  console.log(data);
  return data;
};
ip_data();


const page = async () => {
  let data = await ip_data();

  return (
    <>
      <div className="w-full flex justify-center items-center h-screen bg-gradient-to-r from-cyan-500 to-blue-600">
        <div className="container max-w-fit p-4   bg-green-800 border-t-green-800 rounded-lg shadow-lg text-white">
          <h1 className="text-3xl font-bold mb-4">IP Information</h1>
          <ul>
            <li>
              <strong className="text-lg font-semibold">IP:</strong> {data.ip}
            </li>
            <li>
              <strong className="text-lg font-semibold">Version:</strong> {data.version}
            </li>
            <li>
              <strong className="text-lg font-semibold">City:</strong> {data.city}
            </li>
            <li>
              <strong className="text-lg font-semibold">Region:</strong> {data.region}
            </li>
            <li>
              <strong className="text-lg font-semibold">Country:</strong> {data.country_name}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default page;
