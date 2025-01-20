import * as React from "react";
import Container from "./Container";
import { Button, Text, TextInput } from "@mantine/core";

interface SubscribeProps {
  className?: string;
}

const Subscribe: React.FC<SubscribeProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";
  return (
    <Container
      className={`pb-[25px] md:pb-[41px]  2xl:pb-[98px] ${classNameValue}`}
    >
      <Text className="mt-[48px] md:mt-[48px] 2xl:mt-[56px] text-center font-plexSerif font-medium text-[20px] leading-[22px] md:text-[36px] md:leading-[48px] 2xl:text-[40px]">
        Подпишись на наши новости!
      </Text>
      <Text className="mt-[20px] md:mt-[31px] text-center text-[14px] leading-[20.58px] md:text-[16px] md:leading-[23px] 2xl:text-[18px] 2xl:leading-[33px]">
        Введи свой электронный адрес и будь в курсе всех обновлений
      </Text>
      <div className="mt-[31px] flex flex-wrap md:flex-nowrap justify-center items-center gap-[23px] md:gap-[18px]">
        <TextInput
          classNames={{
            input:
              "bg-white border-royal-blue rounded-[37px] min-h-[42px] md:min-h-[50px]",
            root: "w-full md:max-w-[399px]",
          }}
        />
        <Button className="text-white px-8 uppercase tracking-[0.19em] rounded-[41px] font-medium text-[12px] leading-[24px] md:text-[14px] md:leading-[24px] min-h-[42px] md:min-h-[50px]">
          отправить
        </Button>
      </div>
    </Container>
  );
};

export default Subscribe;
