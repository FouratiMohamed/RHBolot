"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Calendar, Mail, MoreVertical } from "lucide-react"

interface TeamMemberCardProps {
  name: string
  role: string
  email: string
  imageUrl: string
  daysRemaining: number
  totalDays: number
}

export function TeamMemberCard({
  name,
  role,
  email,
  imageUrl,
  daysRemaining,
  totalDays,
}: TeamMemberCardProps) {
  const progress = (daysRemaining / totalDays) * 100

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={imageUrl} alt={name} />
            <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-sm">
            <Mail className="h-4 w-4" />
            <span>{email}</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Holiday Allowance</span>
              </div>
              <span className="font-medium">
                {daysRemaining}/{totalDays} days
              </span>
            </div>
            <Progress value={progress} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}