import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="flex min-h-dvh w-full items-center justify-center">
      <div className="flex w-full max-w-lg flex-col gap-1 rounded-xl bg-gray-100 p-1">
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
      </div>
    </section>
  );
};

export default page;
