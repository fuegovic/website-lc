import dbConnect from "../../utils/dbConnect";
import Subscriber from "../../utils/Subscriber"; // Assuming this is the correct model for subscribers

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    try {
      await dbConnect();
      console.log("Searching for email:", email);
      const foundSubscriber = await Subscriber.findOne({ email }); // Use Subscriber model instead of Unsubscriber
      console.log("Found Subscriber:", foundSubscriber);
      if (foundSubscriber) {
        foundSubscriber.status = "unsubscribed";
        await foundSubscriber.save();
        res.status(200).json({ message: "Unsubscription successful" });
      } else {
        console.log("Subscriber not found");
        res.status(404).json({ message: "Subscriber not found" });
      }
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Unsubscription failed" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
