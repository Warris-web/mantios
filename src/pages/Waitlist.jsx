import { useState } from "react";
import { Pill, SprayCan, Tag } from "lucide-react";

const MAILCHIMP_ACTION_URL = "https://YOUR-SUBDOMAIN.usX.list-manage.com/subscribe/post?u=USER_ID&id=LIST_ID";
const MAILCHIMP_HONEYPOT_NAME = "b_USER_ID_LIST_ID";

function InfoGrid({ className = "" }) {
  return (
    <div className={`grid grid-cols-2 gap-x-10 gap-y-3 text-sm ${className}`}>
      <div className="flex items-center gap-2" style={{ color: "var(--whiteblack)" }}>
        <Pill size={16} /> Pharma
      </div>
      <div className="flex items-center gap-2" style={{ color: "var(--whiteblack)" }}>
        <SprayCan size={16} /> Beauty
      </div>
      <div style={{ color: "var(--vendortxtnumberfff)" }}>Vendor Network</div>
      <div style={{ color: "var(--vendortxtnumberfff)" }}>Trusted verification</div>
    </div>
  );
}

function ProductFrame() {
  return (
    <div className="relative w-[220px] h-[260px] mx-auto">
      {/* corner brackets */}
      <span className="absolute -top-4 -left-4 w-6 h-6 border-t border-l" style={{ borderColor: "var(--border)" }} />
      <span className="absolute -top-4 -right-4 w-6 h-6 border-t border-r" style={{ borderColor: "var(--border)" }} />
      <span className="absolute -bottom-4 -left-4 w-6 h-6 border-b border-l" style={{ borderColor: "var(--border)" }} />
      <span className="absolute -bottom-4 -right-4 w-6 h-6 border-b border-r" style={{ borderColor: "var(--border)" }} />

      {/* dashed scan line */}
      <span className="absolute left-[-30px] right-[-30px] top-1/2 border-t border-dashed" style={{ borderColor: "var(--dotcolor)" }} />

      {/* product mockup */}
      <div className="absolute inset-x-8 bottom-0 top-6 rounded-t-md rounded-b-sm bg-gradient-to-b from-violet-700 to-violet-900 flex flex-col items-center pt-6 text-center shadow-lg">
        <span className="text-white/90 text-xs tracking-widest">BRAND</span>
        <span className="text-white/50 text-[10px] mt-1">BODY LOTION</span>
        <span className="text-white/30 text-[9px] mt-auto mb-3">100 ml / 3.4 fl.oz.</span>
        <div className="w-full h-8 bg-gradient-to-b from-yellow-600 to-yellow-800 rounded-b-sm" />
      </div>
    </div>
  );
}

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    e.target.target = "mc-hidden-iframe";
    e.target.submit();
    setTimeout(() => setStatus("success"), 600);
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center px-6 pt-24 text-center transition-colors"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      {/* nav */}
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-10 py-5">
        <div className="flex items-center gap-2 font-medium" style={{ color: "var(--logocolor)" }}>
          <span className="w-4 h-4 rounded-sm rotate-45 inline-block" style={{ background: "var(--dotcolor)" }} />
          Mantios
        </div>
        <div className="flex gap-8 text-sm">
          <span style={{ color: "var(--link)" }} className="hover:[color:var(--linkhover)] transition-colors">About</span>
          <span style={{ color: "var(--link)" }} className="hover:[color:var(--linkhover)] transition-colors">Features</span>
        </div>
      </nav>

      <div
        className="mb-6 flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
        style={{
          borderColor: "var(--colorpointscanknowborder)",
          background: "var(--colorpointscanknowborder)",
          color: "var(---colortxtpointscanknowborder)",
        }}
      >
        Join over 500+ people today
      </div>

      {status === "success" ? (
        <>
          <h1 className="text-4xl md:text-6xl font-medium leading-tight" style={{ color: "var(--h1color)" }}>
            Thank you for joining the{" "}
            <span style={{ color: "var(--dotcolor)" }}>Mantios</span> waitlist
          </h1>
          <p className="mt-4" style={{ color: "var(--p1color)" }}>
            Your email has been added to the waitlist successfully,
          </p>

          {/* success graphic: dashed circle containing analyzing + grid */}
          <div
            className="relative mt-20 w-[300px] h-[300px] rounded-full border border-dashed flex flex-col items-center justify-center gap-4"
            style={{ borderColor: "var(--dotcolor)" }}
          >
            <span
              className="absolute -top-2 -left-2 w-5 h-5 rounded-sm rotate-12 flex items-center justify-center"
              style={{ background: "var(--bg7B0027FFA08F)" }}
            >
              <Tag size={11} className="-rotate-12" style={{ color: "var(--color121212fff)" }} />
            </span>
            <span className="text-sm" style={{ color: "var(--dotcolor)" }}>Analyzing......</span>
            <InfoGrid />
          </div>
        </>
      ) : (
        <>
          <h1 className="text-4xl md:text-6xl font-medium leading-tight max-w-3xl" style={{ color: "var(--h1color)" }}>
            Verify authenticity of your products with{" "}
            <span style={{ color: "var(--dotcolor)" }}>Mantios</span>
          </h1>
          <p className="mt-4" style={{ color: "var(--p1color)" }}>
            Be a part of the movement, protect your health and your money
          </p>

          <form
            onSubmit={handleSubmit}
            action={MAILCHIMP_ACTION_URL}
            method="POST"
            noValidate
            className="mt-8 flex w-full max-w-md flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              name="EMAIL"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-full border px-5 py-3 outline-none focus:[border-color:var(--dotcolor)]"
              style={{
                borderColor: "var(--border)",
                background: "var(--borderfieldboardbg)",
                color: "var(--foreground)",
              }}
            />
            <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
              <input type="text" name={MAILCHIMP_HONEYPOT_NAME} tabIndex="-1" defaultValue="" />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-full px-6 py-3 font-medium disabled:opacity-60"
              style={{ background: "var(--primarybtnbg)", color: "var(--primarybtncolor)" }}
            >
              {status === "loading" ? "Joining..." : "Join the waitlist"}
            </button>
          </form>

          {/* form-state graphic: frame + tube, analyzing/grid offset to the right */}
          <div className="relative mt-16 flex items-end gap-16">
            <ProductFrame />
            <div className="flex flex-col items-start gap-3 pb-2">
              <span className="text-sm" style={{ color: "var(--dotcolor)" }}>Analyzing......</span>
              <InfoGrid />
            </div>
          </div>
        </>
      )}

      <iframe name="mc-hidden-iframe" style={{ display: "none" }} title="mailchimp" />
    </section>
  );
}