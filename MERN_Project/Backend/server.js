import express from 'express';
import cors from 'cors';
import Login from './Routes/index.js';
import './Models/db.js'; 
 
import {AddExpense , FindExpense , DeleteExpense} from './Controller/taskController.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());




app.post('/Add', AddExpense)

app.get('/expenses/:userid', FindExpense)

app.delete('/expenses/:id', DeleteExpense)

app.use('/api', Login); 




app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});



