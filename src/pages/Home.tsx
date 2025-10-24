export default function Home() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-6xl font-bold mb-6">Daeya's Blog</h1>
      <p className="text-xl text-slate-300 mb-8">개발 블로그</p>
      <a
        href="/blog"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
      >
        블로그 보러가기 →
      </a>
    </div>
  );
}
