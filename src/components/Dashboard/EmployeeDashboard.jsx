import React from 'react'
import Header from '../other/Header'
import StatusTaskList from '../other/StatusTaskList'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div>
      <Header  />
      <StatusTaskList />
      <TaskList />
    </div>
  )
}

export default EmployeeDashboard
