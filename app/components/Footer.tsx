import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#658147] text-[#E7F0DC] py-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Pomodoro Focus</h2>
            <p className="mt-2">Boost your productivity, one tomato at a time.</p>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center md:justify-end gap-4">
              <li><Link href="#" className="hover:underline">Home</Link></li>
              <li><Link href="#how-it-works" className="hover:underline">How It Works</Link></li>
              <li><Link href="#settings" className="hover:underline">Settings</Link></li>
              <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Pomodoro Focus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}