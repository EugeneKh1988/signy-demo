import * as React from "react";
import Container from "./Container";
import { StaticImage } from "gatsby-plugin-image";
import { Button, Menu } from "@mantine/core";
import { Link } from "gatsby";
import { IconChevronDown } from "@tabler/icons-react";
import NavMenu from "./NavMenu";
import { useWindowScroll } from "@mantine/hooks";

interface NavProps {
    className?: string,
}


const Nav: React.FC<NavProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <div
      className={`${
        scroll.y < 80 ? "bg-transparent absolute" : "bg-white sticky"
      } z-10 top-0 right-0 left-0`}
    >
      <Container className="flex justify-between items-center py-3">
        <StaticImage
          src="../images/logo.png"
          width={132}
          height={40}
          alt="Logo"
          className="shrink"
        />
        <div className="hidden xl:flex grow shrink justify-end items-center text-black-pearl/90 tracking-[0.19em]">
          <Menu
            offset={0}
            radius={0}
            trigger="click-hover"
            classNames={{
              item: "px-5 py-4 hover:bg-[#E2EDFB]",
              dropdown: "p-0 border-none",
              itemLabel: "font-medium text-[14px] leading-6 tracking-[0.19em]",
            }}
          >
            <Menu.Target>
              <Link
                to="#"
                className="px-5 py-4 hover:bg-[#E2EDFB] font-medium text-[14px] leading-6"
              >
                0 800 750 643
                <IconChevronDown size={12} className="ml-2 inline" />
              </Link>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>
                <a href="tel:+380 44 334 56 43">+380 44 334 56 43</a>
              </Menu.Item>
              <Menu.Item>
                <a href="tel:+380 44 338 86 43">+380 44 338 86 43</a>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
          <Menu
            offset={0}
            radius={0}
            trigger="click-hover"
            classNames={{
              item: "px-5 py-4 hover:bg-[#E2EDFB]",
              dropdown: "p-0 border-none",
              itemLabel:
                "font-medium text-[14px] leading-6 uppercase tracking-[0.19em]",
            }}
          >
            <Menu.Target>
              <Link
                to="#"
                className="px-5 py-4 hover:bg-[#E2EDFB] font-medium text-[14px] leading-6 uppercase"
              >
                Про нас
                <IconChevronDown size={12} className="ml-2 inline" />
              </Link>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>
                <Link to="/blog">блог</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="#">Видео</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="#">Вопросы</Link>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
          <Link
            to="#"
            className="px-5 py-4 hover:bg-[#E2EDFB] font-medium text-[14px] leading-6 uppercase"
          >
            ЦЕНЫ
          </Link>
          <Link
            to="#"
            className="px-5 py-4 hover:bg-[#E2EDFB] font-medium text-[14px] leading-6 uppercase"
          >
            КОНТАКТЫ
          </Link>
          <div className="flex gap-2 items-center">
            <Button
              variant="outline"
              className="font-medium text-[14px] leading-6 uppercase text-black-pearl/90 hover:text-white hover:bg-royal-blue"
            >
              Вход
            </Button>
            <Button className="font-medium text-[14px] leading-6 uppercase text-white hover:text-black-pearl/90 bg-royal-blue hover:bg-transparent hover:border hover:border-royal-blue">
              регистрация
            </Button>
            <Menu
              offset={0}
              radius={0}
              trigger="click-hover"
              classNames={{
                item: "px-5 py-4 hover:bg-[#E2EDFB]",
                dropdown: "p-0 border-none",
                itemLabel:
                  "font-medium text-[14px] leading-6 uppercase tracking-[0.19em]",
              }}
            >
              <Menu.Target>
                <Link
                  to="#"
                  className="py-4 hover:bg-[#E2EDFB] font-medium text-[14px] leading-6 uppercase"
                >
                  РУС
                  <IconChevronDown size={12} className="ml-2 inline" />
                </Link>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>
                  <Link to="#">Укр</Link>
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
        </div>
        <NavMenu className="xl:hidden" />
      </Container>
    </div>
  );
};

export default Nav;

