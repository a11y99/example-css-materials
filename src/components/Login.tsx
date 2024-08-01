import { useState } from 'react';
import { Button, Card, Input, AlertDialog } from 'css-materials';
import Image from 'next/image';
import { FaGithub, FaGoogle } from 'react-icons/fa';

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
                <Input placeholder="Email" type="email" />
                <Input placeholder="UserID" />
                <Input placeholder="Password" type="password" />
                <div className='mt-5 space-y-2.5'>
                    <Button colorScheme="blue" loading={isLoading} onClick={handleLogin}>Login</Button>
                    <p className='opacity-50 hover:underline text-sm'>Don&apos;t have an account? Sign up here.</p>
                </div>
                <div className='mt-5 space-y-2.5 flex flex-col'>
                    <Button colorScheme="green"><FaGoogle className="text-lg mr-2.5" />Login with Google</Button>
                    <Button colorScheme="gray"><FaGithub className="text-lg mr-2.5" />Login with GitHub</Button>
                </div>
            </Card>
            <AlertDialog visible={alertVisible} onClose={handleCloseAlert} title="Login Successful" message="You have successfully logged in." />
        </>
    );
}