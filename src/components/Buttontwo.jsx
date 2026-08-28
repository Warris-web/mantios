export default function PrimaryButtontwo({
  children,
  className = "",
  ...props
}) {
  return (
    <button
      className={`primarybuttontwo`}
      {...props}
    ><span>
      {children}
    </span>
    </button>
  );
}