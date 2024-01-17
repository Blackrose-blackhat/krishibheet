"use client"
import React from 'react';

interface FormProps {
  formType: 'login' | 'signup';
  onSubmit: (username: string, password: string, email?: string) => void;
}

const AuthForm: React.FC<FormProps> = ({ formType, onSubmit }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(username, password, formType === 'signup' ? confirmPassword : undefined);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white  w-1/2 rounded px-8 pt-6 pb-8 mb-4 shadow-xl shadow-neutral-800">
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" required 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2" />
      {formType === 'signup' && <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirm Password" required 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2" />}
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2">
        {formType === 'login' ? 'Login' : 'Signup'}
      </button>
    </form>
  );
};

export default AuthForm;