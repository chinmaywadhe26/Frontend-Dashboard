import {
  DollarSign,
  MonitorSmartphone,
  Replace,
  Construction,
  Shovel,
} from "lucide-react";
import { DashboardCard } from "./_components/dashboard-card";
import { BarChart } from "./_components/barchart";
import { LineGraph } from "./_components/linegraph";
export default function dashboard() {
  return (
    <div className="mt-2 flex flex-col gap-5 w-full">
      <h1 className="font-bold text-4xl mx-6 text-center">Dashboard</h1>
      <div className="mx-auto py-8">
        <div className="flex flex-col gap-5 w-full">
          <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
            {/* top parts : boxes  */}
            <DashboardCard
              label="Devices"
              amount="189"
              description="Total number of devices"
              Icon={MonitorSmartphone}
            />
            <DashboardCard
              label="Maintenance issues"
              amount="76"
              description="Total issues for Maintenance"
              Icon={Construction}
            />
            <DashboardCard
              label="Replacement issues"
              amount="45"
              description="Total issues for Replacement"
              Icon={Replace}
            />
            <DashboardCard
              label="Inventory"
              amount="560"
              description="Inventory"
              Icon={Shovel}
            />
          </section>
          <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
            {/* graphs */}
            <BarChart />
            <LineGraph />
          </section>
        </div>
      </div>
    </div>
  );
}
