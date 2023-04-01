## ⭐️ Introduction

The POLLING SYSTEM API  is a Full Stack Application built using MongoDB, ExpressJS, NodeJS, cors,
   <br/>
   <br/>
# PollingSystem_Api-Using-NodeJs

## Description

API where anyone can create questions with options and also add votes to it.

## Features

- Create a question (Add as many questions as you want)
- Add options to a question
- Add a vote to an option of question
- Delete a question → (Note : A question can’t be deleted if one of it’s options has votes)
- Delete an option → (Note : An option can’t be deleted if it has even one vote given to it)

## How to setup the project ?

- Clone the project onto your local machine.
- Run 'npm install' to install required dependencies.
- Run 'npm start' in terminal to start server.
- Visit your app at http://localhost:4000.

## Routes and its methods

- /questions/create (To create a question)
- /questions/:id/options/create (To add options to a specific question)
- /questions/:id/delete (To delete a question)
- /options/:id/delete (To delete an option)
- /options/:id/add_vote (To increment the count of votes)
- /questions/:id (To view a question and it’s options)

## METHODS USED IN THIS API

-------------------------------------------------------
| ---------------| ---------------------------------- |
| Http Methods   |    Routes                  |
| ---------------| ---------------------------------- |
| POST          |   /questions/create       |
| ---------------| ---------------------------------- |
| POST         |   /questions/:id/options/create |
| ---------------| ---------------------------------- |
| DELETE         |   /questions/:id/delete            |
| ---------------| ---------------------------------- |
| DELETE         |   /options/:id/delete              |
| ---------------| ---------------------------------- |
| PUT            |   /options/:id/add_vote            |
| ---------------| ---------------------------------- |
| GET            |   /questions/:id                   |
-------------------------------------------------------

## Key to use while creating question and options

- content >> Creating question
- content >> Creating options

For any issues related to the project, raise an ISSUE in the respective Repository.
<br/>
<br/>

## 🔨 Tools Used

<p align="justify">
<img height="140" width="140" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv2l-4Y-ZVZm77rzV9CRJxmgNPpy36zgePIA&usqp=CAU">
<img height="140" width="140" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMX7p-_Zo1LqsEfO1v3B6Zw0Jgvhk4vo1fKA&usqp=CAU">
<img height="140" width="140" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRASBParCnQhsRkKZ8opkkRjtk9XJ-MHdy0jA&usqp=CAU">
<img height="140" width="140" src="https://code.visualstudio.com/assets/apple-touch-icon.png">
</p>

-  Library's 
   -  cors
   -  express
   -  nodemon
-  Framework: ExpressJS,
-  Database: MongoDB
-  Version Control System: Git
-  VCS Hosting: GitHub
-  Programming / Scripting: JavaScript
-  Runtime Environment: NodeJS
-  Integrated Development Environment: VSCode
   <br/>
   <br/>

## 🔗 Links

> ## Checkout the Website [Web Application](https://polling-system-api-y7q4.onrender.com/)

# Directory Structure

- [/config] - Contains Database config file
- [/controllers] - contains Controller files for questions and options
- [/model] - Contain Schema files for Question and Option Models
- [/routes] - contains all route files
- [index.js] - App entry point

<br/>

## 💻 Screens

<p align="justify">
<img src="">
<img src="">
<img src="">
</p>
<br/>

## 🐦 Follow Me:

 [LinkedIn](https://www.linkedin.com/in/saurabhdixit93)


I hope you like the project. Thanks for reading :)
