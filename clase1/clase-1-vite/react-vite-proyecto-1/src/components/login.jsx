import React from 'react';

import button from './button.jsx';
import FormInput from './input.jsx';

function LoginForm () {
    return (
        <section>
            <form className='Log-In'>
                <h2>Login</h2>
                <span>Carga tus datos para comenzar</span>
                <input placeholder="Email" type="text" />
                <input placeholder="Password" type="password" />
                <button type="submit">{Iniciar Sesion}</button>
            </form>

            <form className="Sign-Up"> 
                <h2>Sign-Up</h2>
                <span>Crea un nuevo usuario</span>
                <input placeholder="Nombre" type="text" />
                <input placeholder="Email" type="text" />
                <input placeholder="Password" type="password" />
                <input placeholder="Confirma Password" type="password" />
                <button type="submit">{Registrarse}</button>
            </form>
        </section>
        )
};

export default LoginForm;