"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@heroui/react";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Contact Us", href: "#" },
];

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className="bg-white text-black  px-4 bg-white backdrop-blur-md  shadow-md"
      //   isBordered
    >
      {/* Left Section (Menu toggle + Logo) */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-black"
        />
        <NavbarBrand>
          <Image
            src="/xtrnew.jpeg"
            alt="Logo"
            width={94}
            height={45}
            priority
            quality={100}
            sizes="94px"
            className="rounded-[4px] object-contain"
          />
        </NavbarBrand>
      </NavbarContent>

      {/* Center Section (Nav Items for Desktop) */}
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
    {navItems.map((item, index) => (
      <NavbarItem key={index}>
        <Link
          href={item.href}
          className="text-black-600 font-semibold hover:text-green-700 transition-colors duration-300"
        >
          {item.name}
        </Link>
      </NavbarItem>
    ))}
  </NavbarContent>


      {/* Right Section (Buttons) */}
      <NavbarContent justify="end">
        {/* <NavbarItem className="hidden lg:flex">
          <Link
            href="#"
            className="w-fit px-4 py-2 border border-black text-[16px] text-black hover:bg-white hover:text-black rounded-md transition-all duration-300"
          >
            Login
          </Link>
        </NavbarItem> */}
        <NavbarItem className="hidden sm:flex">
          <Button
            as={Link}
            href="#"
            variant="flat"
            className="bg-black text-white hover:bg-white hover:text-black rounded-md hover:border-black"
          >
            🚗 Find My Car
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-black">
        {navItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              href={item.href}
              className="w-full text-white font-bold text-lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}

        <NavbarMenuItem>
          <Link
            href="#"
            className="w-full px-4 py-2 border border-white bg-white text-black hover:bg-black hover:text-white rounded-md text-center block"
          >
            🚗 Find My Car
          </Link>
        </NavbarMenuItem>

        <NavbarMenuItem>
          <Link
            href="#"
            className="w-full px-4 py-2 border border-white text-white hover:bg-white hover:text-black rounded-md text-center block"
          >
            Login
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
