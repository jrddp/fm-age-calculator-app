"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

export default function Home() {
  const schema = z.object({
    day: z
      .string()
      .min(1, "This field is required")
      .refine(val => parseInt(val) <= 31 && parseInt(val) >= 1, "Must be a valid day"),
    month: z
      .string()
      .min(1, "This field is required")
      .refine(val => parseInt(val) <= 12 && parseInt(val) >= 1, "Must be a valid month"),
    year: z
      .string()
      .min(1, "This field is required")
      .min(4, "Must be a valid year")
      .max(4, "Must be a valid year")
      .refine(val => parseInt(val) <= new Date().getFullYear(), "Must be in the past"),
  });

  type Inputs = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  type Age = {
    years: number;
    months: number;
    days: number;
  };

  const [age, setAge] = useState<Age | null>();

  const onSubmit = (data: Inputs) => {
    const { day, month, year } = data;
    const date = Date.parse(`${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`);
    let age = new Date().getTime() - date;

    const years = Math.floor(age / (1000 * 60 * 60 * 24 * 365.25));
    age -= years * 1000 * 60 * 60 * 24 * 365.25;
    const months = Math.floor(age / (1000 * 60 * 60 * 24 * 30));
    age -= months * 1000 * 60 * 60 * 24 * 30;
    const days = Math.floor(age / (1000 * 60 * 60 * 24));
    age -= days * 1000 * 60 * 60 * 24;

    setAge({ years, months, days });
  };

  return (
    <div className="relative flex flex-col items-center justify-center px-4 pt-8 pb-12 min-h-dvh">
      <main className="flex flex-col items-center justify-center w-full max-w-2xl gap-6 py-12 px-4 sm:p-12 bg-white rounded-xl rounded-br-[100px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full gap-4 sm:gap-6 text-muted"
          onKeyDown={e => {
            if (e.key === "Enter") handleSubmit(onSubmit)();
          }}
        >
          <div className="flex flex-col gap-1">
            <label
              className={`text-xs tracking-[3px] uppercase font-bold ${errors.day && "text-error"}`}
              htmlFor="day"
            >
              Day
            </label>{" "}
            <input
              {...register("day")}
              className={`w-[5.5rem] sm:w-32 px-4 py-2.5 sm:py-3 text-xl sm:text-3xl font-bold border rounded-md placeholder:text-muted placeholder:font-bold caret-primary outline-primary text-foreground ${
                errors.day ? "border-error" : "border-light-gray"
              }`}
              id="day"
              name="day"
              placeholder="DD"
            />
            <div className="h-4">
              {errors.day && <p className="text-xs italic text-error">{errors.day.message}</p>}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label
              className={`text-xs tracking-[3px] uppercase font-bold ${
                errors.month && "text-error"
              }`}
              htmlFor="month"
            >
              Month
            </label>{" "}
            <input
              {...register("month")}
              className={`w-[5.5rem] sm:w-32 px-4 py-2.5 sm:py-3 text-xl sm:text-3xl font-bold border rounded-md placeholder:text-muted placeholder:font-bold caret-primary outline-primary text-foreground ${
                errors.month ? "border-error" : "border-light-gray"
              }`}
              id="month"
              name="month"
              placeholder="MM"
            />
            <div className="h-4">
              {errors.month && <p className="text-xs italic text-error">{errors.month.message}</p>}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label
              className={`text-xs tracking-[3px] uppercase font-bold ${
                errors.year && "text-error"
              }`}
              htmlFor="year"
            >
              Year
            </label>{" "}
            <input
              {...register("year")}
              className={`w-[5.5rem] sm:w-32 px-4 py-2.5 sm:py-3 text-xl sm:text-3xl font-bold border rounded-md placeholder:text-muted placeholder:font-bold caret-primary outline-primary text-foreground ${
                errors.year ? "border-error" : "border-light-gray"
              }`}
              id="year"
              name="year"
              placeholder="YYYY"
            />
            <div className="h-4">
              {errors.year && <p className="text-xs italic text-error">{errors.year.message}</p>}
            </div>
          </div>
        </form>
        <div className="bg-light-gray w-full h-0.5 relative flex justify-center my-4 sm:my-0">
          <button
            className="sm:absolute right-0 flex items-center justify-center p-4 transition-colors -translate-y-1/2 rounded-full size-16 bg-primary hover:bg-foreground"
            onClick={() => handleSubmit(onSubmit)()}
          >
            <svg
              className="size-full"
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="44"
              viewBox="0 0 46 44"
            >
              <g fill="none" stroke="#FFF" strokeWidth="2">
                <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
              </g>
            </svg>
          </button>
        </div>
        <div className="flex flex-col w-full gap-2 pt-4 text-5xl sm:text-6xl italic font-extrabold">
          <div>
            <span className="text-primary">{age ? age.years : "- -"}</span> years
          </div>
          <div>
            <span className="text-primary">{age ? age.months : "- -"}</span> months
          </div>
          <div>
            <span className="text-primary">{age ? age.days : "- -"}</span> days
          </div>
        </div>
      </main>

      <footer className="absolute flex gap-1 text-sm bottom-4 sm:flex-row flex-col items-center">
        <div>
          Challenge by{" "}
          <a
            className="hover:underline text-primary"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          .
        </div>
        <div>
          Coded by{" "}
          <a className="hover:underline text-primary" href="https://jrddp.me">
            Jared Peters
          </a>
          .
        </div>
      </footer>
    </div>
  );
}
