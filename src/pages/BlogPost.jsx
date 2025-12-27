import { useParams, Link, Navigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPost, formatDate } from '../posts'
import './BlogPost.css'

function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)

  if (!post) {
    return <Navigate to="/writing" replace />
  }

  return (
    <article className="blog-post fade-in">
      <div className="container">
        <header className="post-header">
          <Link to="/writing" className="back-link text-small">
            ← Back to all posts
          </Link>
          <time className="post-meta text-muted">
            {formatDate(post.date)}
          </time>
          <h1>{post.title}</h1>
          {post.tags && (
            <div className="post-tags">
              {post.tags.map(tag => (
                <span key={tag} className="tag text-small">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="prose">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>

        <footer className="post-footer">
          <Link to="/writing" className="back-link">
            ← Back to all posts
          </Link>
        </footer>
      </div>
    </article>
  )
}

export default BlogPost
