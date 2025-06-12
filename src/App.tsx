// src/App.tsx
import { Outlet } from "react-router-dom"; // 1. Import Outlet
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div>
      <Header /> {/* The Header will now show on every page */}
      <main>
        <Outlet /> {/* 2. This is where your page content will be rendered */}
      </main>
      {/* You could also add a <Footer /> component here later */}
    </div>
  );
}

export default App;
