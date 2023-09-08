"use client";

import Link from "next/link";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

export default function PricingSection() {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section className="w-full px-32 py-32">
      <div className="grid grid-cols-2 bg-white rounded-lg text-black border-[1px] border-black shadow-2xl hover:shadow-[0px_0px_60px_0px_rgba(24,_212,_0,_0.4)] duration-300">
        {/* Leftside Content */}
        <div className="flex flex-col col-span-1 px-20 py-20 border-r-[1px] border-black space-y-10">
          <h2 className="font-heading text-2xl font-black uppercase">
            MEMBERSHIP
          </h2>
          <div className="flex flex-row items-center space-x-10">
            <BsArrowRight size="50" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="flex flex-row items-center space-x-10">
            <BsArrowRight size="50" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="flex flex-row items-center space-x-10">
            <BsArrowRight size="50" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        {/* Rightside Content */}
        <div className="flex flex-col items-start col-span-1 px-20 py-20 space-y-8">
          <div className="mt-10">
            {isMonthly ? (
              <div className="flex flex-row items-end">
                <p className=" text-7xl font-black font-heading">$15</p>
                <p>/month</p>
              </div>
            ) : (
              <div className="flex flex-row items-end">
                <p className=" text-7xl font-black font-heading">$100</p>
                <p>/month</p>
              </div>
            )}
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis nesciunt necessitatibus recusandae incidunt quod ducimus.</p>
          <div className="inline-flex items-center justify-center bg-gray-500 rounded-full duration-200">
            <button
              onClick={() => setIsMonthly(true)}
              className={`px-10 py-2 uppercase rounded-full ${
                isMonthly ? "bg-black text-white" : "bg-gray-500 text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsMonthly(false)}
              className={`px-10 py-2 uppercase rounded-full ${
                !isMonthly
                  ? "bg-Secondary-100 text-white"
                  : "bg-gray-500 text-white"
              }`}
            >
              Yearly
            </button>
          </div>

          <Link
            className="py-2 px-10 uppercase bg-black text-white rounded-sm hover:bg-Secondary-100 duration-200"
            href="/register"
          >
            sign up
          </Link>
        </div>
      </div>
    </section>
  );
}
