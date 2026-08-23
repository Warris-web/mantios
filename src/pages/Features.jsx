import {
  Camera,
  ScanLine,
  ShieldCheck,
  BadgeCheck,
  Store,
  MapPin,
  Package,
  CreditCard,
} from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Product Capture",
    text: "Use a phone camera or existing inspection setup to capture product information.",
  },
  {
    icon: ScanLine,
    title: "Computer Vision Analysis",
    text: "Compare packaging, print details and visual characteristics against trusted references.",
  },
  {
    icon: ShieldCheck,
    title: "Authenticity Verification",
    text: "Receive a clear authenticity result that helps you decide what to do next.",
  },
  {
    icon: BadgeCheck,
    title: "Confidence Score",
    text: "Understand how confident the verification system is about its result.",
  },
  {
    icon: Store,
    title: "Verified Vendors",
    text: "Create a verified vendor profile that customers can use to identify trusted sellers.",
  },
  {
    icon: MapPin,
    title: "Location",
    text: "Connect verified vendors with customers in their local area.",
  },
  {
    icon: Package,
    title: "Product Management",
    text: "Organize the products and categories that move through your verification pipeline.",
  },
  {
    icon: CreditCard,
    title: "Vendor Payouts",
    text: "Support vendor transactions and payouts once orders have been confirmed.",
  },
];

export default function Features() {
  return (
    <div>
      <section className="px-6 pb-20 pt-20 md:px-10 md:pt-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Features
          </p>

          <h1 className="font-display mt-5 max-w-4xl text-5xl font-semibold leading-tight text-stone-900 sm:text-6xl">
            Everything you need to verify with confidence.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-500">
            From product capture to vendor verification, Mantios brings the
            authentication workflow into one simple experience.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-stone-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft">
                <Icon size={20} className="text-accent" />
              </span>

              <h2 className="font-display mt-6 text-lg font-semibold text-stone-900">
                {title}
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-stone-500">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl rounded-3xl bg-stone-900 p-10 text-white md:p-16">
          <p className="text-xs uppercase tracking-widest text-white/40">
            The Mantios pipeline
          </p>

          <div className="mt-10 grid gap-10 md:grid-cols-3">
            <div>
              <span className="text-5xl font-semibold">01</span>
              <h3 className="font-display mt-5 text-xl font-semibold">
                Capture
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Capture the product using an available camera.
              </p>
            </div>

            <div>
              <span className="text-5xl font-semibold">02</span>
              <h3 className="font-display mt-5 text-xl font-semibold">
                Analyze
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Compare the product against trusted references.
              </p>
            </div>

            <div>
              <span className="text-5xl font-semibold">03</span>
              <h3 className="font-display mt-5 text-xl font-semibold">
                Verify
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Return an actionable authenticity result.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}