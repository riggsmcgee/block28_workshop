import { Link } from 'react-router-dom';

export default function Random() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/red">Red</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/random">Random</Link>
      </nav>
      <main id={`random${Math.round(Math.random() * 9 + 1)}`}>
        <h1>Refresh to see the effect</h1>
      </main>
    </>
  );
}
