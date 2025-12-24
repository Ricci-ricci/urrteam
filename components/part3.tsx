import Container from "./layout/container";
import Section from "./layout/section";

const Part3 = () => {
  const services = [
    {
      title: "Rationality",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quam purus, posuere a fermentum ac, mollis iaculis est. Praesent non neque nisl. Sed dictum sed lacus at posuere. Sed et nisi non eros dapibus pulvinar ut sit amet lectus. Duis ut mauris lorem. Sed gravida viverra mauris.",
    },
    {
      title: "Initiality",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quam purus, posuere a fermentum ac, mollis iaculis est. Praesent non neque nisl. Sed dictum sed lacus at posuere. Sed et nisi non eros dapibus pulvinar ut sit amet lectus. Duis ut mauris lorem. Sed gravida viverra mauris.",
    },
    {
      title: "Innovation",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quam purus, posuere a fermentum ac, mollis iaculis est. Praesent non neque nisl. Sed dictum sed lacus at posuere. Sed et nisi non eros dapibus pulvinar ut sit amet lectus. Duis ut mauris lorem. Sed gravida viverra mauris.",
    },
  ];
  return (
    <Container classname="flex items-center justify-center">
      <Section>
        <div className="flex items-center justify-center flex-row w-full gap-4 p-4">
          {services.map((item, index) => (
            <div
              className="flex items-start justify-end gap-4 flex-col p-4 h-[40vh] border-white rounded-xl border text-white"
              key={index}
            >
              <h1 className="text-4xl font-extrabold"> {item.title}</h1>
              <span className="text-sm font-light">{item.desc}</span>
            </div>
          ))}
        </div>
      </Section>
    </Container>
  );
};
export default Part3;
