import mongoose from 'mongoose';
const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        console.log('Not Connected To DB', err);
    });


    