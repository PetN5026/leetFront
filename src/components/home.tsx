import { NavLink } from "react-router";

export function Home() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="flex items-center justify-between">
          {/* <!-- Mobile menu button --> */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              <svg
                x-show="!isOpen"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 8h16M4 16h16"
                />
              </svg>

              <svg
                x-show="isOpen"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}

        <div className="container px-6 py-16 mx-auto text-center">
          <div className="max-w-xl mx-auto">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
              Are you a leetcode fanatic? Love doing the daily every day?
            </h1>
            <p className="mt-6 text-gray-500 dark:text-gray-300">
              Here I made a small full stack app that tracks the dailies. You
              can quickly grab the information from question by the date.
            </p>
            <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
              <NavLink to={"/leet"}>Let's go</NavLink>
            </button>
            {/* <p className="mt-3 text-sm text-gray-400 ">
              No credit card required
            </p> */}
          </div>
        </div>
      </section>
    </>
  );
}
