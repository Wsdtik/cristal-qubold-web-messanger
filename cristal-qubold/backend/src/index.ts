import dotenv from 'dotenv';
dotenv.config();

import 'reflect-metadata';
import { createConnection } from 'typeorm';
import config from './ormconfig';
import { User } from './entities/User';


// Existing imports...
import express from 'express';
// ...
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

createConnection(config)
  .then(() => {
    console.log('Connected to PostgreSQL');

    // Start the server after the DB connection is established
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(error => console.log('TypeORM connection error: ', error));

  const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/your_database';
  mongoose.connect(mongoURI, {
    // options
  });
  
  mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
  });
  
  mongoose.connection.on('error', err => {
    console.log('MongoDB connection error: ', err);
  });


  
import { rabbitMQService } from './services/rabbitmq';

// After establishing database connections
async function startServer() {
    try {
        await rabbitMQService.connect();
        await rabbitMQService.consumeMessages();
        console.log('RabbitMQ connected');
    
        await mongoose.connect(mongoURI);
        console.log('MongoDB connected');
    
        app.listen(port, () => {
          console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error('Error starting server:', error);
    }
  // Routes can use rabbitMQService.sendMessage(message) to send messages
}

createConnection(config)
  .then(async () => {
    console.log('Connected to PostgreSQL');
    await startServer();
  })
  .catch(error => console.log('TypeORM connection error: ', error));


import apiRoutes from './routes/api';
app.use('/api', apiRoutes);