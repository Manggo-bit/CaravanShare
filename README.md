# CaravanShare - Caravan Sharing Platform

This project is a Python implementation of a caravan (RV) sharing platform, designed with a clean architecture approach. It follows the principles of Domain-Driven Design (DDD) to create a scalable and maintainable system.

## Project Structure

The project is organized into the following main directories:

- `src/`: Contains the core application source code.
  - `models/`: Defines the plain Python objects for the domain entities (e.g., `User`, `Caravan`, `Reservation`).
  - `repositories/`: Manages the storage and retrieval of domain objects. Currently uses an in-memory implementation.
  - `services/`: Contains the business logic and orchestrates the interactions between models and repositories.
  - `exceptions/`: Defines custom exception classes for specific error conditions.
- `tests/`: Contains unit tests for the application.

## Running Tests

The project uses Python's built-in `unittest` framework. To run all tests, navigate to the project root directory and run the following command:

```bash
python3 -m unittest discover
```

This will automatically discover and run all test cases within the `tests` directory.
