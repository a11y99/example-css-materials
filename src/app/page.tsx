"use client"
import Login from '@/components/Login';

export default function Home() {
    return (
        <div className="w-[80%] mx-auto my-10 space-y-10">
            <div>
                <h1 className="text-2xl font-bold mb-2.5">Login</h1>
                <div className="border rounded-lg p-5">
                    <Login />
                </div>
            </div>
        </div>
    );
};