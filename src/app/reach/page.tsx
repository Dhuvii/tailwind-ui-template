import React from "react";

const page = () => {
  return (
    <section className="flex min-h-dvh w-full items-center justify-center">
      <div className="relative h-[26rem] w-[26rem]">
        {/* rings */}
        <div className="size-full rounded-full bg-[radial-gradient(circle,_#FFFFFF_40%,_#F8FAFF_100%)] p-14 ring-[1px] ring-gray-950/10">
          <div className="size-full rounded-full bg-[radial-gradient(circle,_#FFFFFF_40%,_#F8FAFF_100%)] p-14 ring-[1px] ring-gray-950/10">
            <div className="size-full rounded-full bg-[radial-gradient(circle,_#FFFFFF_40%,_#F8FAFF_100%)] p-14 ring-[1px] ring-blue-950/10">
              <div className="flex size-full items-center justify-center rounded-full bg-white ring-[1px] ring-gray-950/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-9 text-gray-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* rings */}

        {/* icons */}
        <div className="absolute left-10 top-24 flex items-center justify-center rounded-full bg-white p-3 shadow-sm ring-[1px] ring-gray-950/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-10 pt-1 text-[#0DAC00]"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M17.47 6.07a4.54 4.54 0 00-4.38 3.69 19.9 19.9 0 01-2.28-4.9H8.55v6a2.14 2.14 0 11-4.28 0v-6L2 4.91v6a4.4 4.4 0 108.8-.05v-1a20.55 20.55 0 001.65 2.7l-1.38 6.61h2.32l1-4.81a5.61 5.61 0 003.11.89 4.57 4.57 0 000-9.14zm0 6.83a4.09 4.09 0 01-2.55-1l.23-.91v-.05c.16-1 .66-2.6 2.35-2.6a2.25 2.25 0 012.27 2.24 2.41 2.41 0 01-2.27 2.32z"
            />
          </svg>
        </div>

        <div className="absolute left-32 top-20 flex items-center justify-center rounded-full bg-white p-3 shadow-sm ring-[1px] ring-gray-950/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-10"
            viewBox="0 0 256 256"
          >
            <g fill="none">
              <rect width={256} height={256} fill="#fff" rx={60} />
              <rect width={256} height={256} fill="#0a66c2" rx={60} />
              <path
                fill="#fff"
                d="M184.715 217.685h29.27a4 4 0 004-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 01-.595-.161V101.66a4 4 0 00-4-4h-27.777a4 4 0 00-4 4v112.02a4 4 0 004 4h29.268a4 4 0 004-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 004 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 004-4V101.66a4 4 0 00-4-4H44.959a4 4 0 00-4 4v112.025a4 4 0 004 4"
              />
            </g>
          </svg>
        </div>

        <div className="absolute right-28 top-10 flex items-center justify-center rounded-full bg-white p-3 shadow-sm ring-[1px] ring-gray-950/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-10 text-[#E61DA4]"
            viewBox="0 0 48 48"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={4}
            >
              <path d="M44 24a19.938 19.938 0 01-5.889 14.173A19.937 19.937 0 0124 44C12.954 44 4 35.046 4 24a19.932 19.932 0 015.5-13.775A19.943 19.943 0 0124 4a19.937 19.937 0 0114.111 5.827A19.938 19.938 0 0144 24" />
              <path d="M44 24c-2.918 0-10.968-1.1-18.173 2.063C18 29.5 12.333 34.832 9.863 38.147" />
              <path d="M16.5 5.454C19.63 8.343 26.46 15.698 29 23c2.54 7.302 3.48 16.28 4.06 18.835" />
              <path d="M4.154 21.5c3.778.228 13.779.433 20.179-2.3 6.4-2.733 11.907-7.76 13.796-9.355M5.5 31.613a20.076 20.076 0 009 9.991" />
              <path d="M4 24a19.932 19.932 0 015.5-13.775M24 4a19.943 19.943 0 00-14.5 6.225M32 5.664a20.037 20.037 0 016.111 4.163A19.938 19.938 0 0144 24c0 2.462-.445 4.821-1.26 7M24 44a19.937 19.937 0 0014.111-5.827" />
            </g>
          </svg>
        </div>

        <div className="absolute -right-5 top-44 flex items-center justify-center rounded-full bg-white p-3 shadow-sm ring-[1px] ring-gray-950/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-10"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 0c-1.567 0-2.938.84-3.685 2.094l7.368.002A4.28 4.28 0 0012 0m0 2.768a4.29 4.29 0 00-4.291 4.287h8.578A4.287 4.287 0 0012 2.768m-4.953.209A4.076 4.076 0 002.97 7.05h4.076zm9.904.002V7.05l4.072.002a4.073 4.073 0 00-4.072-4.075zm-9.904 4.73a4.29 4.29 0 000 8.578zm9.904 0v8.578a4.29 4.29 0 100-8.578m-4.955.002a4.288 4.288 0 10.002 8.576 4.288 4.288 0 00-.002-8.576m-9.9.603a4.288 4.288 0 00-.002 7.371zm19.808 0l.002 7.371a4.29 4.29 0 00-.002-7.37M7.047 16.95l-4.074.002a4.07 4.07 0 004.074 4.07zm9.904 0v4.07a4.07 4.07 0 004.072-4.068zm-9.242.002a4.29 4.29 0 008.578 0zm.549 4.953a4.286 4.286 0 007.371 0z"
            />
          </svg>
        </div>

        <div className="absolute bottom-28 left-28 flex items-center justify-center rounded-full bg-white p-3 shadow-sm ring-[1px] ring-gray-950/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-10 text-gray-950"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M7.68 14.98H6V9h1.71c1.28 0 1.71 1.03 1.71 1.71v2.56c0 .68-.42 1.71-1.74 1.71m4.7-3.52v1.07H11.2v1.39h1.93v1.07h-2.25c-.4.01-.74-.31-.75-.71V9.75c-.01-.4.31-.74.71-.75h2.28v1.07H11.2v1.39zm4.5 2.77c-.48 1.11-1.33.89-1.71 0L13.77 9h1.18l1.07 4.11L17.09 9h1.18z"
            />
            <path
              fill="currentColor"
              d="M7.77 10.12h-.63v3.77h.63c.14 0 .28-.05.42-.16.14-.1.21-.26.21-.47v-2.52c0-.21-.07-.37-.21-.47a.72.72 0 00-.42-.15"
            />
          </svg>
        </div>

        <div className="absolute bottom-16 right-28 flex items-center justify-center rounded-full bg-white p-3 shadow-sm ring-[1px] ring-gray-950/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-10 text-[#47BF91]"
            viewBox="-2.5 -2 24 24"
          >
            <g fill="currentColor">
              <path d="M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.632 5.632 0 002.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75z" />
              <circle cx={14.375} cy={1.875} r={1.875} />
            </g>
          </svg>
        </div>
        {/* icons */}
      </div>
    </section>
  );
};

export default page;
