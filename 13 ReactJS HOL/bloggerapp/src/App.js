import React from 'react';
import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';
import { books } from './data/books';

function App() {
  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  return (
    <div className="App">
      {showBooks && (
        <div className="st2">
          <h1>Book Details</h1>
          <BookDetails books={books} />
        </div>
      )}

      {showBlogs ? (
        <div className="v1">
          <h1>Blog Details</h1>
          <BlogDetails />
        </div>
      ) : null}

      {showCourses && (
        <div className="mystyle1">
          <h1>Course Details</h1>
          <CourseDetails />
        </div>
      )}
    </div>
  );
}

export default App;
