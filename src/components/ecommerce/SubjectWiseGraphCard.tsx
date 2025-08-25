"use client";

import React from "react";

const lists =[{
  title: 'Math',
  total: '2,379 Doubts',
  value: '79%'
},
{
  title: 'Science',
  total: '589 Doubts',
  value: '29%'
},
{
  title: 'Computer',
  total: '1589 Doubts',
  value: '70%'
},
{
  title: 'General Competions',
  total: '5089 Doubts',
  value: '99%'
}]
export default function SubjectWiseGraphCard() { 
 
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6">
      <div className="flex justify-between border-b border-bottom-gray-200 mb-10">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
           Subject wise doubts
          </h3>
          <p className="mt-1 mb-2 text-gray-500 text-theme-sm dark:text-gray-400">
            Number of doubts based on subjects
          </p>
        </div> 
      </div>
        

      <div className="space-y-5">
       {lists.map((list => {
        return (
          <React.Fragment key={list.title}>
           <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
           
            <div>
              <p className="font-semibold text-gray-800 text-theme-sm dark:text-white/90">
                {list.title}
              </p>
              <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                   {list.total}
              </span>
            </div>
          </div>

          <div className="flex w-full max-w-[140px] items-center gap-3">
            <div className="relative block h-2 w-full max-w-[100px] rounded-sm bg-gray-200 dark:bg-gray-800">
              <div className={`absolute left-0 top-0 flex h-full w-[${list.value}] items-center justify-center rounded-sm bg-brand-500 text-xs font-medium text-white`}></div>
            </div>
            <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                {list.value}
            </p>
          </div>
        </div></React.Fragment>
         
        )
       }))} 

         
      </div>
    </div>
  );
}
