import { Button, Spoiler, Text } from "@mantine/core";
import * as React from "react";
import { useState } from "react";

interface SpoilerTextProps {
    children: React.ReactNode,
    className?: string,
}


const SpoilerText: React.FC<SpoilerTextProps> = ({ children, className }) => {
  const classNameValue = className ? `${className}` : "";
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={` ${classNameValue}`}>
      <Text className="mt-5 md:mt-3 2xl:mt-6 font-medium text-[20px] leading-[22px] md:font-semibold md:leading-[42px] 2xl:text-[40px]">
        SEO текст
      </Text>
      <Spoiler
        showLabel="Развернуть"
        hideLabel="Свернуть"
        expanded={expanded}
        onExpandedChange={setExpanded}
        classNames={{
          root: "mt-3 relative",
          control:
            "mx-auto left-0 right-0 text-center text-royal-blue font-medium text-[14px] leading-[24px] hover:no-underline uppercase tracking-[0.15em]",
        }}
      >
        <Text className="text-[14px] leading-[20.58px] md:text-[14px] md:leading-[20.58px] 2xl:text-[18px]">
          {children}
        </Text>
        {!expanded && (
          <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-b from-white/0 to-white/100"></div>
        )}
      </Spoiler>
    </div>
  );
};

export default SpoilerText;

