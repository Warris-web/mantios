import {
  Flame,
} from "lucide-react";

import useMounted from "../../hooks/useMounted";

import {
  Pill,
  Dot,
} from "../primitives";
import { PIPELINE_STATS } from "../../data/pipeline";
import ScanVisual from "./ScanVisual";
const Hero = () => {
  const mounted = useMounted(50);
  const step = (delay) => ({
    animation: mounted ? undefined : "none",
    opacity: mounted ? undefined : 0,
    transitionDelay: `${delay}ms`,
  });

  return (
    <section className="relative overflow-hidden px-6 pt-16 md:px-10 md:pt-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          <div>
            <div className={mounted ? "anim-fade-up" : "opacity-0"}>
              <Pill>
                Point <Dot /> Scan <Dot /> Know
              </Pill>
            </div>
            <h1
              className={`font-display mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-stone-900 dark:text-stone-50 sm:text-6xl ${
                mounted ? "anim-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: "80ms" }}
            >
              Verify Authenticity
              <br />
              of Supply Chain Products
            </h1>
          </div>
          <p
            className={`font-body max-w-sm text-base leading-relaxed text-stone-500 dark:text-neutral-400 md:justify-self-end md:pt-3 ${
              mounted ? "anim-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "160ms" }}
          >
            The complete counterfeit detection pipeline. Verify authenticity of
            supply chain products. Fast, efficient and dependable.
          </p>
        </div>

        <div
          id="about"
          className={`relative mt-16 overflow-hidden rounded-3xl border border-stone-200 bg-white px-6 py-14 dark:border-neutral-900 dark:bg-neutral-900/60 md:px-12 ${
            mounted ? "anim-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: "240ms" }}
        >
          <div className="flex flex-col items-center text-center">
            <Pill>
              <Flame size={12} className="text-accent" /> About us
            </Pill>
            <h2 className="font-display mt-5 text-3xl font-semibold text-stone-900 dark:text-stone-50">
              One scan, a clear answer
            </h2>
            <p className="mt-3 max-w-md text-sm text-stone-500 dark:text-neutral-400">
              Mantios turns product authentication into a three-step pipeline,
              built to run wherever a camera already exists.
            </p>
          </div>

          <div className="mt-14">
            <ScanVisual />
          </div>

          <div
            id="features"
            className="mt-16 grid grid-cols-1 gap-x-10 gap-y-8 border-t border-stone-200 pt-10 dark:border-neutral-800 sm:grid-cols-2"
          >
            {PIPELINE_STATS.map((s) => (
              <div key={s.title} className="flex items-start gap-2">
                <span className="font-display text-sm font-medium text-stone-400 dark:text-neutral-600">
                  {s.id}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-stone-900 dark:text-stone-50">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-stone-500 dark:text-neutral-400">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;