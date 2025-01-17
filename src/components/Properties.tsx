import * as React from "react";
import PropertiesContent from "../content/properties.json";
import { graphql, useStaticQuery } from "gatsby";
import { Button, Text } from "@mantine/core";
import Container from "./Container";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

interface PropertiesProps {
  className?: string;
}

interface IProperty {
  id: number;
  title: string;
  descriptions: string[];
  imageName: string;
  button: {name: string, href: string};
}

const Properties: React.FC<PropertiesProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";
  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          name
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `);

  const imageData = (imageName: string) => {
    const res = data.allFile.nodes.filter(
      (node: {
        name: string;
        childImageSharp: { gatsbyImageData:IGatsbyImageData };
      }) => node.name == imageName
    );
    return res.length > 0
      ? res[0].childImageSharp.gatsbyImageData
      : getImage(null);
  };

  return (
    <div className="bg-iceberg text-black-pearl/90">
      <Container className="pb-[52px] md:pb-[44px] 2xl:pb-[92px]">
        {PropertiesContent.content.map((item: IProperty) => (
          <div
            className="flex flex-col md:gap-5 2xl:gap-[130px] md:flex-row md:justify-between md:items-center pt-[22px] md:pt-[50px] 2xl:pt-[57px]"
            key={item.id}
          >
            <div className="md:basis-1/2">
              <Text className="font-plexSerif font-medium text-[20px] leading-[22px] md:text-[36px] md:leading-[48px] 2xl:text-[40px]">
                {item.title}
              </Text>
              <ul className="mt-3 md:mt-[19px] text-[14px] leading-[18.2px] md:text-[16px] md:leading-7 2xl:text-[16px] list-['-']">
                {item.descriptions.map((descriptionItem, index) => (
                  <li key={index} className="mb-[6px] md:mb-[10px] pl-2">
                    {descriptionItem}
                  </li>
                ))}
              </ul>
              <div className="text-center md:text-left">
                <Button
                  variant={item.id % 2 == 1 ? "outline" : "filled"}
                  className={`rounded-[46px] px-6 mt-[31px] md:mt-[25px] 2xl:mt-[19px] font-bold text-[12px] md:text-[14px] leading-6 uppercase min-h-[47px] ${
                    item.id % 2 == 1
                      ? "text-black-pearl/90 hover:bg-royal-blue hover:text-white"
                      : "text-white hover:bg-transparent hover:text-black-pearl/90 border border-royal-blue"
                  }`}
                >
                  {item.button.name}
                </Button>
              </div>
            </div>
            <div
              className={`md:basis-1/2 pt-[31px] md:pt-0 ${
                item.id % 2 == 0 ? "md:order-first" : ""
              }`}
            >
              <GatsbyImage
                image={imageData(item.imageName)}
                alt={item.title}
                className=""
              />
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Properties;
