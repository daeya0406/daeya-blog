import Logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <header className="bg-slate-800 border-b border-slate-700">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <a href="/">
            <h1 className="flex items-center gap-2">
              <img src={Logo} alt="Daeya's Blog Logo" className="h-4" />
              <span className="text-xl font-bold text-white">Daeya's Blog</span>
            </h1>
          </a>
          <nav className="flex gap-6">
            <a href="/" className="text-slate-300 hover:text-white transition">
              Home
            </a>
            <a
              href="/about"
              className="text-slate-300 hover:text-white transition"
            >
              About
            </a>
            <a
              href="/blog"
              className="text-slate-300 hover:text-white transition"
            >
              Blog
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
