import React from 'react'

const AgentSidebar = ({all,setAll,active,setActive,deactive,setDeactive}) => {
  return (
    <div className="min-h-full w-64">
    <div
      onClick={() => {
        setAll(true);
        setActive(false);
        setDeactive(false);
      }}
      className={`p-4 cursor-pointer ${
        all ? "bg-white dark:bg-gray-800 dark:rounded-md" : "font-light hover:text-info"
      }`}
    >
      <p>All</p>
    </div>
    <div
      onClick={() => {
        setAll(false);
        setActive(true);
        setDeactive(false);
      }}
      className={`p-4 cursor-pointer ${
        active ? "bg-white dark:bg-gray-800 dark:rounded-md" : "font-light hover:text-info"
      }`}
    >
      <p>Active</p>
    </div>
    <div
      onClick={() => {
        setAll(false);
        setActive(false);
        setDeactive(true);
      }}
      className={`p-4 cursor-pointer ${
        deactive ? "bg-white dark:bg-gray-800 dark:rounded-md" : "font-light hover:text-info"
      }`}
    >
      <p>Deactive</p>
    </div>
  </div>
  )
}

export default AgentSidebar