import React from 'react';
import { Link } from 'react-router-dom';

const ThoughtList = ({ thoughts, title }) => {
  if (!thoughts.length) {
    return <h3>No Stories Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {thoughts &&
        thoughts.map((thought) => (
          <div key={thought._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {thought.thoughtAuthor} <br />
              <span style={{ fontSize: '1rem' }}>
                had a story about {thought.createdAt}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{thought.thoughtText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/thoughts/${thought._id}`}
            >
              Join the discussion on this .
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ThoughtList;
