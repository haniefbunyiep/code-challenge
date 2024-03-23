"use client";

import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const router = usePathname();
  return (
    <nav>
      {/* Tablet and below */}
      <div className="lg:hidden">
        <div className="relative flex h-[100px] flex-col items-center justify-between">
          <div className="relative flex h-[60%] w-full items-center justify-center border-b-2 border-dashed border-concrete bg-white">
            <div className="absolute left-10 z-50 flex items-center justify-center">
              <div className="drawer">
                <input
                  id="my-drawer"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content">
                  <label htmlFor="my-drawer" className="drawer-button">
                    <RxHamburgerMenu size={25} />
                  </label>
                </div>
                <div className="drawer-side">
                  <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <ul className="menu relative min-h-full w-80 bg-base-200 p-4 font-bold text-shuttlegray">
                    <li className="pt-10 hover:text-burnorange">
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link className="hover:text-burnorange" href="/aboutus">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-burnorange" href="/products">
                        Product
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-burnorange" href="/teams">
                        Our Teams
                      </Link>
                    </li>
                    <li className="hover:text-burnorange">
                      <a
                        href="https://www.tomoro-coffee.com/app/download"
                        target="_blank"
                      >
                        Download Now
                      </a>
                    </li>

                    {/* Close button */}
                    <input id="my-drawer" type="checkbox" className="hidden" />
                    <div className="absolute right-5">
                      <label htmlFor="my-drawer">
                        <MdClose size={25} className="text-black" />
                      </label>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            {/* Navbar Logo */}
            <div className="flex h-[80%] w-[30%] items-center justify-center ">
              <Link href="/">
                <img
                  src="https://www.tomoro-coffee.com/img/icon7.2a9d4c28.png"
                  alt=""
                  className="h-9 w-auto"
                />
              </Link>
            </div>
          </div>

          {usePathname().includes("/products") ? (
            <div className="flex h-[40%] w-full items-center justify-center">
              <div className="carousel flex h-full w-full items-center justify-center gap-2 rounded-none bg-pampas text-shuttlegray">
                <div className="btn carousel-item btn-ghost rounded-none">
                  <a href="#sectionCoffee">Coffee</a>
                </div>
                <div className="btn carousel-item btn-ghost rounded-none">
                  <a href="#sectionCoffeeOTD">Coffe-OTD</a>
                </div>
                <div className="btn carousel-item btn-ghost rounded-none">
                  <a href="#sectionFood">Food</a>
                </div>
                <div className="btn carousel-item btn-ghost rounded-none">
                  <a href="#sectionLimited">Limited Coffee</a>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      {/* Laptop and above */}
      <div className="hidden lg:block">
        <div className="flex h-[100px] flex-col items-center justify-between ">
          <div className="flex h-[60%] w-full items-center justify-between border-b-2 border-dashed border-concrete bg-white">
            {/* Navbar Logo */}
            <div className="flex h-[80%] w-[30%] items-center justify-center">
              <Link href="/">
                <img
                  src="https://www.tomoro-coffee.com/img/icon7.2a9d4c28.png"
                  alt=""
                  className="h-10 w-auto"
                />
              </Link>
            </div>
            {/* Navbar menu */}
            <div className="flex h-[80%] w-[40%] items-center justify-center text-nowrap">
              <ul className=" flex gap-9 text-lg">
                <li>
                  <Link
                    href="/"
                    className="text-shuttlegray hover:text-burnorange"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/aboutus"
                    className="text-shuttlegray hover:text-burnorange"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-shuttlegray hover:text-burnorange"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/teams"
                    className="text-shuttlegray hover:text-burnorange"
                  >
                    Our Teams
                  </Link>
                </li>
              </ul>
            </div>
            {/* Navbar Button */}
            <div className="flex h-[80%] w-[30%] items-center justify-center">
              <a
                className="boder-2 flex h-[80%] w-auto items-center rounded-full border border-shuttlegray px-2 text-lg text-shuttlegray hover:border-burnorange hover:text-burnorange"
                href="https://www.tomoro-coffee.com/app/download"
                target="_blank"
              >
                Download App
              </a>
            </div>
          </div>

          {usePathname().includes("/products") ? (
            <div className="flex h-[40%] w-full items-center justify-center">
              <div className="carousel flex h-full w-full items-center justify-center gap-2 rounded-none bg-pampas text-shuttlegray">
                <div className="btn carousel-item btn-ghost rounded-none">
                  <a href="#sectionCoffee">Coffee</a>
                </div>
                <div className="btn carousel-item btn-ghost rounded-none">
                  <a href="#sectionCoffeeOTD">Coffe-OTD</a>
                </div>
                <div className="btn carousel-item btn-ghost rounded-none">
                  <a href="#sectionFood">Food</a>
                </div>
                <div className="btn carousel-item btn-ghost rounded-none">
                  <a href="#sectionLimited">Limited Coffee</a>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
