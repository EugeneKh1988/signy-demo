import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Nav from "../components/Nav";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import ArticleContent from "../components/ArticleContent";

const ArticlePage: React.FC<PageProps> = () => {
  return (
    <>
      <Nav />
      <ArticleContent />
      <div className="bg-iceberg mt-[48px]">
        <Subscribe className="py-[22px] md:py-[41px] 2xl:py-[53px]" />
      </div>
      <Footer />
    </>
  );
};

export default ArticlePage;

export const Head: HeadFC = () => <title>Article Page</title>;
