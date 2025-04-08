// app/not-found.tsx
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mb-6 text-lg">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/" className="text-blue-500 underline">
        Go back home
      </Link>
    </div>
  );
}
