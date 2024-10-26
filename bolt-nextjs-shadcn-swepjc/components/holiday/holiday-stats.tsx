"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function HolidayStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Holiday Allowance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Days Remaining</span>
              <span className="text-sm text-muted-foreground">15/25</span>
            </div>
            <Progress value={60} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium mb-1">Days Taken</p>
              <p className="text-2xl font-bold">10</p>
            </div>
            <div>
              <p className="text-sm font-medium mb-1">Pending</p>
              <p className="text-2xl font-bold">2</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}