const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const authRouter = require('./routers/authRouters');
const projectRouter = require('./routers/projectRouters');
const taskRouter = require('./routers/taskRouters');
const path = require('path');
require('dotenv').config();


const app = express();


app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
    console.log("Database connected..."); // just test
})
    .catch((err) => {
    console.log(err);
})

app.use('/api/auth', authRouter);  // if there is api/auth continue with authRouter
app.use('/api/projects', projectRouter); // if there is api/projects continue with projectRouter
app.use('/api/tasks', taskRouter); // if there is api/tasks continue with taskRouter


app.get('/',(req, res) => {
    res.json({message: "Server sents a message..."})
})

const PORT = process.env.PORT ;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); // I test port on this way
});