# RecipeMe Blog - MVC, Node.js, Express.js, Handlebars.js, MySQL, Bulma

Jackilyn Tan MVC full stack blog project. [Live Demo Here](https://.herokuapp.com/).

Seeded Admin account (Required to see dashboard functionality!) credentials are:

-   username: jack_test@gmail.com
-   password: 12345

Example Seeded User Credentials (or create your own account):

-   username: test_test@gmail.com
-   password: 12345

-   username: blog_test@gmail.com
-   password: 12345

Features:

-   A homepage that showcases existing blog posts.
-   A navigation bar serving express routes.
-   A dashboard to create, read, update and delete blog posts for the admin.
-   Individual pages for users to create accounts, login and logout using the site using authentication.
-   The ability for users comment on blog posts and for admins to delete them.
-   An auto timeout logout where after a certain amount of time the user will need to login again for certain actions (add, update, delete, comments).
-   Sessions and Cookie based authorization/security for parts of the application
-   Client-side API consumption and AJAX DOM manipulation.
-   An API that serves JSON via Database.
-   A Templated view engine for reusable code.
-   A Modern responsive interface design.
-   An Automated database schema generation and seed data (and a SQL script to generate the database itself).
-   A Highly Modular MVC Design for Extensibility.
-   Optional API URL Generator for external API consumption.
-   Authentication Middleware for Routing Stack.
-   Modular Layout with a Main and Partial Template Usage

This project uses the following technologies/libraries.

-   [MVC Architecture](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) - Designed with Extensibility in Mind (Notice the Controller Routes, Client-Side JavaScript and Handlebar Views)
-   [Node.js](https://nodejs.org/en/) and [Express.js](https://expressjs.com/) as the Server for API and HTTP requests
-   [MySQL](https://www.mysql.com/) Database Schema
-   [Sequelize.js](https://sequelize.org/) for [Object Relational Mapping](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping), Database Interaction, [Routing](https://expressjs.com/en/guide/routing.html) and Schema Generation and Seeding
-   [Dotenv](https://www.npmjs.com/package/dotenv) for Database Connection Settings
-   [Handlebars.js](https://handlebarsjs.com/) for Dynamic View Templating and Server Side HTML Rendering
-   [Bcrypt Package](https://www.npmjs.com/package/bcrypt) for Password Hashing and Management
-   [Express-Session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) for Session and Cookie Management
-   [Bulma](https://bulma.io/) and the [Blog 2 Template](https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/blog-tailsaw.html) as a CSS Style Framework
-   [Nodemon](https://www.npmjs.com/package/nodemon) for Easier Server-Side Development
-   [Heroku](https://www.heroku.com) for Demo Deployment

## Project Structure

The project structure is designed with modularity and extensibility in mind. Here's an overview of each folder and its purpose:

assets: Contains screenshots used for documentation purposes.
config: Holds the Sequelize connection configuration for the server-side. It uses dotenv for managing connection properties.
controllers: Contains the routing logic for the API and web app calls.
db: Includes a script for generating an empty database used in the project.
models: Contains the models used in the MVC architecture and connected to the database through Sequelize.
public: Contains CSS, images, and JavaScript files used by the client-side application served to the end user's browser. It also includes API calls to the RESTful API Node.js Server. Additionally, it houses ./config/apiConfig.js if there is a need for external API calls in the future.
seeds: Includes JavaScript and JSON files used to create database tables and populate them with test data.
utils: Contains server-side helpers such as authentication middleware and a DateTime formatter for rendering in the Handlebars.js views.
views: Contains the main Handlebars.js layout template, child templates, and partials for rendering content.
server.js: The main file to run the server.
This structure allows for scalability and provides a foundation for larger-scale projects.

## Installation

To get started with the project, follow these steps, to will set up the project and have the application and API running locally on your machine:

Navigate to the project root directory in your terminal and run the command npm i to install the necessary Node.js project dependencies.

Update the file named .env.EXAMPLE to .env and provide your database credentials in the .env file. If you change the database name from blog_db, make sure to update it in the ./db/schema.sql file as well, which is used for database generation.

Run the script to generate the blog_db database using the ./db/schema.sql file. This will create the necessary database structure.

Use the command npm run seed to generate the tables and populate them with example user, post, and comment data. You can explore other available commands in the package.json file.

Once the seeding process is complete, you can start the server. Use the command npm run dev if you want the server to utilize Nodemon and automatically restart when there are code updates. Alternatively, use npm run start for a normal server start.

The application will be available by default at http://localhost:3001/. You can access the RESTful API independently at endpoints like http://localhost:3001/api/user/, http://localhost:3001/api/post/, http://localhost:3001/api/comment/.


## Example API Call

POST Request - Create a Blog Post:

Method: POST
URL: http://localhost:3001/api/post/
Request Body:

{
    "title": "Title of a Recipe Post",
    "ingredients": "Content of a blog post three times. Content of a blog post three times. Content of a blog post three times.",
    "instructions": "Content of a blog post three times. Content of a blog post three times. Content of a blog post three times.",
    "author_id": "1"
}

Note: Replace author_id with the actual ID of the author who is creating the blog post.
GET Request - Get All Blog Posts:

Method: GET
URL: http://localhost:3001/api/post/

These instructions will guide you on how to make a POST request to create a new blog post with the provided data, and a GET request to retrieve all the existing blog posts.

Remember to replace author_id with the actual ID of the author who is creating the blog post.
