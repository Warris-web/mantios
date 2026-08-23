import {
  Store,
  CheckCircle2,
} from "lucide-react";
const VendorPreviewCard = ({ formData, verified }) => (
  <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 dark:border-neutral-800 dark:bg-neutral-900">
    <div className="flex flex-col items-center text-center">
      <span className="grid h-16 w-16 place-items-center rounded-full bg-stone-200 dark:bg-neutral-800">
        <Store size={22} className="text-stone-500 dark:text-neutral-400" />
      </span>
      <h4 className="font-display mt-3 text-base font-semibold text-stone-900 dark:text-stone-50">
        {formData.storeName?.trim() || "Abidemi stores"}
      </h4>
      <span
        key={verified ? "verified" : "pending"}
        className={`anim-pop mt-2 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium ${
          verified
            ? "bg-accent text-white"
            : "bg-stone-200 text-stone-500 dark:bg-neutral-800 dark:text-neutral-400"
        }`}
      >
        <CheckCircle2 size={12} />
        {verified ? "Verified" : "Pending review"}
      </span>
    </div>

    <div className="mt-6 border-t border-stone-200 pt-5 text-center dark:border-neutral-800">
      <p className="font-display text-sm font-semibold text-stone-900 dark:text-stone-50">
        {formData.productName?.trim() || "Faceless Toner serum"}
      </p>
      <p className="mt-1 text-xs text-stone-500 dark:text-neutral-400">
        Proceed to purchase this product
      </p>
      <div className="tube-gradient relative mx-auto mt-4 h-24 w-14 rounded-t-xl rounded-b-md">
        <div className="cap-gradient absolute -bottom-2 left-1/2 h-3 w-10 -translate-x-1/2 rounded" />
        <span className="absolute inset-x-0 top-6 text-center text-[7px] font-semibold tracking-widest text-white/80">
          BRAND
        </span>
      </div>
    </div>
  </div>
);
export default VendorPreviewCard;