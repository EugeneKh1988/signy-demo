import { Breadcrumbs } from "@mantine/core";
import { Link } from "gatsby";
import React from "react";


const BreadCrumbs = ({
  links,
  className,
}: {
  links: {name: string, url?: string}[],
  className?: string;
}) => {
  const classNameValue = className ? className : '';
  return (
    <div className={`text-[12px] font-medium leading-[48px] ${classNameValue}`}>
      <Breadcrumbs separatorMargin="6px">
        {links.map((item, index) => (
          <React.Fragment key={index}>
            {item.url ? (
              <Link to={item.url} className="leading-[48px]">
                {item.name}
              </Link>
            ) : (
              <p className="leading-[48px]">{item.name}</p>
            )}
          </React.Fragment>
        ))}
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumbs;
