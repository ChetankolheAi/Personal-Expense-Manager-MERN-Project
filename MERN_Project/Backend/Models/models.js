import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
        Description: { type: String, required: true },
        Amount: { type: Number, required: true },
        UserId: { type: String, required: true },
        Month: { type: String, required: true },  // Store the month as a string (e.g., "January")
        Year: { type: String, required: true },   // Store the year as a string (e.g., "2025")
        Date: { type: Date, default: Date.now }   // Store the date when the expense was added
});
const User = mongoose.model('Expenses', userSchema);

const userSchema1 = new mongoose.Schema({
    username:{type:String , required:true},
    email:{type:String, required:true},
    password:{type:String,required:true}
})

const Login_details = mongoose.model('Login_details', userSchema1);

export  { User, Login_details };