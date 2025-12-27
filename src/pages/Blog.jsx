import { Link } from 'react-router-dom'
import { getAllPosts, formatDate } from '../posts'
import './Blog.css'

function Blog() {
  const posts = getAllPosts()

  return (
    <div className="blog fade-in">
      <div className="container">
        <header className="blog-header">
          <h1>Writing</h1>
          <p className="text-muted">
            Essays and notes on AI, science, history, and ideas that don't fit neatly into categories.
          </p>
        </header>

        <div className="posts-list">
          {posts.map((post) => (
            <article key={post.slug} className="post-preview">
              <Link to={`/writing/${post.slug}`} className="post-link">
                <time className="post-date text-small text-muted">
                  {formatDate(post.date)}
                </time>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-description">{post.description}</p>
              </Link>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="no-posts text-muted">
            No posts yet. Check back soon.
          </p>
        )}
      </div>
    </div>
  )
}

export default Blog
