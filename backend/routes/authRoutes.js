import express from 'express';
import { loginUser, registerUser } from '../controllers/authController.js';

const router = express.Router();

// Register a new user
router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;






//mongodb+srv://kkarthickraaja:Karthi@cluster0.c0aji.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//MONGO_URL = mongodb://dr-app:uzair123@ac-knxfmic-shard-00-00.uhpk6qs.mongodb.net:27017,ac-knxfmic-shard-00-01.uhpk6qs.mongodb.net:27017,ac-knxfmic-shard-00-02.uhpk6qs.mongodb.net:27017/TripsTravel?ssl=true&replicaSet=atlas-s01o98-shard-0&authSource=admin&retryWrites=true&w=majority
//SECRET_KEY = askljdflkasdfklkasbhfkjashdlkjfha.skhfdljhfajksdbcvkbnxbvjksajfklhjklasdhfjkhsajklhdjklf


//MONGO_URL = mongodb+srv://kkarthickraaja:Karthi@cluster0.c0aji.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

//mongodb+srv://kkarthickraaja:Karthi@cluster0.c0aji.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0