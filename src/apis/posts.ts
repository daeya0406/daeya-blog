import { api } from "../lib/axios";
import type { Post } from "../types/post";

// READ ( getPosts )
export async function getPosts(): Promise<Post[]> {
  const res = await api.get<{ items: Post[] }>("/collections/posts/records");
  return res.data.items;
}

// CREATE ( createPost )
export async function createPost(newPost: Omit<Post, "id">): Promise<Post> {
  const res = await api.post<Post>("/collections/posts/records", newPost);
  return res.data;
}

// UPDATE ( updatePost )
export async function updatePost(
  id: string, // PocketBase id는 string입니다!
  updatedData: Partial<Post>
): Promise<Post> {
  const res = await api.patch<Post>(
    `/collections/posts/records/${id}`,
    updatedData
  );
  return res.data;
}

// DELETE ( deletePost )
export async function deletePost(id: string): Promise<void> {
  await api.delete(`/collections/posts/records/${id}`);
}
