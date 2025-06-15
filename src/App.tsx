// src/App.tsx
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./css/App.css";

function App() {
  return (
    <div>
      {/* The Header is now free from the content box styling */}
      <Header />

      {/* We apply the centered, padded styling ONLY to the main content area */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* You might want to wrap your footer in the content box too, or style it separately */}
      <footer className="main-content">Kelvin Pehrson P. Kierulf</footer>
    </div>
  );
}

export default App;
