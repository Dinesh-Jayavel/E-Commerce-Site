const app = require('./app');
const path = require('path');
const connectDatabase = require('./config/database');


connectDatabase();

const server = app.listen(process.env.PORT,()=>{
    console.log(`My Server listening to the port: ${process.env.PORT} in  ${process.env.NODE_ENV} `)
})

process.on('unhandledRejection',(err)=>{
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to unhandled rejection error');
    server.close(()=>{
        process.exit(1);
    })
})

process.on('uncaughtException',(err)=>{
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to uncaught exception error');
    server.close(()=>{
        process.exit(1);
    })
})

// Code By Dinesh Jayavel
// Command To Run The backend
// npm start prod

// Frontend
// In the project directory, you can run:

// npm start
// Runs the app in the development mode.
// Open http://localhost:3000 to view it in your browser.

//For Inserting A Default data In Database
// npm run seeder 

