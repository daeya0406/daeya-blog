import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPosts } from "../apis/posts";
import type { Post } from "../types/post";

export default function BlogList() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">Blog</h1>
        <Link
          to="/blog/new"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          글쓰기
        </Link>
      </div>
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
