import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import RecentDoubts from "@/components/ecommerce/RecentDoubts";
import React from "react";
 
export default function BasicTables() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Doubts History" />
      <div className="space-y-6"> 
           <RecentDoubts />
        
      </div>
    </div>
  );
}
