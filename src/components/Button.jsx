export default function PrimaryButton({
  children,
  className = "",
  ...props
}) {
  return (
    <button
      className={`primarybutton`}
      {...props}
    >
      {children}
    </button>
  );
}