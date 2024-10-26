import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HolidayStats } from "@/components/holiday/holiday-stats"
import { PendingRequests } from "@/components/holiday/pending-requests"
import { TeamCalendar } from "@/components/holiday/team-calendar"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 pt-8 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600 mb-8">Manage your team's time off efficiently</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <HolidayStats />
          <PendingRequests />
          <TeamCalendar />
        </div>
      </div>
    </main>
  )
}