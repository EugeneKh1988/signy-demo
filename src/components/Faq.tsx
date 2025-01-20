import * as React from "react";
import FaqContent from "../content/faq.json";
import { Accordion, Text } from "@mantine/core";
import Container from "./Container";
import { useState } from "react";
import { IconMinus, IconPlus } from "@tabler/icons-react";

interface FaqProps {
  className?: string;
}

interface IFaq {
  id: number;
  question: string;
  answer: string;
}

const Faq: React.FC<FaqProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";
  const [value, setValue] = useState<string | null>(null);

  return (
    <div className="bg-solitude text-black-pearl/90">
      <Container
        className={`pb-[48px] md:pb-[44px] 2xl:pb-[42px] flex flex-col items-center ${classNameValue}`}
      >
        <Text className="py-[30px] md:pt-4 md:pb-[23px] 2xl:pt-[26px] 2xl:pb-[36px] font-plexSerif font-medium text-[20px] leading-[22px] md:text-[36px] md:leading-[36px] md:max-w-[458px] 2xl:text-[40px] 2xl:leading-[48px] 2xl:max-w-full">
          Популярные вопросы и ответы на них
        </Text>
        <Accordion
          value={value}
          onChange={setValue}
          chevronPosition="left"
          classNames={{
            root: "md:max-w-[511px] 2xl:max-w-[527px]",
            label:
              "text-[14px] leading-[18.2px] md:text-[16px] md:leading-[22px] 2xl:text-[18px] font-inherit",
            control: "data-[active='true']:font-medium",
            content:
              "text-[14px] leading-[18.2px] md:text-[16px] md:leading-[22px] 2xl:text-[18px]",
            item: "border-none",
            chevron: "mr-[6px] md:mr-[19px] 2xl:mr-[25px] text-royal-blue",
          }}
        >
          {FaqContent.content.map((item: IFaq) => (
            <Accordion.Item value={item.question} key={item.id}>
              <Accordion.Control
                chevron={value != item.question ? <IconPlus /> : <IconMinus />}
              >
                {item.question}
              </Accordion.Control>
              <Accordion.Panel>{item.answer}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </div>
  );
};

export default Faq;
