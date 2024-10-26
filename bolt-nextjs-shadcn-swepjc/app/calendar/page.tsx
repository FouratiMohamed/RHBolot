"use client"

import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Users } from "lucide-react"

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  
  return (
    <main className="min-h-screen bg-gray-50 pt-8 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Team Calendar</h1>
          <Button variant="outline" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            View Team Schedule
          </Button>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <Tabs defaultValue="month" className="w-full">
              <div className="flex items-center justify-between mb-4">
                <TabsList>
                  <TabsTrigger value="month">Month</TabsTrigger>
                  <TabsTrigger value="week">Week</TabsTrigger>
                  <TabsTrigger value="day">Day</TabsTrigger>
                </TabsList>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <TabsContent value="month" className="mt-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border w-full"
                />
              </TabsContent>
              <TabsContent value="week" className="mt-0">
                <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                  Week view coming soon
                </div>
              </TabsContent>
              <TabsContent value="day" className="mt-0">
                <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                  Day view coming soon
                </div>
              </TabsContent>
            </Tabs>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between py-4">
              <div>
                <h3 className="font-semibold">Team Members on Holiday</h3>
                <p className="text-sm text-muted-foreground">
                  {date ? date.toLocaleDateString('en-US', { 
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  }) : 'Select a date'}
                </p>
              </div>
              <Button>Request Time Off</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}