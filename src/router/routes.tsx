import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../pages/Home";
import BlogList from "../pages/BlogList";
import BlogDetail from "../pages/BlogDetail";
import About from "../pages/About";

export default function AppRoutes() {
  return (
    <Routes>
      {/* MainLayout 사용 */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* DefaultLayout 사용 */}
      <Route element={<DefaultLayout />}>
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}
