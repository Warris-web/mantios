import useReveal from "../../hooks/useReveal";
import { PrimaryButton } from "../primitives";
const CTA = () => {
  const [ref, visible] = useReveal();
  return (
    <section id="waitlist" className="px-6 py-16 md:px-10">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl rounded-3xl border border-stone-200 bg-white px-6 py-20 text-center dark:border-neutral-900 dark:bg-neutral-900/60 ${
          visible ? "anim-fade-up" : "opacity-0"
        }`}
      >
        <div className="mb-6 flex items-center justify-center gap-3">
          <div className="flex -space-x-2">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="h-7 w-7 rounded-full border-2 border-white bg-stone-300 dark:border-neutral-900 dark:bg-neutral-700"
              />
            ))}
          </div>
          <span className="text-xs text-stone-500 dark:text-neutral-400">
            Over 500+ people have signed up
          </span>
        </div>
        <h2 className="font-display mx-auto max-w-lg text-4xl font-semibold leading-tight text-stone-900 dark:text-stone-50 sm:text-5xl">
          Be a part of the movement
          <br />
          Join the waitlist
        </h2>
        <div className="mt-8">
          <PrimaryButton>Join the waitlist</PrimaryButton>
        </div>
      </div>
    </section>
  );
};
export default CTA;