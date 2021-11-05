import ArticleItem from './ArticleItem'
import articleStyles from '../styles/Article.module.css'

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article, index) => (
        <ArticleItem key={index+1} article={article} />
      ))}
    </div>
  )
}

export default ArticleList