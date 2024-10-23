// single component to be used for signup and sign in 
// signup --- username, email, password & signin --> email, password 
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom' ; 
import { LabelledInput } from './LabelledInput';
import { useState } from 'react';
import { Button } from './Button';


export const AuthComponent = ()=>{ 
    const [username, setUsername] = useState("") ; 
    const [email, setEmail] = useState("") ; 
    const[password, setPassword] = useState("") ; 

    const navigate = useNavigate() ; 


    return <div> 
        <div> 
            Create an Account? 
        </div>
        <div> 
            Already have an account?  
            <Link to="/signin">Login</Link>
        </div>

        <div> 
           <LabelledInput label="Username" onChange={(e) =>{  
                setUsername(e.target.value)
           }} placeholder="enter username"> </LabelledInput>

           
            <LabelledInput label="email" onChange={(e) =>{  
                setEmail(e.target.value)
           }} placeholder="example@email.com"> </LabelledInput>
           
           <LabelledInput type="password" label="Password" onChange={(e) =>{  
                setPassword(e.target.value)
           }} placeholder="password ..."> </LabelledInput>


        </div>
        <div> 
           <Button label={"Sign up"} onClick={async () => { 
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", { 
                username, 
                email, 
                password
            })
            
            // also store jwt in localstorage 
            // response.data.token ---> through this we can access our jwt token via backend
            localStorage.setItem("token", response.data.token) ; 
            
            // once the user will signup will forward user to todoDashbaord page  
            navigate('/TodoDashboard'); 
        
           }}></Button>
        </div>
    </div>
}