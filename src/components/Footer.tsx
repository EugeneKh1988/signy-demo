import * as React from "react";
import Container from "./Container";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Text } from "@mantine/core";

interface FooterProps {
    className?: string,
}


const Footer: React.FC<FooterProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";
  return (
    <div className="bg-black-pearl text-white pt-[29px] md:pt-[44px] 2xl:md:pt-[64px]">
      <Container
        className={`flex justify-between text-[14px] leading-6 gap-2 ${classNameValue}`}
      >
        <div className="flex md:basis-1/2 gap-3 2xl:gap-[50px] flex-wrap md:flex-nowrap">
          <div>
            <StaticImage
              src="../images/logo-white.png"
              width={132}
              height={40}
              alt="Logo"
            />
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-3 2xl:gap-[50px]">
            <ul className="basis-full md:basis-1/2 text-[14px] leading-6 space-y-4">
              <li>
                <Link to="/">Про нас</Link>
              </li>
              <li>
                <Link to="/">Цены</Link>
              </li>
              <li>
                <Link to="/">Вход</Link>
              </li>
              <li>
                <Link to="/">Регистрация</Link>
              </li>
            </ul>
            <ul className="basis-full md:basis-1/2 text-[14px] leading-6 space-y-4">
              <li>
                <Link to="/blog">Блог</Link>
              </li>
              <li>
                <Link to="/">Контакты</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between md:basis-1/2 flex-wrap md:flex-nowrap gap-2 text-right md:text-left">
          <ul className="basis-full md:basis-1/2 text-[14px] leading-6 space-y-4">
            <li>
              <Link to="/">infosmartsign@smarttender.biz</Link>
            </li>
            <li>
              <Link to="/">Facebook</Link>
            </li>
          </ul>
          <div className="basis-full md:basis-1/2 space-y-4">
            <Text className="text-[14px] leading-6">
              пр-т Миколи Бажана, 14 А Київ, 02072
            </Text>
            <Text className="text-[14px] leading-6">0 800 750643</Text>
            <Text className="text-[14px] leading-6">+380 44 334 56 43</Text>
            <Text className="text-[14px] leading-6">+380 44 338 86 43</Text>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;

