import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="font-body min-h-screen bg-stone-100 text-stone-900 selection:bg-accent/20 dark:bg-neutral-950 dark:text-stone-50 site-wrapper">
      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </div>
  );
}