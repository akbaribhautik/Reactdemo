import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigation = useNavigate()
    const loginApiCall = () => {
        navigation('/Dashboard')
    }

    const renderLoginTitle = () => {
        return (
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>
        )
    }

    const renderLoginForm = () => {
        return (
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6">
                    <Input
                        title="Email address"
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                    />
                    <div>
                        <Input
                            title="Password"
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                        />
                    </div>
                    <Button title="Sign in" onClick={() => loginApiCall()} />
                </form>
            </div>
        )
    }
    
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            {renderLoginTitle()}
            {renderLoginForm()}
        </div>
    );
}

export default Login;


