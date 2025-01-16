import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Nav from "../components/Nav";
import CarouselBlock from "../components/Carousel";
import Features from "../components/Features";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <div className="bg-[url('../images/hero-slide-bg.png')]">
        <Nav />
        <CarouselBlock />
      </div>
      <Features />
    </>
  );
}

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>
