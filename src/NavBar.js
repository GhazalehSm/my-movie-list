import { useRef } from "react";
import { useKeyEvent } from "./hooks/useKeyEvent";

export default function NavBar({ movies, query, setQuery }) {
  const searchRef = useRef(null);

  useKeyEvent("Enter", function () {
    if (document.activeElement === searchRef.current) return;
    searchRef.current.focus();
    setQuery("");
  });

  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">🍿</span>
        <h1>Bring Popcorn</h1>
      </div>
      <input
        ref={searchRef}
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p className="num-results">
        Found <strong>{movies.length}</strong> results
      </p>
    </nav>
  );
}
