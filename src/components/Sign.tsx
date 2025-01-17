import * as React from "react";
import Container from "./Container";
import { Text } from "@mantine/core";

interface SignProps {
    className?: string,
}


const Sign: React.FC<SignProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";
  return (
    <div className={`bg-iceberg ${classNameValue}`}>
      <Container className="text-black-pearl/90 flex flex-col justify-center items-center py-[42px] md:py-[39px] 2xl:py-[43px]">
        <Text className="font-medium text-[36px] leading-[36px] md:text-[56px] md:leading-[56px] 2xl:text-[73px] 2xl:leading-[73px]">
          5 820 125 114
        </Text>
        <Text className="mt-[9px] md:mt-[6px] 2xl:mt-3 font-medium text-[20px] leading-[22px] md:text-[36px] md:leading-[48px] 2xl:text-[40px] 2xl:leading-[48px]">
          подписано документов
        </Text>
        <Text className="text-center max-w-[280px] md:max-w-[478px] mt-[13px] md:mt-[6px] 2xl:mt-3 text-[14px] leading-[18.2px] md:text-[18px] md:leading-[22px] 2xl:leading-[28px]">
          Наша компания уже более 30 лет создает удобные решения для бизнеса
          любого размера. Мы гордимся Signy как безопасным и комфортным
          продуктом
        </Text>
      </Container>
    </div>
  );
};

export default Sign;

