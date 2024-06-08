'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import '../../../../public/css/LoginRegisterForm.css';

export default function LoginRegisterForm() {
  const [isLogin, setIsLogin] = useState(true);
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState(null);

  const handleLoginSubmit = handleSubmit(async (data) => {
    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (res.error) {
      setError(res.error);
    } else {
      router.push('/dashboard');
      router.refresh();
    }
  });

  const handleRegisterSubmit = handleSubmit(async (data) => {
    if (data.password !== data.confirmPassword) {
      return alert('Passwords do not match');
    }

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      router.push('/auth/login');
    }
  });

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
          <form onSubmit={handleLoginSubmit} className="form login-form">
            <h2>Login</h2>
            {error && (
              <p className="bg-red-500 text-lg text-white p-3 rounded mb-2">{error}</p>
            )}
            <label htmlFor="login-email">Correo</label>
            <input
              type="email"
              id="login-email"
              {...register('email', { required: 'Email is required' })}
              className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
              placeholder="user@email.com"
            />
            {errors.email && (
              <span className="text-red-500 text-xs">{errors.email.message}</span>
            )}
            
            <label htmlFor="login-password">Contraseña</label>
            <input
              type="password"
              id="login-password"
              {...register('password', { required: 'Password is required' })}
              className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
              placeholder="******"
            />
            {errors.password && (
              <span className="text-red-500 text-xs">{errors.password.message}</span>
            )}

            <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2">Iniciar Sesión</button>
          </form>
        ) : (
          <form onSubmit={handleRegisterSubmit} className="form register-form">
            <h2>Register</h2>
            <label htmlFor="register-username">Usuario</label>
            <input
              type="text"
              id="register-username"
              {...register('username', { required: 'Username is required' })}
              className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
              placeholder="yourUser123"
            />
            {errors.username && (
              <span className="text-red-500 text-xs">{errors.username.message}</span>
            )}
            
            <label htmlFor="register-email">Correo</label>
            <input
              type="email"
              id="register-email"
              {...register('email', { required: 'Email is required' })}
              className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
              placeholder="user@email.com"
            />
            {errors.email && (
              <span className="text-red-500 text-xs">{errors.email.message}</span>
            )}
            
            <label htmlFor="register-password">Contraseña</label>
            <input
              type="password"
              id="register-password"
              {...register('password', { required: 'Password is required' })}
              className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
              placeholder="********"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">{errors.password.message}</span>
            )}
            
            <label htmlFor="register-confirm-password">Confirmar Contraseña</label>
            <input
              type="password"
              id="register-confirm-password"
              {...register('confirmPassword', { required: 'Confirm Password is required' })}
              className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
              placeholder="********"
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>
            )}

            <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2">Registrar</button>
          </form>
        )}
      </div>
    </div>
  );
}