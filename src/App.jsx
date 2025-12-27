import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Layout from './components/Layout'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/writing" element={<Blog />} />
        <Route path="/writing/:slug" element={<BlogPost />} />
      </Routes>
    </Layout>
  )
}

export default App
