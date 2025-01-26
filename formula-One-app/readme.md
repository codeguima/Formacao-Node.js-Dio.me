# Formula 1 API

A minimal API built with Fastify to provide information about Formula 1 teams and drivers.

## Features

- **Teams Endpoint**: Get information about all Formula 1 teams.
- **Drivers Endpoint**: Get information about all Formula 1 drivers.
- **Driver Details Endpoint**: Get detailed information about a specific driver by their ID.
- CORS enabled for cross-origin requests.

## Endpoints

### 1. Get All Teams
- **URL**: `/teams`
- **Method**: `GET`
- **Response**:
  ```json
  {
    "teams": [
      { "id": 1, "name": "McLaren", "base": "Woking, United Kingdom" },
      { "id": 2, "name": "Mercedes", "base": "Brackley, United Kingdom" },
      ...
    ]
  }
  ```

### 2. Get All Drivers
- **URL**: `/drivers`
- **Method**: `GET`
- **Response**:
  ```json
  {
    "drivers": [
      { "id": 1, "name": "Max Verstappen", "team": "Red Bull Racing" },
      { "id": 2, "name": "Lewis Hamilton", "team": "Mercedes" },
      ...
    ]
  }
  ```

### 3. Get Driver Details by ID
- **URL**: `/drivers/:id`
- **Method**: `GET`
- **Path Parameters**:
  - `id` (number): The ID of the driver.
- **Response**:
  - **200 OK**:
    ```json
    {
      "driver": { "id": 1, "name": "Max Verstappen", "team": "Red Bull Racing" }
    }
    ```
  - **404 Not Found**:
    ```json
    {
      "message": "Driver Not Found"
    }
    ```

## Setup and Usage

### Prerequisites
- Node.js installed on your system.

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd formula-1-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the API

#### Development Mode
Start the server in development mode with live reloading:
```bash
npm run start:dev
```

#### Watch Mode
Start the server in watch mode:
```bash
npm run start:watch
```

#### Production Mode
Build and start the server for production:
```bash
npm run start:dist
```

### Accessing the API
The server listens on `http://localhost:3333`. Use tools like Postman or your browser to test the endpoints.

## Dependencies
- [Fastify](https://www.fastify.io/): Web framework for Node.js.
- [@fastify/cors](https://github.com/fastify/fastify-cors): CORS plugin for Fastify.

## License
This project is licensed under the ISC License.

