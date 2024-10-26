'use client';

import { TeamMemberCard } from '@/components/team/team-member-card';
import { TeamStats } from '@/components/team/team-stats';
import { TeamFilters } from '@/components/team/team-filters';
import { Button } from '@/components/ui/button';
import { UserPlus } from 'lucide-react';

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-8 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Team Management</h1>
          <Button className="flex items-center gap-2">
            <UserPlus className="h-4 w-4" />
            Add Team Member
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <TeamStats />
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <TeamFilters />
          </div>
          <div className="p-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <TeamMemberCard
              name="Sarah Johnson"
              role="Product Manager"
              email="sarah.j@company.com"
              imageUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=80"
              daysRemaining={15}
              totalDays={25}
            />
            <TeamMemberCard
              name="Michael Chen"
              role="Senior Developer"
              email="michael.c@company.com"
              imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop&q=80"
              daysRemaining={12}
              totalDays={25}
            />
            <TeamMemberCard
              name="Emily Rodriguez"
              role="UX Designer"
              email="emily.r@company.com"
              imageUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format&fit=crop&q=80"
              daysRemaining={18}
              totalDays={25}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
