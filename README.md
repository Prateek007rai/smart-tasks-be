**Smart Task Manager Backend** - hosted on https://smart-tasks-be.onrender.com


 Do set-up
   1. Take clone of repo
   2. Install dependencies using 'npm i'
   3. Now, create '.env' file globally (please call me for env file or I will attach it on submission time.)
   4. Run using command: "npm run dev"

 APIs List with endpoints (use endpoints after "https://smart-tasks-be.onrender.com"):
  1. For task creation, Endpoint - "/api/v1/create-task", MEthod - "post" , 
  2. For summary generation, Endpoint - "/api/v1/task-summary/:id", Metod - "get"
  3. For task deleteion, Endpoint - "/api/v1/delete-task/:id", Method - "delete"
  4. For fetching all tasks, Endpoint - "/api/v1/all-tasks", Method - "get"

What else I can do with more time: 
  1. Will add auth using JWt for tokens and ,middleware to verify the authenticated users.
  2. Pagination for tasks display in get api.
