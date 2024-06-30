import Link from "next/link";

export function Navbar() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center justify-between bg-[#658147] text-[#E7F0DC] shadow-md">
      <Link href="/" className="flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        <span className="ml-2 text-2xl font-bold">Pomodoro Focus</span>
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="#how-it-works" className="hover:underline">
              How It Works
            </Link>
          </li>
          <li>
            <Link href="#settings" className="hover:underline">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
