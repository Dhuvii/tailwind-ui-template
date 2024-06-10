import { cn } from "@/utils/cn";
import { Key } from "../components/Key";

const page = () => {
  return (
    <section className="flex min-h-[100dvh] w-full items-center justify-center">
      <div className="space-y-4 rounded-[calc(1.5rem+0.75rem)] p-3 ring-2 ring-gray-800/30">
        {/* row 1 */}
        <div className="flex w-full items-center justify-start gap-4">
          <Key className="relative w-28 rounded-tl-3xl">
            {({ baseClass, subTextClass }) => (
              <div className={cn(baseClass, "absolute bottom-0 left-0")}>
                <p className={cn(subTextClass)}>esc</p>
              </div>
            )}
          </Key>

          <Key.FunctionKey
            Icon={({ iconClass }) => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={cn(iconClass)}
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M120 40v-8a8 8 0 0116 0v8a8 8 0 01-16 0m72 88a64 64 0 11-64-64 64.07 64.07 0 0164 64m-16 0a48 48 0 10-48 48 48.05 48.05 0 0048-48M58.34 69.66a8 8 0 0011.32-11.32l-8-8a8 8 0 00-11.32 11.32zm0 116.68l-8 8a8 8 0 0011.32 11.32l8-8a8 8 0 00-11.32-11.32M192 72a8 8 0 005.66-2.34l8-8a8 8 0 00-11.32-11.32l-8 8A8 8 0 00192 72m5.66 114.34a8 8 0 00-11.32 11.32l8 8a8 8 0 0011.32-11.32zM40 120h-8a8 8 0 000 16h8a8 8 0 000-16m88 88a8 8 0 00-8 8v8a8 8 0 0016 0v-8a8 8 0 00-8-8m96-88h-8a8 8 0 000 16h8a8 8 0 000-16"
                />
              </svg>
            )}
          >
            F1
          </Key.FunctionKey>

          <Key.FunctionKey
            Icon={({ iconClass }) => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={cn(iconClass)}
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M120 40V16a8 8 0 0116 0v24a8 8 0 01-16 0m72 88a64 64 0 11-64-64 64.07 64.07 0 0164 64m-16 0a48 48 0 10-48 48 48.05 48.05 0 0048-48M58.34 69.66a8 8 0 0011.32-11.32l-16-16a8 8 0 00-11.32 11.32zm0 116.68l-16 16a8 8 0 0011.32 11.32l16-16a8 8 0 00-11.32-11.32M192 72a8 8 0 005.66-2.34l16-16a8 8 0 00-11.32-11.32l-16 16A8 8 0 00192 72m5.66 114.34a8 8 0 00-11.32 11.32l16 16a8 8 0 0011.32-11.32zM48 128a8 8 0 00-8-8H16a8 8 0 000 16h24a8 8 0 008-8m80 80a8 8 0 00-8 8v24a8 8 0 0016 0v-24a8 8 0 00-8-8m112-88h-24a8 8 0 000 16h24a8 8 0 000-16"
                />
              </svg>
            )}
          >
            F2
          </Key.FunctionKey>

          <Key.FunctionKey
            Icon={({ iconClass }) => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={cn(iconClass)}
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M208 136h-72v-16h48a16 16 0 0016-16V64a16 16 0 00-16-16h-48V32a8 8 0 00-16 0v16H72a16 16 0 00-16 16v40a16 16 0 0016 16h48v16H48a16 16 0 00-16 16v40a16 16 0 0016 16h72v16a8 8 0 0016 0v-16h72a16 16 0 0016-16v-40a16 16 0 00-16-16M72 64h112v40H72zm136 128H48v-40h160z"
                />
              </svg>
            )}
          >
            F3
          </Key.FunctionKey>

          <Key.FunctionKey
            Icon={({ iconClass }) => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={cn(iconClass)}
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M229.66 218.34l-50.07-50.06a88.11 88.11 0 10-11.31 11.31l50.06 50.07a8 8 0 0011.32-11.32M40 112a72 72 0 1172 72 72.08 72.08 0 01-72-72"
                />
              </svg>
            )}
          >
            F4
          </Key.FunctionKey>

          <Key.FunctionKey
            Icon={({ iconClass }) => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={cn(iconClass)}
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M128 176a48.05 48.05 0 0048-48V64a48 48 0 00-96 0v64a48.05 48.05 0 0048 48M96 64a32 32 0 0164 0v64a32 32 0 01-64 0zm40 143.6V240a8 8 0 01-16 0v-32.4A80.11 80.11 0 0148 128a8 8 0 0116 0 64 64 0 00128 0 8 8 0 0116 0 80.11 80.11 0 01-72 79.6"
                />
              </svg>
            )}
          >
            F5
          </Key.FunctionKey>

          <Key.FunctionKey
            Icon={({ iconClass }) => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={cn(iconClass)}
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M233.54 142.23a8 8 0 00-8-2 88.08 88.08 0 01-109.8-109.8 8 8 0 00-10-10 104.84 104.84 0 00-52.91 37A104 104 0 00136 224a103.1 103.1 0 0062.52-20.88 104.84 104.84 0 0037-52.91 8 8 0 00-1.98-7.98m-44.64 48.11A88 88 0 0165.66 67.11a89 89 0 0131.4-26A106 106 0 0096 56a104.11 104.11 0 00104 104 106 106 0 0014.92-1.06 89 89 0 01-26.02 31.4"
                />
              </svg>
            )}
          >
            F6
          </Key.FunctionKey>

          <Key.FunctionKey
            Icon={({ iconClass }) => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={cn(iconClass)}
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M.5 3.5A.5.5 0 011 4v3.248l6.267-3.636c.52-.302 1.233.043 1.233.696v2.94l6.267-3.636c.52-.302 1.233.043 1.233.696v7.384c0 .653-.713.998-1.233.696L8.5 8.752v2.94c0 .653-.713.998-1.233.696L1 8.752V12a.5.5 0 01-1 0V4a.5.5 0 01.5-.5m7 1.133L1.696 8 7.5 11.367zm7.5 0L9.196 8 15 11.367z"
                />
              </svg>
            )}
          >
            F7
          </Key.FunctionKey>

          <Key.FunctionKey
            Icon={({ iconClass }) => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={cn(iconClass)}
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M184 64v128a8 8 0 0 1-16 0V64a8 8 0 0 1 16 0m40-8a8 8 0 0 0-8 8v128a8 8 0 0 0 16 0V64a8 8 0 0 0-8-8m-80 72a15.76 15.76 0 0 1-7.33 13.34l-88.19 56.15A15.91 15.91 0 0 1 24 184.15V71.85a15.91 15.91 0 0 1 24.48-13.34l88.19 56.15A15.76 15.76 0 0 1 144 128m-16.18 0L40 72.08v111.85Z"
                />
              </svg>
            )}
          >
            F8
          </Key.FunctionKey>

          <Key.FunctionKey
            Icon={({ iconClass }) => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={cn(iconClass)}
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M15.5 3.5a.5.5 0 01.5.5v8a.5.5 0 01-1 0V8.752l-6.267 3.636c-.52.302-1.233-.043-1.233-.696v-2.94l-6.267 3.636C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696L7.5 7.248v-2.94c0-.653.713-.998 1.233-.696L15 7.248V4a.5.5 0 01.5-.5M1 4.633v6.734L6.804 8zm7.5 0v6.734L14.304 8z"
                />
              </svg>
            )}
          >
            F9
          </Key.FunctionKey>

          <Key.FunctionKey
            Icon={({ iconClass }) => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={cn(iconClass)}
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M155.51 24.81a8 8 0 00-8.42.88L77.25 80H32a16 16 0 00-16 16v64a16 16 0 0016 16h45.25l69.84 54.31A8 8 0 00160 224V32a8 8 0 00-4.49-7.19M32 96h40v64H32zm112 111.64l-56-43.55V91.91l56-43.55z"
                />
              </svg>
            )}
          >
            F10
          </Key.FunctionKey>

          <Key.FunctionKey
            Icon={({ iconClass }) => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={cn(iconClass)}
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M155.51 24.81a8 8 0 00-8.42.88L77.25 80H32a16 16 0 00-16 16v64a16 16 0 0016 16h45.25l69.84 54.31A8 8 0 00160 224V32a8 8 0 00-4.49-7.19M32 96h40v64H32zm112 111.64l-56-43.55V91.91l56-43.55zM208 128a39.93 39.93 0 01-10 26.46 8 8 0 01-12-10.58 24 24 0 000-31.72 8 8 0 1112-10.58A40 40 0 01208 128"
                />
              </svg>
            )}
          >
            F11
          </Key.FunctionKey>

          <Key.FunctionKey
            Icon={({ iconClass }) => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={cn(iconClass)}
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M155.51 24.81a8 8 0 00-8.42.88L77.25 80H32a16 16 0 00-16 16v64a16 16 0 0016 16h45.25l69.84 54.31A8 8 0 00160 224V32a8 8 0 00-4.49-7.19M32 96h40v64H32zm112 111.64l-56-43.55V91.91l56-43.55zm54-106.08a40 40 0 010 52.88 8 8 0 01-12-10.58 24 24 0 000-31.72 8 8 0 0112-10.58M248 128a79.9 79.9 0 01-20.37 53.34 8 8 0 01-11.92-10.67 64 64 0 000-85.33 8 8 0 1111.92-10.67A79.83 79.83 0 01248 128"
                />
              </svg>
            )}
          >
            F12
          </Key.FunctionKey>

          <Key className="relative rounded-tr-3xl">
            {({ baseClass }) => (
              <div
                className={cn(
                  baseClass,
                  "absolute inset-0 rounded-full bg-gray-100 ring-[1.2px] ring-black/10",
                )}
              ></div>
            )}
          </Key>
        </div>
        {/* row 1 */}

        {/* row 2 */}
        <div className="flex w-full items-center justify-start gap-4">
          <Key>
            {({ subTextClass, mainTextClass, baseClass }) => (
              <div
                className={cn(
                  baseClass,
                  "flex flex-col items-center justify-center",
                )}
              >
                <p className={cn(subTextClass)}>~</p>
                <p className={cn(mainTextClass, "mt-3")}>`</p>
              </div>
            )}
          </Key>

          <Key>
            {({ subTextClass, mainTextClass, baseClass }) => (
              <div
                className={cn(
                  baseClass,
                  "flex flex-col items-center justify-center",
                )}
              >
                <p className={cn(subTextClass)}>!</p>
                <p className={cn(mainTextClass, "mt-3")}>1</p>
              </div>
            )}
          </Key>

          <Key>
            {({ subTextClass, mainTextClass, baseClass }) => (
              <div
                className={cn(
                  baseClass,
                  "flex flex-col items-center justify-center",
                )}
              >
                <p className={cn(subTextClass)}>@</p>
                <p className={cn(mainTextClass, "mt-3")}>2</p>
              </div>
            )}
          </Key>

          <Key>
            {({ subTextClass, mainTextClass, baseClass }) => (
              <div
                className={cn(
                  baseClass,
                  "flex flex-col items-center justify-center",
                )}
              >
                <p className={cn(subTextClass)}>#</p>
                <p className={cn(mainTextClass, "mt-3")}>3</p>
              </div>
            )}
          </Key>

          <Key>
            {({ subTextClass, mainTextClass, baseClass }) => (
              <div
                className={cn(
                  baseClass,
                  "flex flex-col items-center justify-center",
                )}
              >
                <p className={cn(subTextClass)}>$</p>
                <p className={cn(mainTextClass, "mt-3")}>4</p>
              </div>
            )}
          </Key>

          <Key>
            {({ subTextClass, mainTextClass, baseClass }) => (
              <div
                className={cn(
                  baseClass,
                  "flex flex-col items-center justify-center",
                )}
              >
                <p className={cn(subTextClass)}>%</p>
                <p className={cn(mainTextClass, "mt-3")}>5</p>
              </div>
            )}
          </Key>

          <Key>
            {({ subTextClass, mainTextClass, baseClass }) => (
              <div
                className={cn(
                  baseClass,
                  "flex flex-col items-center justify-center",
                )}
              >
                <p className={cn(subTextClass)}>^</p>
                <p className={cn(mainTextClass, "mt-3")}>6</p>
              </div>
            )}
          </Key>

          <Key>
            {({ subTextClass, mainTextClass, baseClass }) => (
              <div
                className={cn(
                  baseClass,
                  "flex flex-col items-center justify-center",
                )}
              >
                <p className={cn(subTextClass)}>&</p>
                <p className={cn(mainTextClass, "mt-3")}>7</p>
              </div>
            )}
          </Key>

          <Key>
            {({ subTextClass, mainTextClass, baseClass }) => (
              <div
                className={cn(
                  baseClass,
                  "flex flex-col items-center justify-center",
                )}
              >
                <p className={cn(subTextClass)}>*</p>
                <p className={cn(mainTextClass, "mt-3")}>8</p>
              </div>
            )}
          </Key>

          <Key>
            {({ subTextClass, mainTextClass, baseClass }) => (
              <div
                className={cn(
                  baseClass,
                  "flex flex-col items-center justify-center",
                )}
              >
                <p className={cn(subTextClass)}>(</p>
                <p className={cn(mainTextClass, "mt-3")}>9</p>
              </div>
            )}
          </Key>

          <Key>
            {({ subTextClass, mainTextClass, baseClass }) => (
              <div
                className={cn(
                  baseClass,
                  "flex flex-col items-center justify-center",
                )}
              >
                <p className={cn(subTextClass)}>)</p>
                <p className={cn(mainTextClass, "mt-3")}>0</p>
              </div>
            )}
          </Key>

          <Key>
            {({ subTextClass, mainTextClass, baseClass }) => (
              <div
                className={cn(
                  baseClass,
                  "flex flex-col items-center justify-center",
                )}
              >
                <p className={cn(subTextClass)}>__</p>
                <p className={cn(mainTextClass, "mt-3")}>-</p>
              </div>
            )}
          </Key>

          <Key>
            {({ subTextClass, mainTextClass, baseClass }) => (
              <div
                className={cn(
                  baseClass,
                  "flex flex-col items-center justify-center",
                )}
              >
                <p className={cn(subTextClass)}>+</p>
                <p className={cn(mainTextClass, "mt-3")}>=</p>
              </div>
            )}
          </Key>

          <Key className="relative w-28">
            {({ baseClass, subTextClass }) => (
              <div className={cn(baseClass, "absolute bottom-0 right-0")}>
                <p className={cn(subTextClass)}>delete</p>
              </div>
            )}
          </Key>
        </div>
        {/* row 2 */}

        {/* row 3 */}
        <div className="flex w-full items-center justify-start gap-4">
          <Key className="relative w-28">
            {({ baseClass, subTextClass }) => (
              <div className={cn(baseClass, "absolute bottom-0 left-0")}>
                <p className={cn(subTextClass)}>tab</p>
              </div>
            )}
          </Key>

          <Key>
            {({ mainTextClass, baseClass }) => (
              <p className={cn(baseClass, mainTextClass)}>Q</p>
            )}
          </Key>

          <Key>
            {({ mainTextClass, baseClass }) => (
              <p className={cn(baseClass, mainTextClass)}>W</p>
            )}
          </Key>

          <Key>
            {({ mainTextClass, baseClass }) => (
              <p className={cn(baseClass, mainTextClass)}>E</p>
            )}
          </Key>

          <Key>
            {({ mainTextClass, baseClass }) => (
              <p className={cn(baseClass, mainTextClass)}>R</p>
            )}
          </Key>

          <Key>
            {({ mainTextClass, baseClass }) => (
              <p className={cn(baseClass, mainTextClass)}>T</p>
            )}
          </Key>

          <Key>
            {({ mainTextClass, baseClass }) => (
              <p className={cn(baseClass, mainTextClass)}>Y</p>
            )}
          </Key>

          <Key>
            {({ mainTextClass, baseClass }) => (
              <p className={cn(baseClass, mainTextClass)}>U</p>
            )}
          </Key>

          <Key>
            {({ mainTextClass, baseClass }) => (
              <p className={cn(baseClass, mainTextClass)}>I</p>
            )}
          </Key>

          <Key>
            {({ mainTextClass, baseClass }) => (
              <p className={cn(baseClass, mainTextClass)}>O</p>
            )}
          </Key>

          <Key>
            {({ mainTextClass, baseClass }) => (
              <p className={cn(baseClass, mainTextClass)}>P</p>
            )}
          </Key>

          <Key>
            {({ mainTextClass, baseClass }) => (
              <div
                className={cn(
                  baseClass,
                  "flex flex-col items-center justify-center",
                )}
              >
                <p className={cn(mainTextClass, "text-lg")}>{"{"}</p>
                <p className={cn(mainTextClass, "text-lg")}>{"["}</p>
              </div>
            )}
          </Key>

          <Key>
            {({ mainTextClass, baseClass }) => (
              <div
                className={cn(
                  baseClass,
                  "flex flex-col items-center justify-center",
                )}
              >
                <p className={cn(mainTextClass, "text-lg")}>{"}"}</p>
                <p className={cn(mainTextClass, "text-lg")}>{"]"}</p>
              </div>
            )}
          </Key>

          <Key>
            {({ mainTextClass, baseClass }) => (
              <div
                className={cn(
                  baseClass,
                  "flex flex-col items-center justify-center",
                )}
              >
                <p className={cn(mainTextClass, "text-lg")}>{"|"}</p>
                <p className={cn(mainTextClass, "text-lg")}>{"\\"}</p>
              </div>
            )}
          </Key>
        </div>
        {/* row 3 */}

        {/* row 4 */}
        <div className="flex w-full items-center justify-start gap-4">
          <Key className="relative w-32">
            {({ baseClass, subTextClass }) => (
              <>
                <div className={cn(baseClass, "absolute left-0 top-0")}>
                  <div className="size-1.5 rounded-full bg-green-400"></div>
                </div>
                <div className={cn(baseClass, "absolute bottom-0 left-0")}>
                  <p className={cn(subTextClass)}>caps lock</p>
                </div>
              </>
            )}
          </Key>

          <Key>
            {({ mainTextClass, baseClass }) => (
              <p className={cn(baseClass, mainTextClass)}>A</p>
            )}
          </Key>

          <Key>
            {({ mainTextClass, baseClass }) => (
              <p className={cn(baseClass, mainTextClass)}>S</p>
            )}
          </Key>

          <Key className="shadow-md shadow-blue-400 ring-blue-500">
            {({ mainTextClass, baseClass }) => (
              <p className={cn(baseClass, mainTextClass)}>D</p>
            )}
          </Key>

          <Key>
            {({ mainTextClass, baseClass }) => (
              <p className={cn(baseClass, mainTextClass)}>F</p>
            )}
          </Key>

          <Key>
            {({ mainTextClass, baseClass }) => (
              <p className={cn(baseClass, mainTextClass)}>G</p>
            )}
          </Key>

          <Key>
            {({ mainTextClass, baseClass }) => (
              <p className={cn(baseClass, mainTextClass)}>H</p>
            )}
          </Key>

          <Key>
            {({ mainTextClass, baseClass }) => (
              <p className={cn(baseClass, mainTextClass)}>J</p>
            )}
          </Key>

          <Key>
            {({ mainTextClass, baseClass }) => (
              <p className={cn(baseClass, mainTextClass)}>K</p>
            )}
          </Key>

          <Key>
            {({ mainTextClass, baseClass }) => (
              <p className={cn(baseClass, mainTextClass)}>L</p>
            )}
          </Key>

          <Key>
            {({ mainTextClass, baseClass }) => (
              <div
                className={cn(
                  baseClass,
                  "flex flex-col items-center justify-center",
                )}
              >
                <p className={cn(mainTextClass, "text-lg")}>{":"}</p>
                <p className={cn(mainTextClass, "text-lg")}>{";"}</p>
              </div>
            )}
          </Key>

          <Key>
            {({ mainTextClass, baseClass }) => (
              <div
                className={cn(
                  baseClass,
                  "flex flex-col items-center justify-center",
                )}
              >
                <p className={cn(mainTextClass, "text-lg")}>{'"'}</p>
                <p className={cn(mainTextClass, "text-lg")}>{"'"}</p>
              </div>
            )}
          </Key>

          <Key className="relative w-32">
            {({ baseClass, subTextClass }) => (
              <div className={cn(baseClass, "absolute bottom-0 right-0")}>
                <p className={cn(subTextClass)}>return</p>
              </div>
            )}
          </Key>
        </div>
        {/* row 4 */}

        {/* row 5 */}
        <div className="flex w-full items-center justify-start gap-4">
          <Key className="relative w-[10.5rem] shadow-md shadow-blue-400 ring-blue-500">
            {({ baseClass, subTextClass }) => (
              <div className={cn(baseClass, "absolute bottom-0 left-0")}>
                <p className={cn(subTextClass)}>shift</p>
              </div>
            )}
          </Key>

          <Key>
            {({ mainTextClass, baseClass }) => (
              <p className={cn(baseClass, mainTextClass)}>Z</p>
            )}
          </Key>

          <Key>
            {({ mainTextClass, baseClass }) => (
              <p className={cn(baseClass, mainTextClass)}>X</p>
            )}
          </Key>

          <Key>
            {({ mainTextClass, baseClass }) => (
              <p className={cn(baseClass, mainTextClass)}>C</p>
            )}
          </Key>

          <Key>
            {({ mainTextClass, baseClass }) => (
              <p className={cn(baseClass, mainTextClass)}>V</p>
            )}
          </Key>

          <Key>
            {({ mainTextClass, baseClass }) => (
              <p className={cn(baseClass, mainTextClass)}>B</p>
            )}
          </Key>

          <Key>
            {({ mainTextClass, baseClass }) => (
              <p className={cn(baseClass, mainTextClass)}>N</p>
            )}
          </Key>

          <Key>
            {({ mainTextClass, baseClass }) => (
              <p className={cn(baseClass, mainTextClass)}>M</p>
            )}
          </Key>

          <Key>
            {({ mainTextClass, baseClass }) => (
              <div
                className={cn(
                  baseClass,
                  "flex flex-col items-center justify-center",
                )}
              >
                <p className={cn(mainTextClass, "text-lg")}>{"<"}</p>
                <p className={cn(mainTextClass, "text-lg")}>{","}</p>
              </div>
            )}
          </Key>

          <Key>
            {({ mainTextClass, baseClass }) => (
              <div
                className={cn(
                  baseClass,
                  "flex flex-col items-center justify-center",
                )}
              >
                <p className={cn(mainTextClass, "text-lg")}>{">"}</p>
                <p className={cn(mainTextClass, "text-lg")}>{"."}</p>
              </div>
            )}
          </Key>

          <Key>
            {({ mainTextClass, baseClass }) => (
              <div
                className={cn(
                  baseClass,
                  "flex flex-col items-center justify-center",
                )}
              >
                <p className={cn(mainTextClass, "text-lg")}>{"?"}</p>
                <p className={cn(mainTextClass, "text-lg")}>{"/"}</p>
              </div>
            )}
          </Key>

          <Key className="relative w-[10.5rem]">
            {({ baseClass, subTextClass }) => (
              <div className={cn(baseClass, "absolute bottom-0 right-0")}>
                <p className={cn(subTextClass)}>shift</p>
              </div>
            )}
          </Key>
        </div>
        {/* row 5 */}

        {/* row 6 */}
        <div className="flex w-full items-center justify-start gap-4">
          <Key className="relative rounded-bl-3xl">
            {({ baseClass, subTextClass, iconClass }) => (
              <>
                <div
                  className={cn(
                    baseClass,
                    subTextClass,
                    "absolute right-0 top-0",
                  )}
                >
                  fn
                </div>

                <div className={cn(baseClass, "absolute bottom-0 left-0")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={iconClass}
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit={10}
                      strokeWidth={32}
                      d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48z"
                    />
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit={10}
                      strokeWidth={32}
                      d="M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48z"
                    />
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={32}
                      d="M117.33 117.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34m0 277.34c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34"
                    />
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit={10}
                      strokeWidth={32}
                      d="M256 48v416m208-208H48"
                    />
                  </svg>
                </div>
              </>
            )}
          </Key>

          <Key className="relative">
            {({ baseClass, subTextClass, iconClass }) => (
              <>
                <div className={cn(baseClass, "absolute right-0 top-0")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={iconClass}
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={30}
                      d="M112 328l144-144 144 144"
                    />
                  </svg>
                </div>

                <div
                  className={cn(
                    baseClass,
                    subTextClass,
                    "absolute inset-x-0 bottom-0 text-center",
                  )}
                >
                  control
                </div>
              </>
            )}
          </Key>

          <Key className="relative">
            {({ baseClass, subTextClass, iconClass }) => (
              <>
                <div className={cn(baseClass, "absolute right-0 top-0")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={iconClass}
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M232 192a8 8 0 01-8 8h-63.06a15.92 15.92 0 01-14.31-8.84L95.06 88H32a8 8 0 010-16h63.06a15.92 15.92 0 0114.31 8.84L160.94 184H224a8 8 0 018 8M152 88h72a8 8 0 000-16h-72a8 8 0 000 16"
                    />
                  </svg>
                </div>

                <div
                  className={cn(
                    baseClass,
                    subTextClass,
                    "absolute inset-x-0 bottom-0 text-center",
                  )}
                >
                  option
                </div>
              </>
            )}
          </Key>

          <Key className="relative w-[5.5rem] shadow-md shadow-blue-400 ring-blue-500">
            {({ baseClass, subTextClass, iconClass }) => (
              <>
                <div className={cn(baseClass, "absolute right-0 top-0")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={iconClass}
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M180 144h-20v-32h20a36 36 0 10-36-36v20h-32V76a36 36 0 10-36 36h20v32H76a36 36 0 1036 36v-20h32v20a36 36 0 1036-36m-20-68a20 20 0 1120 20h-20zM56 76a20 20 0 0140 0v20H76a20 20 0 01-20-20m40 104a20 20 0 11-20-20h20zm16-68h32v32h-32zm68 88a20 20 0 01-20-20v-20h20a20 20 0 010 40"
                    />
                  </svg>
                </div>

                <div
                  className={cn(
                    baseClass,
                    subTextClass,
                    "absolute inset-x-0 bottom-0 text-center",
                  )}
                >
                  command
                </div>
              </>
            )}
          </Key>

          <Key className="w-96" />

          <Key className="relative w-[5.5rem]">
            {({ baseClass, subTextClass, iconClass }) => (
              <>
                <div className={cn(baseClass, "absolute left-0 top-0")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={iconClass}
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M180 144h-20v-32h20a36 36 0 10-36-36v20h-32V76a36 36 0 10-36 36h20v32H76a36 36 0 1036 36v-20h32v20a36 36 0 1036-36m-20-68a20 20 0 1120 20h-20zM56 76a20 20 0 0140 0v20H76a20 20 0 01-20-20m40 104a20 20 0 11-20-20h20zm16-68h32v32h-32zm68 88a20 20 0 01-20-20v-20h20a20 20 0 010 40"
                    />
                  </svg>
                </div>

                <div
                  className={cn(
                    baseClass,
                    subTextClass,
                    "absolute inset-x-0 bottom-0 text-center",
                  )}
                >
                  command
                </div>
              </>
            )}
          </Key>

          <Key className="relative">
            {({ baseClass, subTextClass, iconClass }) => (
              <>
                <div className={cn(baseClass, "absolute left-0 top-0")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={iconClass}
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M232 192a8 8 0 01-8 8h-63.06a15.92 15.92 0 01-14.31-8.84L95.06 88H32a8 8 0 010-16h63.06a15.92 15.92 0 0114.31 8.84L160.94 184H224a8 8 0 018 8M152 88h72a8 8 0 000-16h-72a8 8 0 000 16"
                    />
                  </svg>
                </div>

                <div
                  className={cn(
                    baseClass,
                    subTextClass,
                    "absolute inset-x-0 bottom-0 text-center",
                  )}
                >
                  option
                </div>
              </>
            )}
          </Key>

          <Key>
            {({ iconClass, baseClass }) => (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={cn(baseClass, iconClass)}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M13.15 16.15l-3.625-3.625q-.125-.125-.175-.25T9.3 12t.05-.275.175-.25L13.15 7.85q.075-.075.163-.112T13.5 7.7q.2 0 .35.138T14 8.2v7.6q0 .225-.15.363t-.35.137q-.05 0-.35-.15"
                  />
                </svg>
              </div>
            )}
          </Key>

          <div className="flex size-16 flex-col gap-1">
            <Key className="h-auto flex-1 rounded-b-none from-70% to-gray-400">
              {({ iconClass }) => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={cn(iconClass)}
                  viewBox="0 0 24 24"
                >
                  <path fill="currentColor" d="M7 14l5-5 5 5z" />
                </svg>
              )}
            </Key>

            <Key className="h-auto flex-1 rounded-t-none from-gray-300 to-white to-20%">
              {({ iconClass }) => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={cn(iconClass)}
                  viewBox="0 0 24 24"
                >
                  <path fill="currentColor" d="M12 15l-5-5h10z" />
                </svg>
              )}
            </Key>
          </div>

          <Key className="rounded-br-3xl">
            {({ baseClass, iconClass }) => (
              <div className={cn(baseClass)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={cn(baseClass, iconClass)}
                  viewBox="0 0 24 24"
                >
                  <path fill="currentColor" d="M10 17V7l5 5z" />
                </svg>
              </div>
            )}
          </Key>
        </div>
        {/* row 6 */}
      </div>
    </section>
  );
};

export default page;
