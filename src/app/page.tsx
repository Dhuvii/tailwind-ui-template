"use client";
import { cn } from "@/utils/cn";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { Dekko } from "next/font/google";
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
          className="mt-5 flex snap-x snap-mandatory gap-8 overflow-x-auto overscroll-x-contain px-5 [--scroll-padding:calc((100vw-1280px)/2)] xl:px-[var(--scroll-padding)]"
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
                name={`Tim Yards ${idx}`}
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
    const { scrollX } = useScroll({ container: root });
    const [_, forceRender] = useState(false);
    const d = useMotionValue(getItemPosition() || 0);
    const opacity = useTransform(d, [0, 500], [0.5, 1]);

    useEffect(() => {
      forceRender(true);
      d.set(getItemPosition() || 0);
    }, []);

    useEffect(() => {
      scrollX.on("change", (v) => {
        d.set(getItemPosition() || 0);
      });
    }, [scrollX]);

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
