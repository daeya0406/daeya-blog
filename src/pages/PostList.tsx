// 테스트 페이지

import { useEffect, useState } from "react";
import { getPosts } from "../apis/posts";
import type { Post } from "../types/post";

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then((data) => {
      console.log("📦 불러온 데이터:", data);
      setPosts(data);
    });
  }, []);

  return (
    <div>
      {posts.length === 0 ? (
        <p>포스트가 없습니다.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
