# Neon OSS Starter Kit Documentation

Welcome to the official documentation for the Neon OSS Starter Kit. This documentation will guide you through the installation, setup, and usage of the Neon OSS Starter Kit.

[**Live Documentation**](https://osskit-neon.vercel.app)

![landing page](https://github.com/user-attachments/assets/2ab48727-6fa2-4bc6-9a29-dbad98d3e9a2)


## Creating a new project using the Neon OSS Starter Kit

To create a new project using the Neon OSS Starter Kit, you can use the following command:

```bash
npx @rohittcodes/neon-osskit@latest
```

> Note: This command will create a new next project with Prisma ORM by default.

To create a new project with drizzle, you can use the following command:

```bash
npx @rohittcodes/neon-osskit@latest drizzle
```
for prisma again
```bash
npx @rohittcodes/neon-osskit@latest prisma
```

## Further Steps

After creating a new project using the Neon OSS Starter Kit, you can follow the steps below to get started:

1. Add your environment variables to the `.env` file

```
DATABASE_URL="your-neon-database-url"
 
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key
 
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

2. Delete the `.git` folder and run `git init` to initialize a new git repository for your project (if you want to use git)

3. Start the development server

```bash
pnpm dev
# or
yarn dev
# or
npm run dev
```

## Contributing

If you would like to contribute to the documentation, please follow the steps below:

1. Fork the repository
2. Clone the repository to your local machine
```bash
git clone https://github.com/RohittCodes/neon-osskit.git
```
3. Install the dependencies
```bash
pnpm i
```
4. Start the development server
```bash
pnpm dev
```
5. Make your changes
6. Commit your changes
```bash
git add .
git commit -m "Your commit message"
```
7. Push your changes
```bash
git push
```
8. Create a pull request

If you have any questions or need help, please feel free to reach out to me on [Twitter](https://x.com/RohittCodes).

## License

This project is licensed under the MIT License.
