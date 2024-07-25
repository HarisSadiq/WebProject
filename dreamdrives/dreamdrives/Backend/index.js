import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import User from './router/user.js';

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://Admin:Admin123@cluster-bm.sxfsytb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-Bm",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use('/api/user', User);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
