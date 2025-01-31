const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const morgan=require('morgan');
const mongoose=require('mongoose');
const productRouter=require('./routes/products.js');
const categoryRouter=require('./routes/categories.js');
const userRouter=require('./routes/users.js')
const cors=require('cors');
const authJwt=require('./helpers/jwt.js')

app.use(cors());
app.options('*',cors());

app.use(bodyParser.json());
app.use(morgan('tiny'));


mongoose.connect('mongodb+srv://bijuarjun45:jwvfwjvvwu627jv@cluster0.a0ys3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log("mongodb connected");
    
}).catch(err=>{
    console.log(err);
    
})

app.use(authJwt())
app.use('/api/v1/products',productRouter)
app.use('/api/v1/categories',categoryRouter)
app.use('/api/v1/users',userRouter)


app.listen(3000,()=>{
    console.log("server listening on port 3000");
    
})
