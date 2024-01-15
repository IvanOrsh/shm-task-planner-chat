import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const input = cva(
  [
    "w-full",
    "flex-1",
    "rounded-md",
    "border-2",
    "border-gray-300",
    "bg-transparent",
    "px-4",
    "py-3",
    "text-sm",

    "focus:border-myBlue",
    "focus:ring-myBlue",

    "placeholder-gray-400",

    "dark:border-gray-700",
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
    <div className="space-y-2">
      {label && (
        <label htmlFor={label} className="mb-1 block text-sm font-medium">
          {label}
        </label>
      )}
      <input
        id={label}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className={twMerge(input({ className }))}
        {...props}
      />
      {description && (
        <p className="mt-2 text-sm text-gray-500">{description}</p>
      )}
    </div>
  );
};
