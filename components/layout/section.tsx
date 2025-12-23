type SectionProps = {
  children: React.ReactNode;
  classname?: string;
};

const Section = ({ children, classname }: SectionProps) => {
  return <div className={`py-12 sm:py-16 ${classname || ""}`}>{children} </div>;
};
export default Section;
