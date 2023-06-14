const dotenv = require('dotenv');
dotenv.config();
const exppress = require('express');
const app = exppress();
const cors = require('cors')
const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(cors());
//importing mongoose connect funciton
const connectDB = require('./connect/connect');

//routers
const authRouter = require('./routes/auth');

//routes
app.use('/api/v1',authRouter);
app.get('/', (req, res) => res.send('hi'));
//connecting to server
const port = 8080;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`server is on port https://localhost/${port}`)
    );
  } catch (error) {
    console.log(error);
  }
};
start();
