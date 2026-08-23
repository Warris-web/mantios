import { Fragment } from "react";
import { CheckCircle2 } from "lucide-react";

const StepperTrack = ({ steps, step, progress, onJump }) => (
  <div className="mb-10 flex items-start justify-between md:mb-14">
    {steps.map((s, i) => {
      const state = i < step ? "done" : i === step ? "active" : "upcoming";

      return (
        <Fragment key={s.id}>
          <button
            onClick={() => onJump(i)}
            className="focus-ring group flex flex-col items-center gap-2.5 rounded-xl px-1"
          >
            <span
              className={`grid h-12 w-12 place-items-center rounded-full text-sm font-semibold transition-all duration-500 ${
                state === "upcoming"
                  ? "bg-stone-100 text-stone-400 dark:bg-neutral-900 dark:text-neutral-600"
                  : "bg-accent text-white shadow-lg shadow-accent/20"
              } ${state === "active" ? "scale-110 ring-4 ring-accent-soft" : ""}`}
            >
              {state === "done" ? (
                <CheckCircle2 size={18} />
              ) : (
                String(s.id).padStart(2, "0")
              )}
            </span>

            <span
              className={`hidden text-xs font-medium sm:block ${
                state === "upcoming"
                  ? "text-stone-400 dark:text-neutral-600"
                  : "text-stone-700 dark:text-stone-200"
              }`}
            >
              {s.label}
            </span>
          </button>

          {i < steps.length - 1 && (
            <div className="relative mt-6 h-px flex-1 self-start bg-stone-200 dark:bg-neutral-800">
              <div
                className="absolute left-0 top-0 h-px bg-accent transition-all duration-200"
                style={{
                  width: `${
                    Math.max(
                      0,
                      Math.min(1, progress * steps.length - i)
                    ) * 100
                  }%`,
                }}
              />
            </div>
          )}
        </Fragment>
      );
    })}
  </div>
);

export default StepperTrack;