import { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=2cbd90bd1f4c442dbf4cbc42727c4807`
    );
  }, [category]);

  if (loading) {
    return <NewsListBlock>대기중...</NewsListBlock>;
  }

  if (!response) {
    return null;
  }

  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }

  const { articles } = response.data;

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article}></NewsItem>
      ))}
    </NewsListBlock>
  );
};

// const NewsList = ({ category }) => {
//   const [articles, setArticles] = useState(null);
//   const [loading, setLoading] = useState(false);

//   console.log('start NewsList : ', category);
//   useEffect(() => {
//     const fetchData = async () => {
//       console.log('fetchData : ');
//       setLoading(true);
//       try {
//         const query = category === 'all' ? '' : `&category=${category}`;
//         console.log('query : ' + query)
//         const response = await axios.get(
//           `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=2cbd90bd1f4c442dbf4cbc42727c4807`
//         );

//         setArticles(response.data.articles);
//       } catch (e) {
//         console.log(e);
//       }
//       setLoading(false);
//     };
//     fetchData();
//   }, [category]);

//   if (loading) {
//     return <NewsListBlock>대기중...</NewsListBlock>;
//   }

//   if (!articles) {
//     return null;
//   }

//   return (
//     <NewsListBlock>
//       {articles.map((article) => (
//         <NewsItem key={article.url} article={article}></NewsItem>
//       ))}
//     </NewsListBlock>
//   );
// };

// const sampleArticle = {
//   title: '제목',
//   description: '내용',
//   url: 'https://google.com',
//   urlToImage: 'https://via.placeholder.com/160'
// }

// const NewsList = () => {
//   return (
//     <NewsListBlock>
//       <NewsItem article={sampleArticle}></NewsItem>
//       <NewsItem article={sampleArticle}></NewsItem>
//       <NewsItem article={sampleArticle}></NewsItem>
//       <NewsItem article={sampleArticle}></NewsItem>
//       <NewsItem article={sampleArticle}></NewsItem>
//     </NewsListBlock>
//   )
// }

export default NewsList;
