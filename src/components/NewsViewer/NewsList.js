import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import axios from "axios";

import Categories from "./Categories";
import NewsItem from "./NewsItem";

const sampleArticle = {
  title: "제목",
  description: "내용",
  url: "https://google.com",
  urlToImage: "https://via.placeholder.com/160",
};

const NewsList = ({ match }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  // const [category, setCategory] = useState("all");

  // 카테고리가 선택되지 않으면 기본값 all로 사용
  const [category, setCategory] = useState("all");
  // const [category, setCategory] = useState(match.params.category || "all");
  const onSelect = useCallback((category) => setCategory(category), []);

  useEffect(() => {
    console.log(`category`, category);
  }, [category]);

  useEffect(() => {
    // async를 사용하는 함수를 따로 선언  (useEffect에 async를 붙여줄 수 없어서)
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === "all" ? "" : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=a8075104c0774beaabcf203dbd38770c`
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };

    fetchData();
  }, [category]);

  //대기 중일 때
  if (loading) {
    return (
      <NewsListWrapper>
        <Categories category={category} onSelect={onSelect} />
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          대기 중...
        </span>
      </NewsListWrapper>
    );
  }

  // 아직 articles 값이 설정되지 않았을 때
  if (!articles) {
    return null;
  }

  return (
    <NewsListWrapper>
      <Categories category={category} onSelect={onSelect} />
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListWrapper>
  );
};

const NewsListWrapper = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 5rem;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export default NewsList;
