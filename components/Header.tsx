"use client";
import Link from "next/link";
import Container from "./ui/container";
import { Button } from "./ui/button";
import { BellIcon, MenuIcon, Moon, SearchIcon, Sun } from "lucide-react";
import React from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useTheme } from "next-themes";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const [openSearch, setOpenSearch] = React.useState<boolean>(false);

  const list = [
    {
      label: "Leave",
      route: "/leave",
    },
    {
      label: "Overtime",
      route: "/overtime",
    },
    {
      label: "Expense",
      route: "/expense",
    },
    {
      label: "Attendance",
      route: "/attendance",
    },
    {
      label: "Finance",
      route: "/finance",
    },
    {
      label: "Employee",
      route: "/employee",
    },
  ];
  const handleOpenSearch = () => {
    setOpenSearch(true);
    console.log("open search", openSearch);
  };
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="relative px-4 flex h-16 items-center justify-between w-full max-md:space-x-4">
          <div className="flex items-center max-md:hidden">
            <Link href="/" className="text-xl font-bold">
              <h1 className="text-xl font-bold">AntaraCo</h1>
            </Link>
          </div>
          <MenuIcon className="text-xl ml-4 md:hidden cursor-pointer" />
          <div className="flex items-center space-x-6">
            <Button
              className="inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
              onClick={handleOpenSearch}
            >
              Search...
              <kbd className="absolute top-0 right-0 h-full w-8 pointer-events-none flex items-center justify-center rounded-r-[0.5rem] bg-accent text-accent-foreground">
                <SearchIcon className="text-xl" />
              </kbd>
            </Button>
            <Button variant="ghost" size="icon">
              <BellIcon className="text-xl cursor-pointer" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              className="mr-6"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle Theme</span>
            </Button>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <CommandDialog open={openSearch} onOpenChange={setOpenSearch}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              {list
                .sort((a, b) => a.label.localeCompare(b.label))
                .map((item, index) => (
                  <CommandItem key={index}>{item.label}</CommandItem>
                ))}
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </Container>
    </header>
  );
};
