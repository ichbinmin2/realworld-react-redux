import React from "react";
import { NextPage, GetServerSideProps } from "next";

type Article = {
  slug: string;
  title: string;
  description: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: string[];
};

interface ArticleDetailPage {
  article: Article;
}

const ArticleDetailPage: NextPage<ArticleDetailPage> = ({ article }) => (
  <div>
    <h1>{article.title}</h1>
    <p>{article.description}</p>
  </div>
);

export default ArticleDetailPage;

export const getServerSideProps: GetServerSideProps<ArticleDetailPage> = async (
  context
) => {
  const slug = context.params?.slug as string; // { slug: "create-your-own" }

  const articleUrl = "https://api.realworld.io/api/articles/" + slug;
  const res = await fetch(articleUrl);
  const data = await res.json();

  return {
    props: data, // will be passed to the page component as props
  };
};

// 쇼핑몰
// 상품 정보 => 자주 안 바뀌고 사람들이 다 똑같이 보는 거 => static 미리 서버에서 데이터를 받아놓고 처리 getStaticPaths,  getStaticProps
// 실시간 할인 정보, 이벤트 배너 => 실시간으로 바뀌는데, 사람들이 똑같이 보는 거 => 캐싱 => getServerSideProps
// 맞춤형 광고, 장바구니, 회원정보 => 실시간으로 바뀌는데, 사람마다 다르게 보는 거 => 사용자가 브라우저에서 직접 api 요청 (저희가 원래 아는 리액트) => 그냥 똑같이
