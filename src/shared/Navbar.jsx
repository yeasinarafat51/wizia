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
} from "@nextui-org/react";

import logo from "../images/Logo.png";

export default function NavbarArea() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["About Us", "Pricing", "Customers", "Solutions"];

  return (
    <Navbar className="bg-transparent" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="flex justify-end">
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <img src={logo} alt="" />
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden pr-4 text-white"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="foreground" aria-current="page">
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Solutions
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Button
            as={Link}
            className="text-[14px] font-Work Sans font-[500px] text-[#002228] rounded-full"
            color="primary"
            href="#"
          >
            Book a Demo
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="text-[14px] font-Work Sans font-[500px] text-[#FFFFFF] rounded-full bg-transparent border-primary border-2"
            href="#"
          >
            Contact Us
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-[#002228]">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarItem>
          <Button
            as={Link}
            className="text-[14px] font-Work Sans font-[500px] text-[#002228] rounded-full"
            color="primary"
            href="#"
          >
            Book a Demo
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="text-[14px] font-Work Sans font-[500px] text-[#FFFFFF] rounded-full bg-transparent border-primary border-2"
            href="#"
          >
            Contact Us
          </Button>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
