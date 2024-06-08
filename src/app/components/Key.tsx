import { cn } from "@/utils/cn";
import React, { ComponentProps } from "react";

const defaultStyles =
  "h-16 w-16 flex flex-col items-center justify-center text-gray-600 rounded-lg bg-gradient-to-b from-white to-gray-100 shadow-sm ring-[1.5px] ring-gray-800/20 active:from-gray-100 active:to-gray-100 active:ring-gray-800/30 active:shadow-none focus:outline-none focus-visible:ring-1 focus-visible:ring-offset-2 focus-visible:ring-gray-800/50 ring-offset-inherit";

const baseClass = "m-[0.625rem]";
const iconClass = "size-[1.2rem] flex-shrink-0";
const subTextClass = "text-sm leading-none";
const mainTextClass = "text-xl leading-none";

type ChildrenProps = {
  baseClass: string;
  iconClass: string;
  subTextClass: string;
  mainTextClass: string;
};

interface IFunctionKey extends ComponentProps<"div"> {
  Icon: React.FC<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLOrSVGElement>,
      HTMLOrSVGElement
    > &
      ChildrenProps
  >;
}

const FunctionKey = ({ className, Icon, children }: IFunctionKey) => {
  return (
    <button className={cn(defaultStyles, className)}>
      <Icon
        subTextClass={cn(subTextClass)}
        mainTextClass={cn(mainTextClass)}
        iconClass={cn(iconClass)}
        baseClass={cn(baseClass)}
      />

      <p className="mt-2 text-[0.6rem] font-medium">{children}</p>
    </button>
  );
};

interface IKey {
  className?: string;
  children?: (props: ChildrenProps) => React.ReactNode;
}

const Key = ({ className, children }: IKey) => {
  return (
    <button className={cn(defaultStyles, className)}>
      {children &&
        children({
          baseClass,
          subTextClass,
          mainTextClass,
          iconClass,
        })}
    </button>
  );
};

export { FunctionKey, Key };
