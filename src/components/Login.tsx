import { useState } from 'react';
import { Button, Card, Input, AlertDialog, Checkbox } from 'css-materials';
import Image from 'next/image';
import { FaEnvelope, FaGithub, FaGoogle, FaKey, FaMailBulk, FaUser } from 'react-icons/fa';

export default function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const [alertVisible, setAlertVisible] = useState(false);

    const handleLogin = async () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setAlertVisible(true);
        }, 2000);
    };

    const handleCloseAlert = () => {
        setAlertVisible(false);
    };

    return (
        <>
            <div className="flex justify-center mb-10">
                <Image src="/holiday_season/9.svg" alt="Top Image" width={100} height={100} className="w-[250px]" />
            </div>
            <Card title="Log in to your account">
                <Input placeholder="Email" icon={<FaEnvelope />} pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$" errorMessage="Invalid email address" />
                <Input placeholder="UserID" icon={<FaUser />} maxLength={6} />
                <Input placeholder="Password" icon={<FaKey />} type="password" />
                <Checkbox label="Remember me" />
                <div className='mt-5 space-y-2.5'>
                    <Button loading={isLoading} onClick={handleLogin}>Login</Button>
                    <p className='opacity-50 hover:underline text-sm'>Don&apos;t have an account? Sign up here.</p>
                </div>
                <div className='mt-5 space-y-2.5 flex flex-col'>
                    <Button colorScheme="gray" shape="square"><FaGoogle className="text-lg mr-2.5" />Login with Google</Button>
                    <Button colorScheme="gray" shape="square"><FaGithub className="text-lg mr-2.5" />Login with GitHub</Button>
                </div>
            </Card>
            <AlertDialog visible={alertVisible} onClose={handleCloseAlert} title="Login Successful" message="You have successfully logged in." />
        </>
    );
}