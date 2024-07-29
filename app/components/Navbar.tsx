import { Disclosure } from "@headlessui/react";
import { Link, NavLink } from "@remix-run/react";
import React, { useState, useEffect } from "react";
import { Theme, useTheme } from "remix-themes";

const Navbar = () => {
  const [theme, setTheme] = useTheme();
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  const currentYear = dateTime.getFullYear();
  const currentDate = dateTime.toLocaleDateString(); // Date formatting

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex justify-between w-full">
                <div className="flex items-center">
                  <Link to="/">
                    <h1 className="text-2xl font-medium">
                      Shrey <span className="text-teal-500">Dev</span>
                    </h1>
                  </Link>
                </div>
                <div className="flex items-center space-x-4 p-2 m-3 rounded-lg border border-teal-500 bg-white/30 dark:bg-gray-800/50 backdrop-blur-lg shadow-md">
                  <span className="text-xl text-gray-500 dark:text-gray-300">
                    {currentDate}
                  </span>
                  <span className="text-xl   px-1 py-1  text-gray-500 dark:text-gray-300">
                    {currentYear}
                  </span>
                </div>

                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <NavLink
                    prefetch="intent"
                    className={({ isActive }) =>
                      isActive
                        ? "border-teal-500 dark:bg-gray-900 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    prefetch="intent"
                    className={({ isActive }) =>
                      isActive
                        ? "border-teal-500 dark:bg-gray-900 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    }
                    to="/blog"
                  >
                    Daily Blog
                  </NavLink>
                  <NavLink
                    prefetch="intent"
                    className={({ isActive }) =>
                      isActive
                        ? "border-teal-500 dark:bg-gray-900 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    }
                    to="/projects"
                  >
                    Projects - Github
                  </NavLink>
                  <button
                    onClick={() =>
                      setTheme((prev) =>
                        prev === Theme.DARK ? Theme.LIGHT : Theme.DARK
                      )
                    }
                  >
                    {theme === Theme.DARK ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                <button
                  className="mr-4"
                  onClick={() =>
                    setTheme((prev) =>
                      prev === Theme.DARK ? Theme.LIGHT : Theme.DARK
                    )
                  }
                >
                  {theme === Theme.DARK ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                      />
                    </svg>
                  )}
                </button>
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 dark:hover:bg-gray-800">
                  {open ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                      />
                    </svg>
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <NavLink
                prefetch="intent"
                className={({ isActive }) =>
                  isActive
                    ? "border-teal-500 dark:bg-gray-900 dark:text-white block px-3 py-2 text-base font-medium border-b-2"
                    : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white block px-3 py-2 text-base font-medium"
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                prefetch="intent"
                className={({ isActive }) =>
                  isActive
                    ? "border-teal-500 dark:bg-gray-900 dark:text-white block px-3 py-2 text-base font-medium border-b-2"
                    : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white block px-3 py-2 text-base font-medium"
                }
                to="/blog"
              >
                Blog
              </NavLink>
              <NavLink
                prefetch="intent"
                className={({ isActive }) =>
                  isActive
                    ? "border-teal-500 dark:bg-gray-900 dark:text-white block px-3 py-2 text-base font-medium border-b-2"
                    : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white block px-3 py-2 text-base font-medium"
                }
                to="/projects"
              >
                Projects
              </NavLink>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
