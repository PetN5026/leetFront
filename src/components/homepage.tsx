import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const API_URI = import.meta.env.VITE_URI;

// {
//   "title": "Neighboring Bitwise XOR",
//   "titleSlug": "neighboring-bitwise-xor",
//   "date": "2025-01-17T00:00:00.000Z",
//   "difficulty": "Medium",
//   "topics": [
//     {
//       "name": "Array",
//       "slug": "array",
//       "translatedName": null
//     },
//     {
//       "name": "Bit Manipulation",
//       "slug": "bit-manipulation",
//       "translatedName": null
//     }
//   ],
//   "gitstring": "git commit --date \"2025-01-17\" -m \"Neighboring Bitwise XOR\""
// }
export function HomePage() {
  const [startDate, setDate] = useState(new Date());
  const [questionObj, setQuestion] = useState({
    title: "title",
    titleSlug: "",
    date: "",
    difficulty: "",
    topics: [],
    gitstring: "",
  });
  async function fetchDailyQuestion(date: string) {
    try {
      const response = await fetch(`${API_URI}/leet/git/${date}`);
      // console.log(process.env.URI);

      console.log(response);

      const data = await response.json();
      console.log(data);

      console.log("after");
      return data;
    } catch (error) {
      console.log("error");
      console.log("err", error);
    }
  }

  // read2();
  return (
    <>
      {/* <p> From home page</p>
      <input></input> */}

      <DatePicker
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
                <path strokeLinecap="round" d="M40.04 22v20h-32V22"></path>
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
      <button
        onClick={async () => {
          const selectedDate: string = startDate.toISOString().split("T")[0];
          const newQuestion = await fetchDailyQuestion(selectedDate);
          console.log("question \n", newQuestion);
          if (newQuestion != null) {
            setQuestion(newQuestion!);
          }
          // console.log(startDate.toISOString().split("T")[0]);
        }}
      >
        Get daily question
      </button>

      <p>{questionObj.title}</p>
    </>
  );
}
