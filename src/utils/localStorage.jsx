const employeeData = [
  {
    id: 1,
    name: "Ali Raza",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Update Homepage UI",
        date: "2026-03-28",
        name: "Employee 1",
        category: "Design",
        description: "Improve homepage layout and fix spacing issues.",
        newTask: true,
        active: false,
        completed: false,
        failed: false
      },
      {
        title: "Fix Navbar Bug",
        date: "2026-03-29",
        name: "Employee 1",
        category: "Development",
        description: "Resolve navbar responsiveness issue on mobile.",
        newTask: false,
        active: true,
        completed: false,
        failed: false
      },
      {
        title: "Create Banner",
        date: "2026-03-30",
        name: "Employee 1",
        category: "Design",
        description: "Design promotional banner for new campaign.",
        newTask: false,
        active: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 2,
    name: "Ahmed Khan",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Database Backup",
        date: "2026-03-28",
        name: "Employee 2",
        category: "Database",
        description: "Take full backup of database.",
        newTask: true,
        active: false,
        completed: false,
        failed: false
      },
      {
        title: "Optimize Queries",
        date: "2026-03-29",
        name: "Employee 2",
        category: "Development",
        description: "Improve slow SQL queries.",
        newTask: false,
        active: true,
        completed: false,
        failed: false
      },
      {
        title: "Bug Testing",
        date: "2026-04-01",
        name: "Employee 2",
        category: "Testing",
        description: "Test newly added features.",
        newTask: false,
        active: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 3,
    name: "Usman Tariq",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Write API Docs",
        date: "2026-03-27",
        name: "Employee 3",
        category: "Documentation",
        description: "Prepare API documentation.",
        newTask: true,
        active: false,
        completed: false,
        failed: false
      },
      {
        title: "Fix Form Errors",
        date: "2026-03-29",
        name: "Employee 3",
        category: "Development",
        description: "Resolve form validation errors.",
        newTask: false,
        active: true,
        completed: false,
        failed: false
      },
      {
        title: "Client Meeting Prep",
        date: "2026-03-30",
        name: "Employee 3",
        category: "Management",
        description: "Prepare slides for meeting.",
        newTask: false,
        active: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 4,
    name: "Hussain",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Create Test Cases",
        date: "2026-03-28",
        name: "Employee 4",
        category: "Testing",
        description: "Write test cases.",
        newTask: true,
        active: false,
        completed: false,
        failed: false
      },
      {
        title: "Run UI Tests",
        date: "2026-03-29",
        name: "Employee 4",
        category: "Testing",
        description: "Perform UI testing.",
        newTask: false,
        active: true,
        completed: false,
        failed: false
      },
      {
        title: "Verify Fixes",
        date: "2026-04-01",
        name: "Employee 4",
        category: "Testing",
        description: "Verify resolved bugs.",
        newTask: false,
        active: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 5,
    name: "Hassan Ali",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Social Media Post",
        date: "2026-03-28",
        name: "Employee 5",
        category: "Marketing",
        description: "Create social media post.",
        newTask: true,
        active: false,
        completed: false,
        failed: false
      },
      {
        title: "Email Campaign",
        date: "2026-03-29",
        name: "Employee 5",
        category: "Marketing",
        description: "Send promotional emails.",
        newTask: false,
        active: true,
        completed: false,
        failed: false
      },
      {
        title: "Analyze Engagement",
        date: "2026-03-31",
        name: "Employee 5",
        category: "Marketing",
        description: "Analyze campaign results.",
        newTask: false,
        active: false,
        completed: true,
        failed: false
      }
    ]
  }
];
const adminData = [{
  "id": 0,
  "email": "admin@example.com",
  "password": "123"
}]

export const setData = () => {
  localStorage.setItem('employee', JSON.stringify(employeeData))
  localStorage.setItem('admin', JSON.stringify(adminData))
}

export const updateData = (task) => {

  let employee = JSON.parse(localStorage.getItem('employee'))

  if (!employee) return
  const assignee = employee.find(emp => emp.id == Number(task.assign))

  // console.log("Assignee:", assignee)

  if (assignee) {
    assignee.tasks.push(task)
    localStorage.setItem('employee',JSON.stringify(employee))
  }
  
  return employee

}

export const getData = () => {
  const employee = localStorage.getItem('employee')
  const admin = localStorage.getItem('admin')
  return {
    employee: employee ? JSON.parse(employee) : employeeData,
    admin: admin ? JSON.parse(admin) : adminData
  }
}