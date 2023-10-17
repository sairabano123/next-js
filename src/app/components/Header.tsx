import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-primary p-4">
      <div className="container mx-auto flex items-center space-x-4">

        <div className="flex items-center">
          <img
            src="/food-logo.png"
            alt="Logo"
            className="h-10 w-10 mr-2"
          />
          <span className="text-white text-xl font-semibold">Restaurants Inn</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link className="text-white" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-white" href="/restaurants">
              Restaurants
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}