import { useState } from "react";
import loginImage from "../../assets/auth.png";
import Login from "./Login";
import SignUp from "./SignUp";

const Auth = () => {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <div className='pt-20 pb-32 flex items-center justify-between'>
            <div className='w-full'>
                <img src={loginImage} alt='Login Image' />
            </div>
            {isLogin ? (
                <Login setIsLogin={setIsLogin} />
            ) : (
                <SignUp setIsLogin={setIsLogin} />
            )}
        </div>
    );
};
export default Auth;
