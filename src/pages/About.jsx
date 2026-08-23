import {
  Camera,
  ScanLine,
  ShieldCheck,
  Users,
  Building2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      {/* HEADER */}
      <section className="px-6 pb-20 pt-20 md:px-10 md:pt-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            About Mantios
          </p>

          <h1 className="font-display mt-5 max-w-4xl text-5xl font-semibold leading-tight text-stone-900 sm:text-6xl">
            Making product authenticity easier to verify.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-500">
            Mantios is building a simpler way for businesses, vendors,
            customers and regulators to identify counterfeit products across
            the supply chain.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div className="rounded-3xl bg-stone-900 p-10 text-white">
            <p className="text-xs uppercase tracking-widest text-white/40">
              Our mission
            </p>

            <h2 className="font-display mt-5 text-4xl font-semibold">
              Trust should be easy to prove.
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-white/60">
              Counterfeit products create risks for consumers, businesses and
              entire supply chains. Mantios aims to make authentication faster,
              more accessible and easier to understand.
            </p>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-10">
            <p className="text-xs uppercase tracking-widest text-accent">
              Our approach
            </p>

            <h2 className="font-display mt-5 text-4xl font-semibold text-stone-900">
              Point. Scan. Know.
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-stone-500">
              Instead of complicated authentication processes, Mantios uses
              computer vision and verified product references to give users a
              straightforward result.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-widest text-accent">
            What we do
          </p>

          <h2 className="font-display mt-4 text-4xl font-semibold text-stone-900">
            Built around verification.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Camera,
                title: "Capture",
                text: "Capture product information using a camera that already exists.",
              },
              {
                icon: ScanLine,
                title: "Analyze",
                text: "Analyze packaging and visual characteristics against trusted references.",
              },
              {
                icon: ShieldCheck,
                title: "Verify",
                text: "Receive a result that helps you make a more informed decision.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-stone-200 bg-white p-7"
              >
                <Icon className="text-accent" size={24} />

                <h3 className="font-display mt-6 text-xl font-semibold">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-stone-500">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl bg-stone-50 p-8 md:p-12">
            <p className="text-xs uppercase tracking-widest text-accent">
              Built for the ecosystem
            </p>

            <div className="mt-8 grid gap-8 md:grid-cols-3">
              <div>
                <Users className="text-accent" size={22} />
                <h3 className="font-display mt-4 font-semibold">
                  Consumers
                </h3>
                <p className="mt-2 text-sm text-stone-500">
                  Make more confident purchasing decisions.
                </p>
              </div>

              <div>
                <Building2 className="text-accent" size={22} />
                <h3 className="font-display mt-4 font-semibold">
                  Vendors
                </h3>
                <p className="mt-2 text-sm text-stone-500">
                  Build trust around the products you sell.
                </p>
              </div>

              <div>
                <ShieldCheck className="text-accent" size={22} />
                <h3 className="font-display mt-4 font-semibold">
                  Regulators
                </h3>
                <p className="mt-2 text-sm text-stone-500">
                  Support stronger product verification processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center md:px-10">
        <h2 className="font-display text-4xl font-semibold text-stone-900">
          Ready to verify?
        </h2>

        <Link
          to="/waitlist"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white hover:bg-accent"
        >
          Join the waitlist
          <ArrowRight size={15} />
        </Link>
      </section>
    </div>
  );
}