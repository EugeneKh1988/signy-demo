import * as React from "react";
import Container from "./Container";
import { Text } from "@mantine/core";
import { StaticImage } from "gatsby-plugin-image";

interface IntroduceProps {
    className?: string,
}


const Introduce: React.FC<IntroduceProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";
  return (
    <Container className={` ${classNameValue}`}>
      <Text className="text-center pt-5 md:pt-[50px] font-plexSerif font-medium text-[20px] leading-[22px] md:text-[36px] md:leading-[48px] 2xl:text-[40px]">
        Познакомимся в живую?
      </Text>
      <div className="flex justify-center my-5 md:mt-10 md:mb-[50px] 2xl:mt-5 2xl:mb-[63px]">
        <div className="relative overflow-hidden max-w-[734px]">
          <StaticImage
            src="../images/video-placeholder.png"
            alt="introduce"
            className="w-full h-auto rounded-[4px]"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-royal-blue/20 rounded-[4px] flex justify-center items-center">
            <StaticImage
              src="../images/play-video.png"
              alt="play"
              className="w-[54px] h-[54px] md:w-[102px] md:h-[102px]"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Introduce;

