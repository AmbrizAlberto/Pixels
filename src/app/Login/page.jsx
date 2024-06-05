'use client';

import { useState } from 'react';
import './LoginRegisterForm.css';

export default function LoginRegisterForm() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className='Login'>
        <div className='infologin'>
            <h1>Pixels</h1>
        </div>
        <div className="login-register-container">
            <div className="form-toggle">
                <button onClick={toggleForm} className={isLogin ? 'active' : ''}>Login</button>
                <button onClick={toggleForm} className={!isLogin ? 'active' : ''}>Register</button>
            </div>
            
            {isLogin ? (
                <form className="form login-form">
                <h2>Login</h2>
                <label htmlFor="login-email">Correo</label>
                <input type="email" id="login-email" name="email" required />
                
                <label htmlFor="login-password">Contraseña</label>
                <input type="password" id="login-password" name="password" required />
                
                <a href="/"><button type="submit">Iniciar Sesión</button></a>
                </form>
            ) : (
                <form className="form register-form">
                <h2>Register</h2>
                <label htmlFor="register-firstname">Nombres</label>
                <input type="text" id="register-firstname" name="firstname" required />
                
                <label htmlFor="register-lastname">Apellidos</label>
                <input type="text" id="register-lastname" name="lastname" required />
                
                <label htmlFor="register-username">Usuario</label>
                <input type="text" id="register-username" name="username" required />
                
                <label htmlFor="register-email">Correo</label>
                <input type="email" id="register-email" name="email" required />
                
                <label htmlFor="register-password">Contraseña</label>
                <input type="password" id="register-password" name="password" required />
                
                <label htmlFor="register-confirm-password">Confirmar Contraseña</label>
                <input type="password" id="register-confirm-password" name="confirm-password" required />
                
                <button type="submit">Registrar</button>
                </form>
            )}
        </div>
    </div>
    
  );
}
