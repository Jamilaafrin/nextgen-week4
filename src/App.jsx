
import { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <section className="bg-primary text-white text-center py-5">
        <div className="container py-4">
          <h1 className="display-4 fw-bold">
            Learn. Explore. Grow.
          </h1>
          <p className="lead">
            A modern web experience built with React.
          </p>
          <a href="#resources" className="btn btn-light mt-3">
            Explore Resources
          </a>
        </div>
      </section>

      <section id="resources" className="container py-5">
        <h2 className="text-center fw-bold mb-2">
          Learning Resources
        </h2>
        <p className="text-center text-secondary mb-4">
          Explore useful content loaded from a public API.
        </p>

        <div className="row g-4">
          {posts.map(post => (
            <div className="col-md-6 col-lg-4" key={post.id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">
                    {post.title}
                  </h5>
                  <p className="card-text text-secondary">
                    {post.body}
                  </p>
                  <span className="badge bg-primary">
                    Resource {post.id}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="text-center">
            Loading resources...
          </p>
        )}
      </section>
    </>
  );
}

function About() {
  return (
    <section className="container py-5 text-center">
      <h1 className="fw-bold">About This Project</h1>
      <p className="text-secondary mt-3">
        This responsive web application demonstrates React,
        Bootstrap, React Router and public API integration.
        It was developed as part of the NextGen internship.
      </p>
      <Link to="/" className="btn btn-primary mt-3">
        Back to Home
      </Link>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand navbar-dark bg-dark px-3 px-md-5">
        <Link to="/" className="navbar-brand fw-bold">
          LearnSpace
        </Link>

        <div className="ms-auto d-flex gap-3">
          <Link to="/" className="nav-link text-white">
            Home
          </Link>
          <Link to="/about" className="nav-link text-white">
            About
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <footer className="bg-dark text-white text-center py-3">
        <small>
          © 2026 LearnSpace | NextGen Internship Project
        </small>
      </footer>
    </BrowserRouter>
  );
}

export default App;
