const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");
const authRouter = require("./routes/user");
const path = require("path");

//4- pase data
app.use(express.json());
//3- routes
app.use('/api',authRouter)
if (process.env.NODE_ENV==='production'){
  app.use(express.static('client/build'))
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}

//2- connect DB
connectDB();
//1-run server
const port = process.env.PORT || 4900;
app.listen(port, (err) => {
  err ? console.log(err) : console.log(`the server is running on ${port}`);
});
