import { cn } from "@/utils/cn";
import Link from "next/link";
import { ComponentProps, ReactNode } from "react";

export default function Home() {
  return (
    <main className="">
      <section className="p-2 pb-0">
        <div className="w-full rounded-3xl bg-[linear-gradient(125deg,var(--tw-gradient-stops))] from-[#FFF1BE] from-[28%] via-[#EE87CB] via-[70%] to-[#b060FF] pb-24 pt-16 ring-inset ring-black/5 md:pb-[11.8rem]">
          <nav className="relative flex items-center justify-between px-5 py-2 md:px-12 xl:px-0">
            {/* grid lines */}
            <div className="absolute -inset-y-0 -left-2 -right-2">
              <div className="absolute -inset-y-px inset-x-0 border-y border-black/10"></div>
              <div className="absolute -inset-y-[9px] inset-x-0 border-y border-black/10"></div>
            </div>
            {/* grid lines */}

            <div className="mx-auto flex w-full max-w-screen-xl items-center">
              <div className="flex w-full items-center gap-5">
                {/* logo */}
                <ContainerWithPlusCorner>
                  <div className="flex items-center justify-start gap-2">
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

                    <p className="font-medium text-gray-950">BarelyHR</p>
                  </div>
                </ContainerWithPlusCorner>
                {/* end of logo */}

                {/* banner */}
                <span className="hidden items-center rounded-full bg-fuchsia-950/30 px-3 py-1 text-xs text-white lg:flex">
                  BarelyHR raises $100M Series from Tailwind Ventures
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="ml-2 size-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
                {/* end of banner */}
              </div>

              <div className="hidden items-center gap-5 md:flex">
                <ContainerWithPlusCorner>
                  <Link
                    href={"#"}
                    className="block px-3 py-[0.38rem] text-base font-medium text-gray-950"
                  >
                    Features
                  </Link>
                </ContainerWithPlusCorner>

                <Link
                  href={"#"}
                  className="block px-3 py-[0.38rem] text-base font-medium text-gray-950"
                >
                  Pricing
                </Link>

                <ContainerWithPlusCorner>
                  <Link
                    href={"#"}
                    className="block px-3 py-[0.38rem] text-base font-medium text-gray-950"
                  >
                    Login
                  </Link>
                </ContainerWithPlusCorner>
              </div>

              {/* mobile nav icon */}
              <button className="md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-gray-950"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
              {/* mobile nav icon */}
            </div>
          </nav>

          <div className="mx-auto mt-24 w-full max-w-screen-xl px-5 md:mt-40 md:px-12 lg:px-0">
            {/* heading */}
            <h1 className="text-7xl font-medium tracking-tighter text-gray-950 md:text-9xl">
              Hire Smarter.
            </h1>

            <p className="mt-6 max-w-sm text-base/6 font-medium text-gray-950/75 md:text-lg/8">
              BarelyHR helps small and large companies find the left person for
              the right job.
            </p>
            {/* heading */}

            {/* CTA */}
            <div className="mt-12 flex w-full flex-col items-center gap-5 md:flex-row">
              <a
                href=""
                className="w-full rounded-full bg-gray-950 px-4 py-3 text-center text-sm font-medium tracking-wide text-white shadow-md md:w-auto md:text-base/4"
              >
                Get started
              </a>
              <a
                href=""
                className="w-full rounded-full border border-white/25 bg-white/15 px-4 py-3 text-center text-sm font-medium tracking-wide text-gray-950 shadow-md ring ring-[#D15052]/5 md:w-auto md:text-base/4"
              >
                Learn more
              </a>
            </div>
            {/* CTA */}
          </div>
        </div>
      </section>
    </main>
  );
}

interface IContainerWithPlusCorner extends ComponentProps<"div"> {
  children: ReactNode;
}

const ContainerWithPlusCorner = ({
  children,
  className,
}: IContainerWithPlusCorner) => {
  return (
    <div className={`relative`}>
      {/* border plus */}
      {/* top-left */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.1}
        stroke="currentColor"
        className={cn(
          "absolute -left-5 -top-[calc(1.25rem+0.45px)] size-6 text-black/10",
          className,
        )}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
      {/* top-left */}

      {/* top-right */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.1}
        stroke="currentColor"
        className="absolute -right-5 -top-[calc(1.25rem+0.45px)] size-6 text-black/10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
      {/* top-left */}

      {/* bottom-left */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.1}
        stroke="currentColor"
        className="absolute -bottom-[calc(1.25rem+0.45px)] -left-5 size-6 text-black/10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
      {/* bottom-left */}

      {/* bottom-right */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.1}
        stroke="currentColor"
        className="absolute -bottom-[calc(1.25rem+0.45px)] -right-5 size-6 text-black/10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
      {/* bottom-right */}

      {/* border plus */}
      {children}
    </div>
  );
};
