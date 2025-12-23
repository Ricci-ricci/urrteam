import Container from "./layout/container";
import { Button } from "./ui/button";

const Navbar = () => {
  const MENU = [
    {
      title: "Why us",
      link: "somewhere",
    },
    {
      title: "About us",
      link: "somewhere",
    },
    {
      title: "Our Work",
      link: "somewhere",
    },
  ];
  return (
    <Container classname="flex items-center justify-center mt-4 ">
      <div className="w-full md:hidden flex px-4">
        <span className="text-xl font-extrabold cursor-pointer text-white">
          YourTeam
        </span>
      </div>
      <div className="hidden md:flex h-[7vh] text-white bg-black rounded-full border-white border  items-center justify-center flex-row gap-16 px-8">
        <span className="text-2xl font-extrabold cursor-pointer">YourTeam</span>
        <div className="flex items-center justify-center flex-row gap-4">
          {MENU.map((item, index) => (
            <div key={index}>
              <span className="text-md cursor-pointer">{item.title}</span>
            </div>
          ))}
        </div>
        <Button
          className="py-6 cursor-pointer rounded-full text-black font-bold
          bg-green-500 hover:text-white hover:bg-green-400"
        >
          Book a call
        </Button>
      </div>
    </Container>
  );
};
export default Navbar;
