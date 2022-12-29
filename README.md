# React Apollo Graphql Boilerplate

A Full-Stack React Apollo Graphql Boilerplate written in Typescript. A scalable development that focus on performance and best practices. Easily plugable client or server code to build on top.

## Why GraphQL?

### GraphQL provides declarative, efficient data fetching

GraphQL's declarative approach to data fetching provides significant performance and quality-of-life improvements over a REST API.
REST API requires multiple dependent network requests, which can result in slower page loads and additional battery consumption on mobile devices. This logic is also difficult to reuse on other pages that display slightly different data.
By using GraphQL, the page can obtain all of this data with a single query to a single endpoint.

### GraphQL enables powerful tooling

Thanks to GraphQL's strong typing and built-in support for introspection, developer tools for GraphQL are extremely powerful. These tools let you do things like:

- Explore the full structure of a schema, complete with docstrings
- Compose new operations with live validation and autocomplete
- Register your schema with a management service that tracks and checks changes

### Conclusion

GraphQL's single greatest benefit is the developer experience. You can reduce these challenges considerably. GraphQL's declarative model helps you create a consistent, predictable API you can use across all of your clients. As you add, remove, and migrate backend data stores, that API doesn't change from the client's perspective.
It's straightforward to add new types and fields to your API, and similarly straightforward for your clients to begin using those fields. This helps you design, develop, and deploy features quickly.

## Features

### Next Generation JavaScript with Typescript

- Stop worrying about browser support and use features like template strings, object destructuring, arrow functions, JSX syntax, and more today! Include Typescript in both client and server for high performing and robust code!

### Quick Scaffolding

- Automate the creation of components, containers, features - and their tests - right from the CLI! Avoid fighting the glue of your code and focus on your app!

### GraphQL

- GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data

#### Server

- [Typescript](https://www.typescriptlang.org/docs/handbook/jsx.html)
- Node.js
- Express
- Graphql
- Apollo Server
- MongoDB
- [Prisma](https://www.prisma.io/)

### Requirements

#### Backend Requirements

- MongoDB 4.4 or higher
- Node.js 16.14 or higher

#### Frontend Requirements

- Backend must be running.
- Node.js 16 or higher

### How to run the application?

- Use the command: `npm install`.
- Configure the application:
  - Duplicate the configuration file `.env.example` and rename it as `.env`
  - Edit the file `.env`
- Then use: `npm run dev:mon`.
