import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

import { Spinner } from "../Spinner/Spinner";

const button = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-5",

    "rounded-md",

    "hover:drop-shadow-lg",

    "focus:outline-none",
    "focus-visible:ring-4",
    "focus:ring-2",
    "focus:ring-offset-2",

    "disabled:cursor-not-allowed",
    "disabled:opacity-50",

    "transition-all",
    "ease-in-out",
    "duration-150",
  ],
  {
    variants: {
      intent: {
        primary: [
          "bg-myBlue",
          "text-gray-50",

          "dark:bg-gray-800",

          "dark:hover:border-1",
          "dark:hover:border-gray-400",

          "hover:bg-myBlue/75",
          "dark:hover:bg-gray-900",
          "active:bg-gray-700",
          "focus-visible:bg-gray-600",

          "disabled:bg-myBlue/70",
          "disabled:text-gray-50",

          "border",
          "border-transparent",
        ],

        secondary: [
          "font-bold",
          "bg-gray-50",
          "text-myPink",

          "dark:bg-gray-900",
          "dark:text-gray-50",

          "border-4",
          "border-myPink",

          "hover:bg-myPink",
          "hover:text-gray-50",

          "dark:hover:bg-myPink",
          "dark:hover:text-gray-50",
          "dark:hover:border-none",

          "active:bg-myPink",

          "disabled:bg-myPink/70",
          "disabled:border-gray-400",
          "disabled:text-gray-50",
        ],

        destructive: [
          "bg-red-500",
          "text-red-50",

          "dark:border-2",
          "dark:border-red-400",
          "dark:bg-gray-900",
          "dark:text-red-400",

          "hover:bg-red-600",

          "dark:hover:bg-red-500",
          "dark:hover:text-red-50",
          "dark:hover:border-none",

          "active:bg-red-700",

          "focus-visible:bg-red-500",

          "disabled:bg-red-400",
          "disabled:text-red-300",
        ],
      },
      size: {
        sm: ["text-sm", "py-1.5", "min-h-9", "px-3"],
        md: ["text-sm", "py-2", "min-h-10", "px-5"],
        lg: ["text-md", "py-2.5", "min-h-11", "px-5"],
        xl: ["text-md", "py-3", "min-h-12", "px-6"],
      },
      btnType: {
        button: "",
        icon: ["px-0", "rounded-full"],
      },
    },
    compoundVariants: [
      {
        btnType: "icon",
        size: "sm",
        class: "h-10 w-10",
      },
      {
        btnType: "icon",
        size: "md",
        class: "h-11 w-11",
      },
      {
        btnType: "icon",
        size: "lg",
        class: "h-12 w-12",
      },
      {
        btnType: "icon",
        size: "xl",
        class: "h-[52px] w-[52px]",
      },
    ],
    defaultVariants: {
      intent: "primary",
      size: "md",
      btnType: "button",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  onClick?: () => void;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  intent,
  size,
  btnType,
  className,
  loading,
  onClick,
  ...props
}) => {
  return (
    <button
      className={twMerge(button({ intent, size, btnType, className }))}
      onClick={onClick}
      disabled={loading}
      {...props}
    >
      {loading && <Spinner />}
      {props.children}
    </button>
  );
};
