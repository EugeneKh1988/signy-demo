import * as React from "react";
import PricesContent from "../content/prices.json";
import { Button, Text } from "@mantine/core";
import Container from "./Container";

interface PricesProps {
  className?: string;
}

interface IPrice {
  id: number;
  title: string;
  description: string;
  price: number;
  pricePeriod: string;
  action: { name: string; href: string };
}

const Prices: React.FC<PricesProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";

  return (
    <Container
      className={`text-black-pearl/90 pb-[33px] md:pb-[50px] 2xl:pb-[98px] ${classNameValue}`}
    >
      <Text className="text-center mt-5 md:mt-[27px] 2xl:mt-[57px] font-plexSerif font-medium text-[20px] leading-[22px] md:text-[36px] md:leading-[48px] 2xl:text-[40px]">
        Тарифы
      </Text>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 justify-center items-stretch justify-items-center mt-5 md:mt-[16px] 2xl:mt-[63px] gap-5 md:gap-[50px] 2xl:gap-[36px]">
        {PricesContent.content.map((item: IPrice) => (
          <div
            key={item.id}
            className="py-6 px-8 md:py-8 bg-solitude w-[256px] rounded-[4px]"
          >
            <Text className="font-medium text-[28px] leading-[40px]">
              {item.title}
            </Text>
            <Text className="font-medium text-[16px] leading-[24px] mt-3 md:mt-[44px]">
              {item.description}
            </Text>
            <div
              className={`flex flex-nowrap mt-3 md:mt-[44px] items-baseline gap-[2px] ${
                item.price < 0 ? "hidden" : ""
              }`}
            >
              <Text className="font-bold text-[48px] leading-[48px]">
                {item.price}
              </Text>
              <span className="font-medium text-[20px] leading-[24px]">
                {item.pricePeriod}
              </span>
            </div>
            <Button className="mt-[39px] md:mt-[50px] w-full rounded-[100px] text-aqua-haze hover:bg-transparent hover:text-black-pearl/90 border border-royal-blue font-semibold text-[12px] leading-[20px] tracking-[0.03em]">
              {item.action.name}
            </Button>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Prices;
