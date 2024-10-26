"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"

const pendingRequests = [
  {
    id: 1,
    name: "Sarah Johnson",
    dates: "Dec 24-26, 2023",
    type: "Christmas Break",
  },
  {
    id: 2,
    name: "Mike Thompson",
    dates: "Jan 2-5, 2024",
    type: "New Year Holiday",
  },
]

export function PendingRequests() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pending Requests</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {pendingRequests.map((request) => (
            <div
              key={request.id}
              className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
            >
              <div>
                <p className="font-medium">{request.name}</p>
                <p className="text-sm text-muted-foreground">{request.dates}</p>
                <p className="text-sm text-muted-foreground">{request.type}</p>
              </div>
              <div className="flex gap-2">
                <Button size="icon" variant="outline" className="h-8 w-8">
                  <Check className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="h-8 w-8">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}