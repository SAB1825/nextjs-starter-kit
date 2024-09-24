import { currentUser } from '@clerk/nextjs/server'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, DollarSign, Users } from "lucide-react"

const DashboardPage = async () => {
  const user = await currentUser();
  const stats = [
    { title: "Total Revenue", value: "$45,231.89", icon: DollarSign },
    { title: "Subscriptions", value: "2,350", icon: Users },
    { title: "Active Now", value: "573", icon: BarChart },
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Welcome, {user?.fullName || 'User'}!</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, index) => (
          <Card key={index} className='dark:bg-black dark:border-[#111111]'>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <Button>View Detailed Analytics</Button>
      </div>
    </div>
  )
}

export default DashboardPage