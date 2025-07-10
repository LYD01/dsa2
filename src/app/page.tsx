"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

 const routes = [
          { path: "/arrays-and-hashing", label: "arrays and hashing" },
          { path: "/binary-search", label: "binary search" },
          { path: "/debounce-and-throttle", label: "debounce and throttle" },
          { path: "/merge-sort", label: "merge sort" },
          { path: "/sliding-window", label: "sliding window" },
          { path: "/stack", label: "stack" },
          { path: "/two-pointer", label: "two pointer" },
          { path: "/linked-lists", label: "linked lists" }, 
        ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <nav>
            <ul className="flex gap-6">
              {routes.map((route) => (
                <li key={route.path}>
                  <Link
                    href={route.path}
                    className={pathname === route.path ? "font-bold underline" : ""}
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
    </div>
  );
}
