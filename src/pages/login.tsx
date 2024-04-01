import { UserLoginPayload } from "@/types/auth/UserLoginPayload";
import { fetcher } from "@/utils/fetcher";
import { TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit } = useForm<UserLoginPayload>();

  const [error, setError] = useState<string>("");
  const { push } = useRouter();

  const onSubmit = (data: UserLoginPayload) => {
    fetcher("/api/auth/login", { method: "POST", body: JSON.stringify(data) })
      .then(({ token }) => {
        localStorage.setItem("token", token);
        push("/yodelr/mine");
      })
      .catch((err) => setError(err?.message || "An error occurred"));
  };
  return (
    <div className="m-auto max-w-[300px] w-full">
      <Image
        src="/img/yodelrLogo.png"
        alt="Yodler Logo"
        className="mx-auto mb-6 h-auto w-[150px] object-contain"
        width={300}
        height={200}
        priority
      />
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        {error && <div className="text-red-700">{error}</div>}
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          className="w-full"
          {...register("username", { required: true })}
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          className="w-full"
          type="password"
          {...register("password", { required: true })}
        />
        <button className="rounded bg-primary text-white hover:bg-royalBlue h-10">
          Login
        </button>
        <Link
          className="hover:underline text-purple text-right"
          href="/register"
        >
          New user? Register here
        </Link>
      </form>
    </div>
  );
}
