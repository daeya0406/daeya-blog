export interface Post {
  id: number;
  title: string;
  content: string;
  summary: string;
  date: number;
  tags: string[];
  thumbnail?: string;
}
