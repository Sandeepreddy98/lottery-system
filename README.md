
# Lottery System API

This is a RESTful API for a simple lottery system that allows users to create tickets, amend them with additional lines, and check their status. The application is built using Node.js and follows clean code principles.

---

## Table of Contents
- [Features](#features)
- [Rules](#rules)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Examples](#examples)
- [Testing](#testing)
- [Future Enhancements](#future-enhancements)

---

## Features
- Create tickets with a specified number of lines.
- Retrieve all tickets or details of a specific ticket.
- Amend existing tickets with additional lines (if not already checked).
- Check the status of a ticket (line results are calculated and sorted by outcome).
- Prevent modifications to a ticket after its status is checked.

---

## Rules
For each line of a ticket (containing three numbers, each 0, 1, or 2):
1. If the sum of the numbers is **2**, the result is **10**.
2. If all numbers are the same, the result is **5**.
3. If the first number differs from both the second and third numbers, the result is **1**.
4. In all other cases, the result is **0**.

---

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm (v7+)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Sandeepreddy98/lottery-system.git
   cd lottery-system
2. Install dependencies:
   ```bash
   npm install
3. Start the server:
   ```bash
   npm start
## API Reference

#### 1. Create a Ticket

```http
  POST /ticket
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `n` | `string` | Creates a new ticket with the specified number of lines |

#### Example CURL Command:
```
curl -X POST http://localhost:3000/ticket -H "Content-Type: application/json" -d '{"n": 3}'
```
#### 2. Return list of tickets

```http
  GET /ticket
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| NA | NA | Fetches a list of all tickets. |

#### Example CURL Command:
```
curl -X GET http://localhost:3000/ticket
```
#### 3. Get individual ticket

```http
  GET /ticket/{id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| NA | NA | Fetches the details of a specific ticket by ID. |

#### Example CURL Command:
```
curl -X GET http://localhost:3000/ticket/1
```
#### 4. Amend ticket lines

```http
PUT /ticket/{id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `n` | `string` | Adds additional lines to an existing ticket. A ticket cannot be amended if its status has already been checked. |

#### Example CURL Command:
```
curl -X PUT http://localhost:3000/ticket/1 -H "Content-Type: application/json" -d '{"n": 2}'
```
#### 5. Retrieve status of ticket

```http
PUT /status/{id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| NA | NA | Checks the status of a ticket, calculating the results for all lines and sorting them by outcome. Once checked, the ticket cannot be amended. |

#### Example CURL Command:
```
curl -X PUT http://localhost:3000/status/1
```
