import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Nav from "../components/Nav";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import Articles from "../components/Articles";
import AtriclesContent from "../content/articles.json";
import SpoilerText from "../components/SpoilerText";
import Container from "../components/Container";

const BlogPage: React.FC<PageProps> = () => {
  return (
    <>
      <Nav />
      <Articles />
      <div className="bg-iceberg mt-[48px]">
        <Subscribe className="py-[22px] md:py-[41px] 2xl:py-[53px]" />
      </div>
      <Container>
        <SpoilerText>{AtriclesContent.seoText}</SpoilerText>
      </Container>
      <Footer />
    </>
  );
};

export default BlogPage;

export const Head: HeadFC = () => <title>Blog Page</title>;
