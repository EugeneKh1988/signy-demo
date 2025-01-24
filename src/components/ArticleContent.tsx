import * as React from "react";
import articleData from "../content/oneArticle.json";
import { graphql, useStaticQuery } from "gatsby";
import { Pill, Text } from "@mantine/core";
import Container from "./Container";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import BreadCrumbs from "./BreadCrumbs";
import Share from "./Share";

interface ArticleContentProps {
  className?: string;
}

interface IArticleContent {
  text: string;
  imageName: string;
  columnNum: number;
}

const ArticleContent: React.FC<ArticleContentProps> = ({ className }) => {
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
      <BreadCrumbs
        links={[
          { name: "Signy", url: "/" },
          { name: "Блог", url: "/blog" },
          { name: "Название статьи" },
        ]}
      />
      <Text className="mt-[9px] md:mt-6 font-plexSerif font-medium text-[20px] leading-[48px] md:text-[34px] 2xl:text-[40px]">
        {articleData.title}
      </Text>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {[1, 2].map((colNum) => (
          <div className="lg:max-w-[586px]">
            {articleData.content.map((item: IArticleContent, index) => (
              <React.Fragment key={index}>
                {item.text != "" && item.columnNum == colNum && (
                  <Text className="max-w-[586px] mt-[22px] md:mt-[24px] 2xl:mt-[36px]">
                    {item.text}
                  </Text>
                )}
                {item.imageName != "" && item.columnNum == colNum && (
                  <GatsbyImage
                    image={imageData(item.imageName)}
                    alt={item.imageName}
                    className="mt-[22px] md:mt-[24px] 2xl:mt-[36px]"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
      <Share />
    </Container>
  );
};

export default ArticleContent;
