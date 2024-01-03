interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="container flex h-14 max-w-screen-2xl items-center">
      {children}
    </div>
  );
};

export default Container;
