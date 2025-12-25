import Container from "./layout/container";
import Section from "./layout/section";
import Data from "./data/projectsData";
import { Carousel, Card } from "./ui/apple-cards-carousel";
import Image from "next/image";
export type ProjectType = {
  id: number;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  securityFocus: string[];
  category: string;
  status: "Completed" | "In Progress" | "Planned";
  github: string;
  liveDemo: string | null;
  image: string;
  createdAt: string;
};

const Content = ({
  content,
}: {
  content: Pick<ProjectType, "image" | "title" | "description">;
}) => {
  return (
    <>
      <div
        key={"dummy-content"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            {content.title}
          </span>{" "}
          {content.description}
        </p>
        <Image
          src={content.image}
          alt={content.title}
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    </>
  );
};

const Part4 = () => {
  const data = Data();
  const cards = data.map((card, index) => (
    <Card
      key={card.id}
      card={{
        src: card.image,
        title: card.title,
        content: <Content content={card}></Content>,
        category: card.category,
      }}
      index={index}
    />
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
