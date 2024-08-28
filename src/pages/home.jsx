import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/red">Red</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/random">Random</Link>
      </nav>
      <main id="home">
        <div className="container">
          <h1>Welcome</h1>
          <h2>^^Please choose your favorite color^^</h2>
        </div>
      </main>
    </>
  );
}
