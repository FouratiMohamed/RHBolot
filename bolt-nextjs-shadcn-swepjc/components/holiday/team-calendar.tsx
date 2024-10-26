"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

export function TeamCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Card className="col-span-full lg:col-span-2">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>Team Calendar</CardTitle>
        <Button variant="outline" size="sm">
          View Full Calendar
        </Button>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border mx-auto"
        />
      </CardContent>
    </Card>
  )
}