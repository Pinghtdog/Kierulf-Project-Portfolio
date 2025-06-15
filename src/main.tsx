// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // 1. Import router components
import App from "./App.tsx";

// 2. Import your new page components
import HomePage from "./pages/HomePage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";

import "./css/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* 3. Wrap everything in BrowserRouter */}
    <BrowserRouter>
      {/* 4. Define your application's routes */}
      <Routes>
        {/* 
          This is a "layout route". App.tsx will now act as a template
          (containing the navbar and footer) for all the other pages.
        */}
        <Route path="/" element={<App />}>
          {/* The child routes will be rendered inside App's <Outlet /> */}
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
