# "About"
This project is a "web-stack" portion or user interface of an innovation project for Metropolia of applied sciences.
The goal of the project was to test a LoRaWan-gateway as a tool to gather location data in low connection areas and send that data to the interface over cellular network for users to see. Product of the product would be used by groups of hunter hunting moose, to add reliability of receiving location data of the hunting dogs in low connection areas. This project contains a Node.js backend, React frontend and a local SQLite database for the user interface. 

The point in general of an innovation project is not to complete the product per say, but more to prove a concept and learn about project management, research, teamwork and documenting. Therefore the user interface is still missing features that would be essential for a working product, such as:

User authentication
Group system
Saving map to local storage of the device



## Structure

##### Folders

- api/
    - routes/
- db/
- simulator/
- frontend/

##### Functionality and structure

- server.js starts the whole application. In app.js we initialize middleware and set HTTP headers. 

- frontend/ contains all files used to develop the frontend.

- api/routes
HTTP routes for fetching data from the backend.

- app.js
Mounts all backend services the app. MQTT, router, middleware, HTTP headers.

- db/
Houses dbsetup.js for creating databse tables, and queries.js for functions for accessing the database. 

- simulator/
Houses simulator.js which is a node program to send simulated data to an MQTT broker. Used for developement



## Author

* **Jere Luhtanen**
