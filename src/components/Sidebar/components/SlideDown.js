import React from "react";
import { SlideDown as ReactSlidedown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

export const SlideDown = ({ open, children, className, as="div" }) => (
  <ReactSlidedown closed={!open} className={className} as={as}>
    {children}
  </ReactSlidedown>
);
