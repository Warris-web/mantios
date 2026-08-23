import {
  useState,
} from "react";

import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import useReveal from "../../hooks/useReveal";
import useScrollStepper from "../../hooks/useScrollStepper";

import {
  PrimaryButton,
  Field,
} from "../primitives";

import {
  ONBOARDING_STEPS,
} from "../../data/onboarding";

import StepperTrack from "./StepperTrack";
import VendorPreviewCard from "./VendorPreviewCard";
const VendorOnboarding = () => {
  const { wrapperRef, step, progress, goToStep } = useScrollStepper(ONBOARDING_STEPS.length);
  const [formData, setFormData] = useState({});
  const current = ONBOARDING_STEPS[step];
  const isLast = step === ONBOARDING_STEPS.length - 1;
  const [headRef, headVisible] = useReveal();

  const setField = (key) => (e) => setFormData((d) => ({ ...d, [key]: e.target.value }));

  return (
    <section className="px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div
          ref={headRef}
          className={`flex flex-col gap-4 py-24 md:flex-row md:items-end md:justify-between md:py-32 ${
            headVisible ? "anim-fade-up" : "opacity-0"
          }`}
        >
          <h2 className="font-display max-w-md text-4xl font-semibold text-stone-900 dark:text-stone-50">
            Verified vendor onboarding
          </h2>
          <p className="max-w-sm text-sm text-stone-500 dark:text-neutral-400">
            Join the community of verified vendors — we send customers to
            you.
          </p>
        </div>
      </div>

      {/* tall scroll wrapper: pins the card while the user scrolls through it */}
      <div ref={wrapperRef} className="relative" style={{ height: `${ONBOARDING_STEPS.length * 100}vh` }}>
        <div className="sticky top-0 flex min-h-screen items-center py-10">
          <div className="mx-auto w-full max-w-6xl rounded-3xl border border-stone-200 bg-white p-6 shadow-sm dark:border-neutral-900 dark:bg-neutral-900/60 md:p-10">
            <StepperTrack steps={ONBOARDING_STEPS} step={step} progress={progress} onJump={goToStep} />

            <div className="grid grid-cols-1 gap-8 rounded-2xl bg-stone-50/60 p-4 dark:bg-neutral-950/40 md:grid-cols-2 md:p-8">
              {/* left: dynamic form */}
              <div key={step} className="anim-fade-up">
                <div className="mb-6 flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-accent-soft">
                    <current.icon size={16} className="text-accent" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold text-stone-900 dark:text-stone-50">
                      {current.heading}
                    </p>
                    <p className="text-xs text-stone-500 dark:text-neutral-400">{current.sub}</p>
                  </div>
                </div>

                {!isLast ? (
                  <div className="space-y-4">
                    {current.fields.map((f) => (
                      <Field
                        key={f.key}
                        label={f.label}
                        placeholder={f.placeholder}
                        value={formData[f.key]}
                        onChange={setField(f.key)}
                      />
                    ))}
                    <button
                      onClick={() => goToStep(Math.min(step + 1, ONBOARDING_STEPS.length - 1))}
                      className="focus-ring group mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-stone-900 dark:text-stone-50"
                    >
                      Continue
                      <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="rounded-xl border border-stone-200 bg-white p-4 text-xs text-stone-500 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">
                      <p className="mb-2 font-medium text-stone-700 dark:text-stone-200">Ready for review</p>
                      <p>
                        {formData.storeName?.trim() || "Your store"} will be checked against our
                        vendor trust standards. You'll hear back within 48 hours.
                      </p>
                    </div>
                    <PrimaryButton className="w-full">
                      Submit for approval
                      <ArrowUpRight size={15} />
                    </PrimaryButton>
                  </div>
                )}
              </div>

              {/* right: live preview */}
              <div className="flex items-center justify-center">
                <VendorPreviewCard formData={formData} verified={isLast} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default VendorOnboarding;