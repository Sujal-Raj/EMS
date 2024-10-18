

const employees = [
      {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "task": {
          "newtask": true,
          "completed": false,
          "accepted": true,
          "failed": false,
          "tasktitle": "Website Design",
          "taskdescription": "Design a responsive homepage for the company website.",
          "date": "2024-10-18",
          "category": "Design"
        }
      },
      {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "task": {
          "newtask": false,
          "completed": true,
          "accepted": true,
          "failed": false,
          "tasktitle": "API Integration",
          "taskdescription": "Integrate payment gateway API into the platform.",
          "date": "2024-09-30",
          "category": "Development"
        }
      },
      {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "task": {
          "newtask": true,
          "completed": false,
          "accepted": false,
          "failed": false,
          "tasktitle": "User Testing",
          "taskdescription": "Conduct user testing for the new mobile app features.",
          "date": "2024-10-20",
          "category": "QA"
        }
      },
      {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "task": {
          "newtask": false,
          "completed": true,
          "accepted": true,
          "failed": false,
          "tasktitle": "Server Maintenance",
          "taskdescription": "Perform routine maintenance on the company's servers.",
          "date": "2024-10-10",
          "category": "Operations"
        }
      },
      {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "task": {
          "newtask": false,
          "completed": false,
          "accepted": true,
          "failed": true,
          "tasktitle": "Client Proposal",
          "taskdescription": "Prepare a proposal for a potential client in the financial sector.",
          "date": "2024-09-25",
          "category": "Business"
        }
      }
    ]

  

const admin = [
    {
        "id": 1,
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

    console.log(employees);
    console.log(admin);
}
