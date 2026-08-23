import TestimonialCard from "./TestimonialCard";
import { TESTIMONIALS } from "../../data/testimonials";

export default function Testimonials() {
  return (
    <section className="px-6 py-16 md:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
        {TESTIMONIALS.map((t) => (
          <TestimonialCard
            key={t.name}
            {...t}
          />
        ))}
      </div>
    </section>
  );
}