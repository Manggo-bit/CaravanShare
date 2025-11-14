# CaravanShare - Design Document

This document outlines the design principles and architecture of the CaravanShare application. The primary goal is to create a system that is clean, modular, testable, and maintainable, avoiding the pitfalls of the initial "bad design" example.

## 1. Core Architectural Principles

The design is heavily influenced by the principles of Clean Architecture and Domain-Driven Design (DDD).

- **Separation of Concerns**: The codebase is divided into distinct layers (`models`, `repositories`, `services`), each with a clear and single responsibility.
- **Dependency Inversion Principle (DIP)**: High-level modules (services) do not depend on low-level modules (repositories); both depend on abstractions. This is achieved through **Dependency Injection (DI)**, where services receive their repository dependencies during initialization. This makes the system loosely coupled and highly testable.
- **Single Responsibility Principle (SRP)**: Each class is designed to have only one reason to change.
  - `ReservationService` handles the orchestration of creating a reservation.
  - `ReservationValidator` handles the validation logic for a reservation.
  - `ReservationRepository` handles the data access for reservations.

## 2. Domain Models

The domain is modeled with simple dataclasses, representing the core entities of the system. These models are "plain" objects with no knowledge of the services or repositories that manage them.

- **User**: Represents a guest or a host.
- **Caravan**: Represents a caravan available for rent.
- **Reservation**: Represents a booking of a caravan by a guest.
- **Payment**: Represents a payment transaction for a reservation.
- **Review**: Represents a review left by a user for a caravan or another user.

## 3. Repository Pattern

The **Repository Pattern** is used to abstract the data layer.

- **Purpose**: To decouple the business logic from the data access logic. The services interact with a repository interface, not a concrete database implementation.
- **Implementation**: Currently, all repositories (`UserRepository`, `CaravanRepository`, `ReservationRepository`) are in-memory dictionaries. This is sufficient for development and testing.
- **Benefit**: If we need to switch to a database like PostgreSQL or a NoSQL database, we only need to create a new repository implementation that conforms to the same interface. The service layer remains unchanged.
- **Efficiency**: The `ReservationRepository` uses a dictionary mapping `caravan_id` to a list of reservations, providing efficient (`O(1)`) lookup of all bookings for a specific caravan, which is crucial for the booking conflict validation logic.

## 4. Service Layer and Business Logic

- **ReservationService**: This service acts as a use-case orchestrator. Its `create_reservation` method follows a clear sequence of steps:
  1. Fetch required entities (User, Caravan).
  2. Delegate validation to the `ReservationValidator`.
  3. Perform calculations (e.g., `total_price`).
  4. Create the `Reservation` entity.
  5. Persist the entity using the `ReservationRepository`.
- **ReservationValidator**: All complex validation logic related to creating a reservation is encapsulated within this class. This makes the validation rules explicit, independently testable, and easy to modify without affecting the main reservation creation flow.

## 5. Error Handling

A custom exception hierarchy is defined in `src/exceptions/`.

- **Base Exception**: `ReservationError` serves as the base for all reservation-related issues.
- **Specific Exceptions**: Classes like `InvalidDateError`, `CaravanNotAvailableError`, and `BookingConflictError` provide clear, specific information about what went wrong. This allows the application's entry point (e.g., a REST API) to catch specific errors and return appropriate HTTP status codes and messages.

This structured approach to design ensures that the application is robust, scalable, and easy for developers to understand and extend.
