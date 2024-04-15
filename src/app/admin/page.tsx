import { AdminOverview } from "@/components/admin/admin-overview";
import users from "./users.json";
import { CalendarDateRangePicker } from "@/components/layout/date-range-picker";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AdminRecentSales } from "@/components/admin/admin-recent-sales";
import { AdminDashCard } from "@/components/admin/admin-dash-card";

export default function AdminPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">
          Hi, Welcome back 👋
        </h2>
        <div className="hidden md:flex items-center space-x-2">
          <CalendarDateRangePicker />
          <Button>Download</Button>
        </div>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <AdminDashCard
              title="Total Revenue"
              icon="dollar"
              amount="$45,231.89"
              content="+20.1% from last month"
            />

            <AdminDashCard
              title="Subscriptions"
              icon="users"
              amount="+2350"
              content="+180.1% from last month"
            />

            <AdminDashCard
              title="Sales"
              icon="panelTop"
              amount="+12,234"
              content="+19% from last month"
            />

            <AdminDashCard
              title="Active Now"
              icon="activity"
              amount="+573"
              content="+201 since last hour"
            />
          </div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <AdminOverview />
              </CardContent>
            </Card>
            <Card className="col-span-4 md:col-span-3">
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>
                  You made 265 sales this month.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AdminRecentSales />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            Yet to come
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
