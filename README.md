# xGate projecTask

A simple project management application built with Nodejs and Express. This app allows users to register, log in, and manage their projects and tasks securely through a RESTful API.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Requirements](#requirements)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)

## Features

- User authentication (registration and login)
- CRUD operations for projects
- Ability to create and manage tasks within projects
- Secure API endpoints with token-based authentication

## Technologies Used

- **Backend**: Node.js, Express, MongoDB 
- **Authentication**: JWT (JSON Web Tokens)

## Requirements

- Node.js (v16 or higher)
- npm (v8 or higher)
- MongoDB (for the backend)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/darkovasiljkov/xgate-projecTask.git
   cd xgate-projecTask
   ```

2. **Dependencies**
   ```bash
    npm install
    npm run dev
   ```
   Open the browser and check: http://localhost:8000 

## API Endpoints
The application interacts with the following API endpoints:

### User Authentication:
```postman
POST /api/auth/register: Register a new user.
POST /api/auth/login: Log in and receive a JWT token.
POST /api/auth/signout: Signout.
```

### Projects:
```postman
POST /api/projects/create: Create a new project (requires authentication).
GET /api/projects/all: Retrieve all projects for the authenticated user (requires authentication).
PUT /api/projects/:id: Update certain project by it name, description etc.
DELETE /api/projects/:id: Delete certain project.
```

### Tasks:
```postman
POST /api/tasks/create: Create a new task within a project (requires authentication).
GET /api/tasks/:projectId: Retrieve tasks for a given project (requires authentication).
PUT /api/tasks/:id: Update certain task by it title, description etc.
DELETE /api/tasks/:id: Delete certain task from the project.
```

## Testing
- To test this crud application use softwares like Postman or any other where http requests can be checked.

### Correct Credentials (200k Redirect): <br>
![image](https://github.com/user-attachments/assets/084aeed2-4cd2-4239-9b74-0fd3661549c9)


## Invalid Credentials (401 Unauthorized) :<br>
![Screenshot_7](https://github.com/user-attachments/assets/e6347c73-bf2f-4e99-a5f6-289b9e375aba)

