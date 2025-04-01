import {User , Login_details} from '../Models/models.js'; 
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';



const saltRounds = 10;
const signup = async (req,res)=>{
    
        const existingUser =  await Login_details.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ success: false,message: "User already exists. Please login." });
        }
        
        console.log(req.body);
       

        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        const newUser = new Login_details({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });
        await newUser.save();
        return res.status(201).json({ success: true, message: "User registered successfully" });
}

const Login = async (req, res) => {
    try {
        const user = await Login_details.findOne({ email: req.body.email });
      
        
        if (!user) {
            return res.status(403).json({ message: "Invalid email ", success: false });
        }

        
        const isPassEqual = await bcrypt.compare(req.body.password, user.password);
        if (!isPassEqual) {
            return res.status(403).json({ message: "Invalid password", success: false });
        }

 
        console.log('JWT_SECRET:', process.env.JWT_SECRET);

        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

      
        res.status(200).json({
            message: "Login Success",
            success: true,
            jwtToken:jwtToken,
            email: user.email,
            _id:user._id,
            username: user.username
        });
    } catch (err) {
        console.error("Error during login:", err); 
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}


const AddExpense =async (req, res) => {
    try {
       
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
}

const FindExpense = async (req, res) => {

    const { userid } = req.params;
  
    try {
        const expenses = await User.find({ UserId:userid}); // Fetch expenses from DB
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
}

const DeleteExpense = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedExpense = await User.findByIdAndDelete(id);
        if (!deletedExpense) {
            return res.status(404).json({ message: 'Expense not found' });
        }
        res.status(200).json({ message: 'Expense deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
}
export {signup , Login , AddExpense , FindExpense , DeleteExpense}