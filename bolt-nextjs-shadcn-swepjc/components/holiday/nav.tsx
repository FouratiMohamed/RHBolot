"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Home, Menu, PlusCircle, Settings, Users } from "lucide-react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

const routes = [
  { name: "Dashboard", icon: Home, href: "/" },
  { name: "Calendar", icon: Calendar, href: "/calendar" },
  { name: "Team", icon: Users, href: "/team" },
  { name: "Settings", icon: Settings, href: "/settings" },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <div className="flex flex-col space-y-4 mt-4">
                  {routes.map((route) => {
                    const Icon = route.icon
                    return (
                      <Link
                        key={route.href}
                        href={route.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center space-x-2 text-sm font-medium"
                      >
                        <Icon className="h-5 w-5" />
                        <span>{route.name}</span>
                      </Link>
                    )
                  })}
                </div>
              </SheetContent>
            </Sheet>
            <Link href="/" className="flex items-center space-x-2">
              <Calendar className="h-6 w-6" />
              <span className="text-xl font-bold">Holiday Manager</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-6">
            {routes.map((route) => {
              const Icon = route.icon
              return (
                <Link
                  key={route.href}
                  href={route.href}
                  className="flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  <Icon className="h-4 w-4" />
                  <span>{route.name}</span>
                </Link>
              )
            })}
          </div>

          <div className="flex items-center">
            <Button className="flex items-center space-x-1">
              <PlusCircle className="h-4 w-4" />
              <span>Request Holiday</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}