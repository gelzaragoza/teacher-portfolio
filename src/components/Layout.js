import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="bg-red-700 text-yellow-100 shadow-md sticky top-0 z-50">
        <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center p-4">
          <h1 className="text-2xl font-extrabold tracking-widest mb-2 md:mb-0">
            Artifacts of Odyssey
          </h1>
          <div className="flex flex-wrap gap-3 text-sm">
            {[
              ["/", "Home"],
              ["/acknowledgement", "Acknowledgement"],
              ["/cv", "CV"],
              ["/teaching-philosophy", "Philosophy"],
              ["/deployment", "Deployment"],
              ["/research", "Research"],
              ["/materials", "Materials"],
              ["/artifacts", "Artifacts"]
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        {children}
      </main>

      <footer className="bg-yellow-300 text-red-800 text-center py-4 text-sm">
        © {new Date().getFullYear()} Kirsteen Mae Zaragoza — All rights reserved.
      </footer>
    </div>
  );
}