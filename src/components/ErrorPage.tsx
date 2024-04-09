
import React from 'react';
import { useNavigate } from 'react-router-dom';
const ErrorPage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-gray-800">404</h1>
            <p className="text-xl text-gray-600">Oops! Página no encontrada.</p>
            <button
            onClick={
                () => {
                    navigate('/');
                }
            
            }
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Volver a la página principal
            </button>
        </div>
    );
};

export default ErrorPage;