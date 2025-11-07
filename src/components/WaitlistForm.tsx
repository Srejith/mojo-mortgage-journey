"use client"
import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const WaitlistForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setStatus('error');
            setMessage('Please enter a valid email address');
            return;
        }

        setStatus('loading');
        setMessage('');

        try {
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setMessage('Thank you! You\'ve been added to the waitlist.');
                setEmail('');
            } else {
                setStatus('error');
                setMessage(data.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setStatus('error');
            setMessage('Failed to join waitlist. Please try again later.');
            console.error('Waitlist submission error:', error);
        }
    };

    return (
        <section id="join-waitlist" className="py-10 lg:py-20">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl lg:text-5xl lg:leading-tight font-bold mb-4">
                    Join the Waitlist
                </h2>
                <p className="text-lg text-foreground-accent mb-8">
                    Be the first to know when MoJo launches. Get early access and exclusive updates on your mortgage journey.
                </p>

                {status === 'success' ? (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-8 flex flex-col items-center gap-4">
                        <FaCheckCircle className="w-16 h-16 text-green-500" />
                        <p className="text-green-700 text-lg font-semibold">{message}</p>
                        <button
                            onClick={() => setStatus('idle')}
                            className="text-secondary hover:underline"
                        >
                            Add another email
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                            required
                            disabled={status === 'loading'}
                        />
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="px-8 py-4 bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                        >
                            {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                        </button>
                    </form>
                )}

                {status === 'error' && (
                    <p className="mt-4 text-red-600">{message}</p>
                )}

                {status === 'idle' && (
                    <p className="mt-4 text-sm text-foreground-accent">
                        We respect your privacy. No spam, unsubscribe anytime.
                    </p>
                )}
            </div>
        </section>
    );
};

export default WaitlistForm;
