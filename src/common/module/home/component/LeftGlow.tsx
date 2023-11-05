import Rectangle from "@/common/component/svg/Rectangle";
import React from "react";

const LeftGlow = () => {
  return (
    <div className="absolute  top-[60px] z-[-1] left-0">
      <Rectangle />
    </div>
  );
};

export default LeftGlow;
