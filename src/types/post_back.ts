export interface Post {
  id: number;
  title: string;
  content: string;
  summary: string;
  date: string; // datetime
  tags: string[];
  thumbnail?: string;
}
