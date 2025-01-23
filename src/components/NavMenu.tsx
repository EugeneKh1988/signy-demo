import { Button, Drawer, NavLink, ScrollArea } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { IconMenu2 } from "@tabler/icons-react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

interface NavMenuProps {
    className?: string,
}


const NavMenu: React.FC<NavMenuProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";
  const [opened, { open, close }] = useDisclosure(false);
  const isMaximumWidth = useMediaQuery("(max-width: 28.125em)");
  return (
    <div className={`${classNameValue}`}>
      <Drawer.Root
        opened={opened}
        onClose={close}
        position="right"
        size={isMaximumWidth ? "100%" : "28.125em"}
        scrollAreaComponent={ScrollArea.Autosize}
      >
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header className="px-0 mx-[25px] pt-[25px] pb-[17px] md:pt-[35px] md:pb-[31px] md:mx-[45px] border-b border-b-royal-blue">
            <Drawer.Title>
              <StaticImage
                src="../images/logo.png"
                width={132}
                height={40}
                alt="Logo"
              />
            </Drawer.Title>
            <Drawer.CloseButton className="text-royal-blue" />
          </Drawer.Header>
          <Drawer.Body className="pb-[25px] px-[20px] md:pb-[35px] md:px-[45px]">
            <div className="hidden md:block font-medium text-[18px] leading-6 tracking-[0.19em] text-black-pearl/90 border-b border-b-royal-blue">
              <a
                href="tel:0 800 750 643"
                className="pl-[13px] py-4 block hover:bg-[#E2EDFB]"
              >
                0 800 750 643
              </a>
              <a
                href="tel:+380 44 334 56 43"
                className="pl-[13px] py-4 block hover:bg-[#E2EDFB]"
              >
                +380 44 334 56 43
              </a>
              <a
                href="tel:+380 44 338 86 43"
                className="pl-[13px] py-4 block hover:bg-[#E2EDFB]"
              >
                +380 44 338 86 43
              </a>
            </div>
            <div className="hidden md:flex justify-between py-[33px] pl-[13px] tracking-[0.19em] border-b border-b-royal-blue">
              <Button
                variant="outline"
                className="font-medium text-[18px] leading-6 uppercase text-black-pearl/90 hover:text-white hover:bg-royal-blue"
              >
                Вход
              </Button>
              <Button className="font-medium text-[18px] leading-6 uppercase text-white hover:text-black-pearl/90 bg-royal-blue hover:bg-transparent hover:border hover:border-royal-blue">
                регистрация
              </Button>
            </div>
            <div className="hidden md:block uppercase font-medium text-[18px] leading-6 tracking-[0.19em] text-black-pearl/90 border-b border-b-royal-blue">
              <Link to="/" className="pl-[13px] py-4 block hover:bg-[#E2EDFB]">
                ПРО НАС
              </Link>
              <Link
                to="/blog"
                className="pl-[13px] py-4 block hover:bg-[#E2EDFB]"
              >
                блог
              </Link>
              <Link to="/" className="pl-[13px] py-4 block hover:bg-[#E2EDFB]">
                Видео
              </Link>
              <Link to="/" className="pl-[13px] py-4 block hover:bg-[#E2EDFB]">
                Вопросы
              </Link>
              <Link to="/" className="pl-[13px] py-4 block hover:bg-[#E2EDFB]">
                ЦЕНЫ
              </Link>
              <Link to="/" className="pl-[13px] py-4 block hover:bg-[#E2EDFB]">
                КОНТАКТЫ
              </Link>
            </div>
            <div className="hidden md:flex font-medium text-[18px] leading-6 tracking-[0.19em] text-black-pearl/90">
              <Link to="/" className="px-[13px] py-4 block hover:bg-[#E2EDFB]">
                Укр
              </Link>
              <Link to="/" className="px-[13px] py-4 block hover:bg-[#E2EDFB]">
                Рус
              </Link>
            </div>
            <div className="md:hidden font-medium text-[16px] leading-6 tracking-[0.19em] text-black-pearl/90">
              <NavLink
                label="0 800 750 643"
                className="py-4 hover:bg-[#E2EDFB]"
                classNames={{ label: "text-[16px]" }}
              >
                <NavLink
                  component="a"
                  href="tel:+380 44 334 56 43"
                  label="+380 44 334 56 43"
                  className="py-4 hover:bg-[#E2EDFB]"
                  classNames={{ label: "text-[16px]" }}
                />
                <NavLink
                  component="a"
                  href="tel:+380 44 338 86 43"
                  label="+380 44 338 86 43"
                  className="py-4 hover:bg-[#E2EDFB]"
                  classNames={{ label: "text-[16px]" }}
                />
              </NavLink>
              <NavLink
                label="ПРО НАС"
                className="py-4 hover:bg-[#E2EDFB]"
                classNames={{ label: "text-[16px]" }}
              >
                <NavLink
                  component={Link}
                  to="/blog"
                  label="блог"
                  className="py-4 text-black-pearl/90 bg-transparent hover:bg-[#E2EDFB] uppercase"
                  classNames={{ label: "text-[16px]" }}
                />
                <NavLink
                  component={Link}
                  to="/"
                  label="Видео"
                  className="py-4 text-black-pearl/90 bg-transparent hover:bg-[#E2EDFB] uppercase"
                  classNames={{ label: "text-[16px]" }}
                />
                <NavLink
                  component={Link}
                  to="/"
                  label="Вопросы"
                  className="py-4 text-black-pearl/90 bg-transparent hover:bg-[#E2EDFB] uppercase"
                  classNames={{ label: "text-[16px]" }}
                />
              </NavLink>
              <Link to="/" className="pl-[13px] py-4 block hover:bg-[#E2EDFB]">
                ЦЕНЫ
              </Link>
              <Link to="/" className="pl-[13px] py-4 block hover:bg-[#E2EDFB]">
                КОНТАКТЫ
              </Link>
              <div className="pt-[58px] pb-[28px] tracking-[0.19em] border-b border-b-royal-blue">
                <Button
                  variant="outline"
                  className="min-h-[46px] w-full font-medium text-[18px] leading-6 uppercase text-black-pearl/90 hover:text-white hover:bg-royal-blue"
                >
                  Вход
                </Button>
                <Button className="min-h-[46px] mt-6 w-full font-medium text-[18px] leading-6 uppercase text-white hover:text-black-pearl/90 bg-royal-blue hover:bg-transparent hover:border hover:border-royal-blue">
                  регистрация
                </Button>
              </div>
              <div className="flex">
                <Link
                  to="/"
                  className="px-[13px] py-4 block hover:bg-[#E2EDFB]"
                >
                  Укр
                </Link>
                <Link
                  to="/"
                  className="px-[13px] py-4 block hover:bg-[#E2EDFB]"
                >
                  Рус
                </Link>
              </div>
            </div>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <Button variant="transparent" onClick={open}>
        <IconMenu2 />
      </Button>
    </div>
  );
};

export default NavMenu;

