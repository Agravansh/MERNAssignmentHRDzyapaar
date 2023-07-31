const express=require('express');
const app=express();
const multer=require('multer');
const upload=multer({dest:'uploads/'});
app.use(express.json());
app.post('/api/register',upload.single('profilePicture'),(req, res) => {

});

app.get('/api/users',(req,res)=>{

});

app.put('/api/:userId',(req,res)=>{

});

app.delete('/api/:userId',(req,res)=>{

});

const port=5000;
app.listen(port,()=>{
    console.log('Server is Running on port ${port}');
});