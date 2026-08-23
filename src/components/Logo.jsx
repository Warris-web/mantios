import { Flame } from "lucide-react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

export default function Logo({ className = "" }) {
  return (
      <Link to="/"><div className={`flex items-center gap-2 ${className}`}>
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-accent-soft">
          <img src={logo} alt="Mantios" />
        </span>

        <span className="font-display text-lg font-semibold text-stone-900 dark:text-stone-50 logotxt">
          Mantios
        </span>
      </div>
    </Link>
  );
}