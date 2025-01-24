import * as React from "react";
import AtriclesContent from "../content/articles.json";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Pill, Text } from "@mantine/core";
import Container from "./Container";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import BreadCrumbs from "./BreadCrumbs";
import CategoryMenu from "./CategoryMenu";
import PaginationBlock from "./Pagination";

interface ArticlesProps {
  className?: string;
}

interface IArticle {
  id: number;
  title: string;
  date: string;
  tags: string[];
  text: string[];
  imageName: string;
}

const Articles: React.FC<ArticlesProps> = ({ className }) => {
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
    <Container className={`pt-[80px] ${classNameValue}`}>
      <BreadCrumbs links={[{ name: "Signy", url: "/" }, { name: "Блог" }]} />
      <Text className="mt-[9px] md:mt-6 font-plexSerif font-medium text-[20px] leading-[48px] md:text-[34px] 2xl:text-[40px]">
        Интересно пишем про
      </Text>
      <div className="mt-4 md:mt-6 flex flex-col lg:flex-row gap-[10px] md:gap-6 2xl:gap-[43px]">
        <GatsbyImage
          image={imageData(AtriclesContent.mainArticle.imageName)}
          alt={AtriclesContent.mainArticle.title}
          className="w-full 2xl:max-w-[731px] rounded-[2px]"
        />
        <div className="text-black-pearl/90 2xl:basis-[458px]">
          <Text className="font-medium text-[12px] leading-6 md:text-[14px]">
            {AtriclesContent.mainArticle.date}
          </Text>
          <Text className="mt-1 md:mt-[6px] 2xl:mt-3 font-medium text-[20px] leading-[22px] md:font-semibold md:leading-[42px] 2xl:text-[40px]">
            {AtriclesContent.mainArticle.title}
          </Text>
          <div className="mt-[10px] md:mt-[6px] 2xl:mt-[20px]">
            {AtriclesContent.mainArticle.tags.map((tag, index) => (
              <Pill
                key={index}
                className="font-medium text-[10px] md:text-[12px] leading-6 tracking-[0.04em] bg-[#E5E5E5] mr-[13px] uppercase rounded-[23px] px-[14px]"
              >
                {tag}
              </Pill>
            ))}
          </div>
          <div className="mt-[6px] md:mt-[14px]">
            {AtriclesContent.mainArticle.text.map((text, index) => (
              <Text
                key={index}
                className="text-[14px] leading-[20.58px] md:text-[16px] md:leading-[23.52px] 2xl:text-[18px] 2xl:leading-[26.46px]"
              >
                {text}
              </Text>
            ))}
          </div>
        </div>
      </div>
      <CategoryMenu />
      <div className="mt-4 md:mt-6 flex flex-col md:flex-row flex-wrap gap-[10px] md:gap-[20px] 2xl:gap-[61px]">
        {AtriclesContent.content.map((article: IArticle) => (
          <div
            className="w-full md:max-w-[324px] 2xl:max-w-[370px]"
            key={article.id}
          >
            <GatsbyImage
              image={imageData(article.imageName)}
              alt={article.title}
              className="w-full rounded-[2px]"
            />
            <Text className="mt-[6px] md:mt-3 font-medium text-[12px] leading-6 md:text-[14px]">
              {article.date}
            </Text>
            <Link to="/article" className="font-semibold text-[16px] leading-[28px] md:text-[20px] 2xl:text-[24px]">
              {article.title}
            </Link>
            <div className="mt-[8px] md:mt-[7px] 2xl:mt-[10px]">
              {article.tags.map((tag, index) => (
                <Pill
                  key={index}
                  className="font-medium text-[10px] md:text-[12px] leading-6 tracking-[0.04em] bg-[#E5E5E5] mr-[13px] uppercase rounded-[23px] px-[14px]"
                >
                  {tag}
                </Pill>
              ))}
            </div>
            <div className="mt-[8px] 2xl:mt-[10px]">
              {article.text.map((text, index) => (
                <Text
                  key={index}
                  className="text-[14px] leading-[20.58px] md:text-[16px] md:leading-[22px] 2xl:text-[18px]"
                >
                  {text}
                </Text>
              ))}
            </div>
          </div>
        ))}
      </div>
      <PaginationBlock />
    </Container>
  );
};

export default Articles;
