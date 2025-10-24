import { useParams, Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function BlogDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-slate-400 mb-8">글을 찾을 수 없습니다.</p>
        <Link to="/blog" className="text-blue-400 hover:underline">
          목록으로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <article>
      <Link
        to="/blog"
        className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition"
      >
        ← 목록으로
      </Link>

      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 bg-blue-600/20 text-blue-400 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      <time className="text-slate-500 mb-8 block">{post.date}</time>

      <div className="prose prose-invert max-w-none">
        <div className="whitespace-pre-wrap text-slate-300 leading-relaxed">
          {post.content}
        </div>
      </div>
    </article>
  );
}
