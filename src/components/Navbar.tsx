"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, ChevronDown } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

const Navbar = () => {
    return (
        <header className="w-full border-b">
            <div className="container lg:px-20 mx-auto flex h-16 items-center justify-between px-4">
                {/* Left: Logo */}
                <Link href="/">
                    <span className="text-lg tracking-wider font-semibold">MyLogo</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-4">
                    <Link href="/about">
                        <Button variant="ghost">About</Button>
                    </Link>

                    {/* Desktop Dropdown for Calculators */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="flex items-center gap-1">
                                Calculators <ChevronDown className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-48">
                            <DropdownMenuLabel>Our Calculators</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <Link href="/calculators/finance">
                                <DropdownMenuItem>Finance Calculator</DropdownMenuItem>
                            </Link>
                            <Link href="/calculators/health">
                                <DropdownMenuItem>Health Calculator</DropdownMenuItem>
                            </Link>
                            <Link href="/calculators/lifestyle">
                                <DropdownMenuItem>Lifestyle Calculator</DropdownMenuItem>
                            </Link>
                            <Link href="/calculators/math">
                                <DropdownMenuItem>Math Calculator</DropdownMenuItem>
                            </Link>
                            {/* Add more calculator links as needed */}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Link href="/blog">
                        <Button variant="ghost">Blog</Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="ghost">Contact</Button>
                    </Link>
                </nav>

                {/* Mobile Nav (Sheet Menu) */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Menu className="" size={24} />
                        </SheetTrigger>
                        <SheetContent side="left">
                            <SheetHeader>
                                <SheetTitle>Navigation Menu</SheetTitle>
                                <SheetDescription>
                                    Explore the main sections of our website.
                                </SheetDescription>
                            </SheetHeader>
                            <nav className="flex flex-col gap-4 ">
                                <Link href="/about">
                                    <Button variant="ghost" className="w-full justify-start">About</Button>
                                </Link>

                                <Accordion className="px-4" type="single" collapsible>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Calculators</AccordionTrigger>
                                        <AccordionContent>
                                            <Link className="block py-1" href="/calculators/loan">
                                                <Button variant="ghost">Finance Calculator</Button>
                                            </Link>
                                            <Link className="block py-1" href="/calculators/financial">
                                                <Button variant="ghost">Health Calculator</Button>
                                            </Link>
                                            <Link className="block py-1" href="/calculators/mortgage">
                                                <Button variant="ghost">Lifestyle Calculator</Button>
                                            </Link>
                                            <Link className="block py-1" href="/calculators/mortgage">
                                                <Button variant="ghost">Math Calculator</Button>
                                            </Link>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>

                                <Link href="/blog">
                                    <Button variant="ghost" className="w-full justify-start">Blog</Button>
                                </Link>
                                <Link href="/contact">
                                    <Button variant="ghost" className="w-full justify-start">Contact</Button>
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}

export default Navbar