# next-typescript
This is a simple [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) to test Next.js
and TypeScript.

```
# Create project
npx create-next-app

# Enable TypeScript
touch tsconfig.json
npm run dev
npm install --save-dev typescript @types/react @types/node
```

The application uses [Apollo Client](https://www.apollographql.com/apollo-client) to fetch data using GraphQL queries from the
SpaceX launches API.

## Getting Started
First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Dependencies
This project uses Yarn v1 to install and manage dependencies.

```
npm install -g yarn
cd next-typescript
yarn set version 1.22.5
```

Note that we are setting the version of Yarn to v1 (classic), not the latest
v2 (berry) release. As such, Yarn will continue to install modules into the
`node_modules` directory.
