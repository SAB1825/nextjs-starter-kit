# Next.js Starter Kit

This is a powerful and versatile starter kit for building modern web applications using Next.js, Clerk for authentication, MongoDB for database management, and Next.js API routes for backend functionality.

## 🚀 Tech Stack

- [Next.js](https://nextjs.org/) - React framework for building server-side rendered and static websites
- [Clerk](https://clerk.dev/) - Complete user management and authentication solution with custom sign-in and sign-up page.
- [MongoDB](https://www.mongodb.com/) - NoSQL database for flexible and scalable data storage
- Next.js API Routes - Built-in API solution for handling backend logic

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 14 or later)
- npm or yarn
- MongoDB (local installation or cloud service like MongoDB Atlas)

## 🛠️ Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/SAB1825/nextjs-starter-kit
   cd nextjs-starter-kit
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following variables:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   CLERK_WEBHOOK_SECRET = your_webhook_secret
   DATABASE_URL = your_MONGODB_URI
   ```

4. Run the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
your-nextjs-starter-kit/
├───app
│   ├───api
│   │   └───webhooks
│   │       └───clerks
│   ├───dashboard
│   ├───sign-in
│   │   └───[[...sign-in]]
│   └───sign-up
│       └───[[...sign-up]]
├───components
│   ├───dashboard
│   ├───pageComponents
│   ├───themeProvider
│   └───ui
├───db
├───hooks
└───lib

```

🔒 Authentication
This starter kit uses Clerk for authentication. To set up and customize authentication, refer to the Clerk documentation.
Setting up Webhooks with ngrok
When developing locally, you'll need to use ngrok to expose your local server to the internet for testing Clerk webhooks. Here's how to set it up:
Go and install ngrok from (https://ngrok.com/) and setup by following the steps in that page. After that follow this page.
Install ngrok globally:
```
npm install -g ngrok
# or
yarn global add ngrok
```

Start your Next.js development server:
```
npm run dev
# or
yarn dev
```

In a new terminal window, start ngrok to create a tunnel to your local server:
```
ngrok http 3000
```

ngrok will provide you with a public URL (e.g., https://1234abcd.ngrok.io). Use this URL in your Clerk Dashboard to set up webhooks.
In your Clerk Dashboard, go to the Webhooks section and add a new endpoint using the ngrok URL followed by your webhook route (e.g., https://1234abcd.ngrok.io/api/webhooks/clerk).
Update your .env.local file with the webhook signing secret provided by Clerk:
```
CLERK_WEBHOOK_SECRET=your_webhook_signing_secret
```

Implement your webhook handler in the appropriate API route (e.g., pages/api/webhooks/clerk).

Remember to restart your ngrok tunnel each time you run your local server, as the URL will change.
💾 Database
MongoDB is used as the database. Connection to MongoDB is handled in lib/mongodb.js. Make sure to update the MONGODB_URI in your .env.local file.
🖥️ API Routes
API routes are located in the app/api directory. These serverless functions can be used to handle backend logic and database operations.
🚀 Deployment
This project can be easily deployed to platforms like Vercel or Netlify. Make sure to set up your environment variables in your deployment platform's settings.
🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check issues page.


Happy coding! If you have any questions or run into issues, please open an issue on the GitHub repository.
