# Employee Database Management System | Angular | SQLite | Node.js | Express | Tailwind CSS</b>

This Employee Database Management system is built using Angular, SQLite, Node.js, Express, and Tailwind CSS. The application allows users to <b>manage employee data through a simple and intuitive interface</b>.

## Form-based Employee Data Entry</b>: 
Users can easily add employee details (name, email, position) to the database through a user-friendly form.

## Employee Listings with Edit & Delete</b>: 
The system lists all employees, and each entry has two action buttons — Edit and Delete. Clicking Edit opens a modal where users can update employee details, while Delete removes the employee from the database.

## Search Functionality with Debouncing</b>: 
A search feature is implemented to allow users to filter employee data efficiently. The debouncing technique minimizes unnecessary API calls, improving performance.

## Angular Lifecycle Management</b>: 
The app uses Angular’s ngOnInit and ngOnDestroy lifecycle hooks to prevent memory leaks and ensure efficient resource management, further boosting the application’s performance.

## Lazy Loading for Performance Optimization</b>: 
To improve loading times, the app uses lazy loading for modules, ensuring that only the necessary data is loaded when required.



# Backend Architecture:</b> <br/>

The backend is built with Node.js and Express, utilizing SQLite as the database. The system follows the MVC (Model-View-Controller) architecture for better maintainability and code organization.

## Middleware: 
Implemented rate-limiter and request logger middleware to enhance security, prevent abuse, and log requests for debugging and monitoring purposes.



<br/>
<br/>
<br/>


# How To Setup Application:-</b>

## <b>1. Clone the Repository<br/></b>

Clone the project repository to your local machine:
<br/>

``` bash
<b>git clone <repository_url><br/></b>

<b>cd <project_directory></b>
```
<br/>
<br/>

<b>2. Install Frontend Dependencies</b>
Navigate to the frontend directory and install the necessary Angular dependencies:<br/>

``` bash
<b>cd client<br/></b>

<b>npm install</b>
```
<br/>
<br/>

<b>3. Install Backend Dependencies<br/></b>


Navigate to the backend directory and install the required Node.js dependencies:<br/>

``` bash
<b>cd ../server<br/></b>

<b>npm install</b>
```
<br/>
<br/>

<b>4. Start the Frontend Application<br/></b>

Start the Angular frontend application by running:<br/>

``` bash
<b>cd client<br/></b>

<b>ng serve</b>
```
<br/>


This will start the Angular app, and it should be available at http://localhost:4200 by default.
<br/>
<br/>

<b>5. Start the Backend Application<br/></b>

In the backend directory, start the Node.js backend application using the following command:<br/>

``` bash
<b>npm run dev</b>
```

cd ../server
npm run dev
