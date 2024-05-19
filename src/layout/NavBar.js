import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-900 hover:text-white text-xl rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white text-xl rounded-md px-3 py-2";

  return (
    <nav className="bg-slate-900">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <span className="hidden md:block text-white text-2xl font-bold ">
                J. Ramirez
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
                <NavLink to="/projects" className={linkClass}>
                  Projects
                </NavLink>
                <NavLink to="/connect" className={linkClass}>
                  Connect
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
