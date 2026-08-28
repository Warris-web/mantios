import scanimg from "../../assets/img/88e2061e8c09ff06d3ab40f1ab5ef599fd71c708.png";

const ScanVisual = () => (
  <div
    className="
      relative
      flex
      h-[430px]
      w-full
      items-center
      justify-center
    "
  >
    {/* Capture frame + product */}
    <div
      className="
        anim-float
        relative
        h-[290px]
        w-[275px]
      "
    >
      {/* Top-left corner */}
      <span
        className="
          absolute
          -left-3.5
          -top-3.5
          h-20
          w-20
          border-l
          border-t
          border-stone-300
          dark:border-neutral-700
        "
      />

      {/* Top-right corner */}
      <span
        className="
          absolute
          -right-3.5
          -top-3.5
          h-20
          w-20
          border-r
          border-t
          border-stone-300
          dark:border-neutral-700
        "
      />

      {/* Bottom-left corner */}
      <span
        className="
          absolute
          -bottom-3.5
          -left-3.5
          h-20
          w-20
          border-b
          border-l
          border-stone-300
          dark:border-neutral-700
        "
      />

      {/* Bottom-right corner */}
      <span
        className="
          absolute
          -bottom-3.5
          -right-3.5
          h-20
          w-20
          border-b
          border-r
          border-stone-300
          dark:border-neutral-700
        "
      />

      {/* Red scan line */}
      <span
        className="
          scan-sweep
          absolute
          -left-5
          -right-5
          top-1/2
          z-20
          h-px
          bg-red-600
        "
      />

      {/* Product */}
      <img
        src={scanimg}
        alt="Product being analyzed"
        className="
          absolute
          left-1/2
          top-1/2
          z-10
          h-[330px]
          w-auto
          -translate-x-1/2
          -translate-y-1/2
          object-contain
        "
      />
    </div>
  </div>
);

export default ScanVisual;