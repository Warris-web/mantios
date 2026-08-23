import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function Waitlist() {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);
  };

  return (
    <div>
      <section className="px-6 pb-24 pt-20 md:px-10 md:pt-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Early access
              </p>

              <h1 className="font-display mt-5 text-5xl font-semibold leading-tight text-stone-900 sm:text-6xl">
                Be part of the movement.
              </h1>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-stone-500">
                Join the Mantios waitlist and get early access to the future of
                product authentication.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Early product access",
                  "Updates from the Mantios team",
                  "Opportunities to test new features",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-stone-600"
                  >
                    <CheckCircle2 size={18} className="text-accent" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm md:p-10">
              {submitted ? (
                <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-accent-soft">
                    <CheckCircle2 size={28} className="text-accent" />
                  </span>

                  <h2 className="font-display mt-6 text-2xl font-semibold">
                    You're on the list.
                  </h2>

                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-stone-500">
                    Thanks for joining the Mantios waitlist. We'll be in touch
                    with you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="mb-2 block text-xs font-medium text-stone-600">
                      Full name
                    </label>

                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-medium text-stone-600">
                      Email address
                    </label>

                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-medium text-stone-600">
                      I am a...
                    </label>

                    <select
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none focus:border-accent"
                    >
                      <option value="">Select one</option>
                      <option value="consumer">Consumer</option>
                      <option value="vendor">Vendor</option>
                      <option value="regulator">Regulator</option>
                      <option value="business">Business</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-stone-900 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-accent"
                  >
                    Join the waitlist
                    <ArrowUpRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}