import useReveal from "../../hooks/useReveal";

export default function TestimonialCard({
  quote,
  name,
  role,
  tone,
}) {
  const [ref, visible] = useReveal();

  const bg =
    tone === "salmon"
      ? "bg-salmon"
      : "bg-maroon";

  const text =
    tone === "salmon"
      ? "text-stone-900"
      : "text-white";

  return (
    <div
      ref={ref}
      className={`relative flex min-h-[22rem] flex-col justify-between overflow-hidden rounded-2xl p-8 ${bg} ${text} ${
        visible ? "anim-fade-up" : "opacity-0"
      }`}
    >
      <span
        className="watermark-text pointer-events-none absolute -right-4 -top-4 select-none opacity-10"
        aria-hidden="true"
      >
        Mantios
      </span>

      <p className="font-display relative max-w-xs text-2xl font-semibold leading-snug">
        “{quote}”
      </p>

      <div className="relative flex items-center gap-3">
        <span
          className={`grid h-9 w-9 place-items-center rounded-full text-xs font-semibold ${
            tone === "salmon"
              ? "bg-stone-900 text-white"
              : "bg-white/15 text-white"
          }`}
        >
          {name.charAt(0)}
        </span>

        <div>
          <p className="text-sm font-medium">
            {name}
          </p>

          <p
            className={`text-xs ${
              tone === "salmon"
                ? "text-stone-700"
                : "text-white/60"
            }`}
          >
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}