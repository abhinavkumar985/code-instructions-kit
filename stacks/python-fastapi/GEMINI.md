# Python + FastAPI Stack Overview

## Project Introduction

This project is a **TODO List Application** backend built with Python and
FastAPI. It provides a high-performance API for managing todo items, leveraging
modern Python features and type hints to create robust, fast, and automatically
documented web services.

## Core Features

- **API Endpoints**: Define and manage various API routes with automatic
  validation and serialization.
- **Data Models**: Use Pydantic for data validation and serialization.
- **Dependency Injection**: Manage dependencies for routes and services.
- **Authentication & Authorization**: Secure API endpoints.
- **Asynchronous Operations**: Handle I/O-bound tasks efficiently with
  `async`/`await`.

## Build and Deployment

To set up and run this application:

1.  **Install Dependencies**: Create a virtual environment and run
    `pip install -r requirements.txt`.
2.  **Run Development Server**: Execute `uvicorn main:app --reload` (assuming
    your main FastAPI app is in `main.py`). The API will typically be accessible
    at `http://localhost:8000`.
3.  **Build for Production**: (FastAPI applications are typically deployed
    directly or containerized).
4.  **Start Production Server**: Use a production-ready ASGI server like
    Gunicorn with Uvicorn workers (e.g.,
    `gunicorn main:app -w 4 -k uvicorn.workers.UvicornWorker`).

---

This project is a **Python** backend application using the **FastAPI**
framework. It emphasizes performance, automatic documentation (Swagger
UI/ReDoc), and type safety through Pydantic.

## Key Instructions & Guidelines

- **General Instructions**: See `.gemini-guidelines/overview.md` for core
  principles and tasks specific to this stack.
- **API Design**: See `.gemini-guidelines/api-design.md` for principles on
  designing RESTful APIs with FastAPI.
- **Data Validation**: See `.gemini-guidelines/data-validation.md` for using
  Pydantic effectively.
- **Dependency Injection**: See `.gemini-guidelines/dependency-injection.md` for
  managing dependencies.
