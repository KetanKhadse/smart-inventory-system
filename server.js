require('dotenv').config();                  // 1

const app = require('./src/app');            // 2

const connectDB = require('./src/config/db');// 3

connectDB();                                 // 4
console.log(process.env.PORT);

const PORT = process.env.PORT || 5000;       // 5

app.listen(PORT, () => {                     // 6
  console.log(`✅ Server is running on port ${PORT}`);
});

/*
1. require('dotenv').config();
Purpose:
Loads environment variables from .env into process.env
Why it’s needed:
You don’t want to hardcode secrets (like MongoDB URI, port, or JWT secrets) in your source code. Using .env makes it:
More secure
Easier to change configs for dev/test/prod environments

2. const app = require('./src/app');
Purpose:
Imports the Express app that you built separately in src/app.js
Why it’s needed:
You keep route handling and middleware in app.js so server.js stays clean — it’s only responsible for launching the server.

3. const connectDB = require('./src/config/db');
Purpose:
Imports the function to connect to MongoDB (defined in src/config/db.js)
Why it’s needed:
Before your app can do anything with the database (like create users or update products), it must connect to MongoDB.

4. connectDB();
Purpose:
Actually runs the connectDB function you imported in line 3
Why it’s needed:
Triggers the connection to MongoDB at app startup. If this fails, you don’t want to start the server.

💡 Bonus Tip: You could even await this inside an async function and catch errors cleanly.

5. const PORT = process.env.PORT || 5000;
Purpose:
Grabs the port number from .env, or defaults to 5000 if not set
Why it’s needed:
You want flexibility:
On local dev, use 5000
On production, maybe use a dynamic port provided by the hosting environment (like Heroku)

6. app.listen(PORT, () => { ... });
Purpose:
Starts the Express server and listens for HTTP requests on the specified port

Why it’s needed:
This is the actual command that makes your app go live — without this, your app won’t respond to any requests.
*/