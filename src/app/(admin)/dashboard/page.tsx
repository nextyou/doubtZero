 import { EcommerceMetrics } from "@/components/ecommerce/EcommerceMetrics";
import React from "react";
import MonthlySalesChart from "@/components/ecommerce/MonthlySalesChart";
import RecentDoubts from "@/components/ecommerce/RecentDoubts";
import SubjectWiseGraphCard from "@/components/ecommerce/SubjectWiseGraphCard";

export default function Ecommerce() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 space-y-6 xl:col-span-7">
        <EcommerceMetrics />

        <MonthlySalesChart />
      </div> 

      <div className="col-span-12 xl:col-span-5">
        <SubjectWiseGraphCard />
      </div>

      <div className="col-span-12 xl:col-span-7">
        <RecentDoubts title="Recent Doubts" />
      </div>
    </div>
  );
}
