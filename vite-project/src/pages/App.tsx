import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Page } from "@/pages/Page";
import { Home } from "@/pages/Home";
import { Projects } from "@/pages/Projects";
import { About } from "@/pages/About";
import { Contact } from "@/pages/Contact";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function NoMatch() {
  return (
    <div className="mt-12 flex flex-col items-center justify-center gap-y-4">
      <h1>404</h1>
    </div>
  );
}
