// src/App.tsx
import "./App.css";
import Header from "./components/Header"; // 1. Import your new component

function App() {
  return (
    <div>
      <Header /> {/* 2. Use it like an HTML tag */}
      <main>
        <h1>My Awesome Portfolio</h1>
        <p>Welcome to my site!</p>
      </main>
    </div>
  );
}

export default App;
