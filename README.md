# DEMO Contact Management App (MERN Stack)

Welcome to the DEMO Contact Management App repository! This application showcases the management of contacts through a user-friendly interface. Users can easily register, log in, and effectively organize their contacts.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [Docker Support](#docker-support)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The DEMO Contact Management App provides a user-friendly solution to organize contact.

## Features

- User Registration: New users can easily sign up for an account, providing the necessary credentials.
- User Authentication: The app utilizes the Passport.js JWT strategy for secure authentication, ensuring user data remains confidential.
- Contact Management: Logged-in users can add, edit, and delete contacts.
- User-Friendly Interface: The application is built using React and Bootstrap, offering a responsive and visually appealing interface.
- Data Persistence: Contact data is stored using Mongoose, a MongoDB object modeling tool, ensuring efficient data management.

## Technologies Used

- Frontend: React, Bootstrap
- Backend: Express, Node.js
- Database: MongoDB (via Mongoose)
- Authentication: Passport.js with JWT strategy

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm installed (Node.js version X.XX.X and npm version X.XX.X)
- MongoDB installed and running

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install frontend dependencies
4. Install backend dependencies
   
### Usage

1. Start the server: `npm start`
2. Start the frontend: `npm start`
3. Access the application in your browser at `http://localhost:3000`

## Docker Support

This repository includes a `docker-compose` file that simplifies the deployment process using Docker containers.

To run the application using Docker:

1. Ensure you have Docker installed and running.
2. Navigate to the project directory.
3. Run: `docker-compose up`

The app will be accessible at `http://localhost:8080`.
