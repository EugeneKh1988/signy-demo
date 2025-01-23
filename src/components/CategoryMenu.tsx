import * as React from "react";
import { Link } from "gatsby";
import { Menu } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";

interface CategoryMenuProps {
  className?: string;
}

const CategoryMenu: React.FC<CategoryMenuProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";
  return (
    <>
      <ul className="hidden 2xl:flex text-[18px] leading-6 tracking-[0.19em] uppercase mt-6">
        <li>
          <Link to="#" className="mr-[60px] border-b-[2px] border-b-royal-blue">
            Все
          </Link>
        </li>
        <li>
          <Link to="#" className="mr-[60px]">
            новости
          </Link>
        </li>
        <li>
          <Link to="#" className="mr-[60px]">
            обучение
          </Link>
        </li>
        <li>
          <Link to="#" className="mr-[60px]">
            законы
          </Link>
        </li>
      </ul>
      <Menu
        offset={0}
        radius={0}
        trigger="click-hover"
        classNames={{
          item: "px-5 py-4 hover:bg-[#E2EDFB]",
          dropdown: "p-0 border-none",
          itemLabel:
            "font-medium text-[18px] leading-6 uppercase tracking-[0.19em]",
        }}
      >
        <Menu.Target>
          <Link
            to="#"
            className="hover:bg-[#E2EDFB] font-medium text-[18px] leading-6 uppercase inline-block mt-6 tracking-[0.19em] 2xl:hidden"
          >
            Все
            <IconChevronDown size={12} className="ml-2 inline" />
          </Link>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>
            <Link to="#">новости</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="#">обучение</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="#">законы</Link>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
};

export default CategoryMenu;
