import { useState } from "react";

import { Button } from "@shared/ui/Button/Button";
import { Input } from "@shared/ui/Input/Input";

type AuthForm = {
  name: string;
  password: string;
  confirmPassword?: string;
};

const initForm: AuthForm = {
  name: "",
  password: "",
  confirmPassword: "",
};

export default function AuthPage() {
  const [login, setLogin] = useState(false);

  const [form, setForm] = useState<AuthForm>(initForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // TODO: remove this
    console.log(form);
  };

  const handleAuth = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData.get("name"), formData.get("password"));
  };

  return (
    <div className="flex h-screen items-center justify-center">
      {/* auth */}
      <div className="w-[380px] md:w-[460px]">
        <form
          onSubmit={handleAuth}
          className="flex min-h-[150px] w-full flex-col gap-4 rounded-md bg-white p-6 drop-shadow-xl"
        >
          <div className="rounded-bl-4xl relative h-48 bg-myPink">
            <h1 className="mb-10 mt-10 text-center text-4xl font-bold text-white md:text-6xl">
              {login ? "Login" : "Register"}
            </h1>
            <svg
              className="absolute bottom-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
          <Input
            value={form.name}
            onChange={handleChange}
            name="name"
            label="Name"
            type="text"
            placeholder="Name"
          />
          <Input
            value={form.password}
            onChange={handleChange}
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
          />

          {!login && (
            <Input
              value={form.confirmPassword}
              onChange={handleChange}
              name="confirmPassword"
              label="Confirm password"
              type="password"
              placeholder="Enter your password again"
            />
          )}

          <div className="mt-5 flex flex-col gap-2">
            <Button
              disabled={form.name.trim() === "" || form.password.trim() === ""}
              size="lg"
              intent="secondary"
            >
              {login ? "Login" : "Register"}
            </Button>
            <Button
              size="lg"
              intent="primary"
              type="button"
              onClick={() => setLogin(!login)}
            >
              {login ? "Don't have an account?" : "Already have an account?"}
            </Button>
          </div>
        </form>
      </div>

      {/* gradient background  */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-r from-myBlue to-myPink opacity-70"></div>

      {/* bg image */}
      <div className="absolute inset-0 -z-20 h-full w-full bg-pattern"></div>
    </div>
  );
}
