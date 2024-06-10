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
import { FunctionKey, Key } from "./components/Key";

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
      {/* hero */}

      {/* hiring */}
      <section className="bg-gradient-to-b from-white from-10% to-gray-100 py-32">
        <div className="mx-auto w-full max-w-screen-xl px-5 xl:px-0">
          <p className="font-mono text-xs/4 uppercase tracking-wider text-gray-500">
            hiring
          </p>

          <h2 className="mt-2 max-w-2xl text-5xl font-medium tracking-tighter text-gray-950 md:text-6xl">
            Everything you need to build your team.
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-screen-xl px-5 xl:px-0">
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
            <div className="col-span-12 rounded-lg bg-white shadow-sm ring-[1px] ring-gray-950/5 md:col-span-6 md:rounded-bl-[2rem] xl:col-span-4 xl:rounded-bl-lg">
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
            <div className="col-span-12 rounded-lg rounded-b-[2rem] bg-white shadow-sm ring-[1px] ring-gray-950/5 md:col-span-6 md:rounded-bl-none md:rounded-br-[2rem] xl:col-span-4">
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
          {Array(10)
            .fill(0)
            .map((_, idx) => (
              <TestimonialCard
                key={idx}
                ref={(el) => {
                  itemRefs.current[idx] = el;
                }}
                root={containerRef}
                getItemPosition={() => getItemPosition(idx)}
                name={`Tim Yards`}
                content="Thanks to BarelyHR, we're now finding a new candidates that we never would have found with our previous methods."
                position="VP of Human Resources, Protocol"
                image="https://images.pexels.com/photos/886285/pexels-photo-886285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />

              /* 
              <TestimonialCard
                  root={container}
                  name="Tim Yards"
                  content="Thanks to BarelyHR, we're now finding a new candidates that we never would have found with our previous methods."
                  position="VP of Human Resources, Protocol"
                  image="https://images.pexels.com/photos/886285/pexels-photo-886285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <TestimonialCard
                  root={container}
                  name="Amy chase"
                  content="BarelyHR made onboarding our new remote employees a breeze."
                  position="Head of Marketting, TaxPal"
                  image="https://images.pexels.com/photos/2448531/pexels-photo-2448531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <TestimonialCard
                  root={container}
                  name="James Warden"
                  content="Lorem ipsum dolor sit amet consectetur adipisicing elit, dolor sit amet consectetur adipisicing elit."
                  position="VP Product Development, TaxPal"
                  image="https://images.pexels.com/photos/10276340/pexels-photo-10276340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
              */
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

const applied = [
  {
    name: "Amy Litchy",
    date: "3 days ago",
    image:
      "https://images.pexels.com/photos/886285/pexels-photo-886285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    match: 80,
  },
  {
    name: "Doug Jacobs",
    date: "2 days ago",
    image:
      "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    match: 65,
  },
  {
    name: "Enrique Aguilar",
    date: "5 days ago",
    image:
      "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    match: 25,
  },
];

const phoneScreening = [
  {
    name: "Enrique Aguilar",
    date: "5 days ago",
    image:
      "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    match: 15,
  },
  {
    name: "Amy Litchy",
    date: "3 days ago",
    image:
      "https://images.pexels.com/photos/886285/pexels-photo-886285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    match: 80,
  },
];

const interview = [
  {
    name: "Doug Jacobs",
    date: "2 days ago",
    image:
      "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    match: 85,
  },
];

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

        <FunctionKey
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
        </FunctionKey>

        <FunctionKey
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
        </FunctionKey>

        <FunctionKey
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
        </FunctionKey>

        <FunctionKey
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
        </FunctionKey>

        <FunctionKey
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
        </FunctionKey>

        <FunctionKey
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
        </FunctionKey>

        <FunctionKey
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
        </FunctionKey>

        <FunctionKey
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
        </FunctionKey>

        <FunctionKey
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
        </FunctionKey>

        <FunctionKey
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
        </FunctionKey>

        <FunctionKey
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
        </FunctionKey>

        <FunctionKey
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
        </FunctionKey>

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
    <div className="relative mx-auto h-[26rem] w-[26rem] scale-95">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        fillRule="evenodd"
        clipRule="evenodd"
        viewBox="0 0 100 125"
      >
        <circle cx={31.534} cy={5.684} r={0.3} />
        <circle cx={33.997} cy={5.684} r={0.3} />
        <circle cx={36.457} cy={5.684} r={0.3} />
        <circle cx={29.074} cy={8.145} r={0.3} />
        <circle cx={31.534} cy={8.145} r={0.3} />
        <circle cx={33.997} cy={8.145} r={0.3} />
        <circle cx={36.457} cy={8.145} r={0.3} />
        <circle cx={38.921} cy={8.145} r={0.3} />
        <circle cx={33.997} cy={10.609} r={0.3} />
        <circle cx={41.384} cy={10.609} r={0.3} />
        <circle cx={36.457} cy={13.072} r={0.3} />
        <circle cx={41.384} cy={13.072} r={0.3} />
        <circle cx={43.844} cy={13.072} r={0.3} />
        <circle cx={33.997} cy={15.534} r={0.3} />
        <circle cx={36.457} cy={15.534} r={0.3} />
        <circle cx={38.921} cy={15.534} r={0.3} />
        <circle cx={41.384} cy={15.534} r={0.3} />
        <circle cx={43.844} cy={15.534} r={0.3} />
        <circle cx={46.307} cy={15.534} r={0.3} />
        <circle cx={48.77} cy={15.534} r={0.3} />
        <circle cx={36.457} cy={17.994} r={0.3} />
        <circle cx={38.921} cy={17.994} r={0.3} />
        <circle cx={41.384} cy={17.994} r={0.3} />
        <circle cx={43.844} cy={17.994} r={0.3} />
        <circle cx={46.307} cy={17.994} r={0.3} />
        <circle cx={48.77} cy={17.994} r={0.3} />
        <circle cx={33.997} cy={20.457} r={0.3} />
        <circle cx={36.457} cy={20.457} r={0.3} />
        <circle cx={38.921} cy={20.457} r={0.3} />
        <circle cx={41.384} cy={20.457} r={0.3} />
        <circle cx={43.844} cy={20.457} r={0.3} />
        <circle cx={46.307} cy={20.457} r={0.3} />
        <circle cx={48.77} cy={20.457} r={0.3} />
        <circle cx={51.23} cy={20.457} r={0.3} />
        <circle cx={29.074} cy={22.918} r={0.3} />
        <circle cx={33.997} cy={22.918} r={0.3} />
        <circle cx={36.457} cy={22.918} r={0.3} />
        <circle cx={38.921} cy={22.918} r={0.3} />
        <circle cx={41.384} cy={22.918} r={0.3} />
        <circle cx={43.844} cy={22.918} r={0.3} />
        <circle cx={46.307} cy={22.918} r={0.3} />
        <circle cx={48.77} cy={22.918} r={0.3} />
        <circle cx={51.23} cy={22.918} r={0.3} />
        <circle cx={31.534} cy={25.38} r={0.3} />
        <circle cx={33.997} cy={25.38} r={0.3} />
        <circle cx={36.457} cy={25.38} r={0.3} />
        <circle cx={38.921} cy={25.38} r={0.3} />
        <circle cx={41.384} cy={25.38} r={0.3} />
        <circle cx={43.844} cy={25.38} r={0.3} />
        <circle cx={46.307} cy={25.38} r={0.3} />
        <circle cx={48.77} cy={25.38} r={0.3} />
        <circle cx={51.23} cy={25.38} r={0.3} />
        <circle cx={53.693} cy={25.38} r={0.3} />
        <circle cx={31.534} cy={27.843} r={0.3} />
        <circle cx={33.997} cy={27.843} r={0.3} />
        <circle cx={36.457} cy={27.843} r={0.3} />
        <circle cx={38.921} cy={27.843} r={0.3} />
        <circle cx={41.384} cy={27.843} r={0.3} />
        <circle cx={43.844} cy={27.843} r={0.3} />
        <circle cx={46.307} cy={27.843} r={0.3} />
        <circle cx={48.77} cy={27.843} r={0.3} />
        <circle cx={51.23} cy={27.843} r={0.3} />
        <circle cx={53.693} cy={27.843} r={0.3} />
        <circle cx={56.156} cy={27.843} r={0.3} />
        <circle cx={31.534} cy={30.304} r={0.3} />
        <circle cx={33.997} cy={30.304} r={0.3} />
        <circle cx={36.457} cy={30.304} r={0.3} />
        <circle cx={38.921} cy={30.304} r={0.3} />
        <circle cx={41.384} cy={30.304} r={0.3} />
        <circle cx={43.844} cy={30.304} r={0.3} />
        <circle cx={46.307} cy={30.304} r={0.3} />
        <circle cx={48.77} cy={30.304} r={0.3} />
        <circle cx={51.23} cy={30.304} r={0.3} />
        <circle cx={53.693} cy={30.304} r={0.3} />
        <circle cx={56.156} cy={30.304} r={0.3} />
        <circle cx={58.616} cy={30.304} r={0.3} />
        <circle cx={31.534} cy={32.766} r={0.3} />
        <circle cx={33.997} cy={32.766} r={0.3} />
        <circle cx={36.457} cy={32.766} r={0.3} />
        <circle cx={38.921} cy={32.766} r={0.3} />
        <circle cx={41.384} cy={32.766} r={0.3} />
        <circle cx={43.844} cy={32.766} r={0.3} />
        <circle cx={46.307} cy={32.766} r={0.3} />
        <circle cx={48.77} cy={32.766} r={0.3} />
        <circle cx={51.23} cy={32.766} r={0.3} />
        <circle cx={53.693} cy={32.766} r={0.3} />
        <circle cx={56.156} cy={32.766} r={0.3} />
        <circle cx={58.616} cy={32.766} r={0.3} />
        <circle cx={29.074} cy={35.229} r={0.3} />
        <circle cx={31.534} cy={35.229} r={0.3} />
        <circle cx={33.997} cy={35.229} r={0.3} />
        <circle cx={36.457} cy={35.229} r={0.3} />
        <circle cx={38.921} cy={35.229} r={0.3} />
        <circle cx={41.384} cy={35.229} r={0.3} />
        <circle cx={43.844} cy={35.229} r={0.3} />
        <circle cx={46.307} cy={35.229} r={0.3} />
        <circle cx={48.77} cy={35.229} r={0.3} />
        <circle cx={51.23} cy={35.229} r={0.3} />
        <circle cx={53.693} cy={35.229} r={0.3} />
        <circle cx={56.156} cy={35.229} r={0.3} />
        <circle cx={58.616} cy={35.229} r={0.3} />
        <circle cx={29.074} cy={37.691} r={0.3} />
        <circle cx={31.534} cy={37.691} r={0.3} />
        <circle cx={33.997} cy={37.691} r={0.3} />
        <circle cx={36.457} cy={37.691} r={0.3} />
        <circle cx={38.921} cy={37.691} r={0.3} />
        <circle cx={41.384} cy={37.691} r={0.3} />
        <circle cx={43.844} cy={37.691} r={0.3} />
        <circle cx={46.307} cy={37.691} r={0.3} />
        <circle cx={48.77} cy={37.691} r={0.3} />
        <circle cx={51.23} cy={37.691} r={0.3} />
        <circle cx={53.693} cy={37.691} r={0.3} />
        <circle cx={56.156} cy={37.691} r={0.3} />
        <circle cx={58.616} cy={37.691} r={0.3} />
        <circle cx={61.079} cy={37.691} r={0.3} />
        <circle cx={63.542} cy={37.691} r={0.3} />
        <circle cx={26.611} cy={40.153} r={0.3} />
        <circle cx={29.074} cy={40.153} r={0.3} />
        <circle cx={31.534} cy={40.153} r={0.3} />
        <circle cx={33.997} cy={40.153} r={0.3} />
        <circle cx={36.457} cy={40.153} r={0.3} />
        <circle cx={38.921} cy={40.153} r={0.3} />
        <circle cx={41.384} cy={40.153} r={0.3} />
        <circle cx={43.844} cy={40.153} r={0.3} />
        <circle cx={46.307} cy={40.153} r={0.3} />
        <circle cx={48.77} cy={40.153} r={0.3} />
        <circle cx={51.23} cy={40.153} r={0.3} />
        <circle cx={53.693} cy={40.153} r={0.3} />
        <circle cx={56.156} cy={40.153} r={0.3} />
        <circle cx={58.616} cy={40.153} r={0.3} />
        <circle cx={61.079} cy={40.153} r={0.3} />
        <circle cx={63.542} cy={40.153} r={0.3} />
        <circle cx={29.074} cy={42.616} r={0.3} />
        <circle cx={31.534} cy={42.616} r={0.3} />
        <circle cx={33.997} cy={42.616} r={0.3} />
        <circle cx={36.457} cy={42.616} r={0.3} />
        <circle cx={38.921} cy={42.616} r={0.3} />
        <circle cx={41.384} cy={42.616} r={0.3} />
        <circle cx={43.844} cy={42.616} r={0.3} />
        <circle cx={46.307} cy={42.616} r={0.3} />
        <circle cx={48.77} cy={42.616} r={0.3} />
        <circle cx={51.23} cy={42.616} r={0.3} />
        <circle cx={53.693} cy={42.616} r={0.3} />
        <circle cx={56.156} cy={42.616} r={0.3} />
        <circle cx={58.616} cy={42.616} r={0.3} />
        <circle cx={61.079} cy={42.616} r={0.3} />
        <circle cx={63.542} cy={42.616} r={0.3} />
        <circle cx={29.074} cy={45.076} r={0.3} />
        <circle cx={31.534} cy={45.076} r={0.3} />
        <circle cx={33.997} cy={45.076} r={0.3} />
        <circle cx={36.457} cy={45.076} r={0.3} />
        <circle cx={38.921} cy={45.076} r={0.3} />
        <circle cx={41.384} cy={45.076} r={0.3} />
        <circle cx={43.844} cy={45.076} r={0.3} />
        <circle cx={46.307} cy={45.076} r={0.3} />
        <circle cx={48.77} cy={45.076} r={0.3} />
        <circle cx={51.23} cy={45.076} r={0.3} />
        <circle cx={53.693} cy={45.076} r={0.3} />
        <circle cx={56.156} cy={45.076} r={0.3} />
        <circle cx={58.616} cy={45.076} r={0.3} />
        <circle cx={61.079} cy={45.076} r={0.3} />
        <circle cx={63.542} cy={45.076} r={0.3} />
        <circle cx={26.611} cy={47.538} r={0.3} />
        <circle cx={29.074} cy={47.538} r={0.3} />
        <circle cx={31.534} cy={47.538} r={0.3} />
        <circle cx={33.997} cy={47.538} r={0.3} />
        <circle cx={36.457} cy={47.538} r={0.3} />
        <circle cx={38.921} cy={47.538} r={0.3} />
        <circle cx={41.384} cy={47.538} r={0.3} />
        <circle cx={43.844} cy={47.538} r={0.3} />
        <circle cx={46.307} cy={47.538} r={0.3} />
        <circle cx={48.77} cy={47.538} r={0.3} />
        <circle cx={51.23} cy={47.538} r={0.3} />
        <circle cx={53.693} cy={47.538} r={0.3} />
        <circle cx={56.156} cy={47.538} r={0.3} />
        <circle cx={58.616} cy={47.538} r={0.3} />
        <circle cx={61.079} cy={47.538} r={0.3} />
        <circle cx={63.542} cy={47.538} r={0.3} />
        <circle cx={66.002} cy={47.538} r={0.3} />
        <circle cx={26.611} cy={50.002} r={0.3} />
        <circle cx={29.074} cy={50.002} r={0.3} />
        <circle cx={31.534} cy={50.002} r={0.3} />
        <circle cx={33.997} cy={50.002} r={0.3} />
        <circle cx={36.457} cy={50.002} r={0.3} />
        <circle cx={38.921} cy={50.002} r={0.3} />
        <circle cx={41.384} cy={50.002} r={0.3} />
        <circle cx={43.844} cy={50.002} r={0.3} />
        <circle cx={46.307} cy={50.002} r={0.3} />
        <circle cx={48.77} cy={50.002} r={0.3} />
        <circle cx={51.23} cy={50.002} r={0.3} />
        <circle cx={53.693} cy={50.002} r={0.3} />
        <circle cx={56.156} cy={50.002} r={0.3} />
        <circle cx={58.616} cy={50.002} r={0.3} />
        <circle cx={61.079} cy={50.002} r={0.3} />
        <circle cx={63.542} cy={50.002} r={0.3} />
        <circle cx={66.002} cy={50.002} r={0.3} />
        <circle cx={29.074} cy={52.462} r={0.3} />
        <circle cx={31.534} cy={52.462} r={0.3} />
        <circle cx={33.997} cy={52.462} r={0.3} />
        <circle cx={36.457} cy={52.462} r={0.3} />
        <circle cx={38.921} cy={52.462} r={0.3} />
        <circle cx={41.384} cy={52.462} r={0.3} />
        <circle cx={43.844} cy={52.462} r={0.3} />
        <circle cx={46.307} cy={52.462} r={0.3} />
        <circle cx={48.77} cy={52.462} r={0.3} />
        <circle cx={51.23} cy={52.462} r={0.3} />
        <circle cx={53.693} cy={52.462} r={0.3} />
        <circle cx={56.156} cy={52.462} r={0.3} />
        <circle cx={58.616} cy={52.462} r={0.3} />
        <circle cx={61.079} cy={52.462} r={0.3} />
        <circle cx={63.542} cy={52.462} r={0.3} />
        <circle cx={66.002} cy={52.462} r={0.3} />
        <circle cx={68.465} cy={52.462} r={0.3} />
        <circle cx={29.074} cy={54.924} r={0.3} />
        <circle cx={31.534} cy={54.924} r={0.3} />
        <circle cx={33.997} cy={54.924} r={0.3} />
        <circle cx={36.457} cy={54.924} r={0.3} />
        <circle cx={38.921} cy={54.924} r={0.3} />
        <circle cx={41.384} cy={54.924} r={0.3} />
        <circle cx={43.844} cy={54.924} r={0.3} />
        <circle cx={46.307} cy={54.924} r={0.3} />
        <circle cx={48.77} cy={54.924} r={0.3} />
        <circle cx={51.23} cy={54.924} r={0.3} />
        <circle cx={53.693} cy={54.924} r={0.3} />
        <circle cx={56.156} cy={54.924} r={0.3} />
        <circle cx={58.616} cy={54.924} r={0.3} />
        <circle cx={61.079} cy={54.924} r={0.3} />
        <circle cx={63.542} cy={54.924} r={0.3} />
        <circle cx={66.002} cy={54.924} r={0.3} />
        <circle cx={68.465} cy={54.924} r={0.3} />
        <circle cx={70.926} cy={54.924} r={0.3} />
        <circle cx={29.074} cy={57.385} r={0.3} />
        <circle cx={31.534} cy={57.385} r={0.3} />
        <circle cx={33.997} cy={57.385} r={0.3} />
        <circle cx={36.457} cy={57.385} r={0.3} />
        <circle cx={38.921} cy={57.385} r={0.3} />
        <circle cx={41.384} cy={57.385} r={0.3} />
        <circle cx={43.844} cy={57.385} r={0.3} />
        <circle cx={46.307} cy={57.385} r={0.3} />
        <circle cx={48.77} cy={57.385} r={0.3} />
        <circle cx={51.23} cy={57.385} r={0.3} />
        <circle cx={53.693} cy={57.385} r={0.3} />
        <circle cx={56.156} cy={57.385} r={0.3} />
        <circle cx={58.616} cy={57.385} r={0.3} />
        <circle cx={61.079} cy={57.385} r={0.3} />
        <circle cx={63.542} cy={57.385} r={0.3} />
        <circle cx={66.002} cy={57.385} r={0.3} />
        <circle cx={68.465} cy={57.385} r={0.3} />
        <circle cx={70.926} cy={57.385} r={0.3} />
        <circle cx={73.389} cy={57.385} r={0.3} />
        <circle cx={29.074} cy={59.849} r={0.3} />
        <circle cx={31.534} cy={59.849} r={0.3} />
        <circle cx={33.997} cy={59.849} r={0.3} />
        <circle cx={36.457} cy={59.849} r={0.3} />
        <circle cx={38.921} cy={59.849} r={0.3} />
        <circle cx={41.384} cy={59.849} r={0.3} />
        <circle cx={43.844} cy={59.849} r={0.3} />
        <circle cx={46.307} cy={59.849} r={0.3} />
        <circle cx={48.77} cy={59.849} r={0.3} />
        <circle cx={51.23} cy={59.849} r={0.3} />
        <circle cx={53.693} cy={59.849} r={0.3} />
        <circle cx={56.156} cy={59.849} r={0.3} />
        <circle cx={58.616} cy={59.849} r={0.3} />
        <circle cx={61.079} cy={59.849} r={0.3} />
        <circle cx={63.542} cy={59.849} r={0.3} />
        <circle cx={66.002} cy={59.849} r={0.3} />
        <circle cx={68.465} cy={59.849} r={0.3} />
        <circle cx={70.926} cy={59.849} r={0.3} />
        <circle cx={73.389} cy={59.849} r={0.3} />
        <circle cx={29.074} cy={62.31} r={0.3} />
        <circle cx={31.534} cy={62.31} r={0.3} />
        <circle cx={33.997} cy={62.31} r={0.3} />
        <circle cx={36.457} cy={62.31} r={0.3} />
        <circle cx={38.921} cy={62.31} r={0.3} />
        <circle cx={41.384} cy={62.31} r={0.3} />
        <circle cx={43.844} cy={62.31} r={0.3} />
        <circle cx={46.307} cy={62.31} r={0.3} />
        <circle cx={48.77} cy={62.31} r={0.3} />
        <circle cx={51.23} cy={62.31} r={0.3} />
        <circle cx={53.693} cy={62.31} r={0.3} />
        <circle cx={56.156} cy={62.31} r={0.3} />
        <circle cx={58.616} cy={62.31} r={0.3} />
        <circle cx={61.079} cy={62.31} r={0.3} />
        <circle cx={63.542} cy={62.31} r={0.3} />
        <circle cx={66.002} cy={62.31} r={0.3} />
        <circle cx={68.465} cy={62.31} r={0.3} />
        <circle cx={70.926} cy={62.31} r={0.3} />
        <circle cx={73.389} cy={62.31} r={0.3} />
        <circle cx={29.074} cy={64.772} r={0.3} />
        <circle cx={31.534} cy={64.772} r={0.3} />
        <circle cx={33.997} cy={64.772} r={0.3} />
        <circle cx={36.457} cy={64.772} r={0.3} />
        <circle cx={38.921} cy={64.772} r={0.3} />
        <circle cx={41.384} cy={64.772} r={0.3} />
        <circle cx={43.844} cy={64.772} r={0.3} />
        <circle cx={46.307} cy={64.772} r={0.3} />
        <circle cx={48.77} cy={64.772} r={0.3} />
        <circle cx={51.23} cy={64.772} r={0.3} />
        <circle cx={53.693} cy={64.772} r={0.3} />
        <circle cx={56.156} cy={64.772} r={0.3} />
        <circle cx={58.616} cy={64.772} r={0.3} />
        <circle cx={61.079} cy={64.772} r={0.3} />
        <circle cx={63.542} cy={64.772} r={0.3} />
        <circle cx={66.002} cy={64.772} r={0.3} />
        <circle cx={68.465} cy={64.772} r={0.3} />
        <circle cx={70.926} cy={64.772} r={0.3} />
        <circle cx={73.389} cy={64.772} r={0.3} />
        <circle cx={29.074} cy={67.236} r={0.3} />
        <circle cx={31.534} cy={67.236} r={0.3} />
        <circle cx={33.997} cy={67.236} r={0.3} />
        <circle cx={36.457} cy={67.236} r={0.3} />
        <circle cx={38.921} cy={67.236} r={0.3} />
        <circle cx={41.384} cy={67.236} r={0.3} />
        <circle cx={43.844} cy={67.236} r={0.3} />
        <circle cx={46.307} cy={67.236} r={0.3} />
        <circle cx={48.77} cy={67.236} r={0.3} />
        <circle cx={51.23} cy={67.236} r={0.3} />
        <circle cx={53.693} cy={67.236} r={0.3} />
        <circle cx={56.156} cy={67.236} r={0.3} />
        <circle cx={58.616} cy={67.236} r={0.3} />
        <circle cx={61.079} cy={67.236} r={0.3} />
        <circle cx={63.542} cy={67.236} r={0.3} />
        <circle cx={66.002} cy={67.236} r={0.3} />
        <circle cx={68.465} cy={67.236} r={0.3} />
        <circle cx={70.926} cy={67.236} r={0.3} />
        <circle cx={73.389} cy={67.236} r={0.3} />
        <circle cx={29.074} cy={69.697} r={0.3} />
        <circle cx={31.534} cy={69.697} r={0.3} />
        <circle cx={33.997} cy={69.697} r={0.3} />
        <circle cx={36.457} cy={69.697} r={0.3} />
        <circle cx={38.921} cy={69.697} r={0.3} />
        <circle cx={41.384} cy={69.697} r={0.3} />
        <circle cx={43.844} cy={69.697} r={0.3} />
        <circle cx={46.307} cy={69.697} r={0.3} />
        <circle cx={48.77} cy={69.697} r={0.3} />
        <circle cx={51.23} cy={69.697} r={0.3} />
        <circle cx={53.693} cy={69.697} r={0.3} />
        <circle cx={56.156} cy={69.697} r={0.3} />
        <circle cx={58.616} cy={69.697} r={0.3} />
        <circle cx={61.079} cy={69.697} r={0.3} />
        <circle cx={63.542} cy={69.697} r={0.3} />
        <circle cx={66.002} cy={69.697} r={0.3} />
        <circle cx={68.465} cy={69.697} r={0.3} />
        <circle cx={70.926} cy={69.697} r={0.3} />
        <circle cx={73.389} cy={69.697} r={0.3} />
        <circle cx={29.074} cy={72.159} r={0.3} />
        <circle cx={31.534} cy={72.159} r={0.3} />
        <circle cx={33.997} cy={72.159} r={0.3} />
        <circle cx={36.457} cy={72.159} r={0.3} />
        <circle cx={38.921} cy={72.159} r={0.3} />
        <circle cx={41.384} cy={72.159} r={0.3} />
        <circle cx={43.844} cy={72.159} r={0.3} />
        <circle cx={46.307} cy={72.159} r={0.3} />
        <circle cx={48.77} cy={72.159} r={0.3} />
        <circle cx={51.23} cy={72.159} r={0.3} />
        <circle cx={53.693} cy={72.159} r={0.3} />
        <circle cx={56.156} cy={72.159} r={0.3} />
        <circle cx={58.616} cy={72.159} r={0.3} />
        <circle cx={61.079} cy={72.159} r={0.3} />
        <circle cx={63.542} cy={72.159} r={0.3} />
        <circle cx={66.002} cy={72.159} r={0.3} />
        <circle cx={68.465} cy={72.159} r={0.3} />
        <circle cx={70.926} cy={72.159} r={0.3} />
        <circle cx={73.389} cy={72.159} r={0.3} />
        <circle cx={29.074} cy={74.622} r={0.3} />
        <circle cx={31.534} cy={74.622} r={0.3} />
        <circle cx={33.997} cy={74.622} r={0.3} />
        <circle cx={36.457} cy={74.622} r={0.3} />
        <circle cx={38.921} cy={74.622} r={0.3} />
        <circle cx={41.384} cy={74.622} r={0.3} />
        <circle cx={43.844} cy={74.622} r={0.3} />
        <circle cx={46.307} cy={74.622} r={0.3} />
        <circle cx={48.77} cy={74.622} r={0.3} />
        <circle cx={51.23} cy={74.622} r={0.3} />
        <circle cx={53.693} cy={74.622} r={0.3} />
        <circle cx={56.156} cy={74.622} r={0.3} />
        <circle cx={58.616} cy={74.622} r={0.3} />
        <circle cx={61.079} cy={74.622} r={0.3} />
        <circle cx={63.542} cy={74.622} r={0.3} />
        <circle cx={66.002} cy={74.622} r={0.3} />
        <circle cx={68.465} cy={74.622} r={0.3} />
        <circle cx={70.926} cy={74.622} r={0.3} />
        <circle cx={73.389} cy={74.622} r={0.3} />
        <circle cx={31.534} cy={77.084} r={0.3} />
        <circle cx={33.997} cy={77.084} r={0.3} />
        <circle cx={36.457} cy={77.084} r={0.3} />
        <circle cx={38.921} cy={77.084} r={0.3} />
        <circle cx={41.384} cy={77.084} r={0.3} />
        <circle cx={43.844} cy={77.084} r={0.3} />
        <circle cx={46.307} cy={77.084} r={0.3} />
        <circle cx={48.77} cy={77.084} r={0.3} />
        <circle cx={51.23} cy={77.084} r={0.3} />
        <circle cx={53.693} cy={77.084} r={0.3} />
        <circle cx={56.156} cy={77.084} r={0.3} />
        <circle cx={58.616} cy={77.084} r={0.3} />
        <circle cx={61.079} cy={77.084} r={0.3} />
        <circle cx={63.542} cy={77.084} r={0.3} />
        <circle cx={66.002} cy={77.084} r={0.3} />
        <circle cx={68.465} cy={77.084} r={0.3} />
        <circle cx={70.926} cy={77.084} r={0.3} />
        <circle cx={73.389} cy={77.084} r={0.3} />
        <circle cx={31.534} cy={79.544} r={0.3} />
        <circle cx={33.997} cy={79.544} r={0.3} />
        <circle cx={36.457} cy={79.544} r={0.3} />
        <circle cx={38.921} cy={79.544} r={0.3} />
        <circle cx={41.384} cy={79.544} r={0.3} />
        <circle cx={43.844} cy={79.544} r={0.3} />
        <circle cx={46.307} cy={79.544} r={0.3} />
        <circle cx={48.77} cy={79.544} r={0.3} />
        <circle cx={51.23} cy={79.544} r={0.3} />
        <circle cx={53.693} cy={79.544} r={0.3} />
        <circle cx={56.156} cy={79.544} r={0.3} />
        <circle cx={58.616} cy={79.544} r={0.3} />
        <circle cx={61.079} cy={79.544} r={0.3} />
        <circle cx={63.542} cy={79.544} r={0.3} />
        <circle cx={66.002} cy={79.544} r={0.3} />
        <circle cx={68.465} cy={79.544} r={0.3} />
        <circle cx={70.926} cy={79.544} r={0.3} />
        <circle cx={31.534} cy={82.007} r={0.3} />
        <circle cx={33.997} cy={82.007} r={0.3} />
        <circle cx={36.457} cy={82.007} r={0.3} />
        <circle cx={38.921} cy={82.007} r={0.3} />
        <circle cx={41.384} cy={82.007} r={0.3} />
        <circle cx={43.844} cy={82.007} r={0.3} />
        <circle cx={46.307} cy={82.007} r={0.3} />
        <circle cx={48.77} cy={82.007} r={0.3} />
        <circle cx={51.23} cy={82.007} r={0.3} />
        <circle cx={53.693} cy={82.007} r={0.3} />
        <circle cx={56.156} cy={82.007} r={0.3} />
        <circle cx={58.616} cy={82.007} r={0.3} />
        <circle cx={61.079} cy={82.007} r={0.3} />
        <circle cx={63.542} cy={82.007} r={0.3} />
        <circle cx={66.002} cy={82.007} r={0.3} />
        <circle cx={68.465} cy={82.007} r={0.3} />
        <circle cx={70.926} cy={82.007} r={0.3} />
        <circle cx={33.997} cy={84.47} r={0.3} />
        <circle cx={36.457} cy={84.47} r={0.3} />
        <circle cx={38.921} cy={84.47} r={0.3} />
        <circle cx={41.384} cy={84.47} r={0.3} />
        <circle cx={43.844} cy={84.47} r={0.3} />
        <circle cx={46.307} cy={84.47} r={0.3} />
        <circle cx={48.77} cy={84.47} r={0.3} />
        <circle cx={51.23} cy={84.47} r={0.3} />
        <circle cx={53.693} cy={84.47} r={0.3} />
        <circle cx={56.156} cy={84.47} r={0.3} />
        <circle cx={58.616} cy={84.47} r={0.3} />
        <circle cx={61.079} cy={84.47} r={0.3} />
        <circle cx={63.542} cy={84.47} r={0.3} />
        <circle cx={66.002} cy={84.47} r={0.3} />
        <circle cx={33.997} cy={86.931} r={0.3} />
        <circle cx={36.457} cy={86.931} r={0.3} />
        <circle cx={38.921} cy={86.931} r={0.3} />
        <circle cx={41.384} cy={86.931} r={0.3} />
        <circle cx={43.844} cy={86.931} r={0.3} />
        <circle cx={46.307} cy={86.931} r={0.3} />
        <circle cx={48.77} cy={86.931} r={0.3} />
        <circle cx={51.23} cy={86.931} r={0.3} />
        <circle cx={53.693} cy={86.931} r={0.3} />
        <circle cx={56.156} cy={86.931} r={0.3} />
        <circle cx={58.616} cy={86.931} r={0.3} />
        <circle cx={61.079} cy={86.931} r={0.3} />
        <circle cx={63.542} cy={86.931} r={0.3} />
        <circle cx={33.997} cy={89.393} r={0.3} />
        <circle cx={36.457} cy={89.393} r={0.3} />
        <circle cx={38.921} cy={89.393} r={0.3} />
        <circle cx={41.384} cy={89.393} r={0.3} />
        <circle cx={43.844} cy={89.393} r={0.3} />
        <circle cx={46.307} cy={89.393} r={0.3} />
        <circle cx={48.77} cy={89.393} r={0.3} />
        <circle cx={51.23} cy={89.393} r={0.3} />
        <circle cx={53.693} cy={89.393} r={0.3} />
        <circle cx={56.156} cy={89.393} r={0.3} />
        <circle cx={58.616} cy={89.393} r={0.3} />
        <circle cx={36.457} cy={91.853} r={0.3} />
        <circle cx={38.921} cy={91.853} r={0.3} />
        <circle cx={41.384} cy={91.853} r={0.3} />
        <circle cx={43.844} cy={91.853} r={0.3} />
        <circle cx={46.307} cy={91.853} r={0.3} />
        <circle cx={48.77} cy={91.853} r={0.3} />
        <circle cx={51.23} cy={91.853} r={0.3} />
        <circle cx={41.384} cy={94.316} r={0.3} />
        <circle cx={43.844} cy={94.316} r={0.3} />
        <circle cx={46.307} cy={94.316} r={0.3} />
      </svg>

      <div className="absolute right-[55%] top-[5%] size-14 rounded-full bg-white p-1 shadow ring-[1px] ring-gray-950/10">
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

      <div className="absolute right-[35%] top-[20%] size-14 rounded-full bg-white p-1 shadow ring-[1px] ring-gray-950/10">
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

      <div className="absolute right-[45%] top-[70%] size-14 rounded-full bg-white p-1 shadow ring-[1px] ring-gray-950/10">
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
