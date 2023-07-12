# CapstoneBackend

#API Documentation

PATCH /project/:id
Updates a project with the specified ID.

Request Parameters:

id (string, required): The ID of the project.
Request Body:

devlist (string): The list of developers assigned to the project.
Example:
PATCH /project/123456

Request Body:
{
  "devlist": "John Doe, Jane Smith"
}

POST /dev
Creates a new developer.

Request Body:

dev_name (string, required): The name of the developer.
skills (array, required): An array of skills possessed by the developer.
bio (string, required): The biography or description of the developer.
background (string, required): The background information of the developer.
portfolio_link (optional): The link to the developer's portfolio.
address (optional): The address of the developer.
phone (optional): The phone number of the developer.
email (optional): The email address of the developer.
Example:
POST /dev

Request Body:
{
  "dev_name": "John Doe",
  "skills": ["JavaScript", "React"],
  "bio": "Experienced web developer",
  "background": "Bachelor's degree in Computer Science",
  "portfolio_link": "https://example.com/portfolio",
  "address": "123 Main St, City",
  "phone": "123-456-7890",
  "email": "john.doe@example.com"
}

PUT /dev/:id
Updates an existing developer with the specified ID.

Request Parameters:

id (string, required): The ID of the developer.
Request Body:

dev_name (string, required): The updated name of the developer.
skills (string, required): The updated skills of the developer.
bio (string, required): The updated biography or description of the developer.
background (string, required): The updated background information of the developer.
portfolio_link (optional): The updated link to the developer's portfolio.
address (optional): The updated address of the developer.
phone (optional): The updated phone number of the developer.
email (optional): The updated email address of the developer.
Example:
PUT /dev/123456

Request Body:
{
  "dev_name": "Jane Smith",
  "skills": "Python, Django",
  "bio": "Passionate about backend development",
  "background": "Master's degree in Computer Engineering",
  "portfolio_link": "https://example.com/jane_portfolio",
  "address": "456 Elm St, City",
  "phone": "987-654-3210",
  "email": "jane.smith@example.com"
}

DELETE /dev/:id
Deletes a developer with the specified ID.

Request Parameters:

id (string, required): The ID of the developer to be deleted.
Example:
DELETE /dev/123456

#Project

POST /project
Creates a new project.

Request Body:

project_name (string, required): The name of the project.
description (string, required): The description of the project.
timeframe (string, required): The timeframe for completing the project.
technology (string, required): The technology stack used for the project.
Example:
POST /project

Request Body:
{
  "project_name": "Website Redesign",
  "description": "Redesigning the company website with a modern look and improved user experience.",
  "timeframe": "2 months",
  "technology": "HTML, CSS, JavaScript, React"
}

PUT /project/:id
Updates an existing project with the specified ID.

Request Parameters:

id (string, required): The ID of the project.
Request Body:

project_name (string, required): The updated name of the project.
description (string, required): The updated description of the project.
timeframe (string, required): The updated timeframe for completing the project.
technology (string, required): The updated technology stack used for the project.
Example:
PUT /project/123456

Request Body:
{
  "project_name": "Mobile App Development",
  "description": "Developing a cross-platform mobile app for iOS and Android platforms.",
  "timeframe": "4 months",
  "technology": "React Native"
}

DELETE /project/:id
Deletes a project with the specified ID.

Request Parameters:

id (string, required): The ID of the project to be deleted.
Example:
DELETE /project/123456

# Business
POST /company
Creates a new company.

Request Body:

company_name (string, required): The name of the company.
location (string, required): The location of the company.
industry (string, required): The industry of the company.
description (string, required): The description of the company.
Example:
POST /company

Request Body:
{
  "company_name": "Acme Corporation",
  "location": "New York, USA",
  "industry": "Technology",
  "description": "A leading technology company specializing in software development and IT services."
}

PUT /company/:id
Updates an existing company with the specified ID.

Request Parameters:

id (string, required): The ID of the company.
Request Body:

company_name (string, required): The updated name of the company.
location (string, required): The updated location of the company.
industry (string, required): The updated industry of the company.
description (string, required): The updated description of the company.
Example:

PUT /company/123456

Request Body:
{
  "company_name": "XYZ Corporation",
  "location": "San Francisco, USA",
  "industry": "Finance",
  "description": "A global financial services company offering investment and banking solutions."
}
DELETE /company/:id
Deletes a company with the specified ID.

Request Parameters:

id (string, required): The ID of the company to be deleted.
Example:
DELETE /company/123456

#Get

GET /project
Retrieves a list of all projects.

Example:

plaintext
Copy code
GET /project
GET /dev
Retrieves a list of all developers.

Example:

plaintext
Copy code
GET /dev
GET /company
Retrieves a list of all companies.

Example:

plaintext
Copy code
GET /company
GET /project/:id
Retrieves a specific project by its ID.

Request Parameters:

id (string, required): The ID of the project.
Example:

plaintext
Copy code
GET /project/123456
GET /dev/:id
Retrieves a specific developer by their ID.

Request Parameters:

id (string, required): The ID of the developer.
Example:

plaintext
Copy code
GET /dev/123456
GET /company/:id
Retrieves a specific company by its ID.

Request Parameters:

id (string, required): The ID of the company.
Example:

plaintext
Copy code
GET /company/123456
