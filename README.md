# Company Management App

A full-stack application for managing company records and their stock-exchange listings. It combines a .NET REST API with a React user interface.

## Features

- Register and authenticate users with hashed passwords, JWT access tokens, and refresh tokens.
- List companies and retrieve them by ID or ISIN.
- Create and update company records.
- Store company name, exchange, ticker, ISIN, and an optional website.
- Maintain a lookup list of stock exchanges.
- Browse and edit companies through a responsive light/dark user interface.
- Explore API endpoints through OpenAPI, Swagger UI, or Scalar in development.

## Architecture

```text
company-management-app/
├── api/   # .NET 9 Web API, EF Core, SQL Server, and xUnit tests
└── ui/    # React 19, TypeScript, Vite, Tailwind CSS, and Axios
```

The API separates HTTP controllers, application services, domain services, commands, queries, projections, and Entity Framework entities. Middleware provides request logging and centralized problem responses. The UI uses routed pages for registration, login, and company management, with reusable modals, toast feedback, and a theme context.

## Prerequisites

- .NET 9 SDK
- SQL Server
- Node.js (current LTS) and npm

## Run the API

```powershell
cd api/CompanyApi
dotnet restore
```

Configure a JWT signing key outside source control. For local development, use .NET user secrets from the API project directory:

```powershell
cd Company.Api
dotnet user-secrets init
dotnet user-secrets set "AppSettings:Token" "replace-with-a-long-random-development-key"
cd ..
dotnet ef database update --project Company.Api
dotnet run --project Company.Api
```

The default connection string expects SQL Server at `localhost\\MSSQLSERVER01` and a database named `CompaniesDb`. Change `ConnectionStrings:CompaniesDbConnection` through user secrets, environment variables, or local configuration if your setup differs.

## Run the UI

In a separate terminal:

```powershell
cd ui
npm install
npm run dev
```

The UI currently expects the API at `https://localhost:7240`; update `ui/src/api.ts` if the API uses a different address.

## Tests and checks

```powershell
cd api/CompanyApi
dotnet test

cd ../../ui
npm run lint
npm run build
```

## API overview

- `POST /api/authentication/register`
- `POST /api/authentication/login`
- `POST /api/authentication/refresh-token`
- `GET /api/authentication/check-authentication`
- `GET /api/company`
- `GET /api/company/{id}`
- `GET /api/company/isin/{isin}`
- `POST /api/company`
- `PUT /api/company/{id}`
- `GET /api/lookup/exchange`
- `GET /api/lookup/exchange/{id}`
- `POST /api/lookup/exchange`

## Status

This repository is an archived side project. It is available as a reference implementation and is not deployed as a hosted service.
