import HeaderNav from "./HeaderNav";
import Login from "./Login";
import NavigationNav from "./NavigationNav";

const NavigationBar = () => {
  return (
    <div className="flex justify-center fixed z-[99] items-center m-5 p-5 xl:px-60 rounded-xl w-full max-w-[1500px]">
      <HeaderNav />
      <NavigationNav />
      <Login />
    </div>
  );
};

export default NavigationBar;
