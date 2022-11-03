import { Disclosure } from "@headlessui/react";
import { HiOutlineMenuAlt2, HiOutlineX } from "react-icons/hi";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Skills", href: "#skills", current: false },
  { name: "My Work", href: "#myWork", current: false },
  { name: "Services", href: "#services", current: false },
  { name: "Hire Me", href: "#contact", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const matchPath = (path: string) => {
    if (typeof window !== "undefined") {
      return window.location.hash === path;
    }
  };

  return (
    <Disclosure
      as="nav"
      className="fixed top-0 left-0 right-0 z-10 bg-gray-800 shadow-md"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-end  rounded-md p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white hover:bg-gray-700 hover:text-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <HiOutlineX className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <HiOutlineMenuAlt2
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <section className="w-full">
                <div className="flex items-center justify-between">
                  <div className="mx-4">
                    <Link
                      href="/#"
                      className="font-poppins text-2xl font-bold text-white"
                    >
                      Abdi Zamed
                    </Link>
                  </div>
                  <div className="hidden font-poppins sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => {
                        const isActive = matchPath(item.href);
                        return (
                          <AnimatePresence key={item.name}>
                            <Link
                              href={item.href}
                              className={classNames(
                                isActive
                                  ? "bg-gray-900 text-white"
                                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                "rounded-md px-3 py-2 text-sm font-medium"
                              )}
                              aria-current={isActive ? "page" : undefined}
                            >
                              {item.name}
                            </Link>
                          </AnimatePresence>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <Disclosure.Panel className="font-poppins sm:hidden">
            <div className="space-y-1 px-2  pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
