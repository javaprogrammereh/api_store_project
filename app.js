const path = require('path');

const dotenv = require('dotenv');
const express = require('express');
const connectDB = require('./config/db');
const populated = require('./populate');

const errorHandlerMiddleware = require('./middlewares/error-handler');
dotenv.config({path:"./config/config.env"});

const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));

app.use(require('./routers/productRouter'));
app.use(errorHandlerMiddleware);


const PORT = process.env.PORT || 3000;
const start = async () => {
    try {
      await connectDB(process.env.MONGO_URL);
    //   await populated();
      app.listen(PORT, () => {
            console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
        });
      } catch (error) {
      console.log(error);
    }
  };
  start();
 
