type ContainerProps = {
  children: React.ReactNode;
  classname?: string;
};
const Container = ({ children, classname }: ContainerProps) => {
  return (
    <div
      className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${classname || ""}`}
    >
      {children}
    </div>
  );
};
export default Container;
