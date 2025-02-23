import React from 'react'
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';

const Login = () => {
  return (
    <div className='flex flex justify-center items-center h-screen'>
        <div className='bg-white p-8 rounded-lg shadow-2xl w-96'>
            <div className='mb-4 flex flex-col items-center'>
                <h2>Login</h2>
                <p>Log in to your account</p>
                <form>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        required
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        required
                    />
                
                </form>
                <button type="submit">Login</button>
            </div>

            <div>
                <p>Or login with</p>
                <button>
                    <Facebook />
                    Facebook
                </button>
                <button>
                    <Twitter />
                    Twitter
                </button>

            </div>
            
           
        </div>
      
    </div>
  )
}

export default Login
