import dbConnect from '../../utils/dbConnect';
import Subscriber from '../../utils/Subscriber';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email } = req.body;

        try {
            await dbConnect();
            const newSubscriber = new Subscriber({ email });
            await newSubscriber.save();
            res.status(201).json({ message: 'Subscription successful' });
        } catch (error) {
            if (error.code === 11000) {
                // Duplicate key error for email field
                return res.status(400).json({ message: 'Email already subscribed' });
            }
            console.error('Error:', error);
            res.status(500).json({ message: 'Subscription failed' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
