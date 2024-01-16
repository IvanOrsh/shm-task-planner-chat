import { Button } from "@shared/ui/Button/Button";
import { Input } from "@shared/ui/Input/Input";

export default function AuthPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      {/* auth */}
      <div className="w-[380px] md:w-[460px]">
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

          <div className="mt-5 flex flex-col gap-2">
            <Button size="lg" intent="secondary" loading>
              Login
            </Button>
            <Button size="lg" intent="primary" loading>
              Register
            </Button>
          </div>
        </div>
      </div>

      {/* gradient background  */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-r from-myBlue to-myPink opacity-70"></div>

      {/* bg image */}
      <div className="bg-pattern absolute inset-0 -z-20 h-full w-full"></div>
    </div>
  );
}
