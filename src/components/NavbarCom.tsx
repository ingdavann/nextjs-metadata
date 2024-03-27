'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Image from "next/image";
import logo from "../../public/asset/image/logo.png";
import { usePathname } from "next/navigation";
export default function NavbarCom() {
  const pathname = usePathname();
  return (
    <Navbar className="bg-slate-200 text-slate-800">
      <NavbarBrand>
        <Image src={logo} width={60} height={60} alt=""></Image>
        <p className="font-bold text-inherit">NIKE</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/" aria-current="page" className={`${pathname==="/" && 'font-bold'}`}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href={"./about-us"} className={`${pathname==="/about-us" && 'font-bold'}`}>
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href={"./product"} className={`${pathname==="/product" && 'font-bold'}`}>
            Product
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
