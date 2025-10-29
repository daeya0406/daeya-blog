import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPosts, deletePost } from "../apis/posts";
import type { Post } from "../types/post";

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState<Post | null>(null);

  // useEffect(() => { ... }, [id]); -> id값이 바뀔 때마다 실행할 코드를 넣는 곳
  useEffect(() => {
    // getPosts().then((data) => { ... }); -> 데이터를 다 불러온 다음에 {...} 안의 코드를 실행
    getPosts().then((data) => {
      const found = data.find((p) => p.id === id);
      setPost(found || null);
    });
  }, [id]);

  // 삭제 핸들러
  const handleDelete = async () => {
    if (!id) return;
    const ok = window.confirm("이 글을 삭제하시겠습니까?");
    if (!ok) return;

    try {
      await deletePost(id);
      alert("글이 삭제되었습니다.");
      navigate("/blog");
    } catch (err) {
      console.error(err);
      alert("삭제 중 오류가 발생했습니다.");
    }
  };

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
      <div className="flex items-center justify-between mb-8">
        <Link
          to="/blog"
          className="inline-flex items-center text-slate-400 hover:text-white transition"
        >
          ← 목록으로
        </Link>

        {/* ✅ 삭제 버튼 */}
        <button
          onClick={handleDelete}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          삭제
        </button>
      </div>

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
