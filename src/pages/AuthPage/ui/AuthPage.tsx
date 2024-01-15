// TODO: h-screen needs to be fixed!
import { Input } from "@shared/ui/Input/Input";

export default function AuthPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-myBlue">
      {/* login */}
      <div className="w-full md:w-[450px] ">
        <h1 className="mb-10 text-center text-4xl font-bold text-white md:text-6xl">
          Login
        </h1>
        <div className="flex min-h-[150px] w-full  flex-col gap-3 rounded-md bg-white p-6 drop-shadow-xl">
          <Input label="Name" type="text" placeholder="Enter your name" />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
          />
          <Input
            label="Confirm password"
            type="password"
            placeholder="Enter your password again"
          />
        </div>
      </div>
    </div>
  );
}
