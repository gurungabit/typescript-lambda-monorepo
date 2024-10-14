# TypeScript Lambda Monorepo

This project is a monorepo for managing multiple AWS Lambda functions written in TypeScript. It uses npm workspaces to organize and manage dependencies for individual Lambda functions.

## Project Structure

```
ts-lambda-monorepo/
├── package.json
├── tsconfig.json
├── esbuild.js
├── lambdas/
│   └── function1/
│       ├── package.json
│       └── src/
│           └── index.ts
│   └── function2/
│       ├── package.json
│       └── src/
│           └── index.ts
└── README.md
```

- The root `package.json` manages shared dependencies and scripts.
- Each Lambda function has its own directory under `lambdas/` with its own `package.json`.
- `esbuild.js` handles the building of all Lambda functions.

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Build all functions:
   ```
   npm run build
   ```

## Managing Dependencies

### Installing a package for a specific Lambda function

To install a package for a specific Lambda function, use the following command structure:

```
npm install <package-name> -w <function-name>
```

For example, to install `axios` for `function1`:

```
npm install axios -w function1
```

To install a dev dependency:

```
npm install -D <package-name> -w <function-name>
```

For example, to install `@types/node` for `function1`:

```
npm install -D @types/node -w function1
```

## Building

To build all Lambda functions:

```
npm run build
```

This command uses `esbuild` to compile and bundle each function.

## Deploying

To deploy all functions:

```
npm run deploy
```

This command will build, zip, and deploy each function to AWS Lambda.

## Additional Commands

- `npm run zip`: Creates deployment packages for all functions
- `npm run lint`: Runs ESLint on the project
- `npm run format`: Formats the code using Prettier
- `npm run test`: Runs tests for all functions (when implemented)

## Adding a New Lambda Function

1. Create a new directory under `lambdas/`
2. Add a `package.json` and `src/index.ts` to the new function directory
3. Update the root `package.json` if necessary

## Notes

- Ensure you have the necessary AWS credentials configured for deployment.
- Each Lambda function can have its own set of dependencies, keeping functions modular and preventing unnecessary bloat.
- The `esbuild.js` script automatically detects and builds all functions in the `lambdas/` directory.
- TypeScript configuration in `tsconfig.json` is set up to work with the monorepo structure.

## Troubleshooting

If you encounter any issues with building or deploying functions, check the following:

1. Ensure all dependencies are installed (`npm install` in the root directory).
2. Verify that the function's `src/index.ts` file exists and exports a handler.
3. Check that the function's `package.json` has the correct name and scripts.

For more detailed logs, you can modify the `esbuild.js` script to include more verbose output.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
