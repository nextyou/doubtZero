"use client";
import { memo, useCallback } from "react";
import Select from "../form/Select";
const languages = [
    { value: "Hindi", label: "Hindi" },
    { value: "English", label: "English" },
  ];
const Language = () => {
    let language = ''
    if (typeof window !== 'undefined' && window.localStorage) {
        // Use localStorage here
     language = window.localStorage.getItem("language") || "English";
   
    }
   
   const setLanguage = useCallback((lang: string) => {
     window.localStorage.setItem("language", lang);
       window.location.reload()
    
   }, []);
    return (<div>
          <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Select Language
              </p>
            <Select
              options={languages}
              placeholder="Select Language"
              onChange={setLanguage}
              className="dark:bg-dark-900"
              defaultValue={language}
            />
          </div>
    )
}
export default memo(Language);