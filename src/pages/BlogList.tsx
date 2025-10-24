import { Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function BlogList() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <p className="test-slate-400 mb-8">총 {posts.length}개의 글</p>
      <div className="grid gap-6">
        {posts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.id}`}
            className="block p-6 bg-slate-800 rounded-lg border border-slate-700 hover:border-blue-500 transition"
          >
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-blue-600/20 text-blue-400 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-400">
              {post.title}
            </h2>
            <p className="text-slate-300 mb-3">{post.summary}</p>
            <time className="text-sm text-slate-500">{post.date}</time>
          </Link>
        ))}
      </div>
    </div>
  );
}
