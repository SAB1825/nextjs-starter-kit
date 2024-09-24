"use client"
import {  ChevronLast, ChevronFirst, Plus, Calendar, CheckCircle } from "lucide-react"
import { useState, useContext, createContext, ReactNode } from "react"


interface SidebarContextType {
  expanded: boolean;
}

interface SidebarItemProps {
  icon: ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
  action?: string;
}

interface SidebarProps {
  children?: ReactNode;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export default function Sidebar({ children }: SidebarProps) {
  const [expanded, setExpanded] = useState<boolean>(true)

  
  
  return (
    <>
      <aside className="h-">
        <nav className="h-full flex flex-col bg-white text-black dark:bg-black dark:text-white">
          <div className="p-4 pb-2 flex justify-between items-center">
            <div className={`text-3xl font-bold ${expanded ? "w-auto" : "w-0 overflow-hidden"}`}>
             Dashboard
            </div>
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="p-1.5 rounded-lg bg-white dark:bg-black hover:bg-gray-100"
            >
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            <div className="flex-1 px-3">
              <SidebarItem icon={<Plus />} text="Add Task" action="addTask" />
              <SidebarItem icon={<Calendar />} text="Today Tasks" action="today-task"/>
              <SidebarItem icon={<CheckCircle />} text="Completed Tasks" action="completed" />
              {children}
            </div>
          </SidebarContext.Provider>

          
        </nav>
      </aside>
      
      
    </>
  )
}

export function SidebarItem({ icon, text, active, alert, action }: SidebarItemProps) {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("SidebarItem must be used within a SidebarContext.Provider");
  }
  const { expanded } = context;
  
  const handleClick = () => {
    if (action === 'addTask') {
      window.location.href = '/dashboard/'    

    } else if(action === 'completed'){
      window.location.href = '/dashboard/completed'    
    } else if(action === 'today-task'){
      window.location.href = '/dashboard/today-tasks'
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`
        relative flex items-center py-2 px-3 my-1 w-full
        font-medium rounded-md cursor-pointer
        transition-colors group 
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 "
            : "hover:bg-indigo-50 dark:hover-text-black text-gray-600 dark:text-white"
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        } group-hover:-translate-y-1 group-hover:text-black  text-left`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </button>
  )
}