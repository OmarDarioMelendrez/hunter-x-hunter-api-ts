# Hunter x Hunter API

A RESTful API providing data about characters from the Hunter x Hunter universe, including Hunters, Ryodan members, and Chimera Ants.

## Base URL

The API is available at:

- Development: `http://localhost:3005`
- Production: (Add your production URL here once deployed)

## Available Endpoints

Currently, the following character groups are available:

- **Hunters:** `/api/hunters`
- **Ryodan (Phantom Troupe):** `/api/ryodan`
- **Chimera Ants:** `/api/chimera-ants`

For each group, you can:

- Get all members: e.g., `GET /api/hunters`
- Get a specific member by ID: e.g., `GET /api/hunters/16`

Additional specific endpoints are available (check Swagger documentation for details):

- Get Hunters by Nen type: `GET /api/hunters/nen/{type}`
- Get Hunter abilities by ID: `GET /api/hunters/{id}/abilities`

## Getting Started

### Prerequisites

- Node.js (v20 or later recommended)
- pnpm

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd hunter-x-hunter-api # Or your repository directory name
    ```
2.  Install dependencies:
    ```bash
    pnpm install
    ```

### Running the Project

**Development Mode (with hot-reloading):**

```bash
pnpm run dev
```

The API will be available at `http://localhost:3005`. Nodemon will automatically restart the server when you make changes to the source code.

**Production Mode:**

1.  Build the TypeScript code:
    ```bash
    pnpm run build
    ```
2.  Start the server:
    ```bash
    pnpm start
    ```
    The API will be available at `http://localhost:3005` (or your configured production port).

## Authentication

Requests to the API endpoints (prefixed with `/api`) require an API key to be included in the request headers.

**Setup:**

1.  Create a `.env` file in the root of the project if it doesn't exist.
2.  Add the following line to the `.env` file. Replace the example keys with your actual desired keys, separated by commas (no spaces around the commas unless the space is part of the key):
    ```dotenv
    API_KEYS=YOUR_SECRET_API_KEY_1,ANOTHER_VALID_KEY,TEST_TOKEN_KEY
    ```

**Usage:**

Include **one** of the valid API keys in the `x-api-key` header of your requests:

```

```
