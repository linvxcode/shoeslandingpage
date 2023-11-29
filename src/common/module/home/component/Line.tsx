import Elipse2 from "@/common/component/svg/Elipse2";
import Elipse3 from "@/common/component/svg/Elipse3";
import Subtract from "@/common/component/svg/Subtract";
import React from "react";

const Line = () => {
  return (
    <div className="absolute lg:top-0 top-[490px]  left-0 right-[10px] lg:right-0 xl:right-[100px]">
      <div className="absolute top-[90px]  right-[40px]">
        <Subtract />
      </div>
      <div className="absolute top-[85px] right-[230px] lg:right-[300px]">
        <Elipse2 />
      </div>
      <div className="absolute lg:top-[599px] top-[480px] right-[230px] lg:right-[300px]">
        <Elipse3 />
      </div>
    </div>
  );
};

export default Line;
