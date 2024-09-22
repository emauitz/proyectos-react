import React from 'react';

import button from './button.jsx';
import FormInput from './input.jsx';

function LoginForm () {
    return (
        <container-form>
            <form className='Log-In'>
                <h2>Login</h2>
                <span>Carga tus datos para comenzar</span>
                <FormInput type="text" placeholder="Email" />
                <FormInput type="password" placeholder="Password" />
                <button type="text" text="Iniciar Sesion" />
            </form>

            <form className="Sign-Up"> 
                <h2>Sign-Up</h2>
                <span>Crea un nuevo usuario</span>
                <FormInput type="text" placeholder="Nombre" />
                <FormInput type="text" placeholder="Email" />
                <FormInput type="password" placeholder="Password" />
                <FormInput type="password" placeholder="Confirma Password" />
                <button type="submit" text="Registrarse" />
            </form>
    
        </container-form>)
}

export default LoginForm;