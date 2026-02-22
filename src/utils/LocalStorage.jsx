

const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskId: 1,
        title: "Build Login UI",
        description: "Create responsive login form using React.",
        date: "2026-02-20",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskId: 2,
        title: "Fix Navbar Bug",
        description: "Resolve alignment issue in navigation bar.",
        date: "2026-02-18",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskId: 3,
        title: "API Integration",
        description: "Integrate user API into dashboard.",
        date: "2026-02-22",
        category: "Backend",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },

  {
    id: 2,
    firstName: "Vihaan",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        taskId: 1,
        title: "Design Landing Page",
        description: "Create UI mockup for homepage.",
        date: "2026-02-21",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskId: 2,
        title: "Optimize Images",
        description: "Compress and optimize images for performance.",
        date: "2026-02-17",
        category: "Performance",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskId: 3,
        title: "Fix Footer Links",
        description: "Correct broken links in footer.",
        date: "2026-02-19",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },

  {
    id: 3,
    firstName: "Rohan",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskId: 1,
        title: "Setup Database",
        description: "Configure MongoDB connection.",
        date: "2026-02-23",
        category: "Database",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskId: 2,
        title: "Write API Docs",
        description: "Document all REST endpoints.",
        date: "2026-02-18",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskId: 3,
        title: "Authentication System",
        description: "Implement JWT authentication.",
        date: "2026-02-25",
        category: "Security",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },

  {
    id: 4,
    firstName: "Kabir",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        taskId: 1,
        title: "Create Dashboard Charts",
        description: "Build analytics charts using Chart.js.",
        date: "2026-02-20",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskId: 2,
        title: "Fix Login Error",
        description: "Resolve login validation issue.",
        date: "2026-02-16",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskId: 3,
        title: "Performance Testing",
        description: "Run load tests on server.",
        date: "2026-02-24",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },

  {
    id: 5,
    firstName: "Arjun",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskId: 1,
        title: "Implement Dark Mode",
        description: "Add theme toggle functionality.",
        date: "2026-02-21",
        category: "UI Enhancement",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskId: 2,
        title: "Email Notification Setup",
        description: "Configure email alerts system.",
        date: "2026-02-19",
        category: "Backend",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskId: 3,
        title: "Unit Testing",
        description: "Write unit tests for components.",
        date: "2026-02-17",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
