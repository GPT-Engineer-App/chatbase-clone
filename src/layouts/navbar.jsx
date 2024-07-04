import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { CircleUser, Menu, Package2 } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Features",
    to: "/features",
  },
  {
    title: "Pricing",
    to: "/pricing",
  },
  {
    title: "Contact",
    to: "/contact",
  },
];

const Layout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between">
        <DesktopNav isLoggedIn={isLoggedIn} />
        <MobileNav isLoggedIn={isLoggedIn} />
        <UserMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </header>
      <main className="flex-grow overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

const DesktopNav = ({ isLoggedIn }) => (
  <nav className="hidden md:flex md:items-center md:gap-5 lg:gap-6 text-lg font-medium md:text-sm">
    <NavItem
      to="/"
      className="flex items-center gap-2 text-lg font-semibold md:text-base"
    >
      <Package2 className="h-6 w-6" />
      <span className="sr-only">Acme Inc</span>
    </NavItem>
    {navItems.map((item) => (
      <NavItem key={item.to} to={item.to}>
        {item.title}
      </NavItem>
    ))}
    {isLoggedIn ? (
      <NavItem to="/account">Account</NavItem>
    ) : (
      <NavItem to="/signup">Sign Up</NavItem>
    )}
  </nav>
);

const MobileNav = ({ isLoggedIn }) => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="shrink-0 md:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left">
      <nav className="grid gap-6 text-lg font-medium">
        <NavItem
          to="/"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          <Package2 className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </NavItem>
        {navItems.map((item) => (
          <NavItem key={item.to} to={item.to}>
            {item.title}
          </NavItem>
        ))}
        {isLoggedIn ? (
          <NavItem to="/account">Account</NavItem>
        ) : (
          <NavItem to="/signup">Sign Up</NavItem>
        )}
      </nav>
    </SheetContent>
  </Sheet>
);

const UserMenu = ({ isLoggedIn, setIsLoggedIn }) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="secondary" size="icon" className="rounded-full">
        <CircleUser className="h-5 w-5" />
        <span className="sr-only">Toggle user menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      {isLoggedIn ? (
        <>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
            Logout
          </DropdownMenuItem>
        </>
      ) : (
        <DropdownMenuItem onClick={() => setIsLoggedIn(true)}>
          Login
        </DropdownMenuItem>
      )}
    </DropdownMenuContent>
  </DropdownMenu>
);

const NavItem = ({ to, children, className }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "transition-colors",
        isActive
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground",
        className,
      )
    }
  >
    {children}
  </NavLink>
);

export default Layout;