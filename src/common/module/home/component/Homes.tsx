import BgWave from "./BgWave";
import BottomGlow from "./BottomGlow";
import HeaderHome from "./HeaderHome";
import LeftGlow from "./LeftGlow";
import Line from "./Line";
import MainImg from "./MainImg";


const Homes = () => {
  return (
    <div className="xl:px-60 lg:px-11 px-5  relative overflow-hidden grid grid-cols-1 w-full mx-auto max-w-[1500px] h-auto lg:h-screen">
      <HeaderHome/>
      <MainImg/>
      <BgWave/>
      <Line/>
      <LeftGlow />
      <BottomGlow/>
    </div>
  );
};

export default Homes;
