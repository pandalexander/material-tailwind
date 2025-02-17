import Car from "./assets/car.jpg";
export default function Example() {
  return (
    <>
      <div>
        <div className="navbar bg-base-100 shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Services</a>
                </li>
                <li>
                  <a>About Us</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Your Auto Shop</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <div className="hidden md:navbar-end">
            <a className="btn btn-primary">Book Appointment</a>
          </div>
        </div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${Car})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                Quality Auto Repair You Can Trust
              </h1>
              <p className="mb-5">
                Keep your vehicle running smoothly with our expert auto repair
                services. From routine maintenance to complex repairs, our
                certified mechanics are here to help.
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>

        <div className="flex md:justify-center md:items-center">
          <div className="stats stats-vertical md:stats-horizontal md:flex-1 shadow">
            <div className="stat">
              <div className="stat-title">Cars Serviced This Month</div>
              <div className="stat-value">245</div>
              <div className="stat-desc">vs. 180 last month</div>
            </div>
            <div className="stat">
              <div className="stat-title">Customer Satisfaction</div>
              <div className="stat-value">4.9/5</div>
              <div className="stat-desc">Based on 150+ reviews</div>
            </div>
            <div className="stat">
              <div className="stat-title">Repeat Customers</div>
              <div className="stat-value">75%</div>
              <div className="stat-desc">Building loyalty</div>
            </div>
          </div>{" "}
        </div>

        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Oil Change</a>
            <a className="link link-hover">Brake Repair</a>
            <a className="link link-hover">Tire Rotation</a>
            <a className="link link-hover">Engine Diagnostics</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Our Team</a>
            <a className="link link-hover">Location</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </>
  );
}
