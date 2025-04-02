import { toast , Slide} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (message, type = "info") => {
    toast[type](message, {
        position: "top-right", 
        autoClose: 2000,        
        hideProgressBar: false, 
        closeOnClick: false,   
        pauseOnHover: true,
        draggable: true, 
        transition: Slide,   
        theme: "dark",          
        className: `toast-${type}`,
        progressStyle: { background: "yellow" },
    });
};


export const API_URL = import.meta.env.VITE_API_URL;

//Types of message
//"success" = When an action is successful (e.g., login successful)
//"error"	= When an action fails (e.g., invalid credentials)
//"warning" = To show a warning (e.g., password is weak)
//"info" =	To provide general information (e.g., session timeout)