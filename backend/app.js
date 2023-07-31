const express=require('express');
const app=express();
const mongoose=require('mongoose');
const userRoutes = require('./routes/userRoutes');

mongoose.connect('mongodb://localhost:27017/mern_assignment_31',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use('/api',userRoutes);

const port = 5000;
app.listen(port,()=>{
    console.log('Server is Running on port ${port}');
});