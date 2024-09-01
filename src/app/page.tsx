export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center p-8 py-12 min-h-dvh">
      <main className="flex flex-col items-center justify-center w-full max-w-2xl gap-6 p-12 bg-white rounded-xl rounded-br-[100px]">
        <form className="flex w-full gap-6 text-muted">
          <div className="flex flex-col gap-1">
            <label className="text-xs tracking-[3px] uppercase font-bold" htmlFor="day">
              Day
            </label>{" "}
            <input
              className="w-32 px-4 py-3 text-3xl border rounded-md placeholder:text-muted border-light-gray placeholder:font-bold"
              id="day"
              name="day"
              placeholder="DD"
            ></input>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs tracking-[3px] uppercase font-bold" htmlFor="month">
              Month
            </label>{" "}
            <input
              className="w-32 px-4 py-3 text-3xl border rounded-md placeholder:text-muted border-light-gray placeholder:font-bold"
              id="month"
              name="month"
              placeholder="MM"
            ></input>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs tracking-[3px] uppercase font-bold" htmlFor="year">
              Year
            </label>{" "}
            <input
              className="w-32 px-4 py-3 text-3xl border rounded-md placeholder:text-muted border-light-gray placeholder:font-bold"
              id="year"
              name="year"
              placeholder="YYYY"
            ></input>
          </div>
        </form>
        <div className="bg-light-gray w-full h-0.5 relative">
          <div className="flex items-center justify-center p-4 rounded-full size-16 bg-primary right-0 -translate-y-1/2 absolute">
            <svg
              className="size-full"
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="44"
              viewBox="0 0 46 44"
            >
              <g fill="none" stroke="#FFF" stroke-width="2">
                <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
              </g>
            </svg>
          </div>
        </div>
        <div className="flex flex-col w-full pt-4 text-6xl italic font-extrabold gap-2">
          <div>
            <span className="text-primary">- -</span> years
          </div>
          <div>
            <span className="text-primary">- -</span> months
          </div>
          <div>
            <span className="text-primary">- -</span> days
          </div>
        </div>
      </main>

      <footer className="absolute flex gap-1 text-sm bottom-4">
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
