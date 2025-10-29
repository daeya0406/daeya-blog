import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../apis/posts";
import type { Post } from "../types/post";

export default function BlogNew() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newPost: Omit<Post, "id"> = {
      title,
      summary,
      content,
      tags: tags.split(",").map((t) => t.trim()),
      date: new Date().toISOString(),
    };

    try {
      await createPost(newPost);
      alert("글이 등록되었습니다!");
      navigate("/blog");
    } catch (err) {
      console.error(err);
      alert("글 등록 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">새 글 작성</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 bg-slate-800 border border-slate-700 rounded"
          required
        />

        <input
          type="text"
          placeholder="요약"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="w-full p-3 bg-slate-800 border border-slate-700 rounded"
          required
        />

        <textarea
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-40 p-3 bg-slate-800 border border-slate-700 rounded resize-none"
          required
        />

        <input
          type="text"
          placeholder="태그 (쉼표로 구분)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="w-full p-3 bg-slate-800 border border-slate-700 rounded"
        />

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded"
        >
          등록하기
        </button>
      </form>
    </div>
  );
}
