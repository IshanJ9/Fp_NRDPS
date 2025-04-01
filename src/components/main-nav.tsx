"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/videos", label: "Videos" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="container mx-auto py-4 px-4 md:px-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          
          <Link href="/" >
          <Image 
              src="/logo.png"  // Update with the correct image path
              alt="Raja Photo Studio Logo"
              width={150}  // Adjust size as needed
              height={50} 
              className="h-auto w-auto" // Ensures proper scaling
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-white hover:text-[#ff6c4b] text-sm transition-colors",
                pathname === item.href && "text-[#ff6c4b]",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex gap-2">
          <Button asChild variant="ghost" className="text-white hover:text-[#ff6c4b] hover:bg-transparent">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="bg-[#ff6c4b] hover:bg-[#e05a3b] text-white">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

