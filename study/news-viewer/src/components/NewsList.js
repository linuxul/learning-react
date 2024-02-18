import { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios'

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

const NewsList = () => {
  const [articles, setArticles] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async() => {
      setLoading(true)
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=2cbd90bd1f4c442dbf4cbc42727c4807')
        setArticles(response.data.articles)
      } catch (e) {
        console.log(e)
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  if (loading) {
    return <NewsListBlock>
      대기중...
    </NewsListBlock>
  }

  if (!articles) {
    return null
  }

  return (
    <NewsListBlock>
      { articles.map(article => (
        <NewsItem key={articles.url} article={article}></NewsItem>
      ))

      }
    </NewsListBlock>
  )


}

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

export default NewsList