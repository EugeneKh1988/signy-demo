import * as React from "react";
import FeaturesContent from "../content/features.json";
import { graphql, useStaticQuery } from "gatsby";
import { Text } from "@mantine/core";
import Container from "./Container";

interface FeaturesProps {
    className?: string,
}

interface IFeature {
  id: number;
  title: string;
  description: string;
  imageName: string;
};


const Features: React.FC<FeaturesProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : "";
  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          name
          publicURL
        }
      }
    }
  `);

  const imageUrl = (imageName:string) => {
    const res = data.allFile.nodes.filter((node:{name:string, publicURL:string}) => node.name == imageName);
    return res.length > 0 ? res[0].publicURL : "#"
  };

  return (
    <Container
      className={`pb-[45px] md:pb-[55px] 2xl:pb-[75px] mt-[44px] md:mt-[38px] 2xl:mt-[54px] flex flex-col md:flex-row md:flex-nowrap justify-center items-center gap-[36px] md:gap-5 2xl:gap-[75px] ${classNameValue}`}
    >
      {FeaturesContent.content.map((item: IFeature) => (
        <div
          key={item.id}
          className="text-black-pearl/90 flex items-center md:items-start 2xl:items-center gap-8 md:gap-4 2xl:gap-[20px]"
        >
          <img
            src={imageUrl(item.imageName)}
            alt={item.imageName}
            className="w-[42px] h-[42px] 2xl:w-[60px] 2xl:h-[60px]"
          />
          <div className="max-w-[205px] md:max-w-[158px] 2xl:max-w-[202px]">
            <Text className="font-medium text-[20px] leading-[22px]">
              {item.title}
            </Text>
            <Text className="mt-[6px] md:mt-[8px] 2xl:mt-[20px] text-[14px] leading-[18.2px] md:text-[16px] md:leading-[20.8px] md:tracking-[0.04em]">
              {item.description}
            </Text>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default Features;

