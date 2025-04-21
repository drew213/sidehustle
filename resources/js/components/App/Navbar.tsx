import { Link, usePage } from '@inertiajs/react';
import { Fragment } from 'react';

function Navbar() {
  const { auth } = usePage().props;
  // @ts-expect-error user not typed
  const { user } = auth;

  return (
    <nav className="navbar bg-base-100 shadow-md sticky top-0 z-50 sm:min-w-full">
      {/* Brand Logo / Name */}
      <div className="flex-1">
        <Link href="/" className="text-xl font-bold btn btn-ghost normal-case">
          S3RVHUB
        </Link>
      </div>

      {/* Navbar Actions */}
      <div className="flex items-center gap-2">
        {/* Search Input */}
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered w-32 md:w-64"
          />
        </div>

        {/* Cart Dropdown */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
            aria-label="Cart"
          >
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.3 2.3a1 1 0 0 0 .7 1.7H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>

          {/* Dropdown Cart Items */}
          <div
            tabIndex={0}
            className="card card-compact dropdown-content mt-3 w-52 bg-base-100 shadow z-10"
          >
            <div className="card-body">
              <span className="text-lg font-bold">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View Cart</button>
              </div>
            </div>
          </div>
        </div>

        {/* Authenticated User */}
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
              aria-label="User Menu"
            >
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="User Avatar"
                />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow z-10"
            >
              <li>
                <Link href={route('profile.edit')}>
                  Profile <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link href={route('dashboard')}>Dashboard</Link>
              </li>
              <li>
                <Link href={route('logout')} method="post" as="button">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          // Guest Links
          <Fragment>
            <Link href={route('login')} className="btn btn-ghost">
              Login
            </Link>
            <Link href={route('register')} className="btn btn-ghost">
              Register
            </Link>
          </Fragment>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
