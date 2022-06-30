import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import postRouter from './routes/posts.js';

const app = express();

//middleware
app.use('/posts', postRouter);

app.use(bodyParser.json({limit : "30mb" , extended:true}));
app.use(bodyParser.urlencoded({limit : "30mb" , extended:true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://memories:kmE0BNr3oNZpkGEw@cluster0.rzb0hbn.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser : true , useUnifiedTopology: true}) //those 2 thing is not essential
    .then(() => app.listen(PORT , () => console.log(`Server is running on port: ${PORT}`)))//if mongoose connection is ok then it it run on PORT
    .catch((error) => console.log(error.massage)); // if get any error from database print massage to console

//mongoose.set('useFindAndModify', false);

