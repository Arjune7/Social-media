require('dotenv').config()
import express, { json } from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import SocketServer from './socketServer';
const app = express();

app.use(json())  
app.use(cors());
app.use(cookieParser())

app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin', "*");
  next();
})

//#region // !Socket
const http = require('http').createServer(app);
const io = require('socket.io')(http);



io.on('connection', socket => {
    SocketServer(socket);
})

//#endregion
app.get("/",(req,res)=>{
  res.send("Hi Welcome to Social Media App API.....")
})
//#region // !Routes
app.use('/api', require('./routes/authRouter').default);
app.use('/api', require('./routes/userRouter').default);
app.use('/api', require('./routes/postRouter').default);
app.use('/api', require('./routes/commentRouter').default);
app.use('/api', require('./routes/adminRouter').default);
app.use('/api', require('./routes/notifyRouter').default);
app.use('/api', require('./routes/messageRouter').default);
//#endregion


const URI = process.env.MONGODB_URL;
connect(URI, {
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
}, err => {
    if(err) throw err;
    console.log("Database Connected!!")
}) 

const port = process.env.PORT || 3001;
http.listen(port, () => {
  console.log("Listening on ", port);
});