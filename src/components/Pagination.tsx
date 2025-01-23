import * as React from "react";
import { Link } from "gatsby";
import Container from "./Container";
import { useState } from "react";
import { Group, Pagination } from "@mantine/core";

interface PaginationProps {
  className?: string;
}

const PaginationBlock: React.FC<PaginationProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";
  const [activePage, setPage] = useState(1);
  return (
    <Container
      className={`mt-[40px] md:mt-[51px]  2xl:mt-[48px] ${classNameValue}`}
    >
      <Pagination.Root
        total={4}
        value={activePage}
        onChange={setPage}
        classNames={{
          control:
            "bg-transparent border-none font-medium text-black-pearl/90 text-[14px] leading-[24px] md:text-[16px] data-[active='true']:text-royal-blue",
        }}
      >
        <Group gap={24} justify="center">
          <Pagination.Previous />
          <Pagination.Items />
          <Pagination.Next />
        </Group>
      </Pagination.Root>
    </Container>
  );
};

export default PaginationBlock;
