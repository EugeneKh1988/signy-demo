import * as React from "react";
import { Text } from "@mantine/core";
import { IconBrandFacebookFilled, IconBrandGoogle, IconBrandGoogleFilled, IconBrandLinkedin, IconBrandTwitterFilled } from "@tabler/icons-react";

interface ShareProps {
    className?: string,
}


const Share: React.FC<ShareProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";
  return (
    <div className={`text-center ${classNameValue}`}>
      <Text className="mt-[31px] md:mt-6 2xl:mt-[48px] font-plexSerif font-medium text-[20px] leading-[23px] md:text-[22px]">
        Поделиться:
      </Text>
      <div className="mt-5 md:mt-5 flex justify-center text-royal-blue gap-[31px] md:gap-[80px] 2xl:gap-[30px]">
        <IconBrandTwitterFilled size={28} />
        <IconBrandLinkedin size={28} />
        <IconBrandGoogleFilled size={28} />
        <IconBrandFacebookFilled size={28} />
      </div>
    </div>
  );
};

export default Share;

