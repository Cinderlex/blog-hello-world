import type {GetStaticProps, NextPage} from 'next';
import {getMarkdownArticles} from '../utils/articles';
import ReactMarkdown from 'react-markdown';

export interface HomeProps {
  articles: string[];
}

const Home: NextPage<HomeProps> = ({articles}) => {
  return (
      <>
        <h1>Hello World Blog</h1>
        {articles.map((article, index) => (
            <article key={index}>
                <ReactMarkdown>{article}</ReactMarkdown>
            </article>
        ))}
      </>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const articles = await getMarkdownArticles();
  return {
    props: {articles},
  }
}

export default Home
