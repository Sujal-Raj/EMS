



// const employees = [
//   {
//     "id": 1,
//     "name": "Aarav Sharma",
//     "email": "employee1@example.com",
//     "password": "123",
//     "task": [{
//       "newtask": true,
//       "completed": false,
//       "accepted": true,
//       "failed": false,
//       "tasktitle": "Website Design",
//       "taskdescription": "Design a responsive homepage for the company website.",
//       "date": "2024-10-18",
//       "category": "Design"
//     }],
//     "taskNumbers": {
//       "newTasks": 1,
//       "activeTasks": 1,
//       "failedTasks": 0,
//       "totalTasks": 2
//     }
//   },
//   {
//     "id": 2,
//     "name": "Ishaan Patel",
//     "email": "employee2@example.com",
//     "password": "123",
//     "task": [{
//       "newtask": false,
//       "completed": true,
//       "accepted": true,
//       "failed": false,
//       "tasktitle": "API Integration",
//       "taskdescription": "Integrate payment gateway API into the platform.",
//       "date": "2024-09-30",
//       "category": "Development"
//     }],
//     "taskNumbers": {
//       "newTasks": 0,
//       "activeTasks": 0,
//       "failedTasks": 0,
//       "totalTasks": 1
//     }
//   },
//   {
//     "id": 3,
//     "name": "Vihan Singh",
//     "email": "employee3@example.com",
//     "password": "123",
//     "task": [{
//       "newtask": true,
//       "completed": false,
//       "accepted": false,
//       "failed": false,
//       "tasktitle": "User Testing",
//       "taskdescription": "Conduct user testing for the new mobile app features.",
//       "date": "2024-10-20",
//       "category": "QA"
//     }],
//     "taskNumbers": {
//       "newTasks": 1,
//       "activeTasks": 1,
//       "failedTasks": 0,
//       "totalTasks": 2
//     }
//   },
//   {
//     "id": 4,
//     "name": "Kabir Reddy",
//     "email": "employee4@example.com",
//     "password": "123",
//     "task": [{
//       "newtask": false,
//       "completed": true,
//       "accepted": true,
//       "failed": false,
//       "tasktitle": "Server Maintenance",
//       "taskdescription": "Perform routine maintenance on the company's servers.",
//       "date": "2024-10-10",
//       "category": "Operations"
//     }],
//     "taskNumbers": {
//       "newTasks": 0,
//       "activeTasks": 0,
//       "failedTasks": 0,
//       "totalTasks": 1
//     }
//   },
//   {
//     "id": 5,
//     "name": "Arjun Verma",
//     "email": "employee5@example.com",
//     "password": "123",
//     "task": [{
//       "newtask": false,
//       "completed": false,
//       "accepted": true,
//       "failed": true,
//       "tasktitle": "Client Proposal",
//       "taskdescription": "Prepare a proposal for a potential client in the financial sector.",
//       "date": "2024-09-25",
//       "category": "Business"
//     }],
//     "taskNumbers": {
//       "newTasks": 0,
//       "activeTasks": 1,
//       "failedTasks": 1,
//       "totalTasks": 2
//     }
//   }
// ];


const employees = [
  {
    "id": 1,
    "name": "Aarav Sharma",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "newtask": true,
        "completed": false,
        "accepted": true,
        "failed": false,
        "tasktitle": "Website Design",
        "taskdescription": "Design a responsive homepage for the company website.",
        "date": "2024-10-18",
        "category": "Design"
      },
      {
        "newtask": false,
        "completed": true,
        "accepted": true,
        "failed": false,
        "tasktitle": "UI Revamp",
        "taskdescription": "Revamp the UI of the admin dashboard for better user experience.",
        "date": "2024-09-15",
        "category": "Design"
      }
    ],
    "taskNumbers": {
      "newTasks": 1,
      "activeTasks": 1,
      "failedTasks": 0,
      "totalTasks": 2
    }
  },
  {
    "id": 2,
    "name": "Ishaan Patel",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "newtask": false,
        "completed": true,
        "accepted": true,
        "failed": false,
        "tasktitle": "API Integration",
        "taskdescription": "Integrate payment gateway API into the platform.",
        "date": "2024-09-30",
        "category": "Development"
      },
      {
        "newtask": true,
        "completed": false,
        "accepted": true,
        "failed": false,
        "tasktitle": "Backend Refactor",
        "taskdescription": "Refactor the backend code for better performance.",
        "date": "2024-10-12",
        "category": "Development"
      }
    ],
    "taskNumbers": {
      "newTasks": 1,
      "activeTasks": 1,
      "failedTasks": 0,
      "totalTasks": 2
    }
  },
  {
    "id": 3,
    "name": "Vihan Singh",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "newtask": true,
        "completed": false,
        "accepted": false,
        "failed": false,
        "tasktitle": "User Testing",
        "taskdescription": "Conduct user testing for the new mobile app features.",
        "date": "2024-10-20",
        "category": "QA"
      }
    ],
    "taskNumbers": {
      "newTasks": 1,
      "activeTasks": 1,
      "failedTasks": 0,
      "totalTasks": 1
    }
  },
  {
    "id": 4,
    "name": "Kabir Reddy",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "newtask": false,
        "completed": true,
        "accepted": true,
        "failed": false,
        "tasktitle": "Server Maintenance",
        "taskdescription": "Perform routine maintenance on the company's servers.",
        "date": "2024-10-10",
        "category": "Operations"
      }
    ],
    "taskNumbers": {
      "newTasks": 0,
      "activeTasks": 0,
      "failedTasks": 0,
      "totalTasks": 1
    }
  },
  {
    "id": 5,
    "name": "Arjun Verma",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "newtask": false,
        "completed": false,
        "accepted": true,
        "failed": true,
        "tasktitle": "Client Proposal",
        "taskdescription": "Prepare a proposal for a potential client in the financial sector.",
        "date": "2024-09-25",
        "category": "Business"
      },
      {
        "newtask": true,
        "completed": false,
        "accepted": false,
        "failed": false,
        "tasktitle": "Client Follow-up",
        "taskdescription": "Follow up with clients for project updates and feedback.",
        "date": "2024-10-01",
        "category": "Business"
      }
    ],
    "taskNumbers": {
      "newTasks": 1,
      "activeTasks": 1,
      "failedTasks": 1,
      "totalTasks": 2
    }
  }
];


  

const admin = [
    {
        "id": 1,
        "name": "Sujal raj",
        "email": "admin@example.com",
        "password": "admin123"
      }
]


export const setLocalStogare = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}
export const getLocalStogare = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    // console.log(employees);
    // console.log(admin);

    return {employees, admin};
}
