import * as React from "react";

interface ContainerProps {
    children: React.ReactNode,
    className?: string,
}


const Container: React.FC<ContainerProps> = ({ children, className }) => {
  const classNameValue = className ? `${className}` : "";
  return (
    <div className={`container px-5 md:px-[3.125rem] 2xl:px-[6.5rem] mx-auto ${classNameValue}`}>
      {children}
    </div>
  );
};

export default Container;

