import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const new_API = import.meta.env.VITE_API;
export function Test() {
  const [startDate, setDate] = useState(new Date());
  const [questionObj, setQuestion] = useState({
    title: "Title",
    titleSlug: "Title slug of question goes here",
    date: "YYYY-MM-DD",
    difficulty: "medium",
    topics: [],
    gitstring: 'git commit --date "2025-01-22" -m "Map of Highest Peak"',
  });
  async function fetchDailyQuestion(date: string) {
    try {
      const response = await fetch(`${new_API}/leet/git/${date}`);

      const data = await response.json();

      return data;
    } catch (error) {
      console.log("err", error);
    }
  }

  return (
    <div className="hero bg-base-200 min-h-screen py-4 flex flex-col">
      <h1 className="text-5xl font-bold">Leetcode Daily</h1>
      <div className="flex hero-content flex-col lg:flex-row border-2 shadow-md rounded-md">
        {/* <div className="text-center rounded-md p-4 m-4 bg-red-200 lg:text-left"> */}
        {/* </div> */}
        <div className="card bg-base-100  m-4 max-w-sm shrink-0 rounded-md bg-blue-200 shadow-md shadow-black">
          <form className="card-body">
            <p className="py-6 text-left">
              Select a date and get the leetcode daily for that day. Click the
              underlined name to go straight there.
            </p>
            <div className="form-control mt-6">
              <DatePicker
                // showPopperArrow
                // dropdownMode="select"

                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 48 48"
                  >
                    <mask id="ipSApplication0">
                      <g
                        fill="none"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth="4"
                      >
                        {" "}
                        <path
                          strokeLinecap="round"
                          d="M40.04 22v20h-32V22"
                        ></path>
                        <path
                          fill="#fff"
                          d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
                        ></path>{" "}
                      </g>
                    </mask>
                    <path
                      fill="currentColor"
                      d="M0 0h48v48H0z"
                      mask="url(#ipSApplication0)"
                    ></path>
                  </svg>
                }
                showIcon
                selected={startDate}
                onChange={(date) => setDate(date!)}
              />
              {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-down justify-end"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg> */}
              <button
                className="m-4 p-2 rounded-md bg-slate-50"
                onClick={async (event) => {
                  event.preventDefault();
                  const selectedDate: string = startDate
                    .toISOString()
                    .split("T")[0];
                  const newQuestion = await fetchDailyQuestion(selectedDate);
                  if (newQuestion != null) {
                    setQuestion(newQuestion!);
                  }
                  // console.log(startDate.toISOString().split("T")[0]);
                }}
              >
                Get daily question
              </button>
            </div>
          </form>
        </div>
        {/* <!-- Card --> */}

        {questionObj.title == "Title" ? null : (
          <div className="flex flex-col gap-6 bg-base-200 rounded-box p-6 max-w-xl bg-white rounded-md m-4 shadow-md shadow-black">
            {/* <!-- Header --> */}

            <div className="flex justify-between items-center"></div>

            <div className="flex flex-col gap-2">
              <a
                href={`https://www.leetcode.com/problems/${questionObj.titleSlug}`}
                className="text-xl font-bold underline"
              >
                {questionObj.title}
              </a>
              <a className="text-xl font-bold">{questionObj.titleSlug}</a>
              <a className="text-xl font-bold">
                {questionObj.date.split("T")[0]}
              </a>
              <a className="text-xl font-bold">{questionObj.difficulty}</a>
              <a
                onClick={() => {
                  navigator.clipboard.writeText(questionObj.gitstring);
                }}
                className="text-xl font-bold"
              >
                {questionObj.gitstring}
              </a>
            </div>

            <div className="flex justify-between items-center"></div>
          </div>
        )}
      </div>
    </div>
  );
}
