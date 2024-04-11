import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const UnsubscribeForm = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/unsubscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.status === 200) {
                toast.success('Unsubscription successful');
                setEmail('');
            } else if (response.status === 404) {
                toast.error('Subscriber not found');
            } else {
                toast.error('Unsubscription failed');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Unsubscription failed');
        }
    };

    return (
        <div className="newsletter-container">
            <Toaster position="bottom-center" reverseOrder={false} />
            <div className="form-wrapper">
                <h2 className="form-title">Unsubscribe From Our Newsletter</h2>
                <form onSubmit={handleSubmit} className="form-container">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="email-input"
                    />
                    <button type="submit" className="subscribe-button">
                        Unsubscribe
                    </button>
                </form>
            </div>
            <style>{`
                .newsletter-container {
                    text-align: center;
                }

                .form-wrapper {
                    max-width: 400px; /* Adjust the max-width as needed */
                    margin: 0 auto;
                    border-radius: 10px;
                    overflow: hidden;
                    background-color: #171717; /* Dark background color */
                }

                .form-title {
                    margin-top: 0;
                    padding: 10px;
                    background-color: #171717; /* Dark background color for title */
                    color: #fff; /* Light text color for title */
                    border-radius: 10px 10px 0 0; /* Rounded corners for top of the form wrapper */
                }

                .form-container {
                    padding: 20px;
                }

                .email-input {
                    padding: 8px;
                    border: 1px solid #3e3e3e; /* Darker border color for input */
                    border-radius: 5px;
                    margin-bottom: 10px;
                    width: 100%;
                    background-color: #3e3e3e; /* Darker background color for input */
                    color: #fff; /* Light text color for input */
                }

                .subscribe-button {
                    padding: 8px 16px;
                    background: linear-gradient(-45deg, #ffa63d, #ff3d77, #338aff, #3cf0c5);
                    background-size: 600%;
                    animation: anime 16s linear infinite;
                    color: rgba(255, 255, 255, 0.9);
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    width: 100%;
                }

                .subscribe-button:hover {
                    filter: brightness(110%);
                }

                @keyframes anime {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }
            `}</style>
        </div>
    );
};

export default UnsubscribeForm;
