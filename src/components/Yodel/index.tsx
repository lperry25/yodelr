import { Post } from "@/types/post/Post";
import { fetcher } from "@/utils/fetcher";
import Image from "next/image";
import { useState } from "react";
import { set, useForm } from "react-hook-form";

/** component for writing your yodels */
export function Yodel({ placeholder }: { placeholder?: string }) {
  const { register, handleSubmit, watch } = useForm<Post>();

  const [error, setError] = useState<string>("");

  const onSubmit = (data: Post) => {
    fetcher("/api/posts", { method: "POST", body: JSON.stringify(data) })
      .then(() => {
        // TODO: handle what I do here
      })
      .catch((e) => {
        console.log({ e });
        setError(e?.message || "An error occurred");
      });
  };

  return (
    <form className="w-full">
      {error && <div className="text-red-700">{error}</div>}
      <div className="relative p-4">
        <textarea
          className="rounded border-primary border-2 w-full h-[125px] overflow-y-scroll p-2 bg-transparent resize-none"
          placeholder={placeholder}
          {...register("content", { required: true })}
        ></textarea>
        <button
          className="absolute bottom-8 right-6 bg-lightBlue disabled:opacity-60 text-white rounded-full px-4 py-2"
          onClick={handleSubmit(onSubmit)}
          disabled={!watch("content")}
        >
          <Image
            src="/img/yodelrIcon.png"
            alt="Yodler Logo"
            className="h-[35px] w-[35px] mx-auto object-contain"
            width={400}
            height={300}
            priority
          />
        </button>
      </div>
    </form>
  );
}
