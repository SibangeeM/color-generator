import React from "react";
import SingleColor from "./SingleColor";
import { nanoid } from "nanoid";

const ColorList = ({ shades }) => {
  return (
    <section className="colors">
      {shades.map((shade, index) => {
        return <SingleColor key={nanoid()} shade={shade} index={index}></SingleColor>;
      })}
    </section>
  );
};

export default ColorList;
