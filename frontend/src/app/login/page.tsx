'use client';
import React from 'react';
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const LoginPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-800">Log in to RoomDex</h2>
                </div>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email address
                        </label>
                        <Input id="email" type="email" className="mt-1 block w-full" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <Input id="password" type="password" className="mt-1 block w-full" required/>
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                        Log In
                    </Button>
                    <div className="text-center mt-4">
                        <Link href="/" className="text-sm text-blue-600 hover:underline">
                            Forgot password?
                        </Link>
                    </div>
                </form>
                <div className="mt-6 border-t pt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{' '}
                        <Link href="/signup" className="text-blue-600 hover:underline">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
