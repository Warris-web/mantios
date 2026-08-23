import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="text-center">
        <p className="text-sm font-semibold text-accent">404</p>

        <h1 className="font-display mt-4 text-5xl font-semibold text-stone-900">
          Page not found
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-stone-500">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white hover:bg-accent"
        >
          <ArrowLeft size={15} />
          Back home
        </Link>
      </div>
    </div>
  );
}