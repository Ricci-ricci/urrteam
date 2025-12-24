import Container from "./layout/container";
import Section from "./layout/section";
import Data from "./data/projectsData";
import { Carousel, Card } from "./ui/apple-cards-carousel";

const Part4 = () => {
  const data = Data();
  const cards = data.map((card, index) => (
    <Card key={card.id} card={card} index={index} />
  ));
  return (
    <Container>
      <Section>
        <Carousel items={cards}></Carousel>
      </Section>
    </Container>
  );
};
export default Part4;
