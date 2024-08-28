import { Link } from 'react-router-dom';

export default function Blue() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/red">Red</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/random">Random</Link>
      </nav>
      <main id="blue"></main>
    </>
  );
}
