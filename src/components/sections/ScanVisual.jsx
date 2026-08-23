import {
  CheckCircle2,
} from "lucide-react";
const ScanVisual = () => (
  <div className="relative mx-auto flex w-full max-w-md flex-col items-center gap-10 sm:flex-row sm:items-center sm:justify-between">
    {/* the product, framed like a scan target */}
    <div className="relative anim-float">
      <span className="absolute -top-6 left-0 text-[11px] font-medium tracking-wide text-accent">
        <span className="pulse-dot">Analyzing……</span>
      </span>

      {/* corner brackets */}
      <div className="relative h-44 w-32">
        <span className="absolute -left-3 -top-3 h-5 w-5 border-l-2 border-t-2 border-stone-300 dark:border-neutral-700" />
        <span className="absolute -right-3 -top-3 h-5 w-5 border-r-2 border-t-2 border-stone-300 dark:border-neutral-700" />
        <span className="absolute -bottom-3 -left-3 h-5 w-5 border-b-2 border-l-2 border-stone-300 dark:border-neutral-700" />
        <span className="absolute -bottom-3 -right-3 h-5 w-5 border-b-2 border-r-2 border-stone-300 dark:border-neutral-700" />

        {/* sweeping scan line */}
        <span className="scan-sweep absolute left-1 right-1 top-1/2 h-px bg-accent" />

        {/* the tube */}
        <div className="tube-gradient absolute bottom-0 left-1/2 h-36 w-20 -translate-x-1/2 rounded-t-2xl rounded-b-md shadow-lg">
          <div className="cap-gradient absolute -bottom-3 left-1/2 h-5 w-14 -translate-x-1/2 rounded-md" />
          <div className="flex h-full flex-col items-center justify-center gap-1 px-2 text-center">
            <span className="font-display text-[10px] font-semibold tracking-widest text-white/90">
              BRAND
            </span>
            <span className="text-[7px] tracking-wide text-white/50">BODY LOTION</span>
          </div>
        </div>
      </div>
    </div>

    {/* connector */}
    <svg
      className="hidden h-6 w-16 shrink-0 text-stone-300 dark:text-neutral-700 sm:block"
      viewBox="0 0 64 24"
      fill="none"
    >
      <path
        d="M0 12H60"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        style={{ animation: "dash 1.2s linear infinite" }}
      />
      <path d="M54 6L60 12L54 18" stroke="currentColor" strokeWidth="1.5" />
    </svg>

    {/* verification results */}
    <div className="flex flex-col items-start gap-3">
      <span className="text-[11px] font-medium text-stone-500 dark:text-neutral-400">
        Verification score
      </span>
      <div className="flex gap-2">
        <span className="rounded-full border border-violet-300 bg-violet-50 px-3 py-1 text-[11px] font-medium text-violet-700 dark:border-violet-900 dark:bg-violet-950/40 dark:text-violet-300">
          87% Genuine
        </span>
        <span className="rounded-full border border-red-300 bg-red-50 px-3 py-1 text-[11px] font-medium text-red-600 dark:border-red-900 dark:bg-red-950/30 dark:text-red-400">
          13% Counterfeit
        </span>
      </div>
      <div className="mt-1 flex flex-col gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-stone-100 px-3 py-1 text-[11px] text-stone-600 dark:bg-neutral-900 dark:text-neutral-300">
          <span className="grid h-3.5 w-3.5 place-items-center rounded-full bg-accent">
            <CheckCircle2 size={9} className="text-white" />
          </span>
          Verified vendors
        </span>
        <span className="rounded-full bg-stone-100 px-3 py-1 text-[11px] text-stone-600 dark:bg-neutral-900 dark:text-neutral-300">
          Regulatory bodies
        </span>
      </div>
    </div>
  </div>
);
export default ScanVisual;