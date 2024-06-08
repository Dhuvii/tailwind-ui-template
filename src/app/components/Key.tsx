import { cn } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const variants = {
  variant: {
    square: "",
    empty: "relative",
  },
};

const defaultStyles =
  "h-16 w-16 flex flex-col items-center justify-center rounded-lg bg-gradient-to-b from-white to-gray-100 shadow-sm ring-[1.5px] ring-gray-800/20 active:from-gray-100 active:to-gray-100 active:ring-gray-800/30 active:shadow-none focus:outline-none focus-visible:ring-1 focus-visible:ring-offset-2 focus-visible:ring-gray-800/50 ring-offset-inherit";

const baseClass = "absolute m-[0.625rem]";
const subTextClass = "text-sm text-gray-600 leading-none";
const mainTextClass = "text-xl text-gray-600 leading-none";

export const KeyVariants = cva(defaultStyles, {
  variants,
  defaultVariants: {
    variant: "square",
  },
});

type ChildrenProps = {
  baseClass: string;
  subTextClass: string;
  mainTextClass: string;
};

interface ISquareKey extends VariantProps<typeof KeyVariants> {
  className?: string;
  Icon?: React.FC<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLOrSVGElement>,
      HTMLOrSVGElement
    > &
      ChildrenProps
  >;
  children?: React.ReactNode | ((props: ChildrenProps) => React.ReactNode);
}

const Key = ({ className, Icon, children, variant = "square" }: ISquareKey) => {
  return (
    <button className={cn(KeyVariants({ variant, className }))}>
      {variant === "square" ? (
        <>
          {/* icon */}
          {Icon && (
            <Icon
              subTextClass={cn(subTextClass)}
              mainTextClass={cn(mainTextClass)}
              baseClass="size-[1.2rem] flex-shrink-0 text-gray-600"
            />
          )}
          {/* icon */}

          {/* text */}
          <p className="mt-2 text-[0.6rem] font-medium text-gray-600">
            {typeof children === "function"
              ? (children as (props: ChildrenProps) => React.ReactNode)({
                  baseClass,
                  subTextClass,
                  mainTextClass,
                })
              : children}
          </p>
          {/* text */}
        </>
      ) : typeof children === "function" ? (
        (children as (props: ChildrenProps) => React.ReactNode)({
          baseClass,
          subTextClass,
          mainTextClass,
        })
      ) : (
        children
      )}
    </button>
  );
};

export default Key;
