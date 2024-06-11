"use client";
import { cn } from "@/utils/cn";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ComponentProps,
  ReactNode,
  RefObject,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import KandbanCard from "./components/KanbanCard";
import { Key } from "./components/Key";
import { applied, interview, phoneScreening, testimonials } from "./fixtures";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const topContRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const getItemPosition = (index: number): number | null => {
    if (containerRef.current && itemRefs.current[index] && topContRef.current) {
      const topContRect = topContRef.current.getBoundingClientRect();
      const itemRect = itemRefs.current[index]!.getBoundingClientRect();

      const leftXPos = Math.round(topContRect.x) - Math.round(itemRect.x - 4);
      const rightXPos =
        Math.round(itemRect.x + 4) +
        Math.round(itemRect.width) -
        Math.round(topContRect.right);

      const leftClamp = 500 - Math.max(0, Math.min(500, leftXPos));
      const rightClamp = 500 - Math.max(0, Math.min(500, rightXPos));

      let delta =
        itemRect.x > topContRect.left + topContRect.width / 2
          ? rightClamp
          : leftClamp;

      return delta;
    }
    return null;
  };

  return (
    <main className="">
      {/* hero */}
      <section className="p-2 pb-0">
        <div className="w-full rounded-[2rem] bg-[linear-gradient(125deg,var(--tw-gradient-stops))] from-[#FFF1BE] from-[28%] via-[#EE87CB] via-[70%] to-[#b060FF] pb-24 pt-16 ring-inset ring-black/5 md:pb-[11.8rem]">
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
                  className="relative block px-3 py-[0.38rem] text-base font-medium text-gray-950"
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

          <div className="mx-auto mt-24 w-full max-w-screen-xl px-5 md:mt-40 md:px-12 xl:px-0">
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
              <Link
                href=""
                className="w-full rounded-full bg-gray-950 px-4 py-3 text-center text-sm font-medium tracking-wide text-white shadow-md md:w-auto md:text-base/4"
              >
                Get started
              </Link>
              <Link
                href=""
                className="w-full rounded-full border border-white/25 bg-white/15 px-4 py-3 text-center text-sm font-medium tracking-wide text-gray-950 shadow-md ring ring-[#D15052]/5 md:w-auto md:text-base/4"
              >
                Learn more
              </Link>
            </div>
            {/* CTA */}
          </div>
        </div>
      </section>
      {/* hero */}

      {/* hiring */}
      <section className="bg-gradient-to-b from-white from-10% to-gray-100 py-32">
        <div className="mx-auto w-full max-w-screen-xl px-3 xl:px-0">
          <p className="font-mono text-xs/4 uppercase tracking-wider text-gray-500">
            hiring
          </p>

          <h2 className="mt-2 max-w-2xl text-5xl font-medium tracking-tighter text-gray-950 md:text-6xl">
            Everything you need to build your team.
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-screen-xl px-3 xl:px-0">
          <div className="grid grid-cols-12 gap-4">
            {/* kanban */}
            <div className="col-span-12 rounded-lg rounded-t-[2rem] bg-white shadow-sm ring-[1px] ring-gray-950/5 md:col-span-6 md:rounded-tl-[2rem] md:rounded-tr-lg">
              <div className="max-h-96 w-full overflow-hidden p-6 pr-0 [mask-image:linear-gradient(black_80%,transparent)]">
                <Kanban />
              </div>

              <div className="p-10">
                <p className="font-mono text-xs/4 uppercase tracking-wider text-gray-500">
                  hiring
                </p>

                <h2 className="mt-2 max-w-2xl text-xl font-medium tracking-tighter text-gray-950 md:text-2xl/8">
                  A snapshot of all candidates
                </h2>

                <p className="mt-2 text-sm/6 text-gray-600">
                  BarelyHR makes it easy to review and assess every candidate to
                  figure out exactly where action needs to be made.
                </p>
              </div>
            </div>
            {/* kanban */}

            {/* job posts */}
            <div className="col-span-12 rounded-lg bg-white shadow-sm ring-[1px] ring-gray-950/5 md:col-span-6 md:rounded-tr-[2rem]">
              <div className="max-h-96 w-full overflow-hidden p-6 [mask-image:linear-gradient(black_80%,transparent)]">
                <Posts />
              </div>

              <div className="p-10">
                <p className="font-mono text-xs/4 uppercase tracking-wider text-gray-500">
                  build
                </p>

                <h2 className="mt-2 max-w-2xl text-xl font-medium tracking-tighter text-gray-950 md:text-2xl/8">
                  Create the most compelling job posts
                </h2>

                <p className="mt-2 text-sm/6 text-gray-600">
                  BarelyHR uses artificial intelligence to help you structure
                  the most compelling job posts to attract the best people.
                </p>
              </div>
            </div>
            {/* job posts */}

            {/* power user */}
            <div className="col-span-12 overflow-hidden rounded-lg bg-white shadow-sm ring-[1px] ring-gray-950/5 xl:col-span-4 xl:rounded-bl-[2rem]">
              <div className="max-h-96 w-max overflow-hidden p-10">
                <Keyboard />
              </div>

              <div className="p-10">
                <p className="font-mono text-xs/4 uppercase tracking-wider text-gray-500">
                  move faster
                </p>

                <h2 className="mt-2 max-w-2xl text-xl font-medium tracking-tighter text-gray-950 md:text-2xl/8">
                  Built for power users
                </h2>

                <p className="mt-2 text-sm/6 text-gray-600">
                  Move around quicker with shortcuts for literally every task
                  that needs to get done.
                </p>
              </div>
            </div>
            {/* power user */}

            {/* source */}
            <div className="col-span-12 overflow-hidden rounded-lg bg-white shadow-sm ring-[1px] ring-gray-950/5 md:col-span-6 md:rounded-bl-[2rem] xl:col-span-4 xl:rounded-bl-lg">
              <div className="max-h-96 w-full overflow-hidden [mask-image:linear-gradient(black_80%,transparent)]">
                <Source />
              </div>

              <div className="p-10">
                <p className="font-mono text-xs/4 uppercase tracking-wider text-gray-500">
                  source
                </p>

                <h2 className="mt-2 max-w-2xl text-xl font-medium tracking-tighter text-gray-950 md:text-2xl/8">
                  Get the furthest reach
                </h2>

                <p className="mt-2 text-sm/6 text-gray-600">
                  Once your listing is created we'll find the most popular job
                  boards relevant to your posting.
                </p>
              </div>
            </div>
            {/* source */}

            {/* global */}
            <div className="col-span-12 rounded-lg rounded-b-[2rem] bg-white shadow-sm ring-[1px] ring-gray-950/5 md:col-span-6 md:rounded-bl-lg md:rounded-br-[2rem] xl:col-span-4">
              <div className="flex max-h-96 w-full items-center overflow-hidden [mask-image:linear-gradient(black_80%,transparent)]">
                <Global />
              </div>

              <div className="p-10">
                <p className="font-mono text-xs/4 uppercase tracking-wider text-gray-500">
                  remote-friendly
                </p>

                <h2 className="mt-2 max-w-2xl text-xl font-medium tracking-tighter text-gray-950 md:text-2xl/8">
                  Hire globally
                </h2>

                <p className="mt-2 text-sm/6 text-gray-600">
                  BarelyHR is packed with features to guide you in hiring
                  candidates globally.
                </p>
              </div>
            </div>
            {/* global */}
          </div>
        </div>
      </section>
      {/* end of hiring */}

      {/* onboarding */}
      <section className="bg-gray-100 px-3">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#0F1929] p-10 py-32">
          {/* gradient */}
          <div className="absolute -top-16 right-20 h-32 w-[30rem] rounded-full bg-[linear-gradient(125deg,var(--tw-gradient-stops))] from-[#4A322E] from-[28%] to-[#501D45] blur-3xl"></div>
          {/* gradient */}

          <div className="mx-auto w-full max-w-screen-xl">
            <p className="font-mono text-xs/4 uppercase tracking-wider text-gray-300">
              onboarding
            </p>

            <h2 className="mt-6 max-w-2xl text-5xl font-medium tracking-tighter text-white md:text-6xl">
              Employee engagement has never been easier.
            </h2>
          </div>

          <div className="mx-auto my-16 w-full max-w-screen-xl">
            <div className="grid grid-cols-12 gap-4">
              {/* training */}
              <div className="col-span-12 overflow-hidden rounded-lg rounded-tl-[2rem] rounded-tr-[2rem] bg-[#1D2A39] ring-[1px] ring-white/15 md:col-span-6 md:rounded-tr-lg xl:col-span-8">
                <div className="h-96 w-[68rem] pl-5 pt-5">
                  <div className="flex flex-shrink-0 items-start justify-start gap-10">
                    {/* left */}
                    <div className="w-72 border-x border-white/15 px-5 [mask-image:linear-gradient(transparent,black_10%,black_90%,transparent)]">
                      <p className="truncate text-sm font-medium text-gray-400">
                        Introduction
                      </p>

                      <div className="mt-5 space-y-3 border-l border-white/15">
                        <p className="truncate pl-5 text-sm text-gray-500">
                          Overview
                        </p>
                        <p className="-ml-px truncate border-l pl-5 text-sm text-white">
                          Importance of safety in the workplace
                        </p>
                        <p className="truncate pl-5 text-sm text-gray-500">
                          Introduction to OSHA (Occupation)
                        </p>
                        <p className="truncate pl-5 text-sm text-gray-500">
                          Basic safety principles and practises
                        </p>
                      </div>

                      <p className="mt-5 truncate text-sm font-medium text-white">
                        Regulations and Compliance
                      </p>

                      <div className="mt-5 space-y-3 border-l border-white/15">
                        <p className="truncate pl-5 text-sm text-gray-500">
                          Overview
                        </p>
                        <p className="truncate pl-5 text-sm text-gray-500">
                          Importance of safety in the workplace
                        </p>
                        <p className="truncate pl-5 text-sm text-gray-500">
                          Introduction to OSHA (Occupation)
                        </p>
                        <p className="truncate pl-5 text-sm text-gray-500">
                          Basic safety principles and practises
                        </p>
                      </div>
                    </div>
                    {/* left */}

                    {/* right */}
                    <div className="relative z-20 w-full pl-5 pt-3 [mask-image:linear-gradient(transparent,black_10%)]">
                      <p className="font-mono text-xs/4 uppercase tracking-[0.2em] text-gray-300">
                        Introduction
                      </p>

                      <h2 className="mt-1 text-2xl font-medium tracking-tighter text-white">
                        Importance of Safety in the Workplace
                      </h2>

                      <p className="mt-3 max-w-xl text-sm/6 text-gray-500">
                        To understand the significance of workplace safety and
                        its impact on ensuring organization as a whole.
                      </p>

                      <div className="mt-10 flex w-full border-t border-white/15">
                        <div className="w-full border-r border-white/15 pt-5">
                          <p className="font-mono text-xs/4 uppercase tracking-[0.15em] text-gray-300">
                            Duration
                          </p>

                          <p className="mt-1 text-sm/6 font-medium text-white">
                            20m
                          </p>
                        </div>

                        <div className="w-full border-r border-white/15 pl-5 pt-5">
                          <p className="font-mono text-xs/4 uppercase tracking-[0.15em] text-gray-300">
                            Last updated
                          </p>

                          <p className="mt-1 text-sm/6 text-white">
                            March 15, 2024
                          </p>
                        </div>
                      </div>

                      <div className="mt-10">
                        <div className="relative h-60 w-full overflow-hidden rounded-2xl [mask-image:linear-gradient(black,transparent_30%)]">
                          <Image
                            fill
                            src={
                              "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            }
                            className="w-full object-cover"
                            alt="Video Poster"
                          />
                        </div>
                      </div>
                    </div>
                    {/* right */}
                  </div>
                </div>

                <div className="p-10">
                  <p className="font-mono text-xs/4 uppercase tracking-wider text-gray-300">
                    training
                  </p>

                  <h2 className="mt-2 max-w-2xl text-xl font-medium tracking-tighter text-white md:text-2xl/8">
                    Get new employees up to speed
                  </h2>

                  <p className="mt-2 max-w-xl text-sm/6 text-gray-500">
                    BarelyHR will help you set employees up for success. Using
                    artificial intelligence, BarelyHR will generate full
                    training programs for new employees to complete.
                  </p>
                </div>
              </div>
              {/* training */}

              {/* interogations */}
              <div className="col-span-12 overflow-hidden rounded-lg rounded-tr-lg bg-[#1D2A39] ring-[1px] ring-white/15 md:col-span-6 md:rounded-tr-[2rem] xl:col-span-4">
                <div className="relative h-96 w-full overflow-hidden pt-5">
                  {/* center cube */}
                  <div className="absolute left-1/2 top-1/2 z-20 -translate-x-[50%] -translate-y-[50%]">
                    <div className="overflow-hidden rounded-2xl bg-gradient-to-b from-white/30 to-white/5 p-1.5 ring-[1px] ring-white/15 backdrop-blur-sm">
                      <div className="flex items-center justify-center rounded-[calc(1rem-0.375rem)] border border-white/10 p-8 text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-9"
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
                  {/* center cube */}

                  <div className="relative flex w-full items-center justify-center whitespace-nowrap">
                    <HorizontalDots className="text-white/15" />
                    <div className="absolute left-20 rounded-full bg-gradient-to-b from-[#303D4B] to-[#1F2C3B] px-3 py-1.5 ring-[1px] ring-inset ring-white/15">
                      <div className="flex items-center justify-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 256 193"
                        >
                          <path
                            fill="#4285f4"
                            d="M58.182 192.05V93.14L27.507 65.077 0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z"
                          />
                          <path
                            fill="#34a853"
                            d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837-27.026 25.798z"
                          />
                          <path
                            fill="#ea4335"
                            d="M58.182 93.14l-4.174-38.647 4.174-36.989L128 69.868l69.818-52.364 4.669 34.992-4.669 40.644L128 145.504z"
                          />
                          <path
                            fill="#fbbc04"
                            d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z"
                          />
                          <path
                            fill="#c5221f"
                            d="M0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z"
                          />
                        </svg>
                        <p className="text-sm/6 text-gray-300">Gmail</p>
                      </div>
                    </div>
                  </div>

                  <HorizontalDots className="text-white/5" />

                  <div className="relative flex w-full items-center justify-center whitespace-nowrap">
                    <HorizontalDots className="text-white/15" />
                    <div className="absolute right-8 rounded-full bg-gradient-to-b from-[#303D4B] to-[#1F2C3B] px-3 py-1.5 ring-[1px] ring-inset ring-white/15">
                      <div className="flex items-center justify-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 256 239"
                        >
                          <defs>
                            <linearGradient
                              id="b"
                              x1="17.372%"
                              x2="82.628%"
                              y1="-6.51%"
                              y2="106.51%"
                            >
                              <stop offset="0%" stopColor="#5a62c3" />
                              <stop offset="50%" stopColor="#4d55bd" />
                              <stop offset="100%" stopColor="#3940ab" />
                            </linearGradient>
                            <path
                              id="a"
                              d="M136.93 64.476v12.8a32.7 32.7 0 01-5.953-.952 38.7 38.7 0 01-26.79-22.742h21.848c6.008.022 10.872 4.887 10.895 10.894"
                            />
                          </defs>
                          <path
                            fill="#5059c9"
                            d="M178.563 89.302h66.125c6.248 0 11.312 5.065 11.312 11.312v60.231c0 22.96-18.613 41.574-41.573 41.574h-.197c-22.96.003-41.576-18.607-41.579-41.568V95.215a5.91 5.91 0 015.912-5.913"
                          />
                          <circle
                            cx={223.256}
                            cy={50.605}
                            r={26.791}
                            fill="#5059c9"
                          />
                          <circle
                            cx={139.907}
                            cy={38.698}
                            r={38.698}
                            fill="#7b83eb"
                          />
                          <path
                            fill="#7b83eb"
                            d="M191.506 89.302H82.355c-6.173.153-11.056 5.276-10.913 11.449v68.697c-.862 37.044 28.445 67.785 65.488 68.692 37.043-.907 66.35-31.648 65.489-68.692v-68.697c.143-6.173-4.74-11.296-10.913-11.449"
                          />
                          <path
                            d="M142.884 89.302v96.268a10.96 10.96 0 01-6.787 10.062c-1.3.55-2.697.833-4.108.833H76.68c-.774-1.965-1.488-3.93-2.084-5.953a72.5 72.5 0 01-3.155-21.076v-68.703c-.143-6.163 4.732-11.278 10.895-11.43z"
                            opacity={0.1}
                          />
                          <path
                            d="M136.93 89.302v102.222c0 1.411-.283 2.808-.833 4.108a10.96 10.96 0 01-10.062 6.787H79.48c-1.012-1.965-1.965-3.93-2.798-5.954a59 59 0 01-2.084-5.953 72.5 72.5 0 01-3.155-21.076v-68.703c-.143-6.163 4.732-11.278 10.895-11.43z"
                            opacity={0.2}
                          />
                          <path
                            d="M136.93 89.302v90.315c-.045 5.998-4.896 10.85-10.895 10.895H74.597a72.5 72.5 0 01-3.155-21.076v-68.703c-.143-6.163 4.732-11.278 10.895-11.43z"
                            opacity={0.2}
                          />
                          <path
                            d="M130.977 89.302v90.315c-.046 5.998-4.897 10.85-10.895 10.895H74.597a72.5 72.5 0 01-3.155-21.076v-68.703c-.143-6.163 4.732-11.278 10.895-11.43z"
                            opacity={0.2}
                          />
                          <path
                            d="M142.884 58.523v18.753c-1.012.06-1.965.12-2.977.12s-1.965-.06-2.977-.12a32.7 32.7 0 01-5.953-.952 38.7 38.7 0 01-26.791-22.742 33 33 0 01-1.905-5.954h29.708c6.007.023 10.872 4.887 10.895 10.895"
                            opacity={0.1}
                          />
                          <use href="#a" opacity={0.2} />
                          <use href="#a" opacity={0.2} />
                          <path
                            d="M130.977 64.476v11.848a38.7 38.7 0 01-26.791-22.743h15.896c6.008.023 10.872 4.888 10.895 10.895"
                            opacity={0.2}
                          />
                          <path
                            fill="url(#b)"
                            d="M10.913 53.581h109.15c6.028 0 10.914 4.886 10.914 10.913v109.151c0 6.027-4.886 10.913-10.913 10.913H10.913C4.886 184.558 0 179.672 0 173.645V64.495C0 58.466 4.886 53.58 10.913 53.58"
                          />
                          <path
                            fill="#fff"
                            d="M94.208 95.125h-21.82v59.416H58.487V95.125H36.769V83.599h57.439z"
                          />
                        </svg>
                        <p className="text-sm/6 text-gray-300">
                          Microsoft Team
                        </p>
                      </div>
                    </div>
                  </div>

                  <HorizontalDots className="text-white/5" />

                  <div className="relative flex w-full items-center justify-center whitespace-nowrap">
                    <HorizontalDots className="text-white/15" />
                    <div className="absolute left-5 rounded-full bg-gradient-to-b from-[#303D4B] to-[#1F2C3B] px-3 py-1.5 ring-[1px] ring-inset ring-white/15">
                      <div className="flex items-center justify-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 256 256"
                        >
                          <path
                            fill="#fff"
                            d="M195.368 60.632H60.632v134.736h134.736z"
                          />
                          <path
                            fill="#ea4335"
                            d="M195.368 256L256 195.368l-30.316-5.172-30.316 5.172-5.533 27.73z"
                          />
                          <path
                            fill="#188038"
                            d="M0 195.368v40.421C0 246.956 9.044 256 20.21 256h40.422l6.225-30.316-6.225-30.316-33.033-5.172z"
                          />
                          <path
                            fill="#1967d2"
                            d="M256 60.632V20.21C256 9.044 246.956 0 235.79 0h-40.422q-5.532 22.554-5.533 33.196 0 10.641 5.533 27.436 20.115 5.76 30.316 5.76T256 60.631"
                          />
                          <path
                            fill="#fbbc04"
                            d="M256 60.632h-60.632v134.736H256z"
                          />
                          <path
                            fill="#34a853"
                            d="M195.368 195.368H60.632V256h134.736z"
                          />
                          <path
                            fill="#4285f4"
                            d="M195.368 0H20.211C9.044 0 0 9.044 0 20.21v175.158h60.632V60.632h134.736z"
                          />
                          <path
                            fill="#4285f4"
                            d="M88.27 165.154c-5.036-3.402-8.523-8.37-10.426-14.94l11.689-4.816q1.59 6.063 5.558 9.398c2.627 2.223 5.827 3.318 9.566 3.318q5.734 0 9.852-3.487c2.746-2.324 4.127-5.288 4.127-8.875q0-5.508-4.345-8.994c-2.897-2.324-6.535-3.486-10.88-3.486h-6.754v-11.57h6.063q5.608 0 9.448-3.033c2.56-2.02 3.84-4.783 3.84-8.303 0-3.132-1.145-5.625-3.435-7.494-2.29-1.87-5.188-2.813-8.708-2.813-3.436 0-6.164.91-8.185 2.745a16.1 16.1 0 00-4.413 6.754l-11.57-4.817c1.532-4.345 4.345-8.185 8.471-11.503s9.398-4.985 15.798-4.985c4.733 0 8.994.91 12.767 2.745 3.772 1.836 6.736 4.379 8.875 7.613 2.14 3.25 3.2 6.888 3.2 10.93 0 4.126-.993 7.613-2.98 10.476s-4.43 5.052-7.327 6.585v.69a22.25 22.25 0 019.398 7.327c2.442 3.284 3.672 7.208 3.672 11.79 0 4.58-1.163 8.673-3.487 12.26-2.324 3.588-5.54 6.417-9.617 8.472-4.092 2.055-8.69 3.1-13.793 3.1-5.912.016-11.369-1.685-16.405-5.087m71.797-58.005l-12.833 9.28-6.417-9.734 23.023-16.607h8.825v78.333h-12.598z"
                          />
                        </svg>

                        <p className="text-sm/6 text-gray-300">
                          Google Calendar
                        </p>
                      </div>
                    </div>
                  </div>

                  <HorizontalDots className="text-white/5" />

                  <div className="relative flex w-full items-center justify-center whitespace-nowrap">
                    <HorizontalDots className="text-white/15" />
                    <div className="absolute right-10 rounded-full bg-gradient-to-b from-[#303D4B] to-[#1F2C3B] px-3 py-1.5 ring-[1px] ring-inset ring-white/15">
                      <div className="flex items-center justify-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 199"
                          className="h-5 w-5"
                        >
                          <path
                            fill="#5865f2"
                            d="M216.856 16.597A208.5 208.5 0 00164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046q-29.538-4.442-58.533 0c-1.832-4.4-4.55-9.933-6.846-14.046a207.8 207.8 0 00-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161 161 0 0079.735 175.3a136.4 136.4 0 01-21.846-10.632 109 109 0 005.356-4.237c42.122 19.702 87.89 19.702 129.51 0a132 132 0 005.355 4.237 136 136 0 01-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36M85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2 23.236 11.804 23.015 26.2c.02 14.375-10.148 26.18-23.015 26.18m85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18"
                          />
                        </svg>

                        <p className="text-sm/6 text-gray-300">Discord</p>
                      </div>
                    </div>
                  </div>

                  <HorizontalDots className="text-white/5" />

                  <div className="relative flex w-full items-center justify-center whitespace-nowrap">
                    <HorizontalDots className="text-white/15" />
                    <div className="absolute left-14 rounded-full bg-gradient-to-b from-[#303D4B] to-[#1F2C3B] px-3 py-1.5 ring-[1px] ring-inset ring-white/15">
                      <div className="flex items-center justify-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 128 128"
                        >
                          <path
                            fill="#de1c59"
                            d="M27.255 80.719c0 7.33-5.978 13.317-13.309 13.317S.63 88.049.63 80.719s5.987-13.317 13.317-13.317h13.309zm6.709 0c0-7.33 5.987-13.317 13.317-13.317s13.317 5.986 13.317 13.317v33.335c0 7.33-5.986 13.317-13.317 13.317-7.33 0-13.317-5.987-13.317-13.317zm0 0"
                          />
                          <path
                            fill="#35c5f0"
                            d="M47.281 27.255c-7.33 0-13.317-5.978-13.317-13.309S39.951.63 47.281.63s13.317 5.987 13.317 13.317v13.309zm0 6.709c7.33 0 13.317 5.987 13.317 13.317s-5.986 13.317-13.317 13.317H13.946C6.616 60.598.63 54.612.63 47.281c0-7.33 5.987-13.317 13.317-13.317zm0 0"
                          />
                          <path
                            fill="#2eb57d"
                            d="M100.745 47.281c0-7.33 5.978-13.317 13.309-13.317s13.317 5.987 13.317 13.317-5.987 13.317-13.317 13.317h-13.309zm-6.709 0c0 7.33-5.987 13.317-13.317 13.317s-13.317-5.986-13.317-13.317V13.946C67.402 6.616 73.388.63 80.719.63c7.33 0 13.317 5.987 13.317 13.317zm0 0"
                          />
                          <path
                            fill="#ebb02e"
                            d="M80.719 100.745c7.33 0 13.317 5.978 13.317 13.309s-5.987 13.317-13.317 13.317-13.317-5.987-13.317-13.317v-13.309zm0-6.709c-7.33 0-13.317-5.987-13.317-13.317s5.986-13.317 13.317-13.317h33.335c7.33 0 13.317 5.986 13.317 13.317 0 7.33-5.987 13.317-13.317 13.317zm0 0"
                          />
                        </svg>

                        <p className="text-sm/6 text-gray-300">Slack</p>
                      </div>
                    </div>
                  </div>

                  <HorizontalDots className="text-white/5" />

                  <div className="relative flex w-full items-center justify-center whitespace-nowrap">
                    <HorizontalDots className="text-white/15" />
                    <div className="absolute right-10 rounded-full bg-gradient-to-b from-[#303D4B] to-[#1F2C3B] px-3 py-1.5 ring-[1px] ring-inset ring-white/15">
                      <div className="flex items-center justify-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 256 250"
                        >
                          <rect
                            width={256}
                            height={249.6}
                            fill="#470137"
                            rx={42.5}
                          />
                          <path
                            fill="#ff61f6"
                            d="M134.578 65.64l-31.943 52.723 34.175 55.985c.22.392.281.852.172 1.288-.053.186-.167.232-.342.239l-.194-.003-.236-.006c-.128 0-.271.006-.43.032h-24.64l-.484-.008c-1.328-.035-2.285-.225-2.868-1.199a3292 3292 0 00-6.87-13.309 470 470 0 00-6.34-11.767l-.958-1.714a783 783 0 01-7.642-13.91h-.172a532 532 0 01-7.127 13.738q-3.695 6.87-7.299 13.653a608 608 0 01-7.384 13.481c-.405.91-1.078 1.1-2.015 1.131l-.39.006H38.064l-.102.003-.336.03c-.187.011-.299-.029-.335-.311a1.73 1.73 0 01.258-1.202l33.144-54.44-32.286-54.61q-.514-.684-.172-1.116a1.25 1.25 0 011.031-.43H63.48a3.6 3.6 0 011.546.258c.41.233.763.556 1.03.945q3.091 6.87 6.87 13.738a737 737 0 007.642 13.567 192 192 0 017.127 13.567h.172a507 507 0 016.955-13.738q3.518-6.698 7.212-13.482a621 621 0 007.127-13.48c.132-.424.368-.808.687-1.117a2.5 2.5 0 011.374-.258h22.497a.984.984 0 01.95 1.634zm50.47 112.473l-1.184.013a53.2 53.2 0 01-22.927-4.808 36.45 36.45 0 01-16.057-14.512q-5.687-9.445-5.835-23.535l-.004-.765a44.84 44.84 0 015.84-22.497 42.87 42.87 0 0116.412-16.166l.589-.32q11.16-6.183 26.962-6.183l.46.005.526.017.59.026.656.038 1.102.078 1.248.1.913.08V55.852q0-1.201 1.03-1.202h21.639a.91.91 0 011.03 1.03v101.495q0 2.557.198 5.504l.32 4.455.17 2.577a1.775 1.775 0 01-1.031 1.718 85.2 85.2 0 01-17.345 5.151 93 93 0 01-15.302 1.533m9.291-21.282v-46.883a17 17 0 00-2.833-.515 34 34 0 00-3.521-.172 26.5 26.5 0 00-12.021 2.748 23.5 23.5 0 00-9.016 7.9q-3.401 4.974-3.517 12.99l-.004.577a30.3 30.3 0 001.803 10.99 20.9 20.9 0 004.81 7.557 18.3 18.3 0 007.212 4.293 28.3 28.3 0 008.844 1.375q2.403 0 4.465-.173a18.4 18.4 0 003.248-.54z"
                          />
                        </svg>

                        <p className="text-sm/6 text-gray-300">
                          Adobe Creative Cloud
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-10">
                  <p className="font-mono text-xs/4 uppercase tracking-wider text-gray-300">
                    Integrations
                  </p>

                  <h2 className="mt-2 max-w-2xl text-xl font-medium tracking-tighter text-white md:text-2xl/8">
                    Connect powerful tools
                  </h2>

                  <p className="mt-2 max-w-xl text-sm/6 text-gray-500">
                    BarelyHR connects with over 150 integrations right out of
                    the box.
                  </p>
                </div>
              </div>
              {/* interogations */}

              {/* 1:1 meetings */}
              <div className="col-span-4"></div>
              {/* 1:1 meetings */}

              {/* engagement */}
              <div className="col-span-8"></div>
              {/* engagement */}
            </div>
          </div>
        </div>
      </section>
      {/* onboarding */}

      {/* testimonial */}
      <section className="py-32">
        <div
          ref={topContRef}
          className="mx-auto w-full max-w-screen-xl px-5 xl:px-0"
        >
          <p className="font-mono text-xs/4 uppercase tracking-wider text-gray-500">
            what everyone is saying
          </p>

          <h2 className="mt-2 text-5xl font-medium tracking-tighter text-gray-950 md:text-6xl">
            Trusted by professionals
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          ref={containerRef}
          className="scroll mt-5 flex snap-x snap-mandatory gap-8 overflow-x-auto overscroll-x-contain px-5 [--scroll-padding:calc((100vw-1280px)/2)] [scrollbar-width:none] xl:px-[var(--scroll-padding)]"
        >
          {testimonials.map(({ name, content, position, image }, idx) => (
            <TestimonialCard
              key={idx}
              ref={(el) => {
                itemRefs.current[idx] = el;
              }}
              root={containerRef}
              getItemPosition={() => getItemPosition(idx)}
              name={name}
              content={content}
              position={position}
              image={image}
            />
          ))}
        </motion.div>

        <div className="mx-auto mt-16 w-full max-w-screen-xl px-5 xl:px-0">
          <div className="flex justify-between">
            <div className="">
              <p className="max-w-sm text-sm/7 text-gray-600">
                Join professionals who trust BarelyHR for hiring and onboarding
                new employees.
              </p>

              <div className="mt-2">
                <a
                  className="inline-flex items-center gap-2 text-sm/6 font-medium text-pink-600"
                  href="#"
                >
                  Get started{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="hidden gap-5 md:flex">
              <button className="flex size-12 items-center justify-center rounded-full p-3 text-gray-950 shadow-sm ring-[1px] ring-gray-950/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5"
                >
                  <path d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" />
                </svg>
              </button>
              <button className="flex size-12 items-center justify-center rounded-full p-3 text-gray-950 shadow-sm ring-[1px] ring-gray-950/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5"
                >
                  <path d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* testimonial */}
    </main>
  );
}

interface IHorizontalDots extends ComponentProps<"div"> {
  length?: number;
}

const HorizontalDots = ({ className, length = 100 }: IHorizontalDots) => {
  return (
    <div
      className={cn(
        className,
        "-mt-2 text-lg/none leading-10 tracking-[0.4em]",
      )}
    >
      {Array(length)
        .fill(0)
        .map((_, idx) => ".")}
    </div>
  );
};

interface ITestimonialCard extends ComponentProps<"div"> {
  image: string;
  content: string;
  name: string;
  position: string;
  root: RefObject<HTMLElement>;
  getItemPosition: () => number | null;
}

const TestimonialCard = forwardRef<HTMLDivElement, ITestimonialCard>(
  ({ image, content, name, position, root, getItemPosition }, ref) => {
    const [_, forceRender] = useState(false);
    const d = useMotionValue(getItemPosition() || 0);
    const opacity = useTransform(d, [0, 500], [0.5, 1]);

    function setDelta() {
      d.set(getItemPosition() || 0);
    }

    useEffect(() => {
      forceRender(true);
      setDelta();
    }, []);

    useEffect(() => {
      root?.current?.addEventListener("scroll", setDelta);

      return () => {
        root?.current?.removeEventListener("scroll", setDelta);
      };
    }, [root]);

    return (
      <motion.div
        ref={ref}
        style={{ opacity }}
        className={`item relative m-1 flex aspect-[3/4] w-full flex-shrink-0 snap-center overflow-hidden rounded-3xl bg-gray-950 ring-1 ring-gray-950/10 sm:w-96`}
      >
        <div className="relative w-full sm:h-96 sm:w-96">
          <Image
            fill
            className="aspect-square object-cover [mask-image:linear-gradient(rgb(3_8_7),transparent)]"
            src={image}
            alt={`Image of ${name}`}
          />
        </div>

        <figure className="absolute inset-x-0 bottom-0">
          <blockquote className="px-5 sm:px-10">
            <p className="relative w-full text-base/7 text-white before:absolute before:-left-[1ch] before:content-['“'] md:text-xl/7">
              {content} ”
            </p>
          </blockquote>

          <figcaption className="mt-5 border-t border-white/20 px-5 pb-5 pt-5 sm:bg-gray-950 sm:px-10 sm:pb-10">
            <p className="text-sm/6 text-white">{name}</p>
            <p className="bg-gradient-to-r from-[#FFF1BE] from-[28%] via-[#EE87CB] via-[70%] to-[#b060FF] bg-clip-text text-sm/6 font-medium text-transparent">
              {position}
            </p>
          </figcaption>
        </figure>
      </motion.div>
    );
  },
);

interface IContainerWithPlusCorner extends ComponentProps<"div"> {
  children: ReactNode;
}

const ContainerWithPlusCorner = ({
  children,
  className,
}: IContainerWithPlusCorner) => {
  return (
    <div className={`pointer-events-none relative`}>
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

const Kanban = () => {
  return (
    <div className="flex h-full w-full flex-shrink-0 justify-start gap-3 overflow-hidden">
      {/* cards holder */}
      <div className="flex w-64 flex-shrink-0 flex-col overflow-hidden rounded-xl bg-gray-100 pb-[0.3rem]">
        <p className="mb-[calc(1rem-0.3rem)] mt-4 px-3 text-sm font-medium text-gray-950">
          Applied
        </p>

        <div className="flex flex-1 flex-col gap-1.5 overflow-y-auto p-[0.3rem] pb-[0.1rem]">
          {/* cards */}
          {applied.map(({ name, date, image, match }, idx) => (
            <KandbanCard
              key={idx}
              name={name}
              date={date}
              image={image}
              match={match}
            />
          ))}

          {/* add applicant card */}
          <div className="flex h-[7rem] items-center justify-center rounded-lg border-2 border-dashed border-gray-950/10 bg-transparent p-4">
            <p className="text-sm text-gray-500">Add Applicant</p>
          </div>
          {/* add applicant card */}
          {/* cards */}
        </div>
      </div>
      {/* cards holder */}

      {/* cards holder */}
      <div className="flex w-64 flex-shrink-0 flex-col overflow-hidden rounded-xl bg-gray-100 pb-[0.3rem]">
        <p className="mb-[calc(1rem-0.3rem)] mt-4 px-3 text-sm font-medium text-gray-950">
          Phone screening
        </p>

        <div className="flex flex-1 flex-col gap-1.5 overflow-y-auto p-[0.3rem] pb-[0.1rem]">
          {/* cards */}
          {phoneScreening.map(({ name, date, image, match }, idx) => (
            <KandbanCard
              key={idx}
              name={name}
              date={date}
              image={image}
              match={match}
            />
          ))}

          {/* add applicant card */}
          <div className="flex h-[7rem] items-center justify-center rounded-lg border-2 border-dashed border-gray-950/10 bg-transparent p-4">
            <p className="text-sm text-gray-500">Add Applicant</p>
          </div>
          {/* add applicant card */}
          {/* cards */}
        </div>
      </div>
      {/* cards holder */}

      {/* cards holder */}
      <div className="flex w-64 flex-shrink-0 flex-col overflow-hidden rounded-xl bg-gray-100 pb-[0.3rem]">
        <p className="mb-[calc(1rem-0.3rem)] mt-4 px-3 text-sm font-medium text-gray-950">
          Interview
        </p>

        <div className="flex flex-1 flex-col gap-1.5 overflow-y-auto p-[0.3rem] pb-[0.1rem]">
          {/* cards */}
          {interview.map(({ name, date, image, match }, idx) => (
            <KandbanCard
              key={idx}
              name={name}
              date={date}
              image={image}
              match={match}
            />
          ))}

          {/* add applicant card */}
          <div className="flex h-[7rem] items-center justify-center rounded-lg border-2 border-dashed border-gray-950/10 bg-transparent p-4">
            <p className="text-sm text-gray-500">Add Applicant</p>
          </div>
          {/* add applicant card */}
          {/* cards */}
        </div>
      </div>
      {/* cards holder */}
    </div>
  );
};

const Posts = () => {
  return (
    <div className="-mt-14 flex w-full flex-col gap-1 rounded-xl bg-gray-100 p-1">
      {/* card */}
      <div className="rounded-lg bg-white p-4 shadow ring-[1px] ring-gray-950/5">
        <div className="flex items-center justify-between gap-5">
          <p className="text-base/6 font-medium text-gray-800">
            Design engineer
          </p>

          {/* avatar */}
          <div className="flex items-center justify-start -space-x-2">
            <div className="relative size-7 flex-shrink-0 overflow-hidden rounded-full border-2 border-white">
              <Image
                fill
                className="w-full object-cover"
                src={
                  "https://images.pexels.com/photos/886285/pexels-photo-886285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
                alt={`Image of \$\{name\}`}
              />
            </div>
            <div className="relative size-7 flex-shrink-0 overflow-hidden rounded-full border-2 border-white">
              <Image
                fill
                className="w-full object-cover"
                src={
                  "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
                alt={`Image of \$\{name\}`}
              />
            </div>
            <div className="relative size-7 flex-shrink-0 overflow-hidden rounded-full border-2 border-white">
              <Image
                fill
                className="w-full object-cover"
                src={
                  "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
                alt={`Image of \$\{name\}`}
              />
            </div>
          </div>
          {/* avatar */}
        </div>

        <div className="mt-2 flex items-center justify-start gap-5 text-sm text-gray-800">
          <p>Fulltime</p>
          <p>
            Remote <span className="text-gray-500">(ET - CET)</span>
          </p>
          <p>$254,000 USD</p>
        </div>

        <p className="mt-2 text-sm/6 text-gray-500">45 applicants</p>
      </div>
      {/* card */}

      {/* card */}
      <div className="rounded-lg bg-white p-4 shadow ring-[1px] ring-gray-950/5">
        <div className="flex items-center justify-between gap-5">
          <p className="text-base/6 font-medium text-gray-800">
            Staff engineer
          </p>

          {/* avatar */}
          <div className="flex items-center justify-start -space-x-2">
            <div className="relative size-7 flex-shrink-0 overflow-hidden rounded-full border-2 border-white">
              <Image
                fill
                className="w-full object-cover"
                src={
                  "https://images.pexels.com/photos/886285/pexels-photo-886285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
                alt={`Image of \$\{name\}`}
              />
            </div>
            <div className="relative size-7 flex-shrink-0 overflow-hidden rounded-full border-2 border-white">
              <Image
                fill
                className="w-full object-cover"
                src={
                  "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
                alt={`Image of \$\{name\}`}
              />
            </div>
            <div className="relative size-7 flex-shrink-0 overflow-hidden rounded-full border-2 border-white">
              <Image
                fill
                className="w-full object-cover"
                src={
                  "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
                alt={`Image of \$\{name\}`}
              />
            </div>
          </div>
          {/* avatar */}
        </div>

        <div className="mt-2 flex items-center justify-start gap-5 text-sm text-gray-800">
          <p>Fulltime</p>
          <p>
            Remote <span className="text-gray-500">(ET - CET)</span>
          </p>
          <p>$354,000 USD</p>
        </div>

        <p className="mt-2 text-sm/6 text-gray-500">52 applicants</p>
      </div>
      {/* card */}

      {/* card */}
      <div className="rounded-lg bg-white p-4 shadow ring-[1px] ring-gray-950/5">
        <div className="flex items-center justify-between gap-5">
          <p className="text-base/6 font-medium text-gray-800">
            Visual Designer
          </p>

          {/* avatar */}
          <div className="flex items-center justify-start -space-x-2">
            <div className="relative size-7 flex-shrink-0 overflow-hidden rounded-full border-2 border-white">
              <Image
                fill
                className="w-full object-cover"
                src={
                  "https://images.pexels.com/photos/886285/pexels-photo-886285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
                alt={`Image of \$\{name\}`}
              />
            </div>
            <div className="relative size-7 flex-shrink-0 overflow-hidden rounded-full border-2 border-white">
              <Image
                fill
                className="w-full object-cover"
                src={
                  "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
                alt={`Image of \$\{name\}`}
              />
            </div>
            <div className="relative size-7 flex-shrink-0 overflow-hidden rounded-full border-2 border-white">
              <Image
                fill
                className="w-full object-cover"
                src={
                  "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
                alt={`Image of \$\{name\}`}
              />
            </div>
          </div>
          {/* avatar */}
        </div>

        <div className="mt-2 flex items-center justify-start gap-5 text-sm text-gray-800">
          <p>Fulltime</p>
          <p>
            Remote <span className="text-gray-500">(ET - CET)</span>
          </p>
          <p>$254,000 USD</p>
        </div>

        <p className="mt-2 text-sm/6 text-gray-500">45 applicants</p>
      </div>
      {/* card */}

      {/* card */}
      <div className="rounded-lg bg-white p-4 shadow ring-[1px] ring-gray-950/5">
        <div className="flex items-center justify-between gap-5">
          <p className="text-base/6 font-medium text-gray-800">
            Staff engineer
          </p>

          {/* avatar */}
          <div className="flex items-center justify-start -space-x-2">
            <div className="relative size-7 flex-shrink-0 overflow-hidden rounded-full border-2 border-white">
              <Image
                fill
                className="w-full object-cover"
                src={
                  "https://images.pexels.com/photos/886285/pexels-photo-886285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
                alt={`Image of \$\{name\}`}
              />
            </div>
            <div className="relative size-7 flex-shrink-0 overflow-hidden rounded-full border-2 border-white">
              <Image
                fill
                className="w-full object-cover"
                src={
                  "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
                alt={`Image of \$\{name\}`}
              />
            </div>
            <div className="relative size-7 flex-shrink-0 overflow-hidden rounded-full border-2 border-white">
              <Image
                fill
                className="w-full object-cover"
                src={
                  "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
                alt={`Image of \$\{name\}`}
              />
            </div>
          </div>
          {/* avatar */}
        </div>

        <div className="mt-2 flex items-center justify-start gap-5 text-sm text-gray-800">
          <p>Fulltime</p>
          <p>
            Remote <span className="text-gray-500">(ET - CET)</span>
          </p>
          <p>$354,000 USD</p>
        </div>

        <p className="mt-2 text-sm/6 text-gray-500">52 applicants</p>
      </div>
      {/* card */}
    </div>
  );
};

const Keyboard = () => {
  return (
    <div className="w-full origin-top-left scale-[70%] space-y-4">
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
  );
};

const Source = () => {
  return (
    <div className="relative mx-auto -mt-5 h-[26rem] w-[26rem] scale-110">
      {/* rings */}
      <div className="size-full rounded-full bg-[radial-gradient(circle,_#FFFFFF_40%,_#F8FAFF_100%)] p-14 ring-[1px] ring-gray-950/5">
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

      <div className="absolute right-0 top-44 flex items-center justify-center rounded-full bg-white p-3 shadow-sm ring-[1px] ring-gray-950/10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-10 text-gray-950"
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
  );
};

const Global = () => {
  return (
    <div className="relative mx-auto h-[32rem] w-[32rem] flex-shrink-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 125"
        className="w-full fill-gray-400"
      >
        <circle cx={29.521} cy={80.808} r={0.243} />
        <circle cx={28.782} cy={80.068} r={0.243} />
        <circle cx={29.521} cy={80.068} r={0.243} />
        <circle cx={28.782} cy={79.326} r={0.243} />
        <circle cx={28.782} cy={78.587} r={0.243} />
        <circle cx={29.521} cy={78.587} r={0.243} />
        <circle cx={28.048} cy={77.851} r={0.243} />
        <circle cx={28.784} cy={77.851} r={0.243} />
        <circle cx={29.523} cy={77.851} r={0.243} />
        <circle cx={30.259} cy={77.851} r={0.243} />
        <circle cx={28.784} cy={77.112} r={0.243} />
        <circle cx={29.523} cy={77.112} r={0.243} />
        <circle cx={28.784} cy={76.37} r={0.243} />
        <circle cx={29.523} cy={76.37} r={0.243} />
        <circle cx={30.259} cy={76.37} r={0.243} />
        <circle cx={28.784} cy={75.631} r={0.243} />
        <circle cx={29.523} cy={75.631} r={0.243} />
        <circle cx={30.259} cy={75.631} r={0.243} />
        <circle cx={31.004} cy={75.631} r={0.243} />
        <circle cx={28.784} cy={74.891} r={0.243} />
        <circle cx={29.523} cy={74.891} r={0.243} />
        <circle cx={30.259} cy={74.891} r={0.243} />
        <circle cx={31.005} cy={74.891} r={0.243} />
        <circle cx={31.741} cy={74.891} r={0.243} />
        <circle cx={32.484} cy={74.891} r={0.243} />
        <circle cx={28.784} cy={74.153} r={0.243} />
        <circle cx={29.523} cy={74.153} r={0.243} />
        <circle cx={30.259} cy={74.153} r={0.243} />
        <circle cx={31.005} cy={74.153} r={0.243} />
        <circle cx={31.741} cy={74.153} r={0.243} />
        <circle cx={32.484} cy={74.153} r={0.243} />
        <circle cx={29.523} cy={73.41} r={0.243} />
        <circle cx={30.259} cy={73.41} r={0.243} />
        <circle cx={31.005} cy={73.41} r={0.243} />
        <circle cx={31.741} cy={73.41} r={0.243} />
        <circle cx={32.484} cy={73.41} r={0.243} />
        <circle cx={33.22} cy={73.41} r={0.243} />
        <circle cx={28.784} cy={72.671} r={0.243} />
        <circle cx={29.523} cy={72.671} r={0.243} />
        <circle cx={30.259} cy={72.671} r={0.243} />
        <circle cx={31.005} cy={72.671} r={0.243} />
        <circle cx={31.741} cy={72.671} r={0.243} />
        <circle cx={32.484} cy={72.671} r={0.243} />
        <circle cx={33.22} cy={72.671} r={0.243} />
        <circle cx={33.966} cy={72.671} r={0.243} />
        <circle cx={29.521} cy={71.939} r={0.243} />
        <circle cx={30.256} cy={71.939} r={0.243} />
        <circle cx={31.002} cy={71.939} r={0.243} />
        <circle cx={31.738} cy={71.939} r={0.243} />
        <circle cx={32.481} cy={71.939} r={0.243} />
        <circle cx={33.217} cy={71.939} r={0.243} />
        <circle cx={33.963} cy={71.939} r={0.243} />
        <circle cx={34.699} cy={71.939} r={0.243} />
        <circle cx={29.521} cy={71.201} r={0.243} />
        <circle cx={30.256} cy={71.201} r={0.243} />
        <circle cx={31.002} cy={71.201} r={0.243} />
        <circle cx={31.738} cy={71.201} r={0.243} />
        <circle cx={32.481} cy={71.201} r={0.243} />
        <circle cx={33.217} cy={71.201} r={0.243} />
        <circle cx={33.963} cy={71.201} r={0.243} />
        <circle cx={34.699} cy={71.201} r={0.243} />
        <circle cx={29.521} cy={70.458} r={0.243} />
        <circle cx={30.256} cy={70.458} r={0.243} />
        <circle cx={31.002} cy={70.458} r={0.243} />
        <circle cx={31.738} cy={70.458} r={0.243} />
        <circle cx={32.481} cy={70.458} r={0.243} />
        <circle cx={33.217} cy={70.458} r={0.243} />
        <circle cx={33.963} cy={70.458} r={0.243} />
        <circle cx={34.699} cy={70.458} r={0.243} />
        <circle cx={29.521} cy={69.72} r={0.243} />
        <circle cx={30.256} cy={69.72} r={0.243} />
        <circle cx={31.002} cy={69.72} r={0.243} />
        <circle cx={31.738} cy={69.72} r={0.243} />
        <circle cx={32.481} cy={69.72} r={0.243} />
        <circle cx={33.217} cy={69.72} r={0.243} />
        <circle cx={33.963} cy={69.72} r={0.243} />
        <circle cx={34.699} cy={69.72} r={0.243} />
        <circle cx={35.438} cy={69.72} r={0.243} />
        <circle cx={36.173} cy={69.72} r={0.243} />
        <circle cx={36.919} cy={69.72} r={0.243} />
        <circle cx={29.521} cy={68.98} r={0.243} />
        <circle cx={30.257} cy={68.98} r={0.243} />
        <circle cx={31.003} cy={68.98} r={0.243} />
        <circle cx={31.739} cy={68.98} r={0.243} />
        <circle cx={32.481} cy={68.98} r={0.243} />
        <circle cx={33.217} cy={68.98} r={0.243} />
        <circle cx={33.963} cy={68.98} r={0.243} />
        <circle cx={34.699} cy={68.98} r={0.243} />
        <circle cx={35.438} cy={68.98} r={0.243} />
        <circle cx={36.174} cy={68.98} r={0.243} />
        <circle cx={36.92} cy={68.98} r={0.243} />
        <circle cx={28.046} cy={68.241} r={0.243} />
        <circle cx={28.782} cy={68.241} r={0.243} />
        <circle cx={29.521} cy={68.241} r={0.243} />
        <circle cx={30.257} cy={68.241} r={0.243} />
        <circle cx={31.003} cy={68.241} r={0.243} />
        <circle cx={31.739} cy={68.241} r={0.243} />
        <circle cx={32.481} cy={68.241} r={0.243} />
        <circle cx={33.217} cy={68.241} r={0.243} />
        <circle cx={33.963} cy={68.241} r={0.243} />
        <circle cx={34.699} cy={68.241} r={0.243} />
        <circle cx={35.438} cy={68.241} r={0.243} />
        <circle cx={36.174} cy={68.241} r={0.243} />
        <circle cx={36.92} cy={68.241} r={0.243} />
        <circle cx={28.046} cy={67.499} r={0.243} />
        <circle cx={28.782} cy={67.499} r={0.243} />
        <circle cx={29.521} cy={67.499} r={0.243} />
        <circle cx={30.257} cy={67.499} r={0.243} />
        <circle cx={31.003} cy={67.499} r={0.243} />
        <circle cx={31.739} cy={67.499} r={0.243} />
        <circle cx={32.481} cy={67.499} r={0.243} />
        <circle cx={33.217} cy={67.499} r={0.243} />
        <circle cx={33.963} cy={67.499} r={0.243} />
        <circle cx={34.699} cy={67.499} r={0.243} />
        <circle cx={35.438} cy={67.499} r={0.243} />
        <circle cx={36.174} cy={67.499} r={0.243} />
        <circle cx={36.92} cy={67.499} r={0.243} />
        <circle cx={27.3} cy={66.76} r={0.243} />
        <circle cx={28.046} cy={66.76} r={0.243} />
        <circle cx={28.782} cy={66.76} r={0.243} />
        <circle cx={29.521} cy={66.76} r={0.243} />
        <circle cx={30.257} cy={66.76} r={0.243} />
        <circle cx={31.003} cy={66.76} r={0.243} />
        <circle cx={31.739} cy={66.76} r={0.243} />
        <circle cx={32.481} cy={66.76} r={0.243} />
        <circle cx={33.217} cy={66.76} r={0.243} />
        <circle cx={33.963} cy={66.76} r={0.243} />
        <circle cx={34.699} cy={66.76} r={0.243} />
        <circle cx={35.438} cy={66.76} r={0.243} />
        <circle cx={36.174} cy={66.76} r={0.243} />
        <circle cx={36.92} cy={66.76} r={0.243} />
        <circle cx={37.656} cy={66.76} r={0.243} />
        <circle cx={27.302} cy={66.024} r={0.243} />
        <circle cx={28.048} cy={66.024} r={0.243} />
        <circle cx={28.784} cy={66.024} r={0.243} />
        <circle cx={29.523} cy={66.024} r={0.243} />
        <circle cx={30.259} cy={66.024} r={0.243} />
        <circle cx={31.005} cy={66.024} r={0.243} />
        <circle cx={31.741} cy={66.024} r={0.243} />
        <circle cx={32.483} cy={66.024} r={0.243} />
        <circle cx={33.219} cy={66.024} r={0.243} />
        <circle cx={33.965} cy={66.024} r={0.243} />
        <circle cx={34.701} cy={66.024} r={0.243} />
        <circle cx={35.44} cy={66.024} r={0.243} />
        <circle cx={36.176} cy={66.024} r={0.243} />
        <circle cx={36.922} cy={66.024} r={0.243} />
        <circle cx={37.657} cy={66.024} r={0.243} />
        <circle cx={38.397} cy={66.024} r={0.243} />
        <circle cx={26.566} cy={65.285} r={0.243} />
        <circle cx={27.302} cy={65.285} r={0.243} />
        <circle cx={28.048} cy={65.285} r={0.243} />
        <circle cx={28.784} cy={65.285} r={0.243} />
        <circle cx={29.523} cy={65.285} r={0.243} />
        <circle cx={30.259} cy={65.285} r={0.243} />
        <circle cx={31.005} cy={65.285} r={0.243} />
        <circle cx={31.741} cy={65.285} r={0.243} />
        <circle cx={32.483} cy={65.285} r={0.243} />
        <circle cx={33.219} cy={65.285} r={0.243} />
        <circle cx={33.965} cy={65.285} r={0.243} />
        <circle cx={34.701} cy={65.285} r={0.243} />
        <circle cx={35.44} cy={65.285} r={0.243} />
        <circle cx={36.176} cy={65.285} r={0.243} />
        <circle cx={36.922} cy={65.285} r={0.243} />
        <circle cx={26.566} cy={64.542} r={0.243} />
        <circle cx={27.302} cy={64.542} r={0.243} />
        <circle cx={28.048} cy={64.542} r={0.243} />
        <circle cx={28.784} cy={64.542} r={0.243} />
        <circle cx={29.523} cy={64.542} r={0.243} />
        <circle cx={30.259} cy={64.542} r={0.243} />
        <circle cx={31.005} cy={64.542} r={0.243} />
        <circle cx={31.741} cy={64.542} r={0.243} />
        <circle cx={32.483} cy={64.542} r={0.243} />
        <circle cx={33.219} cy={64.542} r={0.243} />
        <circle cx={33.965} cy={64.542} r={0.243} />
        <circle cx={34.701} cy={64.542} r={0.243} />
        <circle cx={35.44} cy={64.542} r={0.243} />
        <circle cx={49.488} cy={64.542} r={0.243} />
        <circle cx={27.302} cy={63.804} r={0.243} />
        <circle cx={28.048} cy={63.804} r={0.243} />
        <circle cx={28.784} cy={63.804} r={0.243} />
        <circle cx={29.523} cy={63.804} r={0.243} />
        <circle cx={30.259} cy={63.804} r={0.243} />
        <circle cx={31.005} cy={63.804} r={0.243} />
        <circle cx={31.741} cy={63.804} r={0.243} />
        <circle cx={32.483} cy={63.804} r={0.243} />
        <circle cx={33.219} cy={63.804} r={0.243} />
        <circle cx={33.965} cy={63.804} r={0.243} />
        <circle cx={28.049} cy={63.063} r={0.243} />
        <circle cx={28.784} cy={63.063} r={0.243} />
        <circle cx={29.524} cy={63.063} r={0.243} />
        <circle cx={30.26} cy={63.063} r={0.243} />
        <circle cx={31.005} cy={63.063} r={0.243} />
        <circle cx={31.741} cy={63.063} r={0.243} />
        <circle cx={32.484} cy={63.063} r={0.243} />
        <circle cx={33.22} cy={63.063} r={0.243} />
        <circle cx={33.966} cy={63.063} r={0.243} />
        <circle cx={45.05} cy={63.063} r={0.243} />
        <circle cx={46.532} cy={63.063} r={0.243} />
        <circle cx={48.753} cy={63.063} r={0.243} />
        <circle cx={26.566} cy={62.325} r={0.243} />
        <circle cx={27.303} cy={62.325} r={0.243} />
        <circle cx={28.049} cy={62.325} r={0.243} />
        <circle cx={28.784} cy={62.325} r={0.243} />
        <circle cx={29.524} cy={62.325} r={0.243} />
        <circle cx={30.26} cy={62.325} r={0.243} />
        <circle cx={31.005} cy={62.325} r={0.243} />
        <circle cx={31.741} cy={62.325} r={0.243} />
        <circle cx={44.315} cy={62.325} r={0.243} />
        <circle cx={45.05} cy={62.325} r={0.243} />
        <circle cx={45.796} cy={62.325} r={0.243} />
        <circle cx={46.532} cy={62.325} r={0.243} />
        <circle cx={47.271} cy={62.325} r={0.243} />
        <circle cx={48.007} cy={62.325} r={0.243} />
        <circle cx={48.753} cy={62.325} r={0.243} />
        <circle cx={49.489} cy={62.325} r={0.243} />
        <circle cx={25.828} cy={61.583} r={0.243} />
        <circle cx={28.049} cy={61.583} r={0.243} />
        <circle cx={28.784} cy={61.583} r={0.243} />
        <circle cx={29.524} cy={61.583} r={0.243} />
        <circle cx={30.26} cy={61.583} r={0.243} />
        <circle cx={31.005} cy={61.583} r={0.243} />
        <circle cx={43.572} cy={61.583} r={0.243} />
        <circle cx={44.315} cy={61.583} r={0.243} />
        <circle cx={45.05} cy={61.583} r={0.243} />
        <circle cx={45.796} cy={61.583} r={0.243} />
        <circle cx={46.532} cy={61.583} r={0.243} />
        <circle cx={47.271} cy={61.583} r={0.243} />
        <circle cx={48.007} cy={61.583} r={0.243} />
        <circle cx={48.753} cy={61.583} r={0.243} />
        <circle cx={49.489} cy={61.583} r={0.243} />
        <circle cx={25.092} cy={60.844} r={0.243} />
        <circle cx={25.828} cy={60.844} r={0.243} />
        <circle cx={28.784} cy={60.844} r={0.243} />
        <circle cx={31.741} cy={60.844} r={0.243} />
        <circle cx={42.836} cy={60.844} r={0.243} />
        <circle cx={43.572} cy={60.844} r={0.243} />
        <circle cx={44.315} cy={60.844} r={0.243} />
        <circle cx={45.05} cy={60.844} r={0.243} />
        <circle cx={45.796} cy={60.844} r={0.243} />
        <circle cx={46.532} cy={60.844} r={0.243} />
        <circle cx={47.271} cy={60.844} r={0.243} />
        <circle cx={48.007} cy={60.844} r={0.243} />
        <circle cx={48.753} cy={60.844} r={0.243} />
        <circle cx={49.489} cy={60.844} r={0.243} />
        <circle cx={22.871} cy={60.109} r={0.243} />
        <circle cx={23.61} cy={60.109} r={0.243} />
        <circle cx={24.346} cy={60.109} r={0.243} />
        <circle cx={25.092} cy={60.109} r={0.243} />
        <circle cx={42.837} cy={60.109} r={0.243} />
        <circle cx={43.573} cy={60.109} r={0.243} />
        <circle cx={44.315} cy={60.109} r={0.243} />
        <circle cx={45.05} cy={60.109} r={0.243} />
        <circle cx={45.797} cy={60.109} r={0.243} />
        <circle cx={46.533} cy={60.109} r={0.243} />
        <circle cx={47.272} cy={60.109} r={0.243} />
        <circle cx={48.008} cy={60.109} r={0.243} />
        <circle cx={48.754} cy={60.109} r={0.243} />
        <circle cx={49.49} cy={60.109} r={0.243} />
        <circle cx={20.653} cy={59.37} r={0.243} />
        <circle cx={21.389} cy={59.37} r={0.243} />
        <circle cx={22.135} cy={59.37} r={0.243} />
        <circle cx={22.871} cy={59.37} r={0.243} />
        <circle cx={23.61} cy={59.37} r={0.243} />
        <circle cx={24.346} cy={59.37} r={0.243} />
        <circle cx={28.785} cy={59.37} r={0.243} />
        <circle cx={29.524} cy={59.37} r={0.243} />
        <circle cx={30.26} cy={59.37} r={0.243} />
        <circle cx={43.573} cy={59.37} r={0.243} />
        <circle cx={44.315} cy={59.37} r={0.243} />
        <circle cx={45.05} cy={59.37} r={0.243} />
        <circle cx={45.797} cy={59.37} r={0.243} />
        <circle cx={46.533} cy={59.37} r={0.243} />
        <circle cx={47.272} cy={59.37} r={0.243} />
        <circle cx={48.008} cy={59.37} r={0.243} />
        <circle cx={48.754} cy={59.37} r={0.243} />
        <circle cx={49.49} cy={59.37} r={0.243} />
        <circle cx={20.653} cy={58.628} r={0.243} />
        <circle cx={21.389} cy={58.628} r={0.243} />
        <circle cx={22.135} cy={58.628} r={0.243} />
        <circle cx={24.346} cy={58.628} r={0.243} />
        <circle cx={26.567} cy={58.628} r={0.243} />
        <circle cx={27.303} cy={58.628} r={0.243} />
        <circle cx={42.837} cy={58.628} r={0.243} />
        <circle cx={43.573} cy={58.628} r={0.243} />
        <circle cx={44.315} cy={58.628} r={0.243} />
        <circle cx={45.05} cy={58.628} r={0.243} />
        <circle cx={45.797} cy={58.628} r={0.243} />
        <circle cx={46.533} cy={58.628} r={0.243} />
        <circle cx={47.272} cy={58.628} r={0.243} />
        <circle cx={48.008} cy={58.628} r={0.243} />
        <circle cx={48.754} cy={58.628} r={0.243} />
        <circle cx={49.49} cy={58.628} r={0.243} />
        <circle cx={19.175} cy={57.89} r={0.243} />
        <circle cx={19.911} cy={57.89} r={0.243} />
        <circle cx={20.653} cy={57.89} r={0.243} />
        <circle cx={21.389} cy={57.89} r={0.243} />
        <circle cx={43.573} cy={57.89} r={0.243} />
        <circle cx={44.315} cy={57.89} r={0.243} />
        <circle cx={45.05} cy={57.89} r={0.243} />
        <circle cx={45.797} cy={57.89} r={0.243} />
        <circle cx={46.533} cy={57.89} r={0.243} />
        <circle cx={47.272} cy={57.89} r={0.243} />
        <circle cx={48.008} cy={57.89} r={0.243} />
        <circle cx={48.754} cy={57.89} r={0.243} />
        <circle cx={49.49} cy={57.89} r={0.243} />
        <circle cx={18.43} cy={57.149} r={0.243} />
        <circle cx={19.176} cy={57.149} r={0.243} />
        <circle cx={19.912} cy={57.149} r={0.243} />
        <circle cx={20.654} cy={57.149} r={0.243} />
        <circle cx={21.39} cy={57.149} r={0.243} />
        <circle cx={22.136} cy={57.149} r={0.243} />
        <circle cx={26.567} cy={57.149} r={0.243} />
        <circle cx={44.316} cy={57.149} r={0.243} />
        <circle cx={45.052} cy={57.149} r={0.243} />
        <circle cx={45.798} cy={57.149} r={0.243} />
        <circle cx={46.533} cy={57.149} r={0.243} />
        <circle cx={47.272} cy={57.149} r={0.243} />
        <circle cx={48.008} cy={57.149} r={0.243} />
        <circle cx={48.755} cy={57.149} r={0.243} />
        <circle cx={49.49} cy={57.149} r={0.243} />
        <circle cx={17.694} cy={56.411} r={0.243} />
        <circle cx={18.43} cy={56.411} r={0.243} />
        <circle cx={19.176} cy={56.411} r={0.243} />
        <circle cx={19.912} cy={56.411} r={0.243} />
        <circle cx={20.654} cy={56.411} r={0.243} />
        <circle cx={21.39} cy={56.411} r={0.243} />
        <circle cx={22.136} cy={56.411} r={0.243} />
        <circle cx={22.872} cy={56.411} r={0.243} />
        <circle cx={24.347} cy={56.411} r={0.243} />
        <circle cx={25.829} cy={56.411} r={0.243} />
        <circle cx={45.052} cy={56.411} r={0.243} />
        <circle cx={45.798} cy={56.411} r={0.243} />
        <circle cx={46.533} cy={56.411} r={0.243} />
        <circle cx={47.272} cy={56.411} r={0.243} />
        <circle cx={48.008} cy={56.411} r={0.243} />
        <circle cx={48.755} cy={56.411} r={0.243} />
        <circle cx={49.49} cy={56.411} r={0.243} />
        <circle cx={17.694} cy={55.669} r={0.243} />
        <circle cx={18.43} cy={55.669} r={0.243} />
        <circle cx={19.176} cy={55.669} r={0.243} />
        <circle cx={19.912} cy={55.669} r={0.243} />
        <circle cx={20.654} cy={55.669} r={0.243} />
        <circle cx={21.39} cy={55.669} r={0.243} />
        <circle cx={22.136} cy={55.669} r={0.243} />
        <circle cx={22.872} cy={55.669} r={0.243} />
        <circle cx={23.611} cy={55.669} r={0.243} />
        <circle cx={24.347} cy={55.669} r={0.243} />
        <circle cx={25.093} cy={55.669} r={0.243} />
        <circle cx={25.829} cy={55.669} r={0.243} />
        <circle cx={45.052} cy={55.669} r={0.243} />
        <circle cx={45.798} cy={55.669} r={0.243} />
        <circle cx={46.533} cy={55.669} r={0.243} />
        <circle cx={47.272} cy={55.669} r={0.243} />
        <circle cx={48.008} cy={55.669} r={0.243} />
        <circle cx={48.755} cy={55.669} r={0.243} />
        <circle cx={49.49} cy={55.669} r={0.243} />
        <circle cx={17.694} cy={54.93} r={0.243} />
        <circle cx={18.43} cy={54.93} r={0.243} />
        <circle cx={19.176} cy={54.93} r={0.243} />
        <circle cx={19.912} cy={54.93} r={0.243} />
        <circle cx={20.654} cy={54.93} r={0.243} />
        <circle cx={21.39} cy={54.93} r={0.243} />
        <circle cx={22.136} cy={54.93} r={0.243} />
        <circle cx={22.872} cy={54.93} r={0.243} />
        <circle cx={23.611} cy={54.93} r={0.243} />
        <circle cx={24.347} cy={54.93} r={0.243} />
        <circle cx={25.093} cy={54.93} r={0.243} />
        <circle cx={25.829} cy={54.93} r={0.243} />
        <circle cx={26.567} cy={54.93} r={0.243} />
        <circle cx={45.798} cy={54.93} r={0.243} />
        <circle cx={46.533} cy={54.93} r={0.243} />
        <circle cx={47.272} cy={54.93} r={0.243} />
        <circle cx={48.008} cy={54.93} r={0.243} />
        <circle cx={48.755} cy={54.93} r={0.243} />
        <circle cx={49.49} cy={54.93} r={0.243} />
        <circle cx={16.22} cy={54.193} r={0.243} />
        <circle cx={16.956} cy={54.193} r={0.243} />
        <circle cx={17.695} cy={54.193} r={0.243} />
        <circle cx={18.431} cy={54.193} r={0.243} />
        <circle cx={19.177} cy={54.193} r={0.243} />
        <circle cx={19.913} cy={54.193} r={0.243} />
        <circle cx={20.656} cy={54.193} r={0.243} />
        <circle cx={21.392} cy={54.193} r={0.243} />
        <circle cx={22.138} cy={54.193} r={0.243} />
        <circle cx={22.874} cy={54.193} r={0.243} />
        <circle cx={23.612} cy={54.193} r={0.243} />
        <circle cx={24.348} cy={54.193} r={0.243} />
        <circle cx={25.095} cy={54.193} r={0.243} />
        <circle cx={25.83} cy={54.193} r={0.243} />
        <circle cx={26.569} cy={54.193} r={0.243} />
        <circle cx={27.305} cy={54.193} r={0.243} />
        <circle cx={48.757} cy={54.193} r={0.243} />
        <circle cx={49.492} cy={54.193} r={0.243} />
        <circle cx={16.22} cy={53.454} r={0.243} />
        <circle cx={16.956} cy={53.454} r={0.243} />
        <circle cx={17.695} cy={53.454} r={0.243} />
        <circle cx={18.431} cy={53.454} r={0.243} />
        <circle cx={19.177} cy={53.454} r={0.243} />
        <circle cx={19.913} cy={53.454} r={0.243} />
        <circle cx={20.656} cy={53.454} r={0.243} />
        <circle cx={21.392} cy={53.454} r={0.243} />
        <circle cx={22.138} cy={53.454} r={0.243} />
        <circle cx={22.874} cy={53.454} r={0.243} />
        <circle cx={23.612} cy={53.454} r={0.243} />
        <circle cx={24.348} cy={53.454} r={0.243} />
        <circle cx={25.095} cy={53.454} r={0.243} />
        <circle cx={25.83} cy={53.454} r={0.243} />
        <circle cx={26.569} cy={53.454} r={0.243} />
        <circle cx={27.305} cy={53.454} r={0.243} />
        <circle cx={45.053} cy={53.454} r={0.243} />
        <circle cx={45.799} cy={53.454} r={0.243} />
        <circle cx={46.535} cy={53.454} r={0.243} />
        <circle cx={15.475} cy={52.712} r={0.243} />
        <circle cx={16.22} cy={52.712} r={0.243} />
        <circle cx={16.956} cy={52.712} r={0.243} />
        <circle cx={17.695} cy={52.712} r={0.243} />
        <circle cx={18.431} cy={52.712} r={0.243} />
        <circle cx={19.177} cy={52.712} r={0.243} />
        <circle cx={19.913} cy={52.712} r={0.243} />
        <circle cx={20.656} cy={52.712} r={0.243} />
        <circle cx={21.392} cy={52.712} r={0.243} />
        <circle cx={22.138} cy={52.712} r={0.243} />
        <circle cx={22.874} cy={52.712} r={0.243} />
        <circle cx={23.612} cy={52.712} r={0.243} />
        <circle cx={24.348} cy={52.712} r={0.243} />
        <circle cx={25.095} cy={52.712} r={0.243} />
        <circle cx={25.83} cy={52.712} r={0.243} />
        <circle cx={26.569} cy={52.712} r={0.243} />
        <circle cx={27.305} cy={52.712} r={0.243} />
        <circle cx={28.051} cy={52.712} r={0.243} />
        <circle cx={45.053} cy={52.712} r={0.243} />
        <circle cx={45.799} cy={52.712} r={0.243} />
        <circle cx={46.535} cy={52.712} r={0.243} />
        <circle cx={47.274} cy={52.712} r={0.243} />
        <circle cx={49.492} cy={52.712} r={0.243} />
        <circle cx={15.475} cy={51.974} r={0.243} />
        <circle cx={16.22} cy={51.974} r={0.243} />
        <circle cx={16.956} cy={51.974} r={0.243} />
        <circle cx={17.695} cy={51.974} r={0.243} />
        <circle cx={18.431} cy={51.974} r={0.243} />
        <circle cx={19.177} cy={51.974} r={0.243} />
        <circle cx={19.913} cy={51.974} r={0.243} />
        <circle cx={20.656} cy={51.974} r={0.243} />
        <circle cx={21.392} cy={51.974} r={0.243} />
        <circle cx={22.138} cy={51.974} r={0.243} />
        <circle cx={22.874} cy={51.974} r={0.243} />
        <circle cx={23.612} cy={51.974} r={0.243} />
        <circle cx={24.348} cy={51.974} r={0.243} />
        <circle cx={25.095} cy={51.974} r={0.243} />
        <circle cx={25.83} cy={51.974} r={0.243} />
        <circle cx={26.569} cy={51.974} r={0.243} />
        <circle cx={27.305} cy={51.974} r={0.243} />
        <circle cx={28.051} cy={51.974} r={0.243} />
        <circle cx={28.787} cy={51.974} r={0.243} />
        <circle cx={45.053} cy={51.974} r={0.243} />
        <circle cx={45.799} cy={51.974} r={0.243} />
        <circle cx={46.535} cy={51.974} r={0.243} />
        <circle cx={47.274} cy={51.974} r={0.243} />
        <circle cx={48.009} cy={51.974} r={0.243} />
        <circle cx={48.757} cy={51.974} r={0.243} />
        <circle cx={15.475} cy={51.234} r={0.243} />
        <circle cx={16.221} cy={51.234} r={0.243} />
        <circle cx={16.957} cy={51.234} r={0.243} />
        <circle cx={17.696} cy={51.234} r={0.243} />
        <circle cx={18.432} cy={51.234} r={0.243} />
        <circle cx={19.178} cy={51.234} r={0.243} />
        <circle cx={19.914} cy={51.234} r={0.243} />
        <circle cx={20.656} cy={51.234} r={0.243} />
        <circle cx={21.392} cy={51.234} r={0.243} />
        <circle cx={22.138} cy={51.234} r={0.243} />
        <circle cx={22.874} cy={51.234} r={0.243} />
        <circle cx={23.613} cy={51.234} r={0.243} />
        <circle cx={24.349} cy={51.234} r={0.243} />
        <circle cx={25.095} cy={51.234} r={0.243} />
        <circle cx={25.831} cy={51.234} r={0.243} />
        <circle cx={26.57} cy={51.234} r={0.243} />
        <circle cx={27.306} cy={51.234} r={0.243} />
        <circle cx={28.052} cy={51.234} r={0.243} />
        <circle cx={28.788} cy={51.234} r={0.243} />
        <circle cx={29.527} cy={51.234} r={0.243} />
        <circle cx={30.263} cy={51.234} r={0.243} />
        <circle cx={31.009} cy={51.234} r={0.243} />
        <circle cx={47.275} cy={51.234} r={0.243} />
        <circle cx={48.011} cy={51.234} r={0.243} />
        <circle cx={48.757} cy={51.234} r={0.243} />
        <circle cx={49.492} cy={51.234} r={0.243} />
        <circle cx={15.475} cy={50.495} r={0.243} />
        <circle cx={16.221} cy={50.495} r={0.243} />
        <circle cx={16.957} cy={50.495} r={0.243} />
        <circle cx={17.696} cy={50.495} r={0.243} />
        <circle cx={18.432} cy={50.495} r={0.243} />
        <circle cx={19.178} cy={50.495} r={0.243} />
        <circle cx={19.914} cy={50.495} r={0.243} />
        <circle cx={20.656} cy={50.495} r={0.243} />
        <circle cx={21.392} cy={50.495} r={0.243} />
        <circle cx={22.138} cy={50.495} r={0.243} />
        <circle cx={22.874} cy={50.495} r={0.243} />
        <circle cx={23.613} cy={50.495} r={0.243} />
        <circle cx={24.349} cy={50.495} r={0.243} />
        <circle cx={25.095} cy={50.495} r={0.243} />
        <circle cx={25.831} cy={50.495} r={0.243} />
        <circle cx={26.57} cy={50.495} r={0.243} />
        <circle cx={27.306} cy={50.495} r={0.243} />
        <circle cx={28.052} cy={50.495} r={0.243} />
        <circle cx={28.788} cy={50.495} r={0.243} />
        <circle cx={29.527} cy={50.495} r={0.243} />
        <circle cx={30.263} cy={50.495} r={0.243} />
        <circle cx={33.223} cy={50.495} r={0.243} />
        <circle cx={46.536} cy={50.495} r={0.243} />
        <circle cx={47.275} cy={50.495} r={0.243} />
        <circle cx={48.011} cy={50.495} r={0.243} />
        <circle cx={48.757} cy={50.495} r={0.243} />
        <circle cx={49.492} cy={50.495} r={0.243} />
        <circle cx={16.221} cy={49.753} r={0.243} />
        <circle cx={16.957} cy={49.753} r={0.243} />
        <circle cx={17.696} cy={49.753} r={0.243} />
        <circle cx={18.432} cy={49.753} r={0.243} />
        <circle cx={19.178} cy={49.753} r={0.243} />
        <circle cx={19.914} cy={49.753} r={0.243} />
        <circle cx={20.656} cy={49.753} r={0.243} />
        <circle cx={21.392} cy={49.753} r={0.243} />
        <circle cx={22.138} cy={49.753} r={0.243} />
        <circle cx={22.874} cy={49.753} r={0.243} />
        <circle cx={23.613} cy={49.753} r={0.243} />
        <circle cx={24.349} cy={49.753} r={0.243} />
        <circle cx={25.095} cy={49.753} r={0.243} />
        <circle cx={25.831} cy={49.753} r={0.243} />
        <circle cx={26.57} cy={49.753} r={0.243} />
        <circle cx={27.306} cy={49.753} r={0.243} />
        <circle cx={28.052} cy={49.753} r={0.243} />
        <circle cx={28.788} cy={49.753} r={0.243} />
        <circle cx={29.527} cy={49.753} r={0.243} />
        <circle cx={32.487} cy={49.753} r={0.243} />
        <circle cx={33.223} cy={49.753} r={0.243} />
        <circle cx={47.275} cy={49.753} r={0.243} />
        <circle cx={48.011} cy={49.753} r={0.243} />
        <circle cx={48.757} cy={49.753} r={0.243} />
        <circle cx={49.492} cy={49.753} r={0.243} />
        <circle cx={14.739} cy={49.014} r={0.243} />
        <circle cx={15.475} cy={49.014} r={0.243} />
        <circle cx={16.221} cy={49.014} r={0.243} />
        <circle cx={16.957} cy={49.014} r={0.243} />
        <circle cx={17.696} cy={49.014} r={0.243} />
        <circle cx={18.432} cy={49.014} r={0.243} />
        <circle cx={19.178} cy={49.014} r={0.243} />
        <circle cx={19.914} cy={49.014} r={0.243} />
        <circle cx={20.656} cy={49.014} r={0.243} />
        <circle cx={21.392} cy={49.014} r={0.243} />
        <circle cx={22.138} cy={49.014} r={0.243} />
        <circle cx={22.874} cy={49.014} r={0.243} />
        <circle cx={23.613} cy={49.014} r={0.243} />
        <circle cx={24.349} cy={49.014} r={0.243} />
        <circle cx={25.095} cy={49.014} r={0.243} />
        <circle cx={25.831} cy={49.014} r={0.243} />
        <circle cx={26.57} cy={49.014} r={0.243} />
        <circle cx={27.306} cy={49.014} r={0.243} />
        <circle cx={28.052} cy={49.014} r={0.243} />
        <circle cx={28.788} cy={49.014} r={0.243} />
        <circle cx={29.527} cy={49.014} r={0.243} />
        <circle cx={30.263} cy={49.014} r={0.243} />
        <circle cx={31.009} cy={49.014} r={0.243} />
        <circle cx={31.745} cy={49.014} r={0.243} />
        <circle cx={45.054} cy={49.014} r={0.243} />
        <circle cx={46.536} cy={49.014} r={0.243} />
        <circle cx={48.011} cy={49.014} r={0.243} />
        <circle cx={48.757} cy={49.014} r={0.243} />
        <circle cx={49.492} cy={49.014} r={0.243} />
        <circle cx={14.743} cy={48.354} r={0.243} />
        <circle cx={15.479} cy={48.354} r={0.243} />
        <circle cx={16.224} cy={48.354} r={0.243} />
        <circle cx={16.96} cy={48.354} r={0.243} />
        <circle cx={17.699} cy={48.354} r={0.243} />
        <circle cx={18.435} cy={48.354} r={0.243} />
        <circle cx={19.181} cy={48.354} r={0.243} />
        <circle cx={19.917} cy={48.354} r={0.243} />
        <circle cx={20.66} cy={48.354} r={0.243} />
        <circle cx={21.396} cy={48.354} r={0.243} />
        <circle cx={22.142} cy={48.354} r={0.243} />
        <circle cx={22.877} cy={48.354} r={0.243} />
        <circle cx={23.616} cy={48.354} r={0.243} />
        <circle cx={24.352} cy={48.354} r={0.243} />
        <circle cx={25.099} cy={48.354} r={0.243} />
        <circle cx={25.834} cy={48.354} r={0.243} />
        <circle cx={27.309} cy={48.354} r={0.243} />
        <circle cx={28.055} cy={48.354} r={0.243} />
        <circle cx={28.791} cy={48.354} r={0.243} />
        <circle cx={29.53} cy={48.354} r={0.243} />
        <circle cx={30.266} cy={48.354} r={0.243} />
        <circle cx={31.012} cy={48.354} r={0.243} />
        <circle cx={31.748} cy={48.354} r={0.243} />
        <circle cx={32.491} cy={48.354} r={0.243} />
        <circle cx={45.057} cy={48.354} r={0.243} />
        <circle cx={45.803} cy={48.354} r={0.243} />
        <circle cx={46.539} cy={48.354} r={0.243} />
        <circle cx={47.278} cy={48.354} r={0.243} />
        <circle cx={48.76} cy={48.354} r={0.243} />
        <circle cx={49.496} cy={48.354} r={0.243} />
        <circle cx={5.129} cy={47.616} r={0.243} />
        <circle cx={14.003} cy={47.616} r={0.243} />
        <circle cx={14.743} cy={47.616} r={0.243} />
        <circle cx={15.479} cy={47.616} r={0.243} />
        <circle cx={16.224} cy={47.616} r={0.243} />
        <circle cx={16.96} cy={47.616} r={0.243} />
        <circle cx={17.699} cy={47.616} r={0.243} />
        <circle cx={18.435} cy={47.616} r={0.243} />
        <circle cx={19.181} cy={47.616} r={0.243} />
        <circle cx={19.917} cy={47.616} r={0.243} />
        <circle cx={20.66} cy={47.616} r={0.243} />
        <circle cx={21.396} cy={47.616} r={0.243} />
        <circle cx={22.142} cy={47.616} r={0.243} />
        <circle cx={22.877} cy={47.616} r={0.243} />
        <circle cx={23.616} cy={47.616} r={0.243} />
        <circle cx={24.352} cy={47.616} r={0.243} />
        <circle cx={25.099} cy={47.616} r={0.243} />
        <circle cx={25.834} cy={47.616} r={0.243} />
        <circle cx={27.309} cy={47.616} r={0.243} />
        <circle cx={28.055} cy={47.616} r={0.243} />
        <circle cx={28.791} cy={47.616} r={0.243} />
        <circle cx={29.53} cy={47.616} r={0.243} />
        <circle cx={30.266} cy={47.616} r={0.243} />
        <circle cx={31.012} cy={47.616} r={0.243} />
        <circle cx={31.748} cy={47.616} r={0.243} />
        <circle cx={32.491} cy={47.616} r={0.243} />
        <circle cx={45.057} cy={47.616} r={0.243} />
        <circle cx={45.803} cy={47.616} r={0.243} />
        <circle cx={46.539} cy={47.616} r={0.243} />
        <circle cx={49.496} cy={47.616} r={0.243} />
        <circle cx={5.869} cy={46.873} r={0.243} />
        <circle cx={6.604} cy={46.873} r={0.243} />
        <circle cx={14.003} cy={46.873} r={0.243} />
        <circle cx={14.743} cy={46.873} r={0.243} />
        <circle cx={15.479} cy={46.873} r={0.243} />
        <circle cx={16.224} cy={46.873} r={0.243} />
        <circle cx={16.96} cy={46.873} r={0.243} />
        <circle cx={17.699} cy={46.873} r={0.243} />
        <circle cx={18.435} cy={46.873} r={0.243} />
        <circle cx={19.181} cy={46.873} r={0.243} />
        <circle cx={19.917} cy={46.873} r={0.243} />
        <circle cx={20.66} cy={46.873} r={0.243} />
        <circle cx={21.396} cy={46.873} r={0.243} />
        <circle cx={22.142} cy={46.873} r={0.243} />
        <circle cx={22.877} cy={46.873} r={0.243} />
        <circle cx={23.616} cy={46.873} r={0.243} />
        <circle cx={24.352} cy={46.873} r={0.243} />
        <circle cx={28.055} cy={46.873} r={0.243} />
        <circle cx={28.791} cy={46.873} r={0.243} />
        <circle cx={29.53} cy={46.873} r={0.243} />
        <circle cx={30.266} cy={46.873} r={0.243} />
        <circle cx={31.012} cy={46.873} r={0.243} />
        <circle cx={31.748} cy={46.873} r={0.243} />
        <circle cx={45.803} cy={46.873} r={0.243} />
        <circle cx={46.539} cy={46.873} r={0.243} />
        <circle cx={49.496} cy={46.873} r={0.243} />
        <circle cx={7.351} cy={46.135} r={0.243} />
        <circle cx={8.086} cy={46.135} r={0.243} />
        <circle cx={12.521} cy={46.135} r={0.243} />
        <circle cx={13.268} cy={46.135} r={0.243} />
        <circle cx={14.003} cy={46.135} r={0.243} />
        <circle cx={14.743} cy={46.135} r={0.243} />
        <circle cx={15.479} cy={46.135} r={0.243} />
        <circle cx={16.224} cy={46.135} r={0.243} />
        <circle cx={16.96} cy={46.135} r={0.243} />
        <circle cx={17.699} cy={46.135} r={0.243} />
        <circle cx={18.435} cy={46.135} r={0.243} />
        <circle cx={19.181} cy={46.135} r={0.243} />
        <circle cx={19.917} cy={46.135} r={0.243} />
        <circle cx={20.66} cy={46.135} r={0.243} />
        <circle cx={21.396} cy={46.135} r={0.243} />
        <circle cx={22.142} cy={46.135} r={0.243} />
        <circle cx={22.877} cy={46.135} r={0.243} />
        <circle cx={28.055} cy={46.135} r={0.243} />
        <circle cx={28.791} cy={46.135} r={0.243} />
        <circle cx={29.53} cy={46.135} r={0.243} />
        <circle cx={30.266} cy={46.135} r={0.243} />
        <circle cx={31.012} cy={46.135} r={0.243} />
        <circle cx={45.803} cy={46.135} r={0.243} />
        <circle cx={46.539} cy={46.135} r={0.243} />
        <circle cx={5.869} cy={45.395} r={0.243} />
        <circle cx={7.351} cy={45.395} r={0.243} />
        <circle cx={12.522} cy={45.395} r={0.243} />
        <circle cx={13.268} cy={45.395} r={0.243} />
        <circle cx={14.004} cy={45.395} r={0.243} />
        <circle cx={14.743} cy={45.395} r={0.243} />
        <circle cx={15.479} cy={45.395} r={0.243} />
        <circle cx={16.225} cy={45.395} r={0.243} />
        <circle cx={16.96} cy={45.395} r={0.243} />
        <circle cx={17.7} cy={45.395} r={0.243} />
        <circle cx={18.436} cy={45.395} r={0.243} />
        <circle cx={19.182} cy={45.395} r={0.243} />
        <circle cx={19.917} cy={45.395} r={0.243} />
        <circle cx={20.66} cy={45.395} r={0.243} />
        <circle cx={21.396} cy={45.395} r={0.243} />
        <circle cx={22.142} cy={45.395} r={0.243} />
        <circle cx={22.877} cy={45.395} r={0.243} />
        <circle cx={27.31} cy={45.395} r={0.243} />
        <circle cx={28.056} cy={45.395} r={0.243} />
        <circle cx={28.792} cy={45.395} r={0.243} />
        <circle cx={31.013} cy={45.395} r={0.243} />
        <circle cx={48.761} cy={45.395} r={0.243} />
        <circle cx={49.496} cy={45.395} r={0.243} />
        <circle cx={5.13} cy={44.656} r={0.243} />
        <circle cx={5.869} cy={44.656} r={0.243} />
        <circle cx={6.605} cy={44.656} r={0.243} />
        <circle cx={7.351} cy={44.656} r={0.243} />
        <circle cx={8.086} cy={44.656} r={0.243} />
        <circle cx={8.829} cy={44.656} r={0.243} />
        <circle cx={10.311} cy={44.656} r={0.243} />
        <circle cx={11.047} cy={44.656} r={0.243} />
        <circle cx={11.786} cy={44.656} r={0.243} />
        <circle cx={12.522} cy={44.656} r={0.243} />
        <circle cx={13.268} cy={44.656} r={0.243} />
        <circle cx={14.004} cy={44.656} r={0.243} />
        <circle cx={14.743} cy={44.656} r={0.243} />
        <circle cx={15.479} cy={44.656} r={0.243} />
        <circle cx={16.225} cy={44.656} r={0.243} />
        <circle cx={16.96} cy={44.656} r={0.243} />
        <circle cx={17.7} cy={44.656} r={0.243} />
        <circle cx={18.436} cy={44.656} r={0.243} />
        <circle cx={19.182} cy={44.656} r={0.243} />
        <circle cx={19.917} cy={44.656} r={0.243} />
        <circle cx={20.66} cy={44.656} r={0.243} />
        <circle cx={21.396} cy={44.656} r={0.243} />
        <circle cx={22.142} cy={44.656} r={0.243} />
        <circle cx={22.877} cy={44.656} r={0.243} />
        <circle cx={28.056} cy={44.656} r={0.243} />
        <circle cx={28.792} cy={44.656} r={0.243} />
        <circle cx={35.448} cy={44.656} r={0.243} />
        <circle cx={36.184} cy={44.656} r={0.243} />
        <circle cx={48.761} cy={44.656} r={0.243} />
        <circle cx={49.496} cy={44.656} r={0.243} />
        <circle cx={5.13} cy={43.914} r={0.243} />
        <circle cx={5.869} cy={43.914} r={0.243} />
        <circle cx={6.605} cy={43.914} r={0.243} />
        <circle cx={7.351} cy={43.914} r={0.243} />
        <circle cx={8.086} cy={43.914} r={0.243} />
        <circle cx={8.829} cy={43.914} r={0.243} />
        <circle cx={9.565} cy={43.914} r={0.243} />
        <circle cx={10.311} cy={43.914} r={0.243} />
        <circle cx={11.047} cy={43.914} r={0.243} />
        <circle cx={11.786} cy={43.914} r={0.243} />
        <circle cx={12.522} cy={43.914} r={0.243} />
        <circle cx={13.268} cy={43.914} r={0.243} />
        <circle cx={14.004} cy={43.914} r={0.243} />
        <circle cx={14.743} cy={43.914} r={0.243} />
        <circle cx={15.479} cy={43.914} r={0.243} />
        <circle cx={16.225} cy={43.914} r={0.243} />
        <circle cx={16.96} cy={43.914} r={0.243} />
        <circle cx={17.7} cy={43.914} r={0.243} />
        <circle cx={18.436} cy={43.914} r={0.243} />
        <circle cx={19.182} cy={43.914} r={0.243} />
        <circle cx={19.917} cy={43.914} r={0.243} />
        <circle cx={20.66} cy={43.914} r={0.243} />
        <circle cx={21.396} cy={43.914} r={0.243} />
        <circle cx={22.142} cy={43.914} r={0.243} />
        <circle cx={22.877} cy={43.914} r={0.243} />
        <circle cx={27.31} cy={43.914} r={0.243} />
        <circle cx={28.056} cy={43.914} r={0.243} />
        <circle cx={30.267} cy={43.914} r={0.243} />
        <circle cx={34.708} cy={43.914} r={0.243} />
        <circle cx={35.448} cy={43.914} r={0.243} />
        <circle cx={36.184} cy={43.914} r={0.243} />
        <circle cx={48.761} cy={43.914} r={0.243} />
        <circle cx={49.496} cy={43.914} r={0.243} />
        <circle cx={5.869} cy={43.175} r={0.243} />
        <circle cx={6.605} cy={43.175} r={0.243} />
        <circle cx={7.351} cy={43.175} r={0.243} />
        <circle cx={8.086} cy={43.175} r={0.243} />
        <circle cx={8.829} cy={43.175} r={0.243} />
        <circle cx={9.565} cy={43.175} r={0.243} />
        <circle cx={10.311} cy={43.175} r={0.243} />
        <circle cx={11.047} cy={43.175} r={0.243} />
        <circle cx={11.786} cy={43.175} r={0.243} />
        <circle cx={12.522} cy={43.175} r={0.243} />
        <circle cx={13.268} cy={43.175} r={0.243} />
        <circle cx={14.004} cy={43.175} r={0.243} />
        <circle cx={14.743} cy={43.175} r={0.243} />
        <circle cx={15.479} cy={43.175} r={0.243} />
        <circle cx={16.225} cy={43.175} r={0.243} />
        <circle cx={16.96} cy={43.175} r={0.243} />
        <circle cx={17.7} cy={43.175} r={0.243} />
        <circle cx={18.436} cy={43.175} r={0.243} />
        <circle cx={19.182} cy={43.175} r={0.243} />
        <circle cx={19.917} cy={43.175} r={0.243} />
        <circle cx={20.66} cy={43.175} r={0.243} />
        <circle cx={21.396} cy={43.175} r={0.243} />
        <circle cx={22.142} cy={43.175} r={0.243} />
        <circle cx={22.877} cy={43.175} r={0.243} />
        <circle cx={23.617} cy={43.175} r={0.243} />
        <circle cx={26.574} cy={43.175} r={0.243} />
        <circle cx={29.531} cy={43.175} r={0.243} />
        <circle cx={30.267} cy={43.175} r={0.243} />
        <circle cx={34.708} cy={43.175} r={0.243} />
        <circle cx={35.448} cy={43.175} r={0.243} />
        <circle cx={36.184} cy={43.175} r={0.243} />
        <circle cx={49.496} cy={43.175} r={0.243} />
        <circle cx={6.607} cy={42.438} r={0.243} />
        <circle cx={7.353} cy={42.438} r={0.243} />
        <circle cx={8.088} cy={42.438} r={0.243} />
        <circle cx={8.831} cy={42.438} r={0.243} />
        <circle cx={9.567} cy={42.438} r={0.243} />
        <circle cx={10.313} cy={42.438} r={0.243} />
        <circle cx={11.049} cy={42.438} r={0.243} />
        <circle cx={11.788} cy={42.438} r={0.243} />
        <circle cx={12.524} cy={42.438} r={0.243} />
        <circle cx={13.27} cy={42.438} r={0.243} />
        <circle cx={14.005} cy={42.438} r={0.243} />
        <circle cx={14.745} cy={42.438} r={0.243} />
        <circle cx={15.48} cy={42.438} r={0.243} />
        <circle cx={16.227} cy={42.438} r={0.243} />
        <circle cx={16.962} cy={42.438} r={0.243} />
        <circle cx={17.702} cy={42.438} r={0.243} />
        <circle cx={18.438} cy={42.438} r={0.243} />
        <circle cx={19.184} cy={42.438} r={0.243} />
        <circle cx={19.919} cy={42.438} r={0.243} />
        <circle cx={20.662} cy={42.438} r={0.243} />
        <circle cx={21.398} cy={42.438} r={0.243} />
        <circle cx={22.144} cy={42.438} r={0.243} />
        <circle cx={22.879} cy={42.438} r={0.243} />
        <circle cx={23.619} cy={42.438} r={0.243} />
        <circle cx={24.354} cy={42.438} r={0.243} />
        <circle cx={25.101} cy={42.438} r={0.243} />
        <circle cx={25.836} cy={42.438} r={0.243} />
        <circle cx={27.312} cy={42.438} r={0.243} />
        <circle cx={28.058} cy={42.438} r={0.243} />
        <circle cx={28.793} cy={42.438} r={0.243} />
        <circle cx={29.532} cy={42.438} r={0.243} />
        <circle cx={30.269} cy={42.438} r={0.243} />
        <circle cx={33.975} cy={42.438} r={0.243} />
        <circle cx={34.71} cy={42.438} r={0.243} />
        <circle cx={35.45} cy={42.438} r={0.243} />
        <circle cx={36.185} cy={42.438} r={0.243} />
        <circle cx={42.099} cy={42.438} r={0.243} />
        <circle cx={42.845} cy={42.438} r={0.243} />
        <circle cx={43.581} cy={42.438} r={0.243} />
        <circle cx={4.396} cy={41.7} r={0.243} />
        <circle cx={5.131} cy={41.7} r={0.243} />
        <circle cx={5.871} cy={41.7} r={0.243} />
        <circle cx={6.607} cy={41.7} r={0.243} />
        <circle cx={7.353} cy={41.7} r={0.243} />
        <circle cx={8.088} cy={41.7} r={0.243} />
        <circle cx={8.831} cy={41.7} r={0.243} />
        <circle cx={9.567} cy={41.7} r={0.243} />
        <circle cx={10.313} cy={41.7} r={0.243} />
        <circle cx={11.049} cy={41.7} r={0.243} />
        <circle cx={11.788} cy={41.7} r={0.243} />
        <circle cx={12.524} cy={41.7} r={0.243} />
        <circle cx={13.27} cy={41.7} r={0.243} />
        <circle cx={14.005} cy={41.7} r={0.243} />
        <circle cx={14.745} cy={41.7} r={0.243} />
        <circle cx={15.48} cy={41.7} r={0.243} />
        <circle cx={16.227} cy={41.7} r={0.243} />
        <circle cx={16.962} cy={41.7} r={0.243} />
        <circle cx={17.702} cy={41.7} r={0.243} />
        <circle cx={18.438} cy={41.7} r={0.243} />
        <circle cx={19.184} cy={41.7} r={0.243} />
        <circle cx={19.919} cy={41.7} r={0.243} />
        <circle cx={20.662} cy={41.7} r={0.243} />
        <circle cx={21.398} cy={41.7} r={0.243} />
        <circle cx={22.144} cy={41.7} r={0.243} />
        <circle cx={22.879} cy={41.7} r={0.243} />
        <circle cx={23.619} cy={41.7} r={0.243} />
        <circle cx={24.354} cy={41.7} r={0.243} />
        <circle cx={25.101} cy={41.7} r={0.243} />
        <circle cx={28.058} cy={41.7} r={0.243} />
        <circle cx={28.793} cy={41.7} r={0.243} />
        <circle cx={29.532} cy={41.7} r={0.243} />
        <circle cx={31.015} cy={41.7} r={0.243} />
        <circle cx={33.975} cy={41.7} r={0.243} />
        <circle cx={34.71} cy={41.7} r={0.243} />
        <circle cx={35.45} cy={41.7} r={0.243} />
        <circle cx={36.185} cy={41.7} r={0.243} />
        <circle cx={36.932} cy={41.7} r={0.243} />
        <circle cx={37.667} cy={41.7} r={0.243} />
        <circle cx={41.364} cy={41.7} r={0.243} />
        <circle cx={42.099} cy={41.7} r={0.243} />
        <circle cx={42.845} cy={41.7} r={0.243} />
        <circle cx={5.871} cy={40.957} r={0.243} />
        <circle cx={6.606} cy={40.957} r={0.243} />
        <circle cx={7.353} cy={40.957} r={0.243} />
        <circle cx={8.088} cy={40.957} r={0.243} />
        <circle cx={8.831} cy={40.957} r={0.243} />
        <circle cx={9.567} cy={40.957} r={0.243} />
        <circle cx={10.312} cy={40.957} r={0.243} />
        <circle cx={11.049} cy={40.957} r={0.243} />
        <circle cx={11.788} cy={40.957} r={0.243} />
        <circle cx={12.524} cy={40.957} r={0.243} />
        <circle cx={13.27} cy={40.957} r={0.243} />
        <circle cx={14.005} cy={40.957} r={0.243} />
        <circle cx={14.745} cy={40.957} r={0.243} />
        <circle cx={15.48} cy={40.957} r={0.243} />
        <circle cx={16.227} cy={40.957} r={0.243} />
        <circle cx={16.962} cy={40.957} r={0.243} />
        <circle cx={17.702} cy={40.957} r={0.243} />
        <circle cx={18.438} cy={40.957} r={0.243} />
        <circle cx={19.184} cy={40.957} r={0.243} />
        <circle cx={19.919} cy={40.957} r={0.243} />
        <circle cx={20.662} cy={40.957} r={0.243} />
        <circle cx={21.398} cy={40.957} r={0.243} />
        <circle cx={22.144} cy={40.957} r={0.243} />
        <circle cx={22.879} cy={40.957} r={0.243} />
        <circle cx={23.619} cy={40.957} r={0.243} />
        <circle cx={24.354} cy={40.957} r={0.243} />
        <circle cx={25.101} cy={40.957} r={0.243} />
        <circle cx={25.836} cy={40.957} r={0.243} />
        <circle cx={28.793} cy={40.957} r={0.243} />
        <circle cx={29.532} cy={40.957} r={0.243} />
        <circle cx={30.269} cy={40.957} r={0.243} />
        <circle cx={31.015} cy={40.957} r={0.243} />
        <circle cx={33.975} cy={40.957} r={0.243} />
        <circle cx={34.71} cy={40.957} r={0.243} />
        <circle cx={35.45} cy={40.957} r={0.243} />
        <circle cx={36.185} cy={40.957} r={0.243} />
        <circle cx={36.932} cy={40.957} r={0.243} />
        <circle cx={37.667} cy={40.957} r={0.243} />
        <circle cx={38.407} cy={40.957} r={0.243} />
        <circle cx={5.131} cy={40.218} r={0.243} />
        <circle cx={5.871} cy={40.218} r={0.243} />
        <circle cx={6.606} cy={40.218} r={0.243} />
        <circle cx={7.353} cy={40.218} r={0.243} />
        <circle cx={8.088} cy={40.218} r={0.243} />
        <circle cx={8.831} cy={40.218} r={0.243} />
        <circle cx={9.567} cy={40.218} r={0.243} />
        <circle cx={10.312} cy={40.218} r={0.243} />
        <circle cx={11.049} cy={40.218} r={0.243} />
        <circle cx={11.788} cy={40.218} r={0.243} />
        <circle cx={12.524} cy={40.218} r={0.243} />
        <circle cx={13.27} cy={40.218} r={0.243} />
        <circle cx={14.005} cy={40.218} r={0.243} />
        <circle cx={14.745} cy={40.218} r={0.243} />
        <circle cx={15.48} cy={40.218} r={0.243} />
        <circle cx={16.227} cy={40.218} r={0.243} />
        <circle cx={16.962} cy={40.218} r={0.243} />
        <circle cx={19.919} cy={40.218} r={0.243} />
        <circle cx={20.662} cy={40.218} r={0.243} />
        <circle cx={22.144} cy={40.218} r={0.243} />
        <circle cx={22.879} cy={40.218} r={0.243} />
        <circle cx={23.619} cy={40.218} r={0.243} />
        <circle cx={24.354} cy={40.218} r={0.243} />
        <circle cx={25.101} cy={40.218} r={0.243} />
        <circle cx={25.836} cy={40.218} r={0.243} />
        <circle cx={27.312} cy={40.218} r={0.243} />
        <circle cx={28.793} cy={40.218} r={0.243} />
        <circle cx={29.532} cy={40.218} r={0.243} />
        <circle cx={30.269} cy={40.218} r={0.243} />
        <circle cx={33.975} cy={40.218} r={0.243} />
        <circle cx={34.71} cy={40.218} r={0.243} />
        <circle cx={35.45} cy={40.218} r={0.243} />
        <circle cx={36.185} cy={40.218} r={0.243} />
        <circle cx={36.932} cy={40.218} r={0.243} />
        <circle cx={37.667} cy={40.218} r={0.243} />
        <circle cx={38.407} cy={40.218} r={0.243} />
        <circle cx={39.142} cy={40.218} r={0.243} />
        <circle cx={5.871} cy={39.479} r={0.243} />
        <circle cx={6.607} cy={39.479} r={0.243} />
        <circle cx={7.353} cy={39.479} r={0.243} />
        <circle cx={8.089} cy={39.479} r={0.243} />
        <circle cx={8.832} cy={39.479} r={0.243} />
        <circle cx={9.567} cy={39.479} r={0.243} />
        <circle cx={10.313} cy={39.479} r={0.243} />
        <circle cx={11.049} cy={39.479} r={0.243} />
        <circle cx={11.789} cy={39.479} r={0.243} />
        <circle cx={14.006} cy={39.479} r={0.243} />
        <circle cx={14.746} cy={39.479} r={0.243} />
        <circle cx={15.481} cy={39.479} r={0.243} />
        <circle cx={16.227} cy={39.479} r={0.243} />
        <circle cx={18.438} cy={39.479} r={0.243} />
        <circle cx={19.184} cy={39.479} r={0.243} />
        <circle cx={20.663} cy={39.479} r={0.243} />
        <circle cx={22.144} cy={39.479} r={0.243} />
        <circle cx={22.88} cy={39.479} r={0.243} />
        <circle cx={23.619} cy={39.479} r={0.243} />
        <circle cx={24.355} cy={39.479} r={0.243} />
        <circle cx={25.837} cy={39.479} r={0.243} />
        <circle cx={28.058} cy={39.479} r={0.243} />
        <circle cx={28.793} cy={39.479} r={0.243} />
        <circle cx={29.533} cy={39.479} r={0.243} />
        <circle cx={34.711} cy={39.479} r={0.243} />
        <circle cx={35.45} cy={39.479} r={0.243} />
        <circle cx={36.187} cy={39.479} r={0.243} />
        <circle cx={36.932} cy={39.479} r={0.243} />
        <circle cx={37.668} cy={39.479} r={0.243} />
        <circle cx={38.407} cy={39.479} r={0.243} />
        <circle cx={39.143} cy={39.479} r={0.243} />
        <circle cx={39.889} cy={39.479} r={0.243} />
        <circle cx={40.624} cy={39.479} r={0.243} />
        <circle cx={5.871} cy={38.74} r={0.243} />
        <circle cx={6.607} cy={38.74} r={0.243} />
        <circle cx={7.353} cy={38.74} r={0.243} />
        <circle cx={8.089} cy={38.74} r={0.243} />
        <circle cx={8.832} cy={38.74} r={0.243} />
        <circle cx={9.567} cy={38.74} r={0.243} />
        <circle cx={10.313} cy={38.74} r={0.243} />
        <circle cx={17.702} cy={38.74} r={0.243} />
        <circle cx={18.438} cy={38.74} r={0.243} />
        <circle cx={19.184} cy={38.74} r={0.243} />
        <circle cx={19.92} cy={38.74} r={0.243} />
        <circle cx={20.663} cy={38.74} r={0.243} />
        <circle cx={21.398} cy={38.74} r={0.243} />
        <circle cx={22.88} cy={38.74} r={0.243} />
        <circle cx={23.619} cy={38.74} r={0.243} />
        <circle cx={25.837} cy={38.74} r={0.243} />
        <circle cx={26.576} cy={38.74} r={0.243} />
        <circle cx={27.312} cy={38.74} r={0.243} />
        <circle cx={28.058} cy={38.74} r={0.243} />
        <circle cx={28.793} cy={38.74} r={0.243} />
        <circle cx={29.533} cy={38.74} r={0.243} />
        <circle cx={33.229} cy={38.74} r={0.243} />
        <circle cx={33.975} cy={38.74} r={0.243} />
        <circle cx={34.711} cy={38.74} r={0.243} />
        <circle cx={35.45} cy={38.74} r={0.243} />
        <circle cx={36.187} cy={38.74} r={0.243} />
        <circle cx={36.932} cy={38.74} r={0.243} />
        <circle cx={37.668} cy={38.74} r={0.243} />
        <circle cx={38.407} cy={38.74} r={0.243} />
        <circle cx={39.143} cy={38.74} r={0.243} />
        <circle cx={39.889} cy={38.74} r={0.243} />
        <circle cx={40.624} cy={38.74} r={0.243} />
        <circle cx={7.353} cy={37.998} r={0.243} />
        <circle cx={8.089} cy={37.998} r={0.243} />
        <circle cx={16.963} cy={37.998} r={0.243} />
        <circle cx={17.702} cy={37.998} r={0.243} />
        <circle cx={18.438} cy={37.998} r={0.243} />
        <circle cx={19.184} cy={37.998} r={0.243} />
        <circle cx={19.92} cy={37.998} r={0.243} />
        <circle cx={22.88} cy={37.998} r={0.243} />
        <circle cx={25.101} cy={37.998} r={0.243} />
        <circle cx={25.837} cy={37.998} r={0.243} />
        <circle cx={26.576} cy={37.998} r={0.243} />
        <circle cx={27.312} cy={37.998} r={0.243} />
        <circle cx={28.058} cy={37.998} r={0.243} />
        <circle cx={28.793} cy={37.998} r={0.243} />
        <circle cx={33.975} cy={37.998} r={0.243} />
        <circle cx={34.711} cy={37.998} r={0.243} />
        <circle cx={35.45} cy={37.998} r={0.243} />
        <circle cx={36.187} cy={37.998} r={0.243} />
        <circle cx={36.932} cy={37.998} r={0.243} />
        <circle cx={37.668} cy={37.998} r={0.243} />
        <circle cx={38.407} cy={37.998} r={0.243} />
        <circle cx={39.143} cy={37.998} r={0.243} />
        <circle cx={39.889} cy={37.998} r={0.243} />
        <circle cx={41.364} cy={37.998} r={0.243} />
        <circle cx={15.481} cy={37.259} r={0.243} />
        <circle cx={16.227} cy={37.259} r={0.243} />
        <circle cx={16.963} cy={37.259} r={0.243} />
        <circle cx={17.702} cy={37.259} r={0.243} />
        <circle cx={18.438} cy={37.259} r={0.243} />
        <circle cx={19.184} cy={37.259} r={0.243} />
        <circle cx={19.92} cy={37.259} r={0.243} />
        <circle cx={22.144} cy={37.259} r={0.243} />
        <circle cx={22.88} cy={37.259} r={0.243} />
        <circle cx={24.355} cy={37.259} r={0.243} />
        <circle cx={25.101} cy={37.259} r={0.243} />
        <circle cx={25.837} cy={37.259} r={0.243} />
        <circle cx={26.576} cy={37.259} r={0.243} />
        <circle cx={27.312} cy={37.259} r={0.243} />
        <circle cx={28.058} cy={37.259} r={0.243} />
        <circle cx={33.229} cy={37.259} r={0.243} />
        <circle cx={33.975} cy={37.259} r={0.243} />
        <circle cx={34.711} cy={37.259} r={0.243} />
        <circle cx={35.45} cy={37.259} r={0.243} />
        <circle cx={36.187} cy={37.259} r={0.243} />
        <circle cx={36.932} cy={37.259} r={0.243} />
        <circle cx={37.668} cy={37.259} r={0.243} />
        <circle cx={38.407} cy={37.259} r={0.243} />
        <circle cx={39.143} cy={37.259} r={0.243} />
        <circle cx={39.889} cy={37.259} r={0.243} />
        <circle cx={40.624} cy={37.259} r={0.243} />
        <circle cx={15.481} cy={36.524} r={0.243} />
        <circle cx={16.228} cy={36.524} r={0.243} />
        <circle cx={17.703} cy={36.524} r={0.243} />
        <circle cx={18.438} cy={36.524} r={0.243} />
        <circle cx={19.185} cy={36.524} r={0.243} />
        <circle cx={19.92} cy={36.524} r={0.243} />
        <circle cx={21.399} cy={36.524} r={0.243} />
        <circle cx={22.145} cy={36.524} r={0.243} />
        <circle cx={22.88} cy={36.524} r={0.243} />
        <circle cx={23.62} cy={36.524} r={0.243} />
        <circle cx={24.355} cy={36.524} r={0.243} />
        <circle cx={25.837} cy={36.524} r={0.243} />
        <circle cx={26.577} cy={36.524} r={0.243} />
        <circle cx={27.312} cy={36.524} r={0.243} />
        <circle cx={33.229} cy={36.524} r={0.243} />
        <circle cx={33.976} cy={36.524} r={0.243} />
        <circle cx={34.711} cy={36.524} r={0.243} />
        <circle cx={35.451} cy={36.524} r={0.243} />
        <circle cx={36.187} cy={36.524} r={0.243} />
        <circle cx={36.932} cy={36.524} r={0.243} />
        <circle cx={37.668} cy={36.524} r={0.243} />
        <circle cx={38.407} cy={36.524} r={0.243} />
        <circle cx={39.143} cy={36.524} r={0.243} />
        <circle cx={39.889} cy={36.524} r={0.243} />
        <circle cx={15.481} cy={35.785} r={0.243} />
        <circle cx={16.228} cy={35.785} r={0.243} />
        <circle cx={16.963} cy={35.785} r={0.243} />
        <circle cx={22.145} cy={35.785} r={0.243} />
        <circle cx={22.88} cy={35.785} r={0.243} />
        <circle cx={23.62} cy={35.785} r={0.243} />
        <circle cx={25.102} cy={35.785} r={0.243} />
        <circle cx={25.837} cy={35.785} r={0.243} />
        <circle cx={33.229} cy={35.785} r={0.243} />
        <circle cx={33.976} cy={35.785} r={0.243} />
        <circle cx={34.711} cy={35.785} r={0.243} />
        <circle cx={35.451} cy={35.785} r={0.243} />
        <circle cx={36.187} cy={35.785} r={0.243} />
        <circle cx={36.932} cy={35.785} r={0.243} />
        <circle cx={37.668} cy={35.785} r={0.243} />
        <circle cx={38.407} cy={35.785} r={0.243} />
        <circle cx={39.143} cy={35.785} r={0.243} />
        <circle cx={39.889} cy={35.785} r={0.243} />
        <circle cx={40.625} cy={35.785} r={0.243} />
        <circle cx={41.364} cy={35.785} r={0.243} />
        <circle cx={15.481} cy={35.043} r={0.243} />
        <circle cx={16.228} cy={35.043} r={0.243} />
        <circle cx={18.438} cy={35.043} r={0.243} />
        <circle cx={33.229} cy={35.043} r={0.243} />
        <circle cx={33.976} cy={35.043} r={0.243} />
        <circle cx={34.711} cy={35.043} r={0.243} />
        <circle cx={35.451} cy={35.043} r={0.243} />
        <circle cx={36.187} cy={35.043} r={0.243} />
        <circle cx={36.932} cy={35.043} r={0.243} />
        <circle cx={37.668} cy={35.043} r={0.243} />
        <circle cx={38.407} cy={35.043} r={0.243} />
        <circle cx={39.143} cy={35.043} r={0.243} />
        <circle cx={39.889} cy={35.043} r={0.243} />
        <circle cx={40.625} cy={35.043} r={0.243} />
        <circle cx={41.364} cy={35.043} r={0.243} />
        <circle cx={42.101} cy={35.043} r={0.243} />
        <circle cx={17.703} cy={34.305} r={0.243} />
        <circle cx={18.438} cy={34.305} r={0.243} />
        <circle cx={19.185} cy={34.305} r={0.243} />
        <circle cx={19.92} cy={34.305} r={0.243} />
        <circle cx={22.145} cy={34.305} r={0.243} />
        <circle cx={23.62} cy={34.305} r={0.243} />
        <circle cx={24.355} cy={34.305} r={0.243} />
        <circle cx={25.102} cy={34.305} r={0.243} />
        <circle cx={25.837} cy={34.305} r={0.243} />
        <circle cx={26.577} cy={34.305} r={0.243} />
        <circle cx={32.494} cy={34.305} r={0.243} />
        <circle cx={33.229} cy={34.305} r={0.243} />
        <circle cx={33.976} cy={34.305} r={0.243} />
        <circle cx={34.711} cy={34.305} r={0.243} />
        <circle cx={35.451} cy={34.305} r={0.243} />
        <circle cx={36.187} cy={34.305} r={0.243} />
        <circle cx={36.932} cy={34.305} r={0.243} />
        <circle cx={37.668} cy={34.305} r={0.243} />
        <circle cx={38.407} cy={34.305} r={0.243} />
        <circle cx={39.143} cy={34.305} r={0.243} />
        <circle cx={39.889} cy={34.305} r={0.243} />
        <circle cx={40.625} cy={34.305} r={0.243} />
        <circle cx={41.364} cy={34.305} r={0.243} />
        <circle cx={17.703} cy={33.564} r={0.243} />
        <circle cx={18.439} cy={33.564} r={0.243} />
        <circle cx={19.185} cy={33.564} r={0.243} />
        <circle cx={19.921} cy={33.564} r={0.243} />
        <circle cx={21.399} cy={33.564} r={0.243} />
        <circle cx={22.145} cy={33.564} r={0.243} />
        <circle cx={23.62} cy={33.564} r={0.243} />
        <circle cx={30.27} cy={33.564} r={0.243} />
        <circle cx={32.494} cy={33.564} r={0.243} />
        <circle cx={33.23} cy={33.564} r={0.243} />
        <circle cx={33.976} cy={33.564} r={0.243} />
        <circle cx={34.712} cy={33.564} r={0.243} />
        <circle cx={35.451} cy={33.564} r={0.243} />
        <circle cx={36.187} cy={33.564} r={0.243} />
        <circle cx={36.934} cy={33.564} r={0.243} />
        <circle cx={37.669} cy={33.564} r={0.243} />
        <circle cx={38.408} cy={33.564} r={0.243} />
        <circle cx={39.144} cy={33.564} r={0.243} />
        <circle cx={39.89} cy={33.564} r={0.243} />
        <circle cx={40.625} cy={33.564} r={0.243} />
        <circle cx={41.365} cy={33.564} r={0.243} />
        <circle cx={42.101} cy={33.564} r={0.243} />
        <circle cx={16.228} cy={32.826} r={0.243} />
        <circle cx={16.964} cy={32.826} r={0.243} />
        <circle cx={19.185} cy={32.826} r={0.243} />
        <circle cx={22.881} cy={32.826} r={0.243} />
        <circle cx={23.62} cy={32.826} r={0.243} />
        <circle cx={25.102} cy={32.826} r={0.243} />
        <circle cx={25.838} cy={32.826} r={0.243} />
        <circle cx={26.577} cy={32.826} r={0.243} />
        <circle cx={27.313} cy={32.826} r={0.243} />
        <circle cx={29.534} cy={32.826} r={0.243} />
        <circle cx={30.27} cy={32.826} r={0.243} />
        <circle cx={31.016} cy={32.826} r={0.243} />
        <circle cx={31.752} cy={32.826} r={0.243} />
        <circle cx={32.494} cy={32.826} r={0.243} />
        <circle cx={33.23} cy={32.826} r={0.243} />
        <circle cx={33.976} cy={32.826} r={0.243} />
        <circle cx={34.712} cy={32.826} r={0.243} />
        <circle cx={35.451} cy={32.826} r={0.243} />
        <circle cx={36.187} cy={32.826} r={0.243} />
        <circle cx={36.934} cy={32.826} r={0.243} />
        <circle cx={37.669} cy={32.826} r={0.243} />
        <circle cx={38.408} cy={32.826} r={0.243} />
        <circle cx={39.144} cy={32.826} r={0.243} />
        <circle cx={39.89} cy={32.826} r={0.243} />
        <circle cx={40.625} cy={32.826} r={0.243} />
        <circle cx={41.365} cy={32.826} r={0.243} />
        <circle cx={16.964} cy={32.083} r={0.243} />
        <circle cx={25.102} cy={32.083} r={0.243} />
        <circle cx={25.838} cy={32.083} r={0.243} />
        <circle cx={30.27} cy={32.083} r={0.243} />
        <circle cx={31.016} cy={32.083} r={0.243} />
        <circle cx={31.752} cy={32.083} r={0.243} />
        <circle cx={32.494} cy={32.083} r={0.243} />
        <circle cx={33.23} cy={32.083} r={0.243} />
        <circle cx={33.976} cy={32.083} r={0.243} />
        <circle cx={34.712} cy={32.083} r={0.243} />
        <circle cx={35.451} cy={32.083} r={0.243} />
        <circle cx={36.187} cy={32.083} r={0.243} />
        <circle cx={36.934} cy={32.083} r={0.243} />
        <circle cx={37.669} cy={32.083} r={0.243} />
        <circle cx={38.408} cy={32.083} r={0.243} />
        <circle cx={39.144} cy={32.083} r={0.243} />
        <circle cx={39.89} cy={32.083} r={0.243} />
        <circle cx={40.625} cy={32.083} r={0.243} />
        <circle cx={41.365} cy={32.083} r={0.243} />
        <circle cx={42.101} cy={32.083} r={0.243} />
        <circle cx={18.439} cy={31.344} r={0.243} />
        <circle cx={19.185} cy={31.344} r={0.243} />
        <circle cx={21.399} cy={31.344} r={0.243} />
        <circle cx={25.102} cy={31.344} r={0.243} />
        <circle cx={25.838} cy={31.344} r={0.243} />
        <circle cx={26.577} cy={31.344} r={0.243} />
        <circle cx={27.313} cy={31.344} r={0.243} />
        <circle cx={28.795} cy={31.344} r={0.243} />
        <circle cx={29.534} cy={31.344} r={0.243} />
        <circle cx={30.27} cy={31.344} r={0.243} />
        <circle cx={31.016} cy={31.344} r={0.243} />
        <circle cx={31.752} cy={31.344} r={0.243} />
        <circle cx={32.494} cy={31.344} r={0.243} />
        <circle cx={33.23} cy={31.344} r={0.243} />
        <circle cx={33.976} cy={31.344} r={0.243} />
        <circle cx={34.712} cy={31.344} r={0.243} />
        <circle cx={35.451} cy={31.344} r={0.243} />
        <circle cx={36.187} cy={31.344} r={0.243} />
        <circle cx={36.934} cy={31.344} r={0.243} />
        <circle cx={37.669} cy={31.344} r={0.243} />
        <circle cx={38.408} cy={31.344} r={0.243} />
        <circle cx={39.144} cy={31.344} r={0.243} />
        <circle cx={39.89} cy={31.344} r={0.243} />
        <circle cx={40.625} cy={31.344} r={0.243} />
        <circle cx={41.365} cy={31.344} r={0.243} />
        <circle cx={42.101} cy={31.344} r={0.243} />
        <circle cx={20.666} cy={30.608} r={0.243} />
        <circle cx={21.401} cy={30.608} r={0.243} />
        <circle cx={22.147} cy={30.608} r={0.243} />
        <circle cx={23.622} cy={30.608} r={0.243} />
        <circle cx={24.358} cy={30.608} r={0.243} />
        <circle cx={25.104} cy={30.608} r={0.243} />
        <circle cx={25.839} cy={30.608} r={0.243} />
        <circle cx={26.579} cy={30.608} r={0.243} />
        <circle cx={27.315} cy={30.608} r={0.243} />
        <circle cx={28.796} cy={30.608} r={0.243} />
        <circle cx={29.536} cy={30.608} r={0.243} />
        <circle cx={30.271} cy={30.608} r={0.243} />
        <circle cx={31.018} cy={30.608} r={0.243} />
        <circle cx={31.753} cy={30.608} r={0.243} />
        <circle cx={32.496} cy={30.608} r={0.243} />
        <circle cx={33.232} cy={30.608} r={0.243} />
        <circle cx={33.978} cy={30.608} r={0.243} />
        <circle cx={34.714} cy={30.608} r={0.243} />
        <circle cx={35.454} cy={30.608} r={0.243} />
        <circle cx={36.189} cy={30.608} r={0.243} />
        <circle cx={36.935} cy={30.608} r={0.243} />
        <circle cx={37.67} cy={30.608} r={0.243} />
        <circle cx={38.41} cy={30.608} r={0.243} />
        <circle cx={39.146} cy={30.608} r={0.243} />
        <circle cx={39.891} cy={30.608} r={0.243} />
        <circle cx={40.627} cy={30.608} r={0.243} />
        <circle cx={41.366} cy={30.608} r={0.243} />
        <circle cx={20.666} cy={29.87} r={0.243} />
        <circle cx={23.622} cy={29.87} r={0.243} />
        <circle cx={24.358} cy={29.87} r={0.243} />
        <circle cx={26.579} cy={29.87} r={0.243} />
        <circle cx={27.315} cy={29.87} r={0.243} />
        <circle cx={28.061} cy={29.87} r={0.243} />
        <circle cx={29.536} cy={29.87} r={0.243} />
        <circle cx={30.271} cy={29.87} r={0.243} />
        <circle cx={31.018} cy={29.87} r={0.243} />
        <circle cx={31.753} cy={29.87} r={0.243} />
        <circle cx={32.496} cy={29.87} r={0.243} />
        <circle cx={33.232} cy={29.87} r={0.243} />
        <circle cx={33.978} cy={29.87} r={0.243} />
        <circle cx={34.714} cy={29.87} r={0.243} />
        <circle cx={35.454} cy={29.87} r={0.243} />
        <circle cx={36.189} cy={29.87} r={0.243} />
        <circle cx={36.935} cy={29.87} r={0.243} />
        <circle cx={37.67} cy={29.87} r={0.243} />
        <circle cx={38.41} cy={29.87} r={0.243} />
        <circle cx={39.146} cy={29.87} r={0.243} />
        <circle cx={39.891} cy={29.87} r={0.243} />
        <circle cx={40.627} cy={29.87} r={0.243} />
        <circle cx={41.366} cy={29.87} r={0.243} />
        <circle cx={42.103} cy={29.87} r={0.243} />
        <circle cx={23.622} cy={29.127} r={0.243} />
        <circle cx={24.358} cy={29.127} r={0.243} />
        <circle cx={25.839} cy={29.127} r={0.243} />
        <circle cx={26.579} cy={29.127} r={0.243} />
        <circle cx={27.315} cy={29.127} r={0.243} />
        <circle cx={28.061} cy={29.127} r={0.243} />
        <circle cx={31.018} cy={29.127} r={0.243} />
        <circle cx={31.753} cy={29.127} r={0.243} />
        <circle cx={32.496} cy={29.127} r={0.243} />
        <circle cx={33.232} cy={29.127} r={0.243} />
        <circle cx={33.978} cy={29.127} r={0.243} />
        <circle cx={34.714} cy={29.127} r={0.243} />
        <circle cx={35.454} cy={29.127} r={0.243} />
        <circle cx={36.189} cy={29.127} r={0.243} />
        <circle cx={36.935} cy={29.127} r={0.243} />
        <circle cx={37.67} cy={29.127} r={0.243} />
        <circle cx={38.41} cy={29.127} r={0.243} />
        <circle cx={39.146} cy={29.127} r={0.243} />
        <circle cx={39.891} cy={29.127} r={0.243} />
        <circle cx={40.627} cy={29.127} r={0.243} />
        <circle cx={41.366} cy={29.127} r={0.243} />
        <circle cx={42.103} cy={29.127} r={0.243} />
        <circle cx={22.883} cy={28.388} r={0.243} />
        <circle cx={23.622} cy={28.388} r={0.243} />
        <circle cx={24.358} cy={28.388} r={0.243} />
        <circle cx={25.839} cy={28.388} r={0.243} />
        <circle cx={26.579} cy={28.388} r={0.243} />
        <circle cx={27.315} cy={28.388} r={0.243} />
        <circle cx={28.061} cy={28.388} r={0.243} />
        <circle cx={28.796} cy={28.388} r={0.243} />
        <circle cx={30.271} cy={28.388} r={0.243} />
        <circle cx={31.018} cy={28.388} r={0.243} />
        <circle cx={31.753} cy={28.388} r={0.243} />
        <circle cx={32.496} cy={28.388} r={0.243} />
        <circle cx={33.232} cy={28.388} r={0.243} />
        <circle cx={33.978} cy={28.388} r={0.243} />
        <circle cx={34.714} cy={28.388} r={0.243} />
        <circle cx={35.454} cy={28.388} r={0.243} />
        <circle cx={36.189} cy={28.388} r={0.243} />
        <circle cx={36.935} cy={28.388} r={0.243} />
        <circle cx={37.67} cy={28.388} r={0.243} />
        <circle cx={38.41} cy={28.388} r={0.243} />
        <circle cx={39.146} cy={28.388} r={0.243} />
        <circle cx={39.891} cy={28.388} r={0.243} />
        <circle cx={40.627} cy={28.388} r={0.243} />
        <circle cx={41.366} cy={28.388} r={0.243} />
        <circle cx={22.883} cy={27.649} r={0.243} />
        <circle cx={23.623} cy={27.649} r={0.243} />
        <circle cx={27.315} cy={27.649} r={0.243} />
        <circle cx={28.062} cy={27.649} r={0.243} />
        <circle cx={28.797} cy={27.649} r={0.243} />
        <circle cx={30.272} cy={27.649} r={0.243} />
        <circle cx={31.018} cy={27.649} r={0.243} />
        <circle cx={31.754} cy={27.649} r={0.243} />
        <circle cx={32.497} cy={27.649} r={0.243} />
        <circle cx={33.232} cy={27.649} r={0.243} />
        <circle cx={33.979} cy={27.649} r={0.243} />
        <circle cx={34.714} cy={27.649} r={0.243} />
        <circle cx={35.454} cy={27.649} r={0.243} />
        <circle cx={36.189} cy={27.649} r={0.243} />
        <circle cx={36.935} cy={27.649} r={0.243} />
        <circle cx={37.67} cy={27.649} r={0.243} />
        <circle cx={38.41} cy={27.649} r={0.243} />
        <circle cx={39.146} cy={27.649} r={0.243} />
        <circle cx={39.892} cy={27.649} r={0.243} />
        <circle cx={40.628} cy={27.649} r={0.243} />
        <circle cx={41.367} cy={27.649} r={0.243} />
        <circle cx={42.103} cy={27.649} r={0.243} />
        <circle cx={42.849} cy={27.649} r={0.243} />
        <circle cx={23.623} cy={26.91} r={0.243} />
        <circle cx={25.84} cy={26.91} r={0.243} />
        <circle cx={26.579} cy={26.91} r={0.243} />
        <circle cx={27.315} cy={26.91} r={0.243} />
        <circle cx={28.062} cy={26.91} r={0.243} />
        <circle cx={28.797} cy={26.91} r={0.243} />
        <circle cx={29.536} cy={26.91} r={0.243} />
        <circle cx={31.018} cy={26.91} r={0.243} />
        <circle cx={31.754} cy={26.91} r={0.243} />
        <circle cx={32.497} cy={26.91} r={0.243} />
        <circle cx={33.232} cy={26.91} r={0.243} />
        <circle cx={33.979} cy={26.91} r={0.243} />
        <circle cx={34.714} cy={26.91} r={0.243} />
        <circle cx={35.454} cy={26.91} r={0.243} />
        <circle cx={36.189} cy={26.91} r={0.243} />
        <circle cx={36.935} cy={26.91} r={0.243} />
        <circle cx={37.67} cy={26.91} r={0.243} />
        <circle cx={38.41} cy={26.91} r={0.243} />
        <circle cx={39.146} cy={26.91} r={0.243} />
        <circle cx={39.892} cy={26.91} r={0.243} />
        <circle cx={40.628} cy={26.91} r={0.243} />
        <circle cx={42.103} cy={26.91} r={0.243} />
        <circle cx={42.849} cy={26.91} r={0.243} />
        <circle cx={43.584} cy={26.91} r={0.243} />
        <circle cx={24.358} cy={26.167} r={0.243} />
        <circle cx={25.104} cy={26.167} r={0.243} />
        <circle cx={25.84} cy={26.167} r={0.243} />
        <circle cx={26.579} cy={26.167} r={0.243} />
        <circle cx={27.315} cy={26.167} r={0.243} />
        <circle cx={28.062} cy={26.167} r={0.243} />
        <circle cx={28.797} cy={26.167} r={0.243} />
        <circle cx={29.536} cy={26.167} r={0.243} />
        <circle cx={30.272} cy={26.167} r={0.243} />
        <circle cx={31.754} cy={26.167} r={0.243} />
        <circle cx={32.497} cy={26.167} r={0.243} />
        <circle cx={33.232} cy={26.167} r={0.243} />
        <circle cx={33.979} cy={26.167} r={0.243} />
        <circle cx={34.714} cy={26.167} r={0.243} />
        <circle cx={35.454} cy={26.167} r={0.243} />
        <circle cx={36.189} cy={26.167} r={0.243} />
        <circle cx={36.935} cy={26.167} r={0.243} />
        <circle cx={37.67} cy={26.167} r={0.243} />
        <circle cx={38.41} cy={26.167} r={0.243} />
        <circle cx={39.146} cy={26.167} r={0.243} />
        <circle cx={39.892} cy={26.167} r={0.243} />
        <circle cx={40.628} cy={26.167} r={0.243} />
        <circle cx={42.103} cy={26.167} r={0.243} />
        <circle cx={42.849} cy={26.167} r={0.243} />
        <circle cx={43.584} cy={26.167} r={0.243} />
        <circle cx={24.358} cy={25.429} r={0.243} />
        <circle cx={25.104} cy={25.429} r={0.243} />
        <circle cx={25.84} cy={25.429} r={0.243} />
        <circle cx={26.579} cy={25.429} r={0.243} />
        <circle cx={27.315} cy={25.429} r={0.243} />
        <circle cx={28.062} cy={25.429} r={0.243} />
        <circle cx={28.797} cy={25.429} r={0.243} />
        <circle cx={29.536} cy={25.429} r={0.243} />
        <circle cx={31.754} cy={25.429} r={0.243} />
        <circle cx={32.497} cy={25.429} r={0.243} />
        <circle cx={33.232} cy={25.429} r={0.243} />
        <circle cx={33.979} cy={25.429} r={0.243} />
        <circle cx={34.714} cy={25.429} r={0.243} />
        <circle cx={36.189} cy={25.429} r={0.243} />
        <circle cx={36.935} cy={25.429} r={0.243} />
        <circle cx={37.67} cy={25.429} r={0.243} />
        <circle cx={38.41} cy={25.429} r={0.243} />
        <circle cx={41.367} cy={25.429} r={0.243} />
        <circle cx={27.312} cy={24.697} r={0.243} />
        <circle cx={28.059} cy={24.697} r={0.243} />
        <circle cx={28.794} cy={24.697} r={0.243} />
        <circle cx={29.534} cy={24.697} r={0.243} />
        <circle cx={30.269} cy={24.697} r={0.243} />
        <circle cx={31.016} cy={24.697} r={0.243} />
        <circle cx={33.23} cy={24.697} r={0.243} />
        <circle cx={34.711} cy={24.697} r={0.243} />
        <circle cx={36.187} cy={24.697} r={0.243} />
        <circle cx={36.932} cy={24.697} r={0.243} />
        <circle cx={37.668} cy={24.697} r={0.243} />
        <circle cx={38.407} cy={24.697} r={0.243} />
        <circle cx={39.144} cy={24.697} r={0.243} />
        <circle cx={39.889} cy={24.697} r={0.243} />
        <circle cx={40.625} cy={24.697} r={0.243} />
        <circle cx={26.577} cy={23.958} r={0.243} />
        <circle cx={27.312} cy={23.958} r={0.243} />
        <circle cx={28.059} cy={23.958} r={0.243} />
        <circle cx={28.794} cy={23.958} r={0.243} />
        <circle cx={29.534} cy={23.958} r={0.243} />
        <circle cx={30.269} cy={23.958} r={0.243} />
        <circle cx={31.016} cy={23.958} r={0.243} />
        <circle cx={36.187} cy={23.958} r={0.243} />
        <circle cx={36.932} cy={23.958} r={0.243} />
        <circle cx={37.668} cy={23.958} r={0.243} />
        <circle cx={38.407} cy={23.958} r={0.243} />
        <circle cx={39.144} cy={23.958} r={0.243} />
        <circle cx={39.889} cy={23.958} r={0.243} />
        <circle cx={40.625} cy={23.958} r={0.243} />
        <circle cx={41.364} cy={23.958} r={0.243} />
        <circle cx={28.059} cy={23.216} r={0.243} />
        <circle cx={28.794} cy={23.216} r={0.243} />
        <circle cx={35.451} cy={23.216} r={0.243} />
        <circle cx={36.187} cy={23.216} r={0.243} />
        <circle cx={37.668} cy={23.216} r={0.243} />
        <circle cx={38.407} cy={23.216} r={0.243} />
        <circle cx={39.144} cy={23.216} r={0.243} />
        <circle cx={39.889} cy={23.216} r={0.243} />
        <circle cx={40.625} cy={23.216} r={0.243} />
        <circle cx={37.668} cy={22.477} r={0.243} />
        <circle cx={38.407} cy={22.477} r={0.243} />
        <circle cx={39.144} cy={22.477} r={0.243} />
        <circle cx={39.889} cy={22.477} r={0.243} />
        <circle cx={90.081} cy={77.117} r={0.243} />
        <circle cx={90.816} cy={77.117} r={0.243} />
        <circle cx={84.903} cy={76.374} r={0.243} />
        <circle cx={90.816} cy={76.374} r={0.243} />
        <circle cx={84.167} cy={75.635} r={0.243} />
        <circle cx={84.903} cy={75.635} r={0.243} />
        <circle cx={92.295} cy={75.635} r={0.243} />
        <circle cx={83.421} cy={74.896} r={0.243} />
        <circle cx={92.295} cy={74.896} r={0.243} />
        <circle cx={83.421} cy={74.157} r={0.243} />
        <circle cx={84.168} cy={74.157} r={0.243} />
        <circle cx={84.903} cy={74.157} r={0.243} />
        <circle cx={85.643} cy={74.157} r={0.243} />
        <circle cx={91.56} cy={74.157} r={0.243} />
        <circle cx={52.368} cy={73.415} r={0.243} />
        <circle cx={53.843} cy={73.415} r={0.243} />
        <circle cx={76.769} cy={73.415} r={0.243} />
        <circle cx={77.504} cy={73.415} r={0.243} />
        <circle cx={78.986} cy={73.415} r={0.243} />
        <circle cx={81.947} cy={73.415} r={0.243} />
        <circle cx={82.686} cy={73.415} r={0.243} />
        <circle cx={83.421} cy={73.415} r={0.243} />
        <circle cx={84.168} cy={73.415} r={0.243} />
        <circle cx={84.903} cy={73.415} r={0.243} />
        <circle cx={85.643} cy={73.415} r={0.243} />
        <circle cx={52.368} cy={72.676} r={0.243} />
        <circle cx={53.106} cy={72.676} r={0.243} />
        <circle cx={53.843} cy={72.676} r={0.243} />
        <circle cx={54.589} cy={72.676} r={0.243} />
        <circle cx={77.504} cy={72.676} r={0.243} />
        <circle cx={78.25} cy={72.676} r={0.243} />
        <circle cx={78.986} cy={72.676} r={0.243} />
        <circle cx={79.729} cy={72.676} r={0.243} />
        <circle cx={81.211} cy={72.676} r={0.243} />
        <circle cx={81.947} cy={72.676} r={0.243} />
        <circle cx={82.686} cy={72.676} r={0.243} />
        <circle cx={83.421} cy={72.676} r={0.243} />
        <circle cx={84.168} cy={72.676} r={0.243} />
        <circle cx={84.903} cy={72.676} r={0.243} />
        <circle cx={85.643} cy={72.676} r={0.243} />
        <circle cx={86.378} cy={72.676} r={0.243} />
        <circle cx={52.365} cy={71.944} r={0.243} />
        <circle cx={53.104} cy={71.944} r={0.243} />
        <circle cx={53.84} cy={71.944} r={0.243} />
        <circle cx={54.586} cy={71.944} r={0.243} />
        <circle cx={55.322} cy={71.944} r={0.243} />
        <circle cx={76.766} cy={71.944} r={0.243} />
        <circle cx={77.501} cy={71.944} r={0.243} />
        <circle cx={78.248} cy={71.944} r={0.243} />
        <circle cx={78.983} cy={71.944} r={0.243} />
        <circle cx={79.727} cy={71.944} r={0.243} />
        <circle cx={80.462} cy={71.944} r={0.243} />
        <circle cx={81.208} cy={71.944} r={0.243} />
        <circle cx={81.944} cy={71.944} r={0.243} />
        <circle cx={82.684} cy={71.944} r={0.243} />
        <circle cx={83.419} cy={71.944} r={0.243} />
        <circle cx={84.165} cy={71.944} r={0.243} />
        <circle cx={84.9} cy={71.944} r={0.243} />
        <circle cx={85.64} cy={71.944} r={0.243} />
        <circle cx={51.629} cy={71.206} r={0.243} />
        <circle cx={52.365} cy={71.206} r={0.243} />
        <circle cx={53.104} cy={71.206} r={0.243} />
        <circle cx={53.84} cy={71.206} r={0.243} />
        <circle cx={54.586} cy={71.206} r={0.243} />
        <circle cx={55.322} cy={71.206} r={0.243} />
        <circle cx={76.027} cy={71.206} r={0.243} />
        <circle cx={76.766} cy={71.206} r={0.243} />
        <circle cx={77.501} cy={71.206} r={0.243} />
        <circle cx={78.248} cy={71.206} r={0.243} />
        <circle cx={78.983} cy={71.206} r={0.243} />
        <circle cx={79.727} cy={71.206} r={0.243} />
        <circle cx={80.462} cy={71.206} r={0.243} />
        <circle cx={81.208} cy={71.206} r={0.243} />
        <circle cx={81.944} cy={71.206} r={0.243} />
        <circle cx={82.684} cy={71.206} r={0.243} />
        <circle cx={83.419} cy={71.206} r={0.243} />
        <circle cx={84.165} cy={71.206} r={0.243} />
        <circle cx={84.9} cy={71.206} r={0.243} />
        <circle cx={85.64} cy={71.206} r={0.243} />
        <circle cx={51.629} cy={70.463} r={0.243} />
        <circle cx={52.365} cy={70.463} r={0.243} />
        <circle cx={53.104} cy={70.463} r={0.243} />
        <circle cx={53.84} cy={70.463} r={0.243} />
        <circle cx={54.586} cy={70.463} r={0.243} />
        <circle cx={55.322} cy={70.463} r={0.243} />
        <circle cx={56.064} cy={70.463} r={0.243} />
        <circle cx={59.021} cy={70.463} r={0.243} />
        <circle cx={76.766} cy={70.463} r={0.243} />
        <circle cx={77.501} cy={70.463} r={0.243} />
        <circle cx={78.248} cy={70.463} r={0.243} />
        <circle cx={78.983} cy={70.463} r={0.243} />
        <circle cx={79.727} cy={70.463} r={0.243} />
        <circle cx={80.462} cy={70.463} r={0.243} />
        <circle cx={81.208} cy={70.463} r={0.243} />
        <circle cx={81.944} cy={70.463} r={0.243} />
        <circle cx={82.684} cy={70.463} r={0.243} />
        <circle cx={83.419} cy={70.463} r={0.243} />
        <circle cx={84.165} cy={70.463} r={0.243} />
        <circle cx={84.9} cy={70.463} r={0.243} />
        <circle cx={85.64} cy={70.463} r={0.243} />
        <circle cx={50.883} cy={69.724} r={0.243} />
        <circle cx={51.629} cy={69.724} r={0.243} />
        <circle cx={52.365} cy={69.724} r={0.243} />
        <circle cx={53.104} cy={69.724} r={0.243} />
        <circle cx={53.84} cy={69.724} r={0.243} />
        <circle cx={54.586} cy={69.724} r={0.243} />
        <circle cx={55.322} cy={69.724} r={0.243} />
        <circle cx={56.064} cy={69.724} r={0.243} />
        <circle cx={59.021} cy={69.724} r={0.243} />
        <circle cx={76.766} cy={69.724} r={0.243} />
        <circle cx={77.501} cy={69.724} r={0.243} />
        <circle cx={78.248} cy={69.724} r={0.243} />
        <circle cx={78.983} cy={69.724} r={0.243} />
        <circle cx={79.727} cy={69.724} r={0.243} />
        <circle cx={80.462} cy={69.724} r={0.243} />
        <circle cx={81.208} cy={69.724} r={0.243} />
        <circle cx={81.944} cy={69.724} r={0.243} />
        <circle cx={82.684} cy={69.724} r={0.243} />
        <circle cx={83.419} cy={69.724} r={0.243} />
        <circle cx={84.165} cy={69.724} r={0.243} />
        <circle cx={84.9} cy={69.724} r={0.243} />
        <circle cx={50.884} cy={68.984} r={0.243} />
        <circle cx={51.63} cy={68.984} r={0.243} />
        <circle cx={52.366} cy={68.984} r={0.243} />
        <circle cx={53.105} cy={68.984} r={0.243} />
        <circle cx={53.841} cy={68.984} r={0.243} />
        <circle cx={54.587} cy={68.984} r={0.243} />
        <circle cx={55.322} cy={68.984} r={0.243} />
        <circle cx={56.064} cy={68.984} r={0.243} />
        <circle cx={59.022} cy={68.984} r={0.243} />
        <circle cx={59.758} cy={68.984} r={0.243} />
        <circle cx={78.248} cy={68.984} r={0.243} />
        <circle cx={78.984} cy={68.984} r={0.243} />
        <circle cx={79.727} cy={68.984} r={0.243} />
        <circle cx={80.463} cy={68.984} r={0.243} />
        <circle cx={81.209} cy={68.984} r={0.243} />
        <circle cx={81.944} cy={68.984} r={0.243} />
        <circle cx={82.684} cy={68.984} r={0.243} />
        <circle cx={83.419} cy={68.984} r={0.243} />
        <circle cx={84.165} cy={68.984} r={0.243} />
        <circle cx={50.147} cy={68.246} r={0.243} />
        <circle cx={50.884} cy={68.246} r={0.243} />
        <circle cx={51.63} cy={68.246} r={0.243} />
        <circle cx={52.366} cy={68.246} r={0.243} />
        <circle cx={53.105} cy={68.246} r={0.243} />
        <circle cx={53.841} cy={68.246} r={0.243} />
        <circle cx={54.587} cy={68.246} r={0.243} />
        <circle cx={55.322} cy={68.246} r={0.243} />
        <circle cx={56.064} cy={68.246} r={0.243} />
        <circle cx={56.801} cy={68.246} r={0.243} />
        <circle cx={57.547} cy={68.246} r={0.243} />
        <circle cx={59.758} cy={68.246} r={0.243} />
        <circle cx={78.984} cy={68.246} r={0.243} />
        <circle cx={79.727} cy={68.246} r={0.243} />
        <circle cx={80.463} cy={68.246} r={0.243} />
        <circle cx={81.209} cy={68.246} r={0.243} />
        <circle cx={81.944} cy={68.246} r={0.243} />
        <circle cx={83.419} cy={68.246} r={0.243} />
        <circle cx={84.165} cy={68.246} r={0.243} />
        <circle cx={50.883} cy={67.503} r={0.243} />
        <circle cx={51.63} cy={67.503} r={0.243} />
        <circle cx={52.366} cy={67.503} r={0.243} />
        <circle cx={53.105} cy={67.503} r={0.243} />
        <circle cx={53.841} cy={67.503} r={0.243} />
        <circle cx={54.587} cy={67.503} r={0.243} />
        <circle cx={55.322} cy={67.503} r={0.243} />
        <circle cx={56.064} cy={67.503} r={0.243} />
        <circle cx={56.801} cy={67.503} r={0.243} />
        <circle cx={57.547} cy={67.503} r={0.243} />
        <circle cx={59.758} cy={67.503} r={0.243} />
        <circle cx={80.463} cy={67.503} r={0.243} />
        <circle cx={81.209} cy={67.503} r={0.243} />
        <circle cx={81.944} cy={67.503} r={0.243} />
        <circle cx={83.419} cy={67.503} r={0.243} />
        <circle cx={50.883} cy={66.765} r={0.243} />
        <circle cx={51.63} cy={66.765} r={0.243} />
        <circle cx={52.366} cy={66.765} r={0.243} />
        <circle cx={53.105} cy={66.765} r={0.243} />
        <circle cx={53.841} cy={66.765} r={0.243} />
        <circle cx={54.587} cy={66.765} r={0.243} />
        <circle cx={55.322} cy={66.765} r={0.243} />
        <circle cx={56.064} cy={66.765} r={0.243} />
        <circle cx={56.801} cy={66.765} r={0.243} />
        <circle cx={57.547} cy={66.765} r={0.243} />
        <circle cx={78.248} cy={66.765} r={0.243} />
        <circle cx={78.984} cy={66.765} r={0.243} />
        <circle cx={84.9} cy={66.765} r={0.243} />
        <circle cx={85.641} cy={66.765} r={0.243} />
        <circle cx={50.886} cy={66.028} r={0.243} />
        <circle cx={51.632} cy={66.028} r={0.243} />
        <circle cx={52.367} cy={66.028} r={0.243} />
        <circle cx={53.106} cy={66.028} r={0.243} />
        <circle cx={53.842} cy={66.028} r={0.243} />
        <circle cx={54.588} cy={66.028} r={0.243} />
        <circle cx={55.324} cy={66.028} r={0.243} />
        <circle cx={56.066} cy={66.028} r={0.243} />
        <circle cx={56.803} cy={66.028} r={0.243} />
        <circle cx={74.547} cy={66.028} r={0.243} />
        <circle cx={75.293} cy={66.028} r={0.243} />
        <circle cx={76.029} cy={66.028} r={0.243} />
        <circle cx={82.686} cy={66.028} r={0.243} />
        <circle cx={83.421} cy={66.028} r={0.243} />
        <circle cx={84.168} cy={66.028} r={0.243} />
        <circle cx={50.15} cy={65.29} r={0.243} />
        <circle cx={50.886} cy={65.29} r={0.243} />
        <circle cx={51.632} cy={65.29} r={0.243} />
        <circle cx={52.367} cy={65.29} r={0.243} />
        <circle cx={53.106} cy={65.29} r={0.243} />
        <circle cx={53.842} cy={65.29} r={0.243} />
        <circle cx={54.588} cy={65.29} r={0.243} />
        <circle cx={55.324} cy={65.29} r={0.243} />
        <circle cx={56.066} cy={65.29} r={0.243} />
        <circle cx={56.803} cy={65.29} r={0.243} />
        <circle cx={73.812} cy={65.29} r={0.243} />
        <circle cx={78.25} cy={65.29} r={0.243} />
        <circle cx={81.21} cy={65.29} r={0.243} />
        <circle cx={81.945} cy={65.29} r={0.243} />
        <circle cx={82.686} cy={65.29} r={0.243} />
        <circle cx={83.421} cy={65.29} r={0.243} />
        <circle cx={84.168} cy={65.29} r={0.243} />
        <circle cx={85.643} cy={65.29} r={0.243} />
        <circle cx={50.15} cy={64.547} r={0.243} />
        <circle cx={50.886} cy={64.547} r={0.243} />
        <circle cx={51.632} cy={64.547} r={0.243} />
        <circle cx={52.367} cy={64.547} r={0.243} />
        <circle cx={53.106} cy={64.547} r={0.243} />
        <circle cx={53.842} cy={64.547} r={0.243} />
        <circle cx={54.588} cy={64.547} r={0.243} />
        <circle cx={55.324} cy={64.547} r={0.243} />
        <circle cx={56.066} cy={64.547} r={0.243} />
        <circle cx={56.803} cy={64.547} r={0.243} />
        <circle cx={57.548} cy={64.547} r={0.243} />
        <circle cx={73.072} cy={64.547} r={0.243} />
        <circle cx={73.812} cy={64.547} r={0.243} />
        <circle cx={75.293} cy={64.547} r={0.243} />
        <circle cx={76.029} cy={64.547} r={0.243} />
        <circle cx={76.769} cy={64.547} r={0.243} />
        <circle cx={78.25} cy={64.547} r={0.243} />
        <circle cx={81.21} cy={64.547} r={0.243} />
        <circle cx={50.15} cy={63.808} r={0.243} />
        <circle cx={50.886} cy={63.808} r={0.243} />
        <circle cx={51.632} cy={63.808} r={0.243} />
        <circle cx={52.367} cy={63.808} r={0.243} />
        <circle cx={53.106} cy={63.808} r={0.243} />
        <circle cx={53.842} cy={63.808} r={0.243} />
        <circle cx={54.588} cy={63.808} r={0.243} />
        <circle cx={55.324} cy={63.808} r={0.243} />
        <circle cx={56.066} cy={63.808} r={0.243} />
        <circle cx={56.803} cy={63.808} r={0.243} />
        <circle cx={57.548} cy={63.808} r={0.243} />
        <circle cx={58.284} cy={63.808} r={0.243} />
        <circle cx={73.072} cy={63.808} r={0.243} />
        <circle cx={73.812} cy={63.808} r={0.243} />
        <circle cx={75.293} cy={63.808} r={0.243} />
        <circle cx={76.029} cy={63.808} r={0.243} />
        <circle cx={76.769} cy={63.808} r={0.243} />
        <circle cx={78.25} cy={63.808} r={0.243} />
        <circle cx={78.985} cy={63.808} r={0.243} />
        <circle cx={50.15} cy={63.068} r={0.243} />
        <circle cx={50.886} cy={63.068} r={0.243} />
        <circle cx={51.632} cy={63.068} r={0.243} />
        <circle cx={52.368} cy={63.068} r={0.243} />
        <circle cx={53.107} cy={63.068} r={0.243} />
        <circle cx={53.844} cy={63.068} r={0.243} />
        <circle cx={54.589} cy={63.068} r={0.243} />
        <circle cx={55.325} cy={63.068} r={0.243} />
        <circle cx={56.067} cy={63.068} r={0.243} />
        <circle cx={56.803} cy={63.068} r={0.243} />
        <circle cx={57.549} cy={63.068} r={0.243} />
        <circle cx={58.285} cy={63.068} r={0.243} />
        <circle cx={59.024} cy={63.068} r={0.243} />
        <circle cx={71.591} cy={63.068} r={0.243} />
        <circle cx={72.337} cy={63.068} r={0.243} />
        <circle cx={73.072} cy={63.068} r={0.243} />
        <circle cx={76.769} cy={63.068} r={0.243} />
        <circle cx={50.15} cy={62.329} r={0.243} />
        <circle cx={50.886} cy={62.329} r={0.243} />
        <circle cx={51.632} cy={62.329} r={0.243} />
        <circle cx={52.368} cy={62.329} r={0.243} />
        <circle cx={53.107} cy={62.329} r={0.243} />
        <circle cx={53.844} cy={62.329} r={0.243} />
        <circle cx={54.589} cy={62.329} r={0.243} />
        <circle cx={55.325} cy={62.329} r={0.243} />
        <circle cx={56.067} cy={62.329} r={0.243} />
        <circle cx={56.803} cy={62.329} r={0.243} />
        <circle cx={57.549} cy={62.329} r={0.243} />
        <circle cx={58.285} cy={62.329} r={0.243} />
        <circle cx={59.024} cy={62.329} r={0.243} />
        <circle cx={59.76} cy={62.329} r={0.243} />
        <circle cx={67.897} cy={62.329} r={0.243} />
        <circle cx={73.072} cy={62.329} r={0.243} />
        <circle cx={78.251} cy={62.329} r={0.243} />
        <circle cx={78.986} cy={62.329} r={0.243} />
        <circle cx={50.15} cy={61.587} r={0.243} />
        <circle cx={50.886} cy={61.587} r={0.243} />
        <circle cx={51.632} cy={61.587} r={0.243} />
        <circle cx={52.368} cy={61.587} r={0.243} />
        <circle cx={53.107} cy={61.587} r={0.243} />
        <circle cx={53.844} cy={61.587} r={0.243} />
        <circle cx={54.589} cy={61.587} r={0.243} />
        <circle cx={55.325} cy={61.587} r={0.243} />
        <circle cx={56.067} cy={61.587} r={0.243} />
        <circle cx={56.803} cy={61.587} r={0.243} />
        <circle cx={57.549} cy={61.587} r={0.243} />
        <circle cx={58.285} cy={61.587} r={0.243} />
        <circle cx={59.024} cy={61.587} r={0.243} />
        <circle cx={59.76} cy={61.587} r={0.243} />
        <circle cx={67.155} cy={61.587} r={0.243} />
        <circle cx={72.337} cy={61.587} r={0.243} />
        <circle cx={74.548} cy={61.587} r={0.243} />
        <circle cx={77.505} cy={61.587} r={0.243} />
        <circle cx={78.986} cy={61.587} r={0.243} />
        <circle cx={50.15} cy={60.849} r={0.243} />
        <circle cx={50.886} cy={60.849} r={0.243} />
        <circle cx={51.632} cy={60.849} r={0.243} />
        <circle cx={52.368} cy={60.849} r={0.243} />
        <circle cx={53.107} cy={60.849} r={0.243} />
        <circle cx={53.844} cy={60.849} r={0.243} />
        <circle cx={54.589} cy={60.849} r={0.243} />
        <circle cx={55.325} cy={60.849} r={0.243} />
        <circle cx={56.067} cy={60.849} r={0.243} />
        <circle cx={56.803} cy={60.849} r={0.243} />
        <circle cx={57.549} cy={60.849} r={0.243} />
        <circle cx={66.42} cy={60.849} r={0.243} />
        <circle cx={67.155} cy={60.849} r={0.243} />
        <circle cx={72.337} cy={60.849} r={0.243} />
        <circle cx={73.072} cy={60.849} r={0.243} />
        <circle cx={73.812} cy={60.849} r={0.243} />
        <circle cx={74.548} cy={60.849} r={0.243} />
        <circle cx={78.251} cy={60.849} r={0.243} />
        <circle cx={78.986} cy={60.849} r={0.243} />
        <circle cx={50.151} cy={60.114} r={0.243} />
        <circle cx={50.887} cy={60.114} r={0.243} />
        <circle cx={51.633} cy={60.114} r={0.243} />
        <circle cx={52.368} cy={60.114} r={0.243} />
        <circle cx={53.107} cy={60.114} r={0.243} />
        <circle cx={53.844} cy={60.114} r={0.243} />
        <circle cx={54.589} cy={60.114} r={0.243} />
        <circle cx={55.325} cy={60.114} r={0.243} />
        <circle cx={56.067} cy={60.114} r={0.243} />
        <circle cx={56.804} cy={60.114} r={0.243} />
        <circle cx={58.285} cy={60.114} r={0.243} />
        <circle cx={59.024} cy={60.114} r={0.243} />
        <circle cx={59.76} cy={60.114} r={0.243} />
        <circle cx={60.506} cy={60.114} r={0.243} />
        <circle cx={66.42} cy={60.114} r={0.243} />
        <circle cx={67.155} cy={60.114} r={0.243} />
        <circle cx={71.591} cy={60.114} r={0.243} />
        <circle cx={72.337} cy={60.114} r={0.243} />
        <circle cx={73.072} cy={60.114} r={0.243} />
        <circle cx={73.812} cy={60.114} r={0.243} />
        <circle cx={74.548} cy={60.114} r={0.243} />
        <circle cx={78.251} cy={60.114} r={0.243} />
        <circle cx={50.151} cy={59.376} r={0.243} />
        <circle cx={50.887} cy={59.376} r={0.243} />
        <circle cx={51.633} cy={59.376} r={0.243} />
        <circle cx={52.368} cy={59.376} r={0.243} />
        <circle cx={53.107} cy={59.376} r={0.243} />
        <circle cx={53.844} cy={59.376} r={0.243} />
        <circle cx={54.589} cy={59.376} r={0.243} />
        <circle cx={55.325} cy={59.376} r={0.243} />
        <circle cx={56.067} cy={59.376} r={0.243} />
        <circle cx={56.804} cy={59.376} r={0.243} />
        <circle cx={58.285} cy={59.376} r={0.243} />
        <circle cx={59.024} cy={59.376} r={0.243} />
        <circle cx={59.76} cy={59.376} r={0.243} />
        <circle cx={60.506} cy={59.376} r={0.243} />
        <circle cx={61.241} cy={59.376} r={0.243} />
        <circle cx={66.42} cy={59.376} r={0.243} />
        <circle cx={67.155} cy={59.376} r={0.243} />
        <circle cx={67.899} cy={59.376} r={0.243} />
        <circle cx={68.635} cy={59.376} r={0.243} />
        <circle cx={71.591} cy={59.376} r={0.243} />
        <circle cx={72.337} cy={59.376} r={0.243} />
        <circle cx={73.072} cy={59.376} r={0.243} />
        <circle cx={73.812} cy={59.376} r={0.243} />
        <circle cx={75.294} cy={59.376} r={0.243} />
        <circle cx={78.251} cy={59.376} r={0.243} />
        <circle cx={50.151} cy={58.633} r={0.243} />
        <circle cx={50.887} cy={58.633} r={0.243} />
        <circle cx={51.633} cy={58.633} r={0.243} />
        <circle cx={52.368} cy={58.633} r={0.243} />
        <circle cx={53.107} cy={58.633} r={0.243} />
        <circle cx={53.844} cy={58.633} r={0.243} />
        <circle cx={54.589} cy={58.633} r={0.243} />
        <circle cx={55.325} cy={58.633} r={0.243} />
        <circle cx={56.067} cy={58.633} r={0.243} />
        <circle cx={57.55} cy={58.633} r={0.243} />
        <circle cx={58.285} cy={58.633} r={0.243} />
        <circle cx={59.024} cy={58.633} r={0.243} />
        <circle cx={59.76} cy={58.633} r={0.243} />
        <circle cx={60.506} cy={58.633} r={0.243} />
        <circle cx={61.241} cy={58.633} r={0.243} />
        <circle cx={61.981} cy={58.633} r={0.243} />
        <circle cx={64.938} cy={58.633} r={0.243} />
        <circle cx={66.42} cy={58.633} r={0.243} />
        <circle cx={67.155} cy={58.633} r={0.243} />
        <circle cx={67.899} cy={58.633} r={0.243} />
        <circle cx={68.635} cy={58.633} r={0.243} />
        <circle cx={69.381} cy={58.633} r={0.243} />
        <circle cx={70.855} cy={58.633} r={0.243} />
        <circle cx={71.591} cy={58.633} r={0.243} />
        <circle cx={72.337} cy={58.633} r={0.243} />
        <circle cx={73.072} cy={58.633} r={0.243} />
        <circle cx={73.812} cy={58.633} r={0.243} />
        <circle cx={75.294} cy={58.633} r={0.243} />
        <circle cx={50.151} cy={57.894} r={0.243} />
        <circle cx={50.887} cy={57.894} r={0.243} />
        <circle cx={51.633} cy={57.894} r={0.243} />
        <circle cx={52.368} cy={57.894} r={0.243} />
        <circle cx={53.107} cy={57.894} r={0.243} />
        <circle cx={53.844} cy={57.894} r={0.243} />
        <circle cx={54.589} cy={57.894} r={0.243} />
        <circle cx={55.325} cy={57.894} r={0.243} />
        <circle cx={56.067} cy={57.894} r={0.243} />
        <circle cx={57.55} cy={57.894} r={0.243} />
        <circle cx={58.285} cy={57.894} r={0.243} />
        <circle cx={59.024} cy={57.894} r={0.243} />
        <circle cx={59.76} cy={57.894} r={0.243} />
        <circle cx={60.506} cy={57.894} r={0.243} />
        <circle cx={61.241} cy={57.894} r={0.243} />
        <circle cx={64.938} cy={57.894} r={0.243} />
        <circle cx={65.674} cy={57.894} r={0.243} />
        <circle cx={66.42} cy={57.894} r={0.243} />
        <circle cx={67.155} cy={57.894} r={0.243} />
        <circle cx={67.899} cy={57.894} r={0.243} />
        <circle cx={68.635} cy={57.894} r={0.243} />
        <circle cx={69.381} cy={57.894} r={0.243} />
        <circle cx={70.116} cy={57.894} r={0.243} />
        <circle cx={70.855} cy={57.894} r={0.243} />
        <circle cx={71.591} cy={57.894} r={0.243} />
        <circle cx={72.337} cy={57.894} r={0.243} />
        <circle cx={73.072} cy={57.894} r={0.243} />
        <circle cx={73.812} cy={57.894} r={0.243} />
        <circle cx={74.548} cy={57.894} r={0.243} />
        <circle cx={75.294} cy={57.894} r={0.243} />
        <circle cx={76.03} cy={57.894} r={0.243} />
        <circle cx={76.769} cy={57.894} r={0.243} />
        <circle cx={78.251} cy={57.894} r={0.243} />
        <circle cx={50.151} cy={57.154} r={0.243} />
        <circle cx={50.887} cy={57.154} r={0.243} />
        <circle cx={51.633} cy={57.154} r={0.243} />
        <circle cx={52.369} cy={57.154} r={0.243} />
        <circle cx={53.107} cy={57.154} r={0.243} />
        <circle cx={53.844} cy={57.154} r={0.243} />
        <circle cx={54.59} cy={57.154} r={0.243} />
        <circle cx={55.326} cy={57.154} r={0.243} />
        <circle cx={56.804} cy={57.154} r={0.243} />
        <circle cx={57.55} cy={57.154} r={0.243} />
        <circle cx={58.286} cy={57.154} r={0.243} />
        <circle cx={59.025} cy={57.154} r={0.243} />
        <circle cx={59.761} cy={57.154} r={0.243} />
        <circle cx={61.982} cy={57.154} r={0.243} />
        <circle cx={62.718} cy={57.154} r={0.243} />
        <circle cx={63.464} cy={57.154} r={0.243} />
        <circle cx={64.199} cy={57.154} r={0.243} />
        <circle cx={64.938} cy={57.154} r={0.243} />
        <circle cx={65.674} cy={57.154} r={0.243} />
        <circle cx={66.42} cy={57.154} r={0.243} />
        <circle cx={67.157} cy={57.154} r={0.243} />
        <circle cx={67.899} cy={57.154} r={0.243} />
        <circle cx={68.635} cy={57.154} r={0.243} />
        <circle cx={69.381} cy={57.154} r={0.243} />
        <circle cx={70.117} cy={57.154} r={0.243} />
        <circle cx={70.855} cy={57.154} r={0.243} />
        <circle cx={71.592} cy={57.154} r={0.243} />
        <circle cx={72.338} cy={57.154} r={0.243} />
        <circle cx={73.074} cy={57.154} r={0.243} />
        <circle cx={73.813} cy={57.154} r={0.243} />
        <circle cx={74.549} cy={57.154} r={0.243} />
        <circle cx={75.295} cy={57.154} r={0.243} />
        <circle cx={76.03} cy={57.154} r={0.243} />
        <circle cx={76.77} cy={57.154} r={0.243} />
        <circle cx={77.505} cy={57.154} r={0.243} />
        <circle cx={50.151} cy={56.415} r={0.243} />
        <circle cx={50.887} cy={56.415} r={0.243} />
        <circle cx={51.633} cy={56.415} r={0.243} />
        <circle cx={52.369} cy={56.415} r={0.243} />
        <circle cx={53.107} cy={56.415} r={0.243} />
        <circle cx={53.844} cy={56.415} r={0.243} />
        <circle cx={54.59} cy={56.415} r={0.243} />
        <circle cx={55.326} cy={56.415} r={0.243} />
        <circle cx={56.068} cy={56.415} r={0.243} />
        <circle cx={56.804} cy={56.415} r={0.243} />
        <circle cx={57.55} cy={56.415} r={0.243} />
        <circle cx={58.286} cy={56.415} r={0.243} />
        <circle cx={59.025} cy={56.415} r={0.243} />
        <circle cx={60.508} cy={56.415} r={0.243} />
        <circle cx={61.243} cy={56.415} r={0.243} />
        <circle cx={61.982} cy={56.415} r={0.243} />
        <circle cx={62.718} cy={56.415} r={0.243} />
        <circle cx={63.464} cy={56.415} r={0.243} />
        <circle cx={64.199} cy={56.415} r={0.243} />
        <circle cx={64.938} cy={56.415} r={0.243} />
        <circle cx={65.674} cy={56.415} r={0.243} />
        <circle cx={66.42} cy={56.415} r={0.243} />
        <circle cx={67.157} cy={56.415} r={0.243} />
        <circle cx={67.899} cy={56.415} r={0.243} />
        <circle cx={68.635} cy={56.415} r={0.243} />
        <circle cx={69.381} cy={56.415} r={0.243} />
        <circle cx={70.117} cy={56.415} r={0.243} />
        <circle cx={70.855} cy={56.415} r={0.243} />
        <circle cx={71.592} cy={56.415} r={0.243} />
        <circle cx={72.338} cy={56.415} r={0.243} />
        <circle cx={73.074} cy={56.415} r={0.243} />
        <circle cx={73.813} cy={56.415} r={0.243} />
        <circle cx={74.549} cy={56.415} r={0.243} />
        <circle cx={75.295} cy={56.415} r={0.243} />
        <circle cx={76.03} cy={56.415} r={0.243} />
        <circle cx={76.77} cy={56.415} r={0.243} />
        <circle cx={77.505} cy={56.415} r={0.243} />
        <circle cx={78.252} cy={56.415} r={0.243} />
        <circle cx={50.151} cy={55.673} r={0.243} />
        <circle cx={50.887} cy={55.673} r={0.243} />
        <circle cx={52.369} cy={55.673} r={0.243} />
        <circle cx={53.107} cy={55.673} r={0.243} />
        <circle cx={56.068} cy={55.673} r={0.243} />
        <circle cx={56.804} cy={55.673} r={0.243} />
        <circle cx={57.55} cy={55.673} r={0.243} />
        <circle cx={58.286} cy={55.673} r={0.243} />
        <circle cx={59.025} cy={55.673} r={0.243} />
        <circle cx={59.761} cy={55.673} r={0.243} />
        <circle cx={60.508} cy={55.673} r={0.243} />
        <circle cx={61.243} cy={55.673} r={0.243} />
        <circle cx={61.982} cy={55.673} r={0.243} />
        <circle cx={62.718} cy={55.673} r={0.243} />
        <circle cx={63.464} cy={55.673} r={0.243} />
        <circle cx={64.199} cy={55.673} r={0.243} />
        <circle cx={64.938} cy={55.673} r={0.243} />
        <circle cx={65.674} cy={55.673} r={0.243} />
        <circle cx={66.42} cy={55.673} r={0.243} />
        <circle cx={67.157} cy={55.673} r={0.243} />
        <circle cx={67.899} cy={55.673} r={0.243} />
        <circle cx={68.635} cy={55.673} r={0.243} />
        <circle cx={69.381} cy={55.673} r={0.243} />
        <circle cx={70.117} cy={55.673} r={0.243} />
        <circle cx={70.855} cy={55.673} r={0.243} />
        <circle cx={71.592} cy={55.673} r={0.243} />
        <circle cx={72.338} cy={55.673} r={0.243} />
        <circle cx={73.074} cy={55.673} r={0.243} />
        <circle cx={73.813} cy={55.673} r={0.243} />
        <circle cx={74.549} cy={55.673} r={0.243} />
        <circle cx={75.295} cy={55.673} r={0.243} />
        <circle cx={76.03} cy={55.673} r={0.243} />
        <circle cx={76.77} cy={55.673} r={0.243} />
        <circle cx={77.505} cy={55.673} r={0.243} />
        <circle cx={78.252} cy={55.673} r={0.243} />
        <circle cx={80.466} cy={55.673} r={0.243} />
        <circle cx={56.804} cy={54.935} r={0.243} />
        <circle cx={57.55} cy={54.935} r={0.243} />
        <circle cx={58.286} cy={54.935} r={0.243} />
        <circle cx={59.025} cy={54.935} r={0.243} />
        <circle cx={59.761} cy={54.935} r={0.243} />
        <circle cx={60.508} cy={54.935} r={0.243} />
        <circle cx={61.243} cy={54.935} r={0.243} />
        <circle cx={61.982} cy={54.935} r={0.243} />
        <circle cx={62.718} cy={54.935} r={0.243} />
        <circle cx={63.464} cy={54.935} r={0.243} />
        <circle cx={64.199} cy={54.935} r={0.243} />
        <circle cx={64.938} cy={54.935} r={0.243} />
        <circle cx={65.674} cy={54.935} r={0.243} />
        <circle cx={66.42} cy={54.935} r={0.243} />
        <circle cx={67.157} cy={54.935} r={0.243} />
        <circle cx={67.899} cy={54.935} r={0.243} />
        <circle cx={68.635} cy={54.935} r={0.243} />
        <circle cx={69.381} cy={54.935} r={0.243} />
        <circle cx={70.117} cy={54.935} r={0.243} />
        <circle cx={70.855} cy={54.935} r={0.243} />
        <circle cx={71.592} cy={54.935} r={0.243} />
        <circle cx={72.338} cy={54.935} r={0.243} />
        <circle cx={73.074} cy={54.935} r={0.243} />
        <circle cx={73.813} cy={54.935} r={0.243} />
        <circle cx={74.549} cy={54.935} r={0.243} />
        <circle cx={75.295} cy={54.935} r={0.243} />
        <circle cx={76.03} cy={54.935} r={0.243} />
        <circle cx={76.77} cy={54.935} r={0.243} />
        <circle cx={77.505} cy={54.935} r={0.243} />
        <circle cx={81.211} cy={54.935} r={0.243} />
        <circle cx={81.947} cy={54.935} r={0.243} />
        <circle cx={50.889} cy={54.198} r={0.243} />
        <circle cx={53.11} cy={54.198} r={0.243} />
        <circle cx={55.327} cy={54.198} r={0.243} />
        <circle cx={56.807} cy={54.198} r={0.243} />
        <circle cx={57.552} cy={54.198} r={0.243} />
        <circle cx={58.288} cy={54.198} r={0.243} />
        <circle cx={59.027} cy={54.198} r={0.243} />
        <circle cx={59.763} cy={54.198} r={0.243} />
        <circle cx={61.245} cy={54.198} r={0.243} />
        <circle cx={61.983} cy={54.198} r={0.243} />
        <circle cx={62.719} cy={54.198} r={0.243} />
        <circle cx={63.466} cy={54.198} r={0.243} />
        <circle cx={64.201} cy={54.198} r={0.243} />
        <circle cx={64.94} cy={54.198} r={0.243} />
        <circle cx={65.676} cy={54.198} r={0.243} />
        <circle cx={66.422} cy={54.198} r={0.243} />
        <circle cx={67.158} cy={54.198} r={0.243} />
        <circle cx={67.901} cy={54.198} r={0.243} />
        <circle cx={68.637} cy={54.198} r={0.243} />
        <circle cx={69.383} cy={54.198} r={0.243} />
        <circle cx={70.118} cy={54.198} r={0.243} />
        <circle cx={70.858} cy={54.198} r={0.243} />
        <circle cx={71.594} cy={54.198} r={0.243} />
        <circle cx={72.34} cy={54.198} r={0.243} />
        <circle cx={73.075} cy={54.198} r={0.243} />
        <circle cx={73.814} cy={54.198} r={0.243} />
        <circle cx={74.55} cy={54.198} r={0.243} />
        <circle cx={75.297} cy={54.198} r={0.243} />
        <circle cx={76.032} cy={54.198} r={0.243} />
        <circle cx={76.771} cy={54.198} r={0.243} />
        <circle cx={77.507} cy={54.198} r={0.243} />
        <circle cx={78.254} cy={54.198} r={0.243} />
        <circle cx={79.731} cy={54.198} r={0.243} />
        <circle cx={81.949} cy={54.198} r={0.243} />
        <circle cx={82.689} cy={54.198} r={0.243} />
        <circle cx={53.11} cy={53.459} r={0.243} />
        <circle cx={54.592} cy={53.459} r={0.243} />
        <circle cx={55.327} cy={53.459} r={0.243} />
        <circle cx={56.069} cy={53.459} r={0.243} />
        <circle cx={56.807} cy={53.459} r={0.243} />
        <circle cx={57.552} cy={53.459} r={0.243} />
        <circle cx={58.288} cy={53.459} r={0.243} />
        <circle cx={59.027} cy={53.459} r={0.243} />
        <circle cx={61.245} cy={53.459} r={0.243} />
        <circle cx={61.983} cy={53.459} r={0.243} />
        <circle cx={62.719} cy={53.459} r={0.243} />
        <circle cx={63.466} cy={53.459} r={0.243} />
        <circle cx={64.201} cy={53.459} r={0.243} />
        <circle cx={64.94} cy={53.459} r={0.243} />
        <circle cx={65.676} cy={53.459} r={0.243} />
        <circle cx={66.422} cy={53.459} r={0.243} />
        <circle cx={67.158} cy={53.459} r={0.243} />
        <circle cx={67.901} cy={53.459} r={0.243} />
        <circle cx={68.637} cy={53.459} r={0.243} />
        <circle cx={69.383} cy={53.459} r={0.243} />
        <circle cx={70.118} cy={53.459} r={0.243} />
        <circle cx={70.858} cy={53.459} r={0.243} />
        <circle cx={71.594} cy={53.459} r={0.243} />
        <circle cx={72.34} cy={53.459} r={0.243} />
        <circle cx={73.075} cy={53.459} r={0.243} />
        <circle cx={73.814} cy={53.459} r={0.243} />
        <circle cx={74.55} cy={53.459} r={0.243} />
        <circle cx={75.297} cy={53.459} r={0.243} />
        <circle cx={76.032} cy={53.459} r={0.243} />
        <circle cx={76.771} cy={53.459} r={0.243} />
        <circle cx={77.507} cy={53.459} r={0.243} />
        <circle cx={79.731} cy={53.459} r={0.243} />
        <circle cx={83.425} cy={53.459} r={0.243} />
        <circle cx={50.889} cy={52.717} r={0.242} />
        <circle cx={52.371} cy={52.717} r={0.242} />
        <circle cx={53.11} cy={52.717} r={0.242} />
        <circle cx={53.846} cy={52.717} r={0.242} />
        <circle cx={54.592} cy={52.717} r={0.242} />
        <circle cx={55.327} cy={52.717} r={0.242} />
        <circle cx={56.069} cy={52.717} r={0.242} />
        <circle cx={57.552} cy={52.717} r={0.242} />
        <circle cx={58.288} cy={52.717} r={0.242} />
        <circle cx={59.027} cy={52.717} r={0.242} />
        <circle cx={59.763} cy={52.717} r={0.242} />
        <circle cx={61.245} cy={52.717} r={0.242} />
        <circle cx={61.983} cy={52.717} r={0.242} />
        <circle cx={62.719} cy={52.717} r={0.242} />
        <circle cx={63.466} cy={52.717} r={0.242} />
        <circle cx={64.201} cy={52.717} r={0.242} />
        <circle cx={64.94} cy={52.717} r={0.242} />
        <circle cx={65.676} cy={52.717} r={0.242} />
        <circle cx={66.422} cy={52.717} r={0.242} />
        <circle cx={67.158} cy={52.717} r={0.242} />
        <circle cx={67.901} cy={52.717} r={0.242} />
        <circle cx={68.637} cy={52.717} r={0.242} />
        <circle cx={69.383} cy={52.717} r={0.242} />
        <circle cx={70.118} cy={52.717} r={0.242} />
        <circle cx={70.858} cy={52.717} r={0.242} />
        <circle cx={71.594} cy={52.717} r={0.242} />
        <circle cx={72.34} cy={52.717} r={0.242} />
        <circle cx={73.075} cy={52.717} r={0.242} />
        <circle cx={73.814} cy={52.717} r={0.242} />
        <circle cx={74.55} cy={52.717} r={0.242} />
        <circle cx={75.297} cy={52.717} r={0.242} />
        <circle cx={76.032} cy={52.717} r={0.242} />
        <circle cx={76.771} cy={52.717} r={0.242} />
        <circle cx={77.507} cy={52.717} r={0.242} />
        <circle cx={78.254} cy={52.717} r={0.242} />
        <circle cx={78.989} cy={52.717} r={0.242} />
        <circle cx={79.731} cy={52.717} r={0.242} />
        <circle cx={83.425} cy={52.717} r={0.242} />
        <circle cx={50.153} cy={51.978} r={0.243} />
        <circle cx={51.635} cy={51.978} r={0.243} />
        <circle cx={52.371} cy={51.978} r={0.243} />
        <circle cx={53.11} cy={51.978} r={0.243} />
        <circle cx={53.846} cy={51.978} r={0.243} />
        <circle cx={58.288} cy={51.978} r={0.243} />
        <circle cx={59.027} cy={51.978} r={0.243} />
        <circle cx={60.509} cy={51.978} r={0.243} />
        <circle cx={61.245} cy={51.978} r={0.243} />
        <circle cx={61.983} cy={51.978} r={0.243} />
        <circle cx={62.719} cy={51.978} r={0.243} />
        <circle cx={63.466} cy={51.978} r={0.243} />
        <circle cx={64.201} cy={51.978} r={0.243} />
        <circle cx={64.94} cy={51.978} r={0.243} />
        <circle cx={65.676} cy={51.978} r={0.243} />
        <circle cx={66.422} cy={51.978} r={0.243} />
        <circle cx={67.158} cy={51.978} r={0.243} />
        <circle cx={67.901} cy={51.978} r={0.243} />
        <circle cx={68.637} cy={51.978} r={0.243} />
        <circle cx={69.383} cy={51.978} r={0.243} />
        <circle cx={70.118} cy={51.978} r={0.243} />
        <circle cx={70.858} cy={51.978} r={0.243} />
        <circle cx={71.594} cy={51.978} r={0.243} />
        <circle cx={72.34} cy={51.978} r={0.243} />
        <circle cx={73.075} cy={51.978} r={0.243} />
        <circle cx={73.814} cy={51.978} r={0.243} />
        <circle cx={74.55} cy={51.978} r={0.243} />
        <circle cx={75.297} cy={51.978} r={0.243} />
        <circle cx={76.032} cy={51.978} r={0.243} />
        <circle cx={76.771} cy={51.978} r={0.243} />
        <circle cx={77.507} cy={51.978} r={0.243} />
        <circle cx={78.254} cy={51.978} r={0.243} />
        <circle cx={78.989} cy={51.978} r={0.243} />
        <circle cx={79.731} cy={51.978} r={0.243} />
        <circle cx={80.468} cy={51.978} r={0.243} />
        <circle cx={81.214} cy={51.978} r={0.243} />
        <circle cx={83.425} cy={51.978} r={0.243} />
        <circle cx={84.171} cy={51.978} r={0.243} />
        <circle cx={50.154} cy={51.238} r={0.243} />
        <circle cx={50.89} cy={51.238} r={0.243} />
        <circle cx={51.636} cy={51.238} r={0.243} />
        <circle cx={52.371} cy={51.238} r={0.243} />
        <circle cx={53.11} cy={51.238} r={0.243} />
        <circle cx={53.846} cy={51.238} r={0.243} />
        <circle cx={54.592} cy={51.238} r={0.243} />
        <circle cx={56.07} cy={51.238} r={0.243} />
        <circle cx={57.552} cy={51.238} r={0.243} />
        <circle cx={58.288} cy={51.238} r={0.243} />
        <circle cx={59.027} cy={51.238} r={0.243} />
        <circle cx={60.51} cy={51.238} r={0.243} />
        <circle cx={61.245} cy={51.238} r={0.243} />
        <circle cx={61.984} cy={51.238} r={0.243} />
        <circle cx={62.721} cy={51.238} r={0.243} />
        <circle cx={63.467} cy={51.238} r={0.243} />
        <circle cx={64.202} cy={51.238} r={0.243} />
        <circle cx={64.941} cy={51.238} r={0.243} />
        <circle cx={65.677} cy={51.238} r={0.243} />
        <circle cx={66.423} cy={51.238} r={0.243} />
        <circle cx={67.159} cy={51.238} r={0.243} />
        <circle cx={67.901} cy={51.238} r={0.243} />
        <circle cx={68.637} cy={51.238} r={0.243} />
        <circle cx={69.383} cy={51.238} r={0.243} />
        <circle cx={70.119} cy={51.238} r={0.243} />
        <circle cx={70.858} cy={51.238} r={0.243} />
        <circle cx={71.595} cy={51.238} r={0.243} />
        <circle cx={72.34} cy={51.238} r={0.243} />
        <circle cx={73.076} cy={51.238} r={0.243} />
        <circle cx={73.815} cy={51.238} r={0.243} />
        <circle cx={74.551} cy={51.238} r={0.243} />
        <circle cx={75.297} cy={51.238} r={0.243} />
        <circle cx={76.033} cy={51.238} r={0.243} />
        <circle cx={76.772} cy={51.238} r={0.243} />
        <circle cx={77.508} cy={51.238} r={0.243} />
        <circle cx={78.254} cy={51.238} r={0.243} />
        <circle cx={78.989} cy={51.238} r={0.243} />
        <circle cx={79.732} cy={51.238} r={0.243} />
        <circle cx={80.468} cy={51.238} r={0.243} />
        <circle cx={81.214} cy={51.238} r={0.243} />
        <circle cx={81.949} cy={51.238} r={0.243} />
        <circle cx={83.425} cy={51.238} r={0.243} />
        <circle cx={50.154} cy={50.5} r={0.243} />
        <circle cx={50.89} cy={50.5} r={0.243} />
        <circle cx={51.636} cy={50.5} r={0.243} />
        <circle cx={52.371} cy={50.5} r={0.243} />
        <circle cx={53.11} cy={50.5} r={0.243} />
        <circle cx={53.846} cy={50.5} r={0.243} />
        <circle cx={54.592} cy={50.5} r={0.243} />
        <circle cx={55.328} cy={50.5} r={0.243} />
        <circle cx={56.07} cy={50.5} r={0.243} />
        <circle cx={56.807} cy={50.5} r={0.243} />
        <circle cx={57.552} cy={50.5} r={0.243} />
        <circle cx={58.288} cy={50.5} r={0.243} />
        <circle cx={59.027} cy={50.5} r={0.243} />
        <circle cx={59.763} cy={50.5} r={0.243} />
        <circle cx={61.245} cy={50.5} r={0.243} />
        <circle cx={61.984} cy={50.5} r={0.243} />
        <circle cx={62.721} cy={50.5} r={0.243} />
        <circle cx={63.467} cy={50.5} r={0.243} />
        <circle cx={64.202} cy={50.5} r={0.243} />
        <circle cx={64.941} cy={50.5} r={0.243} />
        <circle cx={65.677} cy={50.5} r={0.243} />
        <circle cx={66.423} cy={50.5} r={0.243} />
        <circle cx={67.159} cy={50.5} r={0.243} />
        <circle cx={67.901} cy={50.5} r={0.243} />
        <circle cx={68.637} cy={50.5} r={0.243} />
        <circle cx={69.383} cy={50.5} r={0.243} />
        <circle cx={70.119} cy={50.5} r={0.243} />
        <circle cx={70.858} cy={50.5} r={0.243} />
        <circle cx={71.595} cy={50.5} r={0.243} />
        <circle cx={72.34} cy={50.5} r={0.243} />
        <circle cx={73.076} cy={50.5} r={0.243} />
        <circle cx={73.815} cy={50.5} r={0.243} />
        <circle cx={74.551} cy={50.5} r={0.243} />
        <circle cx={75.297} cy={50.5} r={0.243} />
        <circle cx={76.033} cy={50.5} r={0.243} />
        <circle cx={76.772} cy={50.5} r={0.243} />
        <circle cx={77.508} cy={50.5} r={0.243} />
        <circle cx={78.254} cy={50.5} r={0.243} />
        <circle cx={78.989} cy={50.5} r={0.243} />
        <circle cx={79.732} cy={50.5} r={0.243} />
        <circle cx={80.468} cy={50.5} r={0.243} />
        <circle cx={81.214} cy={50.5} r={0.243} />
        <circle cx={81.949} cy={50.5} r={0.243} />
        <circle cx={83.425} cy={50.5} r={0.243} />
        <circle cx={50.154} cy={49.757} r={0.243} />
        <circle cx={50.89} cy={49.757} r={0.243} />
        <circle cx={51.636} cy={49.757} r={0.243} />
        <circle cx={52.371} cy={49.757} r={0.243} />
        <circle cx={53.11} cy={49.757} r={0.243} />
        <circle cx={53.846} cy={49.757} r={0.243} />
        <circle cx={54.592} cy={49.757} r={0.243} />
        <circle cx={55.328} cy={49.757} r={0.243} />
        <circle cx={56.07} cy={49.757} r={0.243} />
        <circle cx={56.807} cy={49.757} r={0.243} />
        <circle cx={57.552} cy={49.757} r={0.243} />
        <circle cx={58.288} cy={49.757} r={0.243} />
        <circle cx={59.027} cy={49.757} r={0.243} />
        <circle cx={59.763} cy={49.757} r={0.243} />
        <circle cx={60.51} cy={49.757} r={0.243} />
        <circle cx={61.245} cy={49.757} r={0.243} />
        <circle cx={61.984} cy={49.757} r={0.243} />
        <circle cx={62.721} cy={49.757} r={0.243} />
        <circle cx={63.467} cy={49.757} r={0.243} />
        <circle cx={64.202} cy={49.757} r={0.243} />
        <circle cx={64.941} cy={49.757} r={0.243} />
        <circle cx={65.677} cy={49.757} r={0.243} />
        <circle cx={66.423} cy={49.757} r={0.243} />
        <circle cx={67.159} cy={49.757} r={0.243} />
        <circle cx={67.901} cy={49.757} r={0.243} />
        <circle cx={68.637} cy={49.757} r={0.243} />
        <circle cx={69.383} cy={49.757} r={0.243} />
        <circle cx={70.119} cy={49.757} r={0.243} />
        <circle cx={70.858} cy={49.757} r={0.243} />
        <circle cx={71.595} cy={49.757} r={0.243} />
        <circle cx={72.34} cy={49.757} r={0.243} />
        <circle cx={73.076} cy={49.757} r={0.243} />
        <circle cx={73.815} cy={49.757} r={0.243} />
        <circle cx={74.551} cy={49.757} r={0.243} />
        <circle cx={75.297} cy={49.757} r={0.243} />
        <circle cx={76.033} cy={49.757} r={0.243} />
        <circle cx={76.772} cy={49.757} r={0.243} />
        <circle cx={77.508} cy={49.757} r={0.243} />
        <circle cx={78.254} cy={49.757} r={0.243} />
        <circle cx={78.989} cy={49.757} r={0.243} />
        <circle cx={79.732} cy={49.757} r={0.243} />
        <circle cx={80.468} cy={49.757} r={0.243} />
        <circle cx={81.214} cy={49.757} r={0.243} />
        <circle cx={81.949} cy={49.757} r={0.243} />
        <circle cx={82.689} cy={49.757} r={0.243} />
        <circle cx={84.171} cy={49.757} r={0.243} />
        <circle cx={50.154} cy={49.018} r={0.243} />
        <circle cx={50.89} cy={49.018} r={0.243} />
        <circle cx={51.636} cy={49.018} r={0.243} />
        <circle cx={52.371} cy={49.018} r={0.243} />
        <circle cx={53.11} cy={49.018} r={0.243} />
        <circle cx={53.846} cy={49.018} r={0.243} />
        <circle cx={54.592} cy={49.018} r={0.243} />
        <circle cx={55.328} cy={49.018} r={0.243} />
        <circle cx={56.07} cy={49.018} r={0.243} />
        <circle cx={56.807} cy={49.018} r={0.243} />
        <circle cx={57.552} cy={49.018} r={0.243} />
        <circle cx={58.288} cy={49.018} r={0.243} />
        <circle cx={59.027} cy={49.018} r={0.243} />
        <circle cx={59.763} cy={49.018} r={0.243} />
        <circle cx={60.51} cy={49.018} r={0.243} />
        <circle cx={61.245} cy={49.018} r={0.243} />
        <circle cx={61.984} cy={49.018} r={0.243} />
        <circle cx={62.721} cy={49.018} r={0.243} />
        <circle cx={63.467} cy={49.018} r={0.243} />
        <circle cx={64.202} cy={49.018} r={0.243} />
        <circle cx={64.941} cy={49.018} r={0.243} />
        <circle cx={65.677} cy={49.018} r={0.243} />
        <circle cx={66.423} cy={49.018} r={0.243} />
        <circle cx={67.159} cy={49.018} r={0.243} />
        <circle cx={67.901} cy={49.018} r={0.243} />
        <circle cx={68.637} cy={49.018} r={0.243} />
        <circle cx={69.383} cy={49.018} r={0.243} />
        <circle cx={70.119} cy={49.018} r={0.243} />
        <circle cx={70.858} cy={49.018} r={0.243} />
        <circle cx={71.595} cy={49.018} r={0.243} />
        <circle cx={72.34} cy={49.018} r={0.243} />
        <circle cx={73.076} cy={49.018} r={0.243} />
        <circle cx={73.815} cy={49.018} r={0.243} />
        <circle cx={74.551} cy={49.018} r={0.243} />
        <circle cx={75.297} cy={49.018} r={0.243} />
        <circle cx={76.033} cy={49.018} r={0.243} />
        <circle cx={76.772} cy={49.018} r={0.243} />
        <circle cx={77.508} cy={49.018} r={0.243} />
        <circle cx={78.254} cy={49.018} r={0.243} />
        <circle cx={78.989} cy={49.018} r={0.243} />
        <circle cx={79.732} cy={49.018} r={0.243} />
        <circle cx={80.468} cy={49.018} r={0.243} />
        <circle cx={81.214} cy={49.018} r={0.243} />
        <circle cx={81.949} cy={49.018} r={0.243} />
        <circle cx={82.689} cy={49.018} r={0.243} />
        <circle cx={50.157} cy={48.359} r={0.243} />
        <circle cx={50.892} cy={48.359} r={0.243} />
        <circle cx={51.638} cy={48.359} r={0.243} />
        <circle cx={52.375} cy={48.359} r={0.243} />
        <circle cx={53.113} cy={48.359} r={0.243} />
        <circle cx={53.85} cy={48.359} r={0.243} />
        <circle cx={54.596} cy={48.359} r={0.243} />
        <circle cx={55.331} cy={48.359} r={0.243} />
        <circle cx={56.073} cy={48.359} r={0.243} />
        <circle cx={56.811} cy={48.359} r={0.243} />
        <circle cx={57.556} cy={48.359} r={0.243} />
        <circle cx={58.292} cy={48.359} r={0.243} />
        <circle cx={59.031} cy={48.359} r={0.243} />
        <circle cx={59.767} cy={48.359} r={0.243} />
        <circle cx={60.513} cy={48.359} r={0.243} />
        <circle cx={61.248} cy={48.359} r={0.243} />
        <circle cx={61.987} cy={48.359} r={0.243} />
        <circle cx={62.723} cy={48.359} r={0.243} />
        <circle cx={63.47} cy={48.359} r={0.243} />
        <circle cx={64.205} cy={48.359} r={0.243} />
        <circle cx={64.944} cy={48.359} r={0.243} />
        <circle cx={65.681} cy={48.359} r={0.243} />
        <circle cx={66.427} cy={48.359} r={0.243} />
        <circle cx={67.162} cy={48.359} r={0.243} />
        <circle cx={67.905} cy={48.359} r={0.243} />
        <circle cx={68.641} cy={48.359} r={0.243} />
        <circle cx={69.387} cy={48.359} r={0.243} />
        <circle cx={70.122} cy={48.359} r={0.243} />
        <circle cx={70.862} cy={48.359} r={0.243} />
        <circle cx={71.598} cy={48.359} r={0.243} />
        <circle cx={72.344} cy={48.359} r={0.243} />
        <circle cx={73.079} cy={48.359} r={0.243} />
        <circle cx={73.818} cy={48.359} r={0.243} />
        <circle cx={74.554} cy={48.359} r={0.243} />
        <circle cx={75.3} cy={48.359} r={0.243} />
        <circle cx={76.036} cy={48.359} r={0.243} />
        <circle cx={76.774} cy={48.359} r={0.243} />
        <circle cx={77.512} cy={48.359} r={0.243} />
        <circle cx={78.258} cy={48.359} r={0.243} />
        <circle cx={78.993} cy={48.359} r={0.243} />
        <circle cx={79.735} cy={48.359} r={0.243} />
        <circle cx={80.472} cy={48.359} r={0.243} />
        <circle cx={81.218} cy={48.359} r={0.243} />
        <circle cx={81.953} cy={48.359} r={0.243} />
        <circle cx={82.693} cy={48.359} r={0.243} />
        <circle cx={83.429} cy={48.359} r={0.243} />
        <circle cx={87.131} cy={48.359} r={0.243} />
        <circle cx={51.638} cy={47.62} r={0.243} />
        <circle cx={52.375} cy={47.62} r={0.243} />
        <circle cx={53.113} cy={47.62} r={0.243} />
        <circle cx={53.85} cy={47.62} r={0.243} />
        <circle cx={54.596} cy={47.62} r={0.243} />
        <circle cx={55.331} cy={47.62} r={0.243} />
        <circle cx={56.073} cy={47.62} r={0.243} />
        <circle cx={56.811} cy={47.62} r={0.243} />
        <circle cx={57.556} cy={47.62} r={0.243} />
        <circle cx={58.292} cy={47.62} r={0.243} />
        <circle cx={59.031} cy={47.62} r={0.243} />
        <circle cx={59.767} cy={47.62} r={0.243} />
        <circle cx={60.513} cy={47.62} r={0.243} />
        <circle cx={61.248} cy={47.62} r={0.243} />
        <circle cx={61.987} cy={47.62} r={0.243} />
        <circle cx={62.723} cy={47.62} r={0.243} />
        <circle cx={63.47} cy={47.62} r={0.243} />
        <circle cx={64.205} cy={47.62} r={0.243} />
        <circle cx={64.944} cy={47.62} r={0.243} />
        <circle cx={65.681} cy={47.62} r={0.243} />
        <circle cx={66.427} cy={47.62} r={0.243} />
        <circle cx={67.162} cy={47.62} r={0.243} />
        <circle cx={67.905} cy={47.62} r={0.243} />
        <circle cx={68.641} cy={47.62} r={0.243} />
        <circle cx={69.387} cy={47.62} r={0.243} />
        <circle cx={70.122} cy={47.62} r={0.243} />
        <circle cx={70.862} cy={47.62} r={0.243} />
        <circle cx={71.598} cy={47.62} r={0.243} />
        <circle cx={72.344} cy={47.62} r={0.243} />
        <circle cx={73.079} cy={47.62} r={0.243} />
        <circle cx={73.818} cy={47.62} r={0.243} />
        <circle cx={74.554} cy={47.62} r={0.243} />
        <circle cx={75.3} cy={47.62} r={0.243} />
        <circle cx={76.036} cy={47.62} r={0.243} />
        <circle cx={76.774} cy={47.62} r={0.243} />
        <circle cx={77.512} cy={47.62} r={0.243} />
        <circle cx={78.258} cy={47.62} r={0.243} />
        <circle cx={78.993} cy={47.62} r={0.243} />
        <circle cx={79.735} cy={47.62} r={0.243} />
        <circle cx={80.472} cy={47.62} r={0.243} />
        <circle cx={81.218} cy={47.62} r={0.243} />
        <circle cx={81.953} cy={47.62} r={0.243} />
        <circle cx={82.693} cy={47.62} r={0.243} />
        <circle cx={87.131} cy={47.62} r={0.243} />
        <circle cx={87.867} cy={47.62} r={0.243} />
        <circle cx={50.157} cy={46.877} r={0.243} />
        <circle cx={50.892} cy={46.877} r={0.243} />
        <circle cx={53.113} cy={46.877} r={0.243} />
        <circle cx={53.85} cy={46.877} r={0.243} />
        <circle cx={54.596} cy={46.877} r={0.243} />
        <circle cx={55.331} cy={46.877} r={0.243} />
        <circle cx={56.073} cy={46.877} r={0.243} />
        <circle cx={56.811} cy={46.877} r={0.243} />
        <circle cx={57.556} cy={46.877} r={0.243} />
        <circle cx={58.292} cy={46.877} r={0.243} />
        <circle cx={59.031} cy={46.877} r={0.243} />
        <circle cx={59.767} cy={46.877} r={0.243} />
        <circle cx={60.513} cy={46.877} r={0.243} />
        <circle cx={61.248} cy={46.877} r={0.243} />
        <circle cx={61.987} cy={46.877} r={0.243} />
        <circle cx={62.723} cy={46.877} r={0.243} />
        <circle cx={63.47} cy={46.877} r={0.243} />
        <circle cx={64.205} cy={46.877} r={0.243} />
        <circle cx={64.944} cy={46.877} r={0.243} />
        <circle cx={65.681} cy={46.877} r={0.243} />
        <circle cx={66.427} cy={46.877} r={0.243} />
        <circle cx={67.162} cy={46.877} r={0.243} />
        <circle cx={67.905} cy={46.877} r={0.243} />
        <circle cx={68.641} cy={46.877} r={0.243} />
        <circle cx={69.387} cy={46.877} r={0.243} />
        <circle cx={70.122} cy={46.877} r={0.243} />
        <circle cx={70.862} cy={46.877} r={0.243} />
        <circle cx={71.598} cy={46.877} r={0.243} />
        <circle cx={72.344} cy={46.877} r={0.243} />
        <circle cx={73.079} cy={46.877} r={0.243} />
        <circle cx={73.818} cy={46.877} r={0.243} />
        <circle cx={74.554} cy={46.877} r={0.243} />
        <circle cx={75.3} cy={46.877} r={0.243} />
        <circle cx={76.036} cy={46.877} r={0.243} />
        <circle cx={76.774} cy={46.877} r={0.243} />
        <circle cx={77.512} cy={46.877} r={0.243} />
        <circle cx={78.258} cy={46.877} r={0.243} />
        <circle cx={78.993} cy={46.877} r={0.243} />
        <circle cx={79.735} cy={46.877} r={0.243} />
        <circle cx={80.472} cy={46.877} r={0.243} />
        <circle cx={81.218} cy={46.877} r={0.243} />
        <circle cx={81.953} cy={46.877} r={0.243} />
        <circle cx={87.131} cy={46.877} r={0.243} />
        <circle cx={87.867} cy={46.877} r={0.243} />
        <circle cx={88.605} cy={46.877} r={0.243} />
        <circle cx={50.892} cy={46.139} r={0.243} />
        <circle cx={53.85} cy={46.139} r={0.243} />
        <circle cx={54.596} cy={46.139} r={0.243} />
        <circle cx={55.331} cy={46.139} r={0.243} />
        <circle cx={56.073} cy={46.139} r={0.243} />
        <circle cx={56.811} cy={46.139} r={0.243} />
        <circle cx={57.556} cy={46.139} r={0.243} />
        <circle cx={58.292} cy={46.139} r={0.243} />
        <circle cx={59.031} cy={46.139} r={0.243} />
        <circle cx={59.767} cy={46.139} r={0.243} />
        <circle cx={60.513} cy={46.139} r={0.243} />
        <circle cx={61.248} cy={46.139} r={0.243} />
        <circle cx={61.987} cy={46.139} r={0.243} />
        <circle cx={62.723} cy={46.139} r={0.243} />
        <circle cx={63.47} cy={46.139} r={0.243} />
        <circle cx={64.205} cy={46.139} r={0.243} />
        <circle cx={64.944} cy={46.139} r={0.243} />
        <circle cx={65.681} cy={46.139} r={0.243} />
        <circle cx={66.427} cy={46.139} r={0.243} />
        <circle cx={67.162} cy={46.139} r={0.243} />
        <circle cx={67.905} cy={46.139} r={0.243} />
        <circle cx={68.641} cy={46.139} r={0.243} />
        <circle cx={69.387} cy={46.139} r={0.243} />
        <circle cx={70.122} cy={46.139} r={0.243} />
        <circle cx={70.862} cy={46.139} r={0.243} />
        <circle cx={71.598} cy={46.139} r={0.243} />
        <circle cx={72.344} cy={46.139} r={0.243} />
        <circle cx={73.079} cy={46.139} r={0.243} />
        <circle cx={73.818} cy={46.139} r={0.243} />
        <circle cx={74.554} cy={46.139} r={0.243} />
        <circle cx={75.3} cy={46.139} r={0.243} />
        <circle cx={76.036} cy={46.139} r={0.243} />
        <circle cx={76.774} cy={46.139} r={0.243} />
        <circle cx={77.512} cy={46.139} r={0.243} />
        <circle cx={78.258} cy={46.139} r={0.243} />
        <circle cx={78.993} cy={46.139} r={0.243} />
        <circle cx={79.735} cy={46.139} r={0.243} />
        <circle cx={80.472} cy={46.139} r={0.243} />
        <circle cx={81.218} cy={46.139} r={0.243} />
        <circle cx={81.953} cy={46.139} r={0.243} />
        <circle cx={82.693} cy={46.139} r={0.243} />
        <circle cx={87.867} cy={46.139} r={0.243} />
        <circle cx={88.605} cy={46.139} r={0.243} />
        <circle cx={50.157} cy={45.399} r={0.243} />
        <circle cx={50.894} cy={45.399} r={0.243} />
        <circle cx={51.64} cy={45.399} r={0.243} />
        <circle cx={53.114} cy={45.399} r={0.243} />
        <circle cx={53.85} cy={45.399} r={0.243} />
        <circle cx={54.596} cy={45.399} r={0.243} />
        <circle cx={55.332} cy={45.399} r={0.243} />
        <circle cx={56.074} cy={45.399} r={0.243} />
        <circle cx={56.811} cy={45.399} r={0.243} />
        <circle cx={57.556} cy={45.399} r={0.243} />
        <circle cx={58.292} cy={45.399} r={0.243} />
        <circle cx={59.031} cy={45.399} r={0.243} />
        <circle cx={59.768} cy={45.399} r={0.243} />
        <circle cx={60.513} cy={45.399} r={0.243} />
        <circle cx={61.249} cy={45.399} r={0.243} />
        <circle cx={61.988} cy={45.399} r={0.243} />
        <circle cx={62.725} cy={45.399} r={0.243} />
        <circle cx={63.471} cy={45.399} r={0.243} />
        <circle cx={64.206} cy={45.399} r={0.243} />
        <circle cx={64.945} cy={45.399} r={0.243} />
        <circle cx={65.681} cy={45.399} r={0.243} />
        <circle cx={66.427} cy={45.399} r={0.243} />
        <circle cx={67.162} cy={45.399} r={0.243} />
        <circle cx={67.905} cy={45.399} r={0.243} />
        <circle cx={68.641} cy={45.399} r={0.243} />
        <circle cx={69.387} cy={45.399} r={0.243} />
        <circle cx={70.123} cy={45.399} r={0.243} />
        <circle cx={70.862} cy={45.399} r={0.243} />
        <circle cx={71.598} cy={45.399} r={0.243} />
        <circle cx={72.344} cy={45.399} r={0.243} />
        <circle cx={73.08} cy={45.399} r={0.243} />
        <circle cx={73.818} cy={45.399} r={0.243} />
        <circle cx={74.556} cy={45.399} r={0.243} />
        <circle cx={75.301} cy={45.399} r={0.243} />
        <circle cx={76.037} cy={45.399} r={0.243} />
        <circle cx={76.776} cy={45.399} r={0.243} />
        <circle cx={77.512} cy={45.399} r={0.243} />
        <circle cx={78.258} cy={45.399} r={0.243} />
        <circle cx={78.993} cy={45.399} r={0.243} />
        <circle cx={79.735} cy={45.399} r={0.243} />
        <circle cx={80.472} cy={45.399} r={0.243} />
        <circle cx={81.218} cy={45.399} r={0.243} />
        <circle cx={81.953} cy={45.399} r={0.243} />
        <circle cx={82.693} cy={45.399} r={0.243} />
        <circle cx={83.429} cy={45.399} r={0.243} />
        <circle cx={84.911} cy={45.399} r={0.243} />
        <circle cx={86.386} cy={45.399} r={0.243} />
        <circle cx={88.607} cy={45.399} r={0.243} />
        <circle cx={50.157} cy={44.66} r={0.243} />
        <circle cx={50.894} cy={44.66} r={0.243} />
        <circle cx={51.64} cy={44.66} r={0.243} />
        <circle cx={53.114} cy={44.66} r={0.243} />
        <circle cx={54.596} cy={44.66} r={0.243} />
        <circle cx={55.332} cy={44.66} r={0.243} />
        <circle cx={56.074} cy={44.66} r={0.243} />
        <circle cx={56.811} cy={44.66} r={0.243} />
        <circle cx={57.556} cy={44.66} r={0.243} />
        <circle cx={58.292} cy={44.66} r={0.243} />
        <circle cx={59.031} cy={44.66} r={0.243} />
        <circle cx={59.768} cy={44.66} r={0.243} />
        <circle cx={60.513} cy={44.66} r={0.243} />
        <circle cx={61.249} cy={44.66} r={0.243} />
        <circle cx={61.988} cy={44.66} r={0.243} />
        <circle cx={62.725} cy={44.66} r={0.243} />
        <circle cx={63.471} cy={44.66} r={0.243} />
        <circle cx={64.206} cy={44.66} r={0.243} />
        <circle cx={64.945} cy={44.66} r={0.243} />
        <circle cx={65.681} cy={44.66} r={0.243} />
        <circle cx={66.427} cy={44.66} r={0.243} />
        <circle cx={67.162} cy={44.66} r={0.243} />
        <circle cx={67.905} cy={44.66} r={0.243} />
        <circle cx={68.641} cy={44.66} r={0.243} />
        <circle cx={69.387} cy={44.66} r={0.243} />
        <circle cx={70.123} cy={44.66} r={0.243} />
        <circle cx={70.862} cy={44.66} r={0.243} />
        <circle cx={71.598} cy={44.66} r={0.243} />
        <circle cx={72.344} cy={44.66} r={0.243} />
        <circle cx={73.08} cy={44.66} r={0.243} />
        <circle cx={73.818} cy={44.66} r={0.243} />
        <circle cx={74.556} cy={44.66} r={0.243} />
        <circle cx={75.301} cy={44.66} r={0.243} />
        <circle cx={76.037} cy={44.66} r={0.243} />
        <circle cx={76.776} cy={44.66} r={0.243} />
        <circle cx={77.512} cy={44.66} r={0.243} />
        <circle cx={78.258} cy={44.66} r={0.243} />
        <circle cx={78.993} cy={44.66} r={0.243} />
        <circle cx={79.735} cy={44.66} r={0.243} />
        <circle cx={80.472} cy={44.66} r={0.243} />
        <circle cx={81.218} cy={44.66} r={0.243} />
        <circle cx={81.953} cy={44.66} r={0.243} />
        <circle cx={82.693} cy={44.66} r={0.243} />
        <circle cx={83.429} cy={44.66} r={0.243} />
        <circle cx={84.175} cy={44.66} r={0.243} />
        <circle cx={84.911} cy={44.66} r={0.243} />
        <circle cx={85.649} cy={44.66} r={0.243} />
        <circle cx={86.386} cy={44.66} r={0.243} />
        <circle cx={88.607} cy={44.66} r={0.243} />
        <circle cx={89.343} cy={44.66} r={0.243} />
        <circle cx={90.089} cy={44.66} r={0.243} />
        <circle cx={90.824} cy={44.66} r={0.243} />
        <circle cx={50.157} cy={43.918} r={0.243} />
        <circle cx={50.894} cy={43.918} r={0.243} />
        <circle cx={51.64} cy={43.918} r={0.243} />
        <circle cx={53.114} cy={43.918} r={0.243} />
        <circle cx={53.85} cy={43.918} r={0.243} />
        <circle cx={54.596} cy={43.918} r={0.243} />
        <circle cx={55.332} cy={43.918} r={0.243} />
        <circle cx={56.074} cy={43.918} r={0.243} />
        <circle cx={56.811} cy={43.918} r={0.243} />
        <circle cx={57.556} cy={43.918} r={0.243} />
        <circle cx={58.292} cy={43.918} r={0.243} />
        <circle cx={59.031} cy={43.918} r={0.243} />
        <circle cx={59.768} cy={43.918} r={0.243} />
        <circle cx={60.513} cy={43.918} r={0.243} />
        <circle cx={61.249} cy={43.918} r={0.243} />
        <circle cx={61.988} cy={43.918} r={0.243} />
        <circle cx={62.725} cy={43.918} r={0.243} />
        <circle cx={63.471} cy={43.918} r={0.243} />
        <circle cx={64.206} cy={43.918} r={0.243} />
        <circle cx={64.945} cy={43.918} r={0.243} />
        <circle cx={65.681} cy={43.918} r={0.243} />
        <circle cx={66.427} cy={43.918} r={0.243} />
        <circle cx={67.162} cy={43.918} r={0.243} />
        <circle cx={67.905} cy={43.918} r={0.243} />
        <circle cx={68.641} cy={43.918} r={0.243} />
        <circle cx={69.387} cy={43.918} r={0.243} />
        <circle cx={70.123} cy={43.918} r={0.243} />
        <circle cx={70.862} cy={43.918} r={0.243} />
        <circle cx={71.598} cy={43.918} r={0.243} />
        <circle cx={72.344} cy={43.918} r={0.243} />
        <circle cx={73.08} cy={43.918} r={0.243} />
        <circle cx={73.818} cy={43.918} r={0.243} />
        <circle cx={74.556} cy={43.918} r={0.243} />
        <circle cx={75.301} cy={43.918} r={0.243} />
        <circle cx={76.037} cy={43.918} r={0.243} />
        <circle cx={76.776} cy={43.918} r={0.243} />
        <circle cx={77.512} cy={43.918} r={0.243} />
        <circle cx={78.258} cy={43.918} r={0.243} />
        <circle cx={78.993} cy={43.918} r={0.243} />
        <circle cx={79.735} cy={43.918} r={0.243} />
        <circle cx={80.472} cy={43.918} r={0.243} />
        <circle cx={81.218} cy={43.918} r={0.243} />
        <circle cx={81.953} cy={43.918} r={0.243} />
        <circle cx={82.693} cy={43.918} r={0.243} />
        <circle cx={83.429} cy={43.918} r={0.243} />
        <circle cx={84.175} cy={43.918} r={0.243} />
        <circle cx={84.911} cy={43.918} r={0.243} />
        <circle cx={85.649} cy={43.918} r={0.243} />
        <circle cx={86.386} cy={43.918} r={0.243} />
        <circle cx={87.132} cy={43.918} r={0.243} />
        <circle cx={87.867} cy={43.918} r={0.243} />
        <circle cx={88.607} cy={43.918} r={0.243} />
        <circle cx={89.343} cy={43.918} r={0.243} />
        <circle cx={90.089} cy={43.918} r={0.243} />
        <circle cx={90.824} cy={43.918} r={0.243} />
        <circle cx={91.566} cy={43.918} r={0.243} />
        <circle cx={50.157} cy={43.179} r={0.243} />
        <circle cx={50.894} cy={43.179} r={0.243} />
        <circle cx={51.64} cy={43.179} r={0.243} />
        <circle cx={53.114} cy={43.179} r={0.243} />
        <circle cx={53.85} cy={43.179} r={0.243} />
        <circle cx={54.596} cy={43.179} r={0.243} />
        <circle cx={55.332} cy={43.179} r={0.243} />
        <circle cx={56.074} cy={43.179} r={0.243} />
        <circle cx={56.811} cy={43.179} r={0.243} />
        <circle cx={57.556} cy={43.179} r={0.243} />
        <circle cx={58.292} cy={43.179} r={0.243} />
        <circle cx={59.031} cy={43.179} r={0.243} />
        <circle cx={59.768} cy={43.179} r={0.243} />
        <circle cx={60.513} cy={43.179} r={0.243} />
        <circle cx={61.249} cy={43.179} r={0.243} />
        <circle cx={61.988} cy={43.179} r={0.243} />
        <circle cx={62.725} cy={43.179} r={0.243} />
        <circle cx={63.471} cy={43.179} r={0.243} />
        <circle cx={64.206} cy={43.179} r={0.243} />
        <circle cx={64.945} cy={43.179} r={0.243} />
        <circle cx={65.681} cy={43.179} r={0.243} />
        <circle cx={66.427} cy={43.179} r={0.243} />
        <circle cx={67.162} cy={43.179} r={0.243} />
        <circle cx={67.905} cy={43.179} r={0.243} />
        <circle cx={68.641} cy={43.179} r={0.243} />
        <circle cx={69.387} cy={43.179} r={0.243} />
        <circle cx={70.123} cy={43.179} r={0.243} />
        <circle cx={70.862} cy={43.179} r={0.243} />
        <circle cx={71.598} cy={43.179} r={0.243} />
        <circle cx={72.344} cy={43.179} r={0.243} />
        <circle cx={73.08} cy={43.179} r={0.243} />
        <circle cx={73.818} cy={43.179} r={0.243} />
        <circle cx={74.556} cy={43.179} r={0.243} />
        <circle cx={75.301} cy={43.179} r={0.243} />
        <circle cx={76.037} cy={43.179} r={0.243} />
        <circle cx={76.776} cy={43.179} r={0.243} />
        <circle cx={77.512} cy={43.179} r={0.243} />
        <circle cx={78.258} cy={43.179} r={0.243} />
        <circle cx={78.993} cy={43.179} r={0.243} />
        <circle cx={79.735} cy={43.179} r={0.243} />
        <circle cx={80.472} cy={43.179} r={0.243} />
        <circle cx={81.218} cy={43.179} r={0.243} />
        <circle cx={81.953} cy={43.179} r={0.243} />
        <circle cx={82.693} cy={43.179} r={0.243} />
        <circle cx={83.429} cy={43.179} r={0.243} />
        <circle cx={84.175} cy={43.179} r={0.243} />
        <circle cx={84.911} cy={43.179} r={0.243} />
        <circle cx={85.649} cy={43.179} r={0.243} />
        <circle cx={86.386} cy={43.179} r={0.243} />
        <circle cx={87.132} cy={43.179} r={0.243} />
        <circle cx={87.867} cy={43.179} r={0.243} />
        <circle cx={88.607} cy={43.179} r={0.243} />
        <circle cx={89.343} cy={43.179} r={0.243} />
        <circle cx={90.089} cy={43.179} r={0.243} />
        <circle cx={90.824} cy={43.179} r={0.243} />
        <circle cx={91.566} cy={43.179} r={0.243} />
        <circle cx={92.303} cy={43.179} r={0.243} />
        <circle cx={50.159} cy={42.443} r={0.243} />
        <circle cx={50.895} cy={42.443} r={0.243} />
        <circle cx={51.642} cy={42.443} r={0.243} />
        <circle cx={52.377} cy={42.443} r={0.243} />
        <circle cx={53.852} cy={42.443} r={0.243} />
        <circle cx={54.598} cy={42.443} r={0.243} />
        <circle cx={55.334} cy={42.443} r={0.243} />
        <circle cx={56.076} cy={42.443} r={0.243} />
        <circle cx={56.812} cy={42.443} r={0.243} />
        <circle cx={57.558} cy={42.443} r={0.243} />
        <circle cx={58.294} cy={42.443} r={0.243} />
        <circle cx={59.033} cy={42.443} r={0.243} />
        <circle cx={59.77} cy={42.443} r={0.243} />
        <circle cx={60.515} cy={42.443} r={0.243} />
        <circle cx={61.251} cy={42.443} r={0.243} />
        <circle cx={61.99} cy={42.443} r={0.243} />
        <circle cx={62.726} cy={42.443} r={0.243} />
        <circle cx={63.472} cy={42.443} r={0.243} />
        <circle cx={64.208} cy={42.443} r={0.243} />
        <circle cx={64.946} cy={42.443} r={0.243} />
        <circle cx={65.682} cy={42.443} r={0.243} />
        <circle cx={66.429} cy={42.443} r={0.243} />
        <circle cx={67.165} cy={42.443} r={0.243} />
        <circle cx={67.907} cy={42.443} r={0.243} />
        <circle cx={68.643} cy={42.443} r={0.243} />
        <circle cx={69.389} cy={42.443} r={0.243} />
        <circle cx={70.125} cy={42.443} r={0.243} />
        <circle cx={70.863} cy={42.443} r={0.243} />
        <circle cx={71.6} cy={42.443} r={0.243} />
        <circle cx={72.346} cy={42.443} r={0.243} />
        <circle cx={73.082} cy={42.443} r={0.243} />
        <circle cx={73.821} cy={42.443} r={0.243} />
        <circle cx={74.557} cy={42.443} r={0.243} />
        <circle cx={75.303} cy={42.443} r={0.243} />
        <circle cx={76.038} cy={42.443} r={0.243} />
        <circle cx={76.777} cy={42.443} r={0.243} />
        <circle cx={77.513} cy={42.443} r={0.243} />
        <circle cx={78.259} cy={42.443} r={0.243} />
        <circle cx={78.995} cy={42.443} r={0.243} />
        <circle cx={79.737} cy={42.443} r={0.243} />
        <circle cx={80.474} cy={42.443} r={0.243} />
        <circle cx={81.22} cy={42.443} r={0.243} />
        <circle cx={81.955} cy={42.443} r={0.243} />
        <circle cx={82.694} cy={42.443} r={0.243} />
        <circle cx={83.431} cy={42.443} r={0.243} />
        <circle cx={84.177} cy={42.443} r={0.243} />
        <circle cx={84.912} cy={42.443} r={0.243} />
        <circle cx={85.652} cy={42.443} r={0.243} />
        <circle cx={86.388} cy={42.443} r={0.243} />
        <circle cx={87.134} cy={42.443} r={0.243} />
        <circle cx={87.869} cy={42.443} r={0.243} />
        <circle cx={88.608} cy={42.443} r={0.243} />
        <circle cx={89.344} cy={42.443} r={0.243} />
        <circle cx={90.09} cy={42.443} r={0.243} />
        <circle cx={90.826} cy={42.443} r={0.243} />
        <circle cx={91.568} cy={42.443} r={0.243} />
        <circle cx={50.895} cy={41.704} r={0.243} />
        <circle cx={51.642} cy={41.704} r={0.243} />
        <circle cx={52.377} cy={41.704} r={0.243} />
        <circle cx={53.852} cy={41.704} r={0.243} />
        <circle cx={54.598} cy={41.704} r={0.243} />
        <circle cx={55.334} cy={41.704} r={0.243} />
        <circle cx={58.294} cy={41.704} r={0.243} />
        <circle cx={59.033} cy={41.704} r={0.243} />
        <circle cx={59.77} cy={41.704} r={0.243} />
        <circle cx={60.515} cy={41.704} r={0.243} />
        <circle cx={61.251} cy={41.704} r={0.243} />
        <circle cx={61.99} cy={41.704} r={0.243} />
        <circle cx={62.726} cy={41.704} r={0.243} />
        <circle cx={63.472} cy={41.704} r={0.243} />
        <circle cx={64.208} cy={41.704} r={0.243} />
        <circle cx={64.946} cy={41.704} r={0.243} />
        <circle cx={65.682} cy={41.704} r={0.243} />
        <circle cx={66.429} cy={41.704} r={0.243} />
        <circle cx={67.165} cy={41.704} r={0.243} />
        <circle cx={67.907} cy={41.704} r={0.243} />
        <circle cx={68.643} cy={41.704} r={0.243} />
        <circle cx={69.389} cy={41.704} r={0.243} />
        <circle cx={70.125} cy={41.704} r={0.243} />
        <circle cx={70.863} cy={41.704} r={0.243} />
        <circle cx={71.6} cy={41.704} r={0.243} />
        <circle cx={72.346} cy={41.704} r={0.243} />
        <circle cx={73.082} cy={41.704} r={0.243} />
        <circle cx={73.821} cy={41.704} r={0.243} />
        <circle cx={74.557} cy={41.704} r={0.243} />
        <circle cx={75.303} cy={41.704} r={0.243} />
        <circle cx={76.038} cy={41.704} r={0.243} />
        <circle cx={76.777} cy={41.704} r={0.243} />
        <circle cx={77.513} cy={41.704} r={0.243} />
        <circle cx={78.259} cy={41.704} r={0.243} />
        <circle cx={78.995} cy={41.704} r={0.243} />
        <circle cx={79.737} cy={41.704} r={0.243} />
        <circle cx={80.474} cy={41.704} r={0.243} />
        <circle cx={81.22} cy={41.704} r={0.243} />
        <circle cx={81.955} cy={41.704} r={0.243} />
        <circle cx={82.694} cy={41.704} r={0.243} />
        <circle cx={83.431} cy={41.704} r={0.243} />
        <circle cx={84.177} cy={41.704} r={0.243} />
        <circle cx={84.912} cy={41.704} r={0.243} />
        <circle cx={85.652} cy={41.704} r={0.243} />
        <circle cx={86.388} cy={41.704} r={0.243} />
        <circle cx={87.134} cy={41.704} r={0.243} />
        <circle cx={87.869} cy={41.704} r={0.243} />
        <circle cx={88.608} cy={41.704} r={0.243} />
        <circle cx={89.344} cy={41.704} r={0.243} />
        <circle cx={90.09} cy={41.704} r={0.243} />
        <circle cx={90.826} cy={41.704} r={0.243} />
        <circle cx={91.568} cy={41.704} r={0.243} />
        <circle cx={92.305} cy={41.704} r={0.243} />
        <circle cx={93.05} cy={41.704} r={0.243} />
        <circle cx={93.786} cy={41.704} r={0.243} />
        <circle cx={94.525} cy={41.704} r={0.243} />
        <circle cx={50.895} cy={40.962} r={0.243} />
        <circle cx={51.641} cy={40.962} r={0.243} />
        <circle cx={52.377} cy={40.962} r={0.243} />
        <circle cx={53.115} cy={40.962} r={0.243} />
        <circle cx={53.852} cy={40.962} r={0.243} />
        <circle cx={54.598} cy={40.962} r={0.243} />
        <circle cx={55.333} cy={40.962} r={0.243} />
        <circle cx={56.076} cy={40.962} r={0.243} />
        <circle cx={56.812} cy={40.962} r={0.243} />
        <circle cx={57.558} cy={40.962} r={0.243} />
        <circle cx={59.77} cy={40.962} r={0.243} />
        <circle cx={60.515} cy={40.962} r={0.243} />
        <circle cx={61.251} cy={40.962} r={0.243} />
        <circle cx={61.99} cy={40.962} r={0.243} />
        <circle cx={62.726} cy={40.962} r={0.243} />
        <circle cx={63.472} cy={40.962} r={0.243} />
        <circle cx={64.208} cy={40.962} r={0.243} />
        <circle cx={64.946} cy={40.962} r={0.243} />
        <circle cx={65.682} cy={40.962} r={0.243} />
        <circle cx={66.429} cy={40.962} r={0.243} />
        <circle cx={67.165} cy={40.962} r={0.243} />
        <circle cx={67.907} cy={40.962} r={0.243} />
        <circle cx={68.643} cy={40.962} r={0.243} />
        <circle cx={69.389} cy={40.962} r={0.243} />
        <circle cx={70.125} cy={40.962} r={0.243} />
        <circle cx={70.863} cy={40.962} r={0.243} />
        <circle cx={71.6} cy={40.962} r={0.243} />
        <circle cx={72.346} cy={40.962} r={0.243} />
        <circle cx={73.082} cy={40.962} r={0.243} />
        <circle cx={73.821} cy={40.962} r={0.243} />
        <circle cx={74.557} cy={40.962} r={0.243} />
        <circle cx={75.303} cy={40.962} r={0.243} />
        <circle cx={76.038} cy={40.962} r={0.243} />
        <circle cx={76.777} cy={40.962} r={0.243} />
        <circle cx={77.513} cy={40.962} r={0.243} />
        <circle cx={78.259} cy={40.962} r={0.243} />
        <circle cx={78.995} cy={40.962} r={0.243} />
        <circle cx={79.737} cy={40.962} r={0.243} />
        <circle cx={80.474} cy={40.962} r={0.243} />
        <circle cx={81.22} cy={40.962} r={0.243} />
        <circle cx={81.955} cy={40.962} r={0.243} />
        <circle cx={82.694} cy={40.962} r={0.243} />
        <circle cx={83.431} cy={40.962} r={0.243} />
        <circle cx={84.177} cy={40.962} r={0.243} />
        <circle cx={84.912} cy={40.962} r={0.243} />
        <circle cx={85.652} cy={40.962} r={0.243} />
        <circle cx={86.388} cy={40.962} r={0.243} />
        <circle cx={87.134} cy={40.962} r={0.243} />
        <circle cx={87.869} cy={40.962} r={0.243} />
        <circle cx={88.608} cy={40.962} r={0.243} />
        <circle cx={89.344} cy={40.962} r={0.243} />
        <circle cx={90.09} cy={40.962} r={0.243} />
        <circle cx={90.826} cy={40.962} r={0.243} />
        <circle cx={91.568} cy={40.962} r={0.243} />
        <circle cx={92.305} cy={40.962} r={0.243} />
        <circle cx={93.05} cy={40.962} r={0.243} />
        <circle cx={93.786} cy={40.962} r={0.243} />
        <circle cx={94.525} cy={40.962} r={0.243} />
        <circle cx={95.262} cy={40.962} r={0.243} />
        <circle cx={51.641} cy={40.223} r={0.243} />
        <circle cx={52.377} cy={40.223} r={0.243} />
        <circle cx={53.115} cy={40.223} r={0.243} />
        <circle cx={53.852} cy={40.223} r={0.243} />
        <circle cx={54.598} cy={40.223} r={0.243} />
        <circle cx={55.333} cy={40.223} r={0.243} />
        <circle cx={56.076} cy={40.223} r={0.243} />
        <circle cx={56.812} cy={40.223} r={0.243} />
        <circle cx={59.033} cy={40.223} r={0.243} />
        <circle cx={60.515} cy={40.223} r={0.243} />
        <circle cx={61.251} cy={40.223} r={0.243} />
        <circle cx={61.99} cy={40.223} r={0.243} />
        <circle cx={62.726} cy={40.223} r={0.243} />
        <circle cx={63.472} cy={40.223} r={0.243} />
        <circle cx={64.208} cy={40.223} r={0.243} />
        <circle cx={64.946} cy={40.223} r={0.243} />
        <circle cx={65.682} cy={40.223} r={0.243} />
        <circle cx={66.429} cy={40.223} r={0.243} />
        <circle cx={67.165} cy={40.223} r={0.243} />
        <circle cx={67.907} cy={40.223} r={0.243} />
        <circle cx={68.643} cy={40.223} r={0.243} />
        <circle cx={69.389} cy={40.223} r={0.243} />
        <circle cx={70.125} cy={40.223} r={0.243} />
        <circle cx={70.863} cy={40.223} r={0.243} />
        <circle cx={71.6} cy={40.223} r={0.243} />
        <circle cx={72.346} cy={40.223} r={0.243} />
        <circle cx={73.082} cy={40.223} r={0.243} />
        <circle cx={73.821} cy={40.223} r={0.243} />
        <circle cx={74.557} cy={40.223} r={0.243} />
        <circle cx={75.303} cy={40.223} r={0.243} />
        <circle cx={76.038} cy={40.223} r={0.243} />
        <circle cx={76.777} cy={40.223} r={0.243} />
        <circle cx={77.513} cy={40.223} r={0.243} />
        <circle cx={78.259} cy={40.223} r={0.243} />
        <circle cx={78.995} cy={40.223} r={0.243} />
        <circle cx={79.737} cy={40.223} r={0.243} />
        <circle cx={80.474} cy={40.223} r={0.243} />
        <circle cx={81.22} cy={40.223} r={0.243} />
        <circle cx={81.955} cy={40.223} r={0.243} />
        <circle cx={82.694} cy={40.223} r={0.243} />
        <circle cx={83.431} cy={40.223} r={0.243} />
        <circle cx={84.177} cy={40.223} r={0.243} />
        <circle cx={84.912} cy={40.223} r={0.243} />
        <circle cx={85.652} cy={40.223} r={0.243} />
        <circle cx={86.388} cy={40.223} r={0.243} />
        <circle cx={87.134} cy={40.223} r={0.243} />
        <circle cx={87.869} cy={40.223} r={0.243} />
        <circle cx={88.608} cy={40.223} r={0.243} />
        <circle cx={89.344} cy={40.223} r={0.243} />
        <circle cx={90.09} cy={40.223} r={0.243} />
        <circle cx={90.826} cy={40.223} r={0.243} />
        <circle cx={91.568} cy={40.223} r={0.243} />
        <circle cx={92.305} cy={40.223} r={0.243} />
        <circle cx={93.05} cy={40.223} r={0.243} />
        <circle cx={93.786} cy={40.223} r={0.243} />
        <circle cx={51.642} cy={39.483} r={0.243} />
        <circle cx={52.378} cy={39.483} r={0.243} />
        <circle cx={53.117} cy={39.483} r={0.243} />
        <circle cx={53.853} cy={39.483} r={0.243} />
        <circle cx={54.599} cy={39.483} r={0.243} />
        <circle cx={55.334} cy={39.483} r={0.243} />
        <circle cx={56.077} cy={39.483} r={0.243} />
        <circle cx={56.812} cy={39.483} r={0.243} />
        <circle cx={62.727} cy={39.483} r={0.243} />
        <circle cx={63.473} cy={39.483} r={0.243} />
        <circle cx={64.947} cy={39.483} r={0.243} />
        <circle cx={65.684} cy={39.483} r={0.243} />
        <circle cx={66.43} cy={39.483} r={0.243} />
        <circle cx={67.165} cy={39.483} r={0.243} />
        <circle cx={67.907} cy={39.483} r={0.243} />
        <circle cx={68.644} cy={39.483} r={0.243} />
        <circle cx={69.39} cy={39.483} r={0.243} />
        <circle cx={70.125} cy={39.483} r={0.243} />
        <circle cx={70.864} cy={39.483} r={0.243} />
        <circle cx={71.6} cy={39.483} r={0.243} />
        <circle cx={72.346} cy={39.483} r={0.243} />
        <circle cx={73.082} cy={39.483} r={0.243} />
        <circle cx={73.821} cy={39.483} r={0.243} />
        <circle cx={74.558} cy={39.483} r={0.243} />
        <circle cx={75.303} cy={39.483} r={0.243} />
        <circle cx={76.039} cy={39.483} r={0.243} />
        <circle cx={76.778} cy={39.483} r={0.243} />
        <circle cx={77.515} cy={39.483} r={0.243} />
        <circle cx={78.26} cy={39.483} r={0.243} />
        <circle cx={78.996} cy={39.483} r={0.243} />
        <circle cx={79.738} cy={39.483} r={0.243} />
        <circle cx={80.475} cy={39.483} r={0.243} />
        <circle cx={81.221} cy={39.483} r={0.243} />
        <circle cx={81.956} cy={39.483} r={0.243} />
        <circle cx={82.695} cy={39.483} r={0.243} />
        <circle cx={83.431} cy={39.483} r={0.243} />
        <circle cx={84.177} cy={39.483} r={0.243} />
        <circle cx={84.912} cy={39.483} r={0.243} />
        <circle cx={85.652} cy={39.483} r={0.243} />
        <circle cx={86.388} cy={39.483} r={0.243} />
        <circle cx={87.134} cy={39.483} r={0.243} />
        <circle cx={87.87} cy={39.483} r={0.243} />
        <circle cx={88.609} cy={39.483} r={0.243} />
        <circle cx={89.345} cy={39.483} r={0.243} />
        <circle cx={90.091} cy={39.483} r={0.243} />
        <circle cx={90.826} cy={39.483} r={0.243} />
        <circle cx={91.568} cy={39.483} r={0.243} />
        <circle cx={92.305} cy={39.483} r={0.243} />
        <circle cx={93.051} cy={39.483} r={0.243} />
        <circle cx={53.117} cy={38.744} r={0.243} />
        <circle cx={53.853} cy={38.744} r={0.243} />
        <circle cx={54.599} cy={38.744} r={0.243} />
        <circle cx={64.947} cy={38.744} r={0.243} />
        <circle cx={65.684} cy={38.744} r={0.243} />
        <circle cx={66.43} cy={38.744} r={0.243} />
        <circle cx={67.165} cy={38.744} r={0.243} />
        <circle cx={67.907} cy={38.744} r={0.243} />
        <circle cx={68.644} cy={38.744} r={0.243} />
        <circle cx={69.39} cy={38.744} r={0.243} />
        <circle cx={70.125} cy={38.744} r={0.243} />
        <circle cx={70.864} cy={38.744} r={0.243} />
        <circle cx={71.6} cy={38.744} r={0.243} />
        <circle cx={72.346} cy={38.744} r={0.243} />
        <circle cx={73.082} cy={38.744} r={0.243} />
        <circle cx={73.821} cy={38.744} r={0.243} />
        <circle cx={74.558} cy={38.744} r={0.243} />
        <circle cx={75.303} cy={38.744} r={0.243} />
        <circle cx={76.039} cy={38.744} r={0.243} />
        <circle cx={76.778} cy={38.744} r={0.243} />
        <circle cx={77.515} cy={38.744} r={0.243} />
        <circle cx={78.26} cy={38.744} r={0.243} />
        <circle cx={78.996} cy={38.744} r={0.243} />
        <circle cx={79.738} cy={38.744} r={0.243} />
        <circle cx={80.475} cy={38.744} r={0.243} />
        <circle cx={81.221} cy={38.744} r={0.243} />
        <circle cx={81.956} cy={38.744} r={0.243} />
        <circle cx={82.695} cy={38.744} r={0.243} />
        <circle cx={83.431} cy={38.744} r={0.243} />
        <circle cx={84.177} cy={38.744} r={0.243} />
        <circle cx={84.912} cy={38.744} r={0.243} />
        <circle cx={85.652} cy={38.744} r={0.243} />
        <circle cx={86.388} cy={38.744} r={0.243} />
        <circle cx={87.134} cy={38.744} r={0.243} />
        <circle cx={87.87} cy={38.744} r={0.243} />
        <circle cx={90.826} cy={38.744} r={0.243} />
        <circle cx={53.853} cy={38.002} r={0.243} />
        <circle cx={61.252} cy={38.002} r={0.243} />
        <circle cx={64.208} cy={38.002} r={0.243} />
        <circle cx={64.947} cy={38.002} r={0.243} />
        <circle cx={65.684} cy={38.002} r={0.243} />
        <circle cx={66.43} cy={38.002} r={0.243} />
        <circle cx={67.165} cy={38.002} r={0.243} />
        <circle cx={67.907} cy={38.002} r={0.243} />
        <circle cx={68.644} cy={38.002} r={0.243} />
        <circle cx={69.39} cy={38.002} r={0.243} />
        <circle cx={70.125} cy={38.002} r={0.243} />
        <circle cx={70.864} cy={38.002} r={0.243} />
        <circle cx={71.6} cy={38.002} r={0.243} />
        <circle cx={72.346} cy={38.002} r={0.243} />
        <circle cx={73.082} cy={38.002} r={0.243} />
        <circle cx={73.821} cy={38.002} r={0.243} />
        <circle cx={74.558} cy={38.002} r={0.243} />
        <circle cx={75.303} cy={38.002} r={0.243} />
        <circle cx={76.039} cy={38.002} r={0.243} />
        <circle cx={76.778} cy={38.002} r={0.243} />
        <circle cx={77.515} cy={38.002} r={0.243} />
        <circle cx={78.26} cy={38.002} r={0.243} />
        <circle cx={78.996} cy={38.002} r={0.243} />
        <circle cx={79.738} cy={38.002} r={0.243} />
        <circle cx={80.475} cy={38.002} r={0.243} />
        <circle cx={81.221} cy={38.002} r={0.243} />
        <circle cx={81.956} cy={38.002} r={0.243} />
        <circle cx={82.695} cy={38.002} r={0.243} />
        <circle cx={83.431} cy={38.002} r={0.243} />
        <circle cx={84.177} cy={38.002} r={0.243} />
        <circle cx={84.912} cy={38.002} r={0.243} />
        <circle cx={85.652} cy={38.002} r={0.243} />
        <circle cx={87.134} cy={38.002} r={0.243} />
        <circle cx={61.252} cy={37.263} r={0.243} />
        <circle cx={64.947} cy={37.263} r={0.243} />
        <circle cx={65.684} cy={37.263} r={0.243} />
        <circle cx={66.43} cy={37.263} r={0.243} />
        <circle cx={67.165} cy={37.263} r={0.243} />
        <circle cx={68.644} cy={37.263} r={0.243} />
        <circle cx={69.39} cy={37.263} r={0.243} />
        <circle cx={70.125} cy={37.263} r={0.243} />
        <circle cx={70.864} cy={37.263} r={0.243} />
        <circle cx={71.6} cy={37.263} r={0.243} />
        <circle cx={72.346} cy={37.263} r={0.243} />
        <circle cx={73.082} cy={37.263} r={0.243} />
        <circle cx={73.821} cy={37.263} r={0.243} />
        <circle cx={74.558} cy={37.263} r={0.243} />
        <circle cx={75.303} cy={37.263} r={0.243} />
        <circle cx={76.039} cy={37.263} r={0.243} />
        <circle cx={76.778} cy={37.263} r={0.243} />
        <circle cx={77.515} cy={37.263} r={0.243} />
        <circle cx={78.26} cy={37.263} r={0.243} />
        <circle cx={78.996} cy={37.263} r={0.243} />
        <circle cx={79.738} cy={37.263} r={0.243} />
        <circle cx={83.431} cy={37.263} r={0.243} />
        <circle cx={84.177} cy={37.263} r={0.243} />
        <circle cx={84.912} cy={37.263} r={0.243} />
        <circle cx={61.252} cy={36.529} r={0.243} />
        <circle cx={64.948} cy={36.529} r={0.243} />
        <circle cx={65.684} cy={36.529} r={0.243} />
        <circle cx={67.908} cy={36.529} r={0.243} />
        <circle cx={68.644} cy={36.529} r={0.243} />
        <circle cx={69.39} cy={36.529} r={0.243} />
        <circle cx={70.126} cy={36.529} r={0.243} />
        <circle cx={70.865} cy={36.529} r={0.243} />
        <circle cx={71.6} cy={36.529} r={0.243} />
        <circle cx={72.347} cy={36.529} r={0.243} />
        <circle cx={73.083} cy={36.529} r={0.243} />
        <circle cx={73.821} cy={36.529} r={0.243} />
        <circle cx={74.558} cy={36.529} r={0.243} />
        <circle cx={75.304} cy={36.529} r={0.243} />
        <circle cx={76.039} cy={36.529} r={0.243} />
        <circle cx={76.778} cy={36.529} r={0.243} />
        <circle cx={77.515} cy={36.529} r={0.243} />
        <circle cx={78.26} cy={36.529} r={0.243} />
        <circle cx={78.996} cy={36.529} r={0.243} />
        <circle cx={79.739} cy={36.529} r={0.243} />
        <circle cx={83.432} cy={36.529} r={0.243} />
        <circle cx={61.252} cy={35.79} r={0.243} />
        <circle cx={69.39} cy={35.79} r={0.243} />
        <circle cx={70.126} cy={35.79} r={0.243} />
        <circle cx={70.865} cy={35.79} r={0.243} />
        <circle cx={71.6} cy={35.79} r={0.243} />
        <circle cx={72.347} cy={35.79} r={0.243} />
        <circle cx={73.083} cy={35.79} r={0.243} />
        <circle cx={73.821} cy={35.79} r={0.243} />
        <circle cx={74.558} cy={35.79} r={0.243} />
        <circle cx={75.304} cy={35.79} r={0.243} />
        <circle cx={76.778} cy={35.79} r={0.243} />
        <circle cx={78.996} cy={35.79} r={0.243} />
        <circle cx={61.99} cy={35.048} r={0.243} />
        <circle cx={69.39} cy={35.048} r={0.243} />
        <circle cx={70.126} cy={35.048} r={0.243} />
        <circle cx={70.865} cy={35.048} r={0.243} />
        <circle cx={71.6} cy={35.048} r={0.243} />
        <circle cx={72.347} cy={35.048} r={0.243} />
        <circle cx={73.083} cy={35.048} r={0.243} />
        <circle cx={73.821} cy={35.048} r={0.243} />
        <circle cx={74.558} cy={35.048} r={0.243} />
        <circle cx={75.304} cy={35.048} r={0.243} />
        <circle cx={61.99} cy={34.309} r={0.243} />
        <circle cx={62.727} cy={34.309} r={0.243} />
        <circle cx={70.126} cy={34.309} r={0.243} />
        <circle cx={70.865} cy={34.309} r={0.243} />
        <circle cx={71.6} cy={34.309} r={0.243} />
        <circle cx={72.347} cy={34.309} r={0.243} />
        <circle cx={73.083} cy={34.309} r={0.243} />
        <circle cx={73.821} cy={34.309} r={0.243} />
        <circle cx={74.558} cy={34.309} r={0.243} />
        <circle cx={75.304} cy={34.309} r={0.243} />
        <circle cx={76.039} cy={34.309} r={0.243} />
        <circle cx={62.727} cy={33.569} r={0.243} />
        <circle cx={63.474} cy={33.569} r={0.243} />
        <circle cx={64.209} cy={33.569} r={0.243} />
        <circle cx={71.602} cy={33.569} r={0.243} />
        <circle cx={72.348} cy={33.569} r={0.243} />
        <circle cx={73.083} cy={33.569} r={0.243} />
        <circle cx={73.822} cy={33.569} r={0.243} />
        <circle cx={74.558} cy={33.569} r={0.243} />
        <circle cx={75.304} cy={33.569} r={0.243} />
        <circle cx={76.04} cy={33.569} r={0.243} />
        <circle cx={51.642} cy={32.83} r={0.243} />
        <circle cx={64.209} cy={32.83} r={0.243} />
        <circle cx={64.948} cy={32.83} r={0.243} />
        <circle cx={71.602} cy={32.83} r={0.243} />
        <circle cx={72.348} cy={32.83} r={0.243} />
        <circle cx={73.083} cy={32.83} r={0.243} />
        <circle cx={73.822} cy={32.83} r={0.243} />
        <circle cx={74.558} cy={32.83} r={0.243} />
        <circle cx={75.304} cy={32.83} r={0.243} />
        <circle cx={51.642} cy={32.088} r={0.243} />
        <circle cx={73.822} cy={32.088} r={0.243} />
        <circle cx={50.896} cy={31.349} r={0.243} />
        <circle cx={51.642} cy={31.349} r={0.243} />
        <circle cx={50.898} cy={30.613} r={0.243} />
        <circle cx={51.645} cy={30.613} r={0.243} />
        <circle cx={50.898} cy={29.874} r={0.243} />
        <circle cx={51.645} cy={29.874} r={0.243} />
        <circle cx={52.38} cy={29.874} r={0.243} />
        <circle cx={53.119} cy={29.874} r={0.243} />
        <circle cx={50.163} cy={29.131} r={0.243} />
        <circle cx={50.898} cy={29.131} r={0.243} />
        <circle cx={51.645} cy={29.131} r={0.243} />
        <circle cx={53.119} cy={29.131} r={0.243} />
        <circle cx={53.855} cy={29.131} r={0.243} />
        <circle cx={52.38} cy={28.393} r={0.243} />
        <circle cx={53.119} cy={28.393} r={0.243} />
        <circle cx={53.855} cy={28.393} r={0.243} />
        <circle cx={52.381} cy={27.653} r={0.243} />
        <circle cx={53.119} cy={27.653} r={0.243} />
      </svg>

      <div className="absolute right-[55%] top-[15%] size-14 rounded-full bg-white p-1 shadow ring-[1px] ring-gray-950/10">
        <div className="relative z-10 h-full w-full overflow-hidden rounded-full">
          <Image
            fill
            className="w-full object-cover"
            src={
              "https://images.pexels.com/photos/4919373/pexels-photo-4919373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt={``}
          />
        </div>

        <div className="absolute -bottom-[0.45rem] left-[calc(50%-(1.25rem/2))] size-5 rotate-45 border border-l-0 border-t-0 border-gray-950/10 bg-white shadow"></div>
      </div>

      <div className="absolute left-[25%] top-[50%] size-14 rounded-full bg-white p-1 shadow ring-[1px] ring-gray-950/10">
        <div className="relative z-10 h-full w-full overflow-hidden rounded-full">
          <Image
            fill
            className="w-full object-cover"
            src={
              "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt={``}
          />
        </div>

        <div className="absolute -bottom-[0.45rem] left-[calc(50%-(1.25rem/2))] size-5 rotate-45 border border-l-0 border-t-0 border-gray-950/10 bg-white shadow"></div>
      </div>

      <div className="absolute right-[25%] top-[25%] size-14 rounded-full bg-white p-1 shadow ring-[1px] ring-gray-950/10">
        <div className="relative z-10 h-full w-full overflow-hidden rounded-full">
          <Image
            fill
            className="w-full object-cover"
            src={
              "https://images.pexels.com/photos/2918513/pexels-photo-2918513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt={``}
          />
        </div>

        <div className="absolute -bottom-[0.45rem] left-[calc(50%-(1.25rem/2))] size-5 rotate-45 border border-l-0 border-t-0 border-gray-950/10 bg-white shadow"></div>
      </div>

      <div className="absolute right-[40%] top-[50%] size-14 rounded-full bg-white p-1 shadow ring-[1px] ring-gray-950/10">
        <div className="relative z-10 h-full w-full overflow-hidden rounded-full">
          <Image
            fill
            className="w-full object-cover"
            src={
              "https://images.pexels.com/photos/1484801/pexels-photo-1484801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt={``}
          />
        </div>

        <div className="absolute -bottom-[0.45rem] left-[calc(50%-(1.25rem/2))] size-5 rotate-45 border border-l-0 border-t-0 border-gray-950/10 bg-white shadow"></div>
      </div>
    </div>
  );
};
