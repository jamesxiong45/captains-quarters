import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      if (viewportWidth < 730 || viewportHeight < 720) {
        document.querySelector('.bg-primary').classList.add('flex-wrapper');
      } else {
        document.querySelector('.bg-primary').classList.remove('flex-wrapper');
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <header className="bg-primary">
      <div className="header">
        <div className="header-left">
          <Link className="text-light" to="/">
            <h1 className="m-0">Captains Quarters</h1>
          </Link>
          <p className="m-0">An easy start-up for Stargrave.</p>
        </div>
        <div className="header-right">
          {/* <Link to="/Credits" className="btn btn-primary">
            Credits page
          </Link> */}
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2 ui primary button" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2 ui primary button" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
