import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Nav from "../components/Nav";
import CarouselBlock from "../components/Carousel";
import Features from "../components/Features";
import Properties from "../components/Properties";
import Prices from "../components/Prices";
import Sign from "../components/Sign";
import Friends from "../components/Friends";
import HomePosts from "../components/HomePosts";
import Introduce from "../components/Introduce";
import Faq from "../components/Faq";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Nav />
      <CarouselBlock />
      <Features />
      <Properties />
      <Prices />
      <Sign />
      <Friends />
      <HomePosts />
      <Introduce />
      <Faq />
      <Subscribe />
      <Footer />
    </>
  );
}

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>
