'use client'

import { useState } from "react";
import Accordion from "./Accordion";

export default function FAQSection() {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null)
    }

    setOpen(index)
  }
  
  const accordionData = [
    {
      title: "Accordion Item 1",
      desc: "Content for Accordion Item 1",
    },
    {
      title: "Accordion Item 2",
      desc: "Content for Accordion Item 2",
    }
    // Add more items as needed
  ];

    return (
      <section className="w-full px-32 py-20 flex flex-col justify-center text-black">
        <div className="w-full self-center bg-white rounded-lg">
          {accordionData.map((data, index) => {
           return (
            <Accordion 
              key={index}
              open={index === open}
              title={data.title}
              desc={data.desc}
              toggle={() => toggle(index)}
            />
           )
          })}
        </div>
      </section>
    );
  }