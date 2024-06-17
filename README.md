# Airbean API 

Welcome to the Airbean API project! This is a project involving creating a backend API for the Airbean web application, where users can order coffee and have it delivered via drone.

## Table of Contents
-   [Features](#features)
-   [Installation](#installation)
-   [API Endpoints](#api-endpoints)
-   [Technologies Used](#technologies-used)
-   [Authors](#authors)

## Features

-   **User Authentication:** Sign up, log in, and manage user profiles.
-   **Coffee Menu Management:** View and manage the coffee menu.
-   **Order Processing:** Place and manage coffee orders.
-   **Order Tracking:** Track the status of coffee orders.


## Installation
To set up the project locally, follow these steps:

1.  **Clone the repository:**

	` git clone https://github.com/Loushymooshy/Airbean-API`
	`cd airbean-api`

2.  **Install dependencies:**
    
    `npm install` 
    
3.  **Set up environment variables:** Create a `.env` file in the root directory and add the necessary environment variables (e.g., database connection string, JWT secret).
    
4.  **Start the server:**
    
    `npm run dev` 
    
The server should now be running on `http://localhost:8443`.



## API-ENDPOINTS:

  

- **See Menu:** http://localhost:8443/api/menu (GET)

- **Create Menu-item:** http://localhost:8443/api/menu (POST)

- **Delete Menu-item:** http://localhost:8443/api/menu/:itemID (DELETE)

- **Create account:** http://localhost:8443/api/signUp (POST)

- **Create order:** http://localhost:8443/api/order (POST)

- **Log in:** http://localhost:8443/api/logIn (POST)

- **See order history :** http://localhost:8443/api/orderHistory/:id (GET)

- **See delivery stats:** http://localhost:8443/api/deliveryStats/:orderID (GET)

- **Update delivery stats:** http://localhost:8443/api/deliveryStats/:orderID/?:userID (GET)

- **About:** http://localhost:8443/api/about (GET)

- **Campaign:** http://localhost:8443/api/campaign (POST)

## Technologies Used
-   **Programming Language:** JavaScript
-   **Runtime Environment:** Node.js
-   **Web Framework:** Express.js
-   **Database:** MongoDB
-   **ODM (Object Data Modeling):** Mongoose
-   **Authentication:** JWT (JSON Web Tokens)
-   **Environment Variables:** dotenv
-   **Password Handling:** bcrypt
-   **Validation:** Validator
-   **Date and Time Management:** Moment.js, Moment Timezone
-   **Development Tools:** Nodemon
-   **CORS Handling:** CORS (Cross-Origin Resource Sharing)

## Authors

[LucasDaSilva96 (Lucas Da Silva) (github.com)](https://github.com/LucasDaSilva96),
[SanJuan99 (Johan Berg Ekvall) (github.com)](https://github.com/SanJuan99),
[W-nn-e (Winnie) (github.com)](https://github.com/W-nn-e),
[Loushymooshy (github.com)](https://github.com/Loushymooshy),
[philipalgebrink (Philip Älgebrink) (github.com)](https://github.com/philipalgebrink)