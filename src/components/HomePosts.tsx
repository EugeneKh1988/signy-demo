import * as React from "react";
import HomePostsContent from "../content/homePosts.json";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Text } from "@mantine/core";
import Container from "./Container";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

interface HomePostsProps {
  className?: string;
}

interface IHomePost {
  id: number;
  title: string;
  date: string;
  imageName: string;
}

const HomePosts: React.FC<HomePostsProps> = ({ className }) => {
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
        childImageSharp: { gatsbyImageData: IGatsbyImageData };
      }) => node.name == imageName
    );
    return res.length > 0
      ? res[0].childImageSharp.gatsbyImageData
      : getImage(null);
  };

  return (
    <div className="bg-iceberg">
      <Container
        className={`pb-[31px] md:pb-[56px] 2xl:md:pb-[44px] ${classNameValue}`}
      >
        <Text className="pt-5 md:pt-[35px] 2xl:pt-[38px] text-black-pearl/90 text-center font-plexSerif font-medium text-[20px] leading-[22px] md:text-[36px] md:leading-[48px] 2xl:text-[40px]">
          Интересно пишем про
        </Text>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-[45px] 2xl:gap-[54px] mt-[25px] md:mt-[42px] 2xl:mt-[32px]">
          {HomePostsContent.content.map((item: IHomePost) => (
            <div
              key={item.id}
              className="max-w-[280px] md:max-w-[324px] 2xl:max-w-[374px] last:hidden 2xl:last:block"
            >
              <div className="relative">
                <GatsbyImage
                  image={imageData(item.imageName)}
                  alt={item.imageName}
                  className="rounded-[4px]"
                />
                <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-b from-white/0 to-white/100 rounded-[4px]"></div>
              </div>
              <div className="mt-3 md:mt-[14px] md:ml-[41px] 2xl:ml-4">
                <Text className="font-medium text-[12px] leading-[14px] md:text-[14px] md:leading-[24px]">
                  {item.date}
                </Text>
                <Link
                  to="#"
                  className="mt-[6px] font-semibold text-[16px] leading-[18px] md:text-[20px] md:leading-[28px] 2xl:text-[20px] 2xl:leading-[28px] 2xl:font-medium"
                >
                  {item.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default HomePosts;
