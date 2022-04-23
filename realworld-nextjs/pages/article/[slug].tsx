import React from "react";
import { NextPage, GetServerSideProps } from "next";
import Image from "next/image";

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
  comments: Comment[];
}

const ArticleDetailPage: NextPage<ArticleDetailPage> = ({
  article,
  comments,
}) => (
  <div>
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{article.title}</h1>
          <div className="article-meta">
            <a href="#/profile/Gerome">
              <Image
                src="https://api.realworld.io/images/demo-avatar.png"
                alt=""
                width={32}
                height={32}
              />
            </a>
            <div className="info">
              <a className="author" href="#/profile/Gerome">
                Gerome
              </a>
              <span className="date">Nov 24, 2021</span>
            </div>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ion-plus-round" />
              &nbsp; Follow Gerome
            </button>
            &nbsp;
            <button className="btn btn-sm btn-outline-primary">
              <i className="ion-heart" />
              &nbsp; Favorite Article<span className="counter">(1999)</span>
            </button>
          </div>
        </div>
      </div>
      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">{article.body}</div>
          <ul className="tag-list">
            {article.tagList.map((tag) => (
              <li className="tag-default tag-pill tag-outline" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div className="article-actions">
          <div className="article-meta">
            <a href="#/profile/Gerome">
              <Image
                src="https://api.realworld.io/images/demo-avatar.png"
                alt=""
                width={32}
                height={32}
              />
            </a>
            <div className="info">
              <a className="author" href="#/profile/Gerome">
                Gerome
              </a>
              <span className="date">Nov 24, 2021</span>
            </div>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ion-plus-round" />
              &nbsp; Follow Gerome
            </button>
            &nbsp;
            <button className="btn btn-sm btn-outline-primary">
              <i className="ion-heart" />
              &nbsp; Favorite Article<span className="counter">(1999)</span>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-8 offset-md-2">
            <p style={{ display: "inherit" }}>
              <a href="#/login">Sign in</a> or <a href="#/register">sign up</a>{" "}
              to add comments on this article.
            </p>

            {comments.map((comment) => (
              <div className="card" key={comment.id}>
                <div className="card-block">
                  <p className="card-text">{comment.body}</p>
                </div>
                <div className="card-footer">
                  <a className="comment-author" href="#/profile/Gerome">
                    <Image
                      src="https://api.realworld.io/images/demo-avatar.png"
                      className="comment-author-img"
                      alt=""
                      width={20}
                      height={20}
                    />
                  </a>
                  &nbsp;
                  <a className="comment-author" href="#/profile/Gerome">
                    {comment.author.username}{" "}
                  </a>
                  <span className="date-posted">
                    {new Date(comment.updatedAt).toLocaleDateString("ko-kr")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ArticleDetailPage;
// http://localhost:3000/article/Create-a-new-implementation-1
// https://demo.realworld.io/#/article/Create-a-new-implementation-1
// ky

async function getArticle(slug: string): Promise<{ article: Article }> {
  return fetch("https://api.realworld.io/api/articles/" + slug).then((res) =>
    res.json()
  );
}

type Author = {
  username: string;
  bio: null | string;
  image: string;
  following: boolean;
};

type Comment = {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: Author;
};

async function getComments(slug: string): Promise<{ comments: Comment[] }> {
  return fetch(
    "https://api.realworld.io/api/articles/" + slug + "/comments"
  ).then((res) => res.json());
}

export const getServerSideProps: GetServerSideProps<ArticleDetailPage> = async (
  context
) => {
  const slug = context.params?.slug as string; // { slug: "create-your-own" }

  // Promise.all() => 속도가 빨라진다.
  // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
  const [{ article }, { comments }] = await Promise.all([
    getArticle(slug),
    getComments(slug),
  ]);

  // const { article } = await getArticle(slug);
  // const { comments } = await getComments(slug);

  return {
    props: {
      article,
      comments,
    }, // will be passed to the page component as props
  };
};

// 쇼핑몰
// 상품 정보 => 자주 안 바뀌고 사람들이 다 똑같이 보는 거 => static 미리 서버에서 데이터를 받아놓고 처리 getStaticPaths,  getStaticProps
// 실시간 할인 정보, 이벤트 배너 => 실시간으로 바뀌는데, 사람들이 똑같이 보는 거 => 캐싱 => getServerSideProps
// 맞춤형 광고, 장바구니, 회원정보 => 실시간으로 바뀌는데, 사람마다 다르게 보는 거 => 사용자가 브라우저에서 직접 api 요청 (저희가 원래 아는 리액트) => 그냥 똑같이
