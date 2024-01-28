'use client'

import React from 'react';
import { Collapse } from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Accordion = ({ open, toggle, title, desc }) => {
  return (
    <div className="text-black">
        <div className="bg-white py-5 px-10 flex justify-between items-center cursor pointer text-xl font-semibold border-[1px] border-black rounded-md"
            onClick={toggle}
        >
            <p>{title}</p>
            <div>
                { open ? <AiOutlineMinus/> : <AiOutlinePlus/> }
            </div>
        </div>

        <Collapse isOpened={open}>
            <div className="bg-white py-5 px-10">{desc}</div>
        </Collapse>
    </div>
  );
};

export default Accordion;
