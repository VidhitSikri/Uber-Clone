# Uber Clone

A full-stack Uber clone application built with React on the frontend and Node.js on the backend. This project demonstrates real-time ride management using Socket.io, maps integration for calculating fares, geospatial queries for matching riders and captains, and robust API endpoints with Express and Mongoose.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Real-Time Ride Updates:**  
  Leverages Socket.io to enable real-time communication for joining rides, updating locations, and ride status changes.
  
- **Geo-Location:**  
  Uses the browser’s Geolocation API combined with MongoDB’s geospatial capabilities to find captains in the vicinity.
  
- **Authentication & Authorization:**  
  Secures endpoints using JWT, ensuring that only authenticated users can request rides or update statuses.
  
- **Dynamic Fare Calculation:**  
  Integrates map services to compute the fare between pickup and destination locations.
  
- **Multi-User Functionality:**  
  Provides separate functionalities for riders and captains with their own dashboards and workflows.

## Project Structure

```
Uber Clone/
│
├── Backend
│   ├── controllers
│   │   ├── ride.controller.js      # API endpoints for ride management
│   │   └── ...                     # Other controllers (e.g., auth, user)
│   ├── models
│   │   ├── ride.model.js           # Mongoose schema for rides
│   │   ├── user.model.js           # Mongoose schema for users
│   │   └── captain.model.js        # Mongoose schema for captains
│   ├── services
│   │   ├── ride.service.js         # Business logic for handling rides
│   │   └── maps.service.js         # Integration with external map APIs for geocoding and radius search
│   ├── socket.js                   # Socket.io server and messaging utility
│   └── server.js                   # Entry point for starting the backend server
│
├── Frontend
│   ├── public                      
│   └── src
│       ├── components
│       │   ├── ConfirmRidePopup.jsx  # Component for confirming ride start with OTP validation
│       │   └── ...                   # Other UI components
│       ├── context
│       │   ├── SocketContext.jsx     # Context provider for socket events
│       │   └── CaptainDataContext.jsx  # Context for captain-specific data
│       ├── pages
│       │   ├── Home.jsx              # Main page for riders to request rides
│       │   ├── CaptainHome.jsx       # Dashboard for captains to receive and confirm rides
│       │   └── ...                   # Other pages
│       └── App.jsx
│
├── .env                            # Environment variables for both frontend and backend (see below)
└── README.md                       # Project documentation (this file)
```

## Tech Stack

- **Frontend:**  
  - React.js  
  - Axios  
  - Socket.io-client  
  - GSAP (for animations)
  
- **Backend:**  
  - Node.js  
  - Express  
  - Mongoose (MongoDB ODM)  
  - Socket.io  
  - Express-validator  

- **Other Tools:**  
  - Nodemon (for auto-reloading backend during development)
  - Postman (for API testing)

## Installation

### Backend

1. Navigate to the backend folder:
    ```bash
    cd Backend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file in the Backend root with the following sample entries:
    ```env
    PORT=4000
    MONGO_URI=<your_mongo_db_connection_string>
    JWT_SECRET=<your_jwt_secret>
    ```
4. Start the backend server:
    ```bash
    npm run dev
    ```

### Frontend

1. Navigate to the frontend folder:
    ```bash
    cd Frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file in the Frontend root with the following sample entries:
    ```env
    VITE_BASE_URL=http://localhost:4000
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```

## Usage

1. **For Riders:**  
   - Visit the home page to set your pickup and destination, then request a ride.
   - The backend validates and finds available captains in your vicinity.
  
2. **For Captains:**  
   - Login to access the captain dashboard.
   - The application will update your location periodically.
   - Upon receiving a ride request, confirm the ride with the displayed OTP.

3. **Real-Time Communication:**  
   - The application uses Socket.io to push ride updates in real time between riders and captains.

## API Endpoints

### Ride Endpoints

- **Create Ride**
  - **URL:** `/rides/create`
  - **Method:** `POST`
  - **Headers:** 
    - Authorization: `Bearer <token>`
  - **Body:**
    ```json
    {
      "pickup": "Pickup address or coordinates",
      "destination": "Destination address or coordinates",
      "vehicleType": "Type of vehicle"
    }
    ```
  - **Description:** Creates a new ride request.

- **Start Ride**
  - **URL:** `/rides/start-ride`
  - **Method:** `GET`
  - **Headers:** 
    - Authorization: `Bearer <token>`
  - **Query Parameters:**
    - `rideId`: The MongoDB ObjectId of the ride.
    - `otp`: The OTP generated for the ride.
  - **Description:** Validates the OTP and starts the ride. Also triggers a socket event to notify the rider.

- **Confirm Ride**
  - **URL:** `/rides/confirm`
  - **Method:** `POST`
  - **Headers:**
    - Authorization: `Bearer <token>`
  - **Body:**
    ```json
    {
      "rideId": "<ride id>"
    }
    ```
  - **Description:** Confirms the details of a ride.

- **Get Fare**
  - **URL:** `/rides/get-fare`
  - **Method:** `GET`
  - **Query Parameters:** (as required)
  - **Description:** Calculates and returns the fare based on pickup and destination locations.

- **End Ride**
  - **URL:** `/rides/end`
  - **Method:** `POST`
  - **Headers:**
    - Authorization: `Bearer <token>`
  - **Body:**
    ```json
    {
      "rideId": "<ride id>"
    }
    ```
  - **Description:** Ends the ride and finalizes the ride details.

### User Endpoints

- **User Login**
  - **URL:** `/users/login`
  - **Method:** `POST`
  - **Body:**
    ```json
    {
      "email": "example@example.com",
      "password": "your_password"
    }
    ```
  - **Description:** Authenticates the user and returns a JWT token.

- **User Registration**
  - **URL:** `/users/register`
  - **Method:** `POST`
  - **Body:**
    ```json
    {
      "name": "Your Name",
      "email": "example@example.com",
      "password": "your_password"
    }
    ```
  - **Description:** Registers a new user.

### Captain Endpoints

- **Captain Login**
  - **URL:** `/captains/login`
  - **Method:** `POST`
  - **Body:**
    ```json
    {
      "email": "captain@example.com",
      "password": "your_password"
    }
    ```
  - **Description:** Authenticates the captain and returns a JWT token.

## Environment Variables

Be sure to update your environment variables for both frontend and backend deployments. Typical variables include:

- **Backend:**  
  `PORT`, `MONGO_URI`, `JWT_SECRET`
  
- **Frontend:**  
  `VITE_BASE_URL` - URL to your backend API (ensure this is publicly accessible if deployed)

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. For major changes, please open an issue first to discuss what you would like to change.

## License

Distributed under the MIT License. See `LICENSE` for more information.