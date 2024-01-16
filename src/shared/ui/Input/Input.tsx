import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const input = cva(
  [
    "peer",
    "h-10",
    "w-full",

    "outline-none",

    "border-l-0",
    "border-r-0",
    "border-t-0",
    "border-b-2",
    "border-gray-300",

    "bg-transparent",
    "px-4",
    "py-3",
    "text-gray-900",
    "text-md",

    "focus:outline-none",
    "focus:ring-0",
    "focus:border-myPink",

    // "focus:ring-myBlue",

    "placeholder-transparent",

    "dark:bg-gray-900",

    "dark:text-gray-50",

    "disabled:pointer-events-none",
    "disabled:opacity-50",
  ],
  {
    variants: {},
    defaultVariants: [],
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof input> {
  label?: string;
  description?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  value?: string;
}

export const Input: React.FC<InputProps> = ({
  className,
  label,
  description,
  value,
  onChange,
  onKeyDown,
  ...props
}) => {
  return (
    <div className="relative">
      <input
        id={label}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className={twMerge(input({ className }))}
        {...props}
      />
      {label && (
        <label
          htmlFor={label}
          className="absolute -top-3.5 left-2 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
        >
          {label}
        </label>
      )}
      {description && (
        <p className="mt-2 text-sm text-gray-500">{description}</p>
      )}
    </div>
  );
};
