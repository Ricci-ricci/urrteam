import Container from "./layout/container";
import Section from "./layout/section";
import { Button } from "./ui/button";

const Part1 = () => {
  const TEXT1 = "We drive growth to your business";
  const TEXT2 =
    "Unlock your brand's potential with our proven marketing expertise from strategy to execution , we drive growth.";

  return (
    <Container classname="flex items-center justify-center">
      <Section>
        <div className="flex items-center justify-center flex-col p-4 w-full gap-8">
          <span className="text-white text-2xl md:text-8xl text-center font-bold">
            {TEXT1}
          </span>
          <span className=" text-md md:text-lg text-white max-w-lg">
            {TEXT2}
          </span>
          <Button className="rounded-full font-bold text-lg py-6 cursor-pointer">
            Book a Call
          </Button>
        </div>
      </Section>
    </Container>
  );
};
export default Part1;
