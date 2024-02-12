import React from "react";
import { toast } from "react-toastify";

const SingleColor = ({ shade, index }) => {
  const { hex, weight } = shade;
  const SaveToClipBoard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Copied to Clipboard!");
      } catch {
        toast.error("Failed to copy to Clipboard!");
      }
    } else {
      toast.error("Clipboard access not available!");
    }
  };
  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
      onClick={SaveToClipBoard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};

export default SingleColor;
