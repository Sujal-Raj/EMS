# Employee Management System

## 🛠️ Project Overview

The **Employee Management System** is a web application that allows administrators to assign tasks to employees and enables employees to view and manage their tasks. This system is designed to simplify task management, improve communication, and provide a seamless experience for both admins and employees through a role-based dashboard system.

## ✨ Features

- **Role-Based Dashboards**: Depending on login credentials, users are directed to the Admin or Employee dashboard.
- **Task Assignment**: Admins can create tasks by filling in details like task title, due date, priority, category, and description.
- **Task Management**: Employees can log in, view assigned tasks, accept them, and track their status (New, Active, Completed, or Failed).
- **Real-Time Updates**: Task statuses are dynamically updated using React’s Context API.
- **Persistent Data**: Task and user information is stored in localStorage for easy retrieval.
- **Clean and Responsive UI**: Built using **Tailwind CSS** for a mobile-friendly and attractive interface.

## 🛠️ Technologies Used

- **React.js**: JavaScript library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Context API**: For managing global state
- **localStorage**: For persistent storage of task and user data

## 📂 Project Structure

├── public │ ├── index.html ├── src │ ├── components │ │ ├── AdminForm.js // Admin task creation form │ │ ├── AdminTaskList.js // Admin view for all tasks assigned │ │ ├── EmployeeDashboard.js // Employee task dashboard │ ├── Context │ │ ├── AuthProvider.js // Context API for global state management │ ├── Utils │ │ ├── LocalStorage.js // Utility functions for localStorage │ ├── App.js // Main application component │ └── index.js // Entry point of the application


## 🚀 Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

- **Node.js** (v14+)
- **npm** or **yarn**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sujal-Raj/employee-management-system.git

2. Navigate to the project directory:
   cd employee-management-system
3. Install dependencies:
   npm install
4. Run the application:
   npm start

The application will now be running on http://localhost:3000.


Detailed Description
I have successfully built an Employee Management System that enables seamless task assignment and tracking through a dynamic dashboard interface. The system has two key user roles: Admin and Employee. Depending on the credentials entered during login, the respective dashboard opens up:

Admin Dashboard: Allows administrators to assign tasks to employees by filling out a detailed task creation form, which includes fields like task title, due date, priority, category, and description. Once submitted, tasks are stored, and employees can access their assigned tasks.

Employee Dashboard: Employees can log in, view their assigned tasks, and accept them. Each employee can manage the status of their tasks, which includes accepting, tracking, and marking tasks as completed or failed. The system provides a clear and intuitive interface for managing task statuses and keeping track of their progress.

The platform ensures efficient communication between admins and employees and offers an organized system to handle daily operations. Data is handled through React’s Context API for global state management, and localStorage is used to persist user and task information.

Features:
Login-based dashboard navigation for Admin and Employee roles
Admin dashboard for task assignment with details like priority, due date, etc.
Employee dashboard for task viewing, acceptance, and status updates
Dynamic task status tracking (New, Active, Failed, Completed)
Clean and responsive UI built with React and Tailwind CSS
Short Description
I developed an Employee Management System using React, Tailwind CSS, and Context API. Admins can assign tasks to employees via a form, and employees can log in to view, accept, and manage their tasks. The system features a login-based role-based dashboard for seamless task tracking and management.

LinkedIn Caption
🚀 Just completed my Employee Management System project! Built with React, Tailwind CSS, and Context API, this system streamlines task assignment and tracking between admins and employees. The platform includes role-based dashboards, dynamic task management, and a clean, responsive UI. Check it out! 🌟 #ReactJS #TailwindCSS #WebDevelopment #EmployeeManagementSystem

README.md for GitHub
markdown
Copy code
# Employee Management System

## 🛠️ Project Overview

The **Employee Management System** is a web application that allows administrators to assign tasks to employees and enables employees to view and manage their tasks. This system is designed to simplify task management, improve communication, and provide a seamless experience for both admins and employees through a role-based dashboard system.

## ✨ Features

- **Role-Based Dashboards**: Depending on login credentials, users are directed to the Admin or Employee dashboard.
- **Task Assignment**: Admins can create tasks by filling in details like task title, due date, priority, category, and description.
- **Task Management**: Employees can log in, view assigned tasks, accept them, and track their status (New, Active, Completed, or Failed).
- **Real-Time Updates**: Task statuses are dynamically updated using React’s Context API.
- **Persistent Data**: Task and user information is stored in localStorage for easy retrieval.
- **Clean and Responsive UI**: Built using **Tailwind CSS** for a mobile-friendly and attractive interface.

## 🛠️ Technologies Used

- **React.js**: JavaScript library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Context API**: For managing global state
- **localStorage**: For persistent storage of task and user data

## 📂 Project Structure

├── public │ ├── index.html ├── src │ ├── components │ │ ├── AdminForm.js // Admin task creation form │ │ ├── AdminTaskList.js // Admin view for all tasks assigned │ │ ├── EmployeeDashboard.js // Employee task dashboard │ ├── Context │ │ ├── AuthProvider.js // Context API for global state management │ ├── Utils │ │ ├── LocalStorage.js // Utility functions for localStorage │ ├── App.js // Main application component │ └── index.js // Entry point of the application

markdown
Copy code

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

- **Node.js** (v14+)
- **npm** or **yarn**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/employee-management-system.git
Navigate to the project directory:

bash
Copy code
cd employee-management-system
Install dependencies:

bash
Copy code
npm install
Run the application:

bash
Copy code
npm start
The application will now be running on http://localhost:3000.

💻 Screenshots
Admin can assign tasks to employees.

Employees can view, accept, and track tasks.

🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

📜 License
This project is licensed under the MIT License - see the LICENSE file for details.


This README provides a complete guide to the project, including features, installation instructions, and a breakdown of the file structure. You can customize it further with additional project links or details as needed.

