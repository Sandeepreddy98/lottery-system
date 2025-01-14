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
