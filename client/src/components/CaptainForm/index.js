import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { CREATE_CAPTAIN } from '../../utils/mutations';
import { QUERY_CAPTAINS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const CompletedCaptainForm = () => {
  const [CompletedCaptain, setCompletedCaptain] = useState('');

 

  const [createCaptain, { error }] = useMutation(CREATE_CAPTAIN, {
    update(cache, { data: { createCaptain } }) {
      try {
        const { captains } = cache.readQuery({ query: QUERY_CAPTAINS });

        cache.writeQuery({
          query: QUERY_CAPTAINS,
          data: { captains : [createCaptain, ...captains] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, captains: [...me.captains, createCaptain] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await createCaptain({
        variables: {
            CompletedCaptain,
        },
      });

      setCompletedCaptain('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'CompletedCaptain' ) {
      setCompletedCaptain(value);
      
    }
  };

  return (
    <div>
      <h3>What's on your techy mind?</h3>

      {Auth.loggedIn() ? (
        <>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9" value={CompletedCaptain} onChange={handleChange}>
 
            </div>
            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Thought
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default CompletedCaptainForm;