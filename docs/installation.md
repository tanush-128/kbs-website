# KBS Website React Project Installation Guide

This guide will walk you through the steps to set up the KBS Website React project on your local machine.

## Prerequisites

Before you begin, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Clone the Repository

```bash
git clone https://github.com/Swarnendu0123/kbs-website.git
```

## Change Directory to Project Root

```bash 
cd kbs-website
```

# Client Setup
## Change Directory to Client

```bash 
cd client
```

## Install Dependencies

```bash
npm install
```

## Configure Environment Variables

1. Create a project in firebase and get the firebase configuration.
2. Create a `.env` file in the `client` directory and add the following environment variables:

```bash
BACKND_URL=http://localhost:8000
FRONTEND_URL=http://localhost:3000
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
```

## Start the Development Server

```bash
npm start
```

# Server Setup

Open another terminal window to set up the server.

## Change Directory to Server

```bash
cd server
```

## Install Dependencies

```bash
npm install
```

## Configure Environment Variables
Create a `.env` file in the `server` directory and add the following environment variables:

```bash
BACKEND_URL=http://localhost:8000
FRONTEND_URL=http://localhost:3000
BACKEND_PORT=8000
```

## Start the Development Server

```bash
npm run dev
```


Now you can access the KBS Website at [http://localhost:3000](http://localhost:3000). and the server at [http://localhost:8000](http://localhost:8000).