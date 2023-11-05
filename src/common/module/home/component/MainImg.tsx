import MotionImg from "./MotionImg";
import Slogan from "./Slogan";

const MainImg = () => {
  return (
    <div className="w-[640px] mt-32 max-lg:mt-52 lg:absolute max-lg:top-[-170px] relative right-0 xl:right-[100px] max-w-full flex overflow-hidden">
      <div className="relative">
      <MotionImg/>
      <Slogan/>
      </div>
    </div>
  );
};

export default MainImg;
