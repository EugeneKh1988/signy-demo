import * as React from "react";
import FriendsContent from "../content/friends.json";
import { graphql, useStaticQuery } from "gatsby";
import { Text } from "@mantine/core";
import Container from "./Container";
import { Carousel } from "@mantine/carousel";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

interface FriedsProps {
  className?: string;
}

interface IFriend {
  id: number;
  imageName: string;
}

const Friends: React.FC<FriedsProps> = ({ className }) => {
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
    <Container className={` ${classNameValue}`}>
      <Text className="pt-5 md:pt-[43px] 2xl:pt-[47px] text-black-pearl/90 text-center font-plexSerif font-medium text-[20px] leading-[22px] md:text-[36px] md:leading-[48px] 2xl:text-[40px]">
        Друзья Signy
      </Text>
      <Carousel
        withIndicators
        withControls={false}
        height={200}
        loop
        align="start"
        slideSize={{ base: "100%", sm: "50%", md: "25%" }}
        slideGap={{ base: 0, sm: "md" }}
        classNames={{
          indicator:
            "w-[10px] h-[10px] data-[active=true]:bg-royal-blue transition duration-300 border-solid border-[2px] border-royal-blue",
          indicators: "gap-6",
        }}
      >
        {FriendsContent.content.map((item: IFriend) => (
          <Carousel.Slide
            key={item.id}
            className="flex justify-center items-center"
          >
            <GatsbyImage
              image={imageData(item.imageName)}
              alt={item.imageName}
              className="max-w-[150px] object-contain"
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  );
};

export default Friends;
