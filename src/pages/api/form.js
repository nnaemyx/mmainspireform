import { connectToDatabase } from "../../utils/mongo";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { db } = await connectToDatabase();

    const {
      firstName,
      email,
      lastName,
      phoneNumber,
      country,
      postalcode,
      state,
      city,
      address,
      dateofbirth,
      choose,
      signature,
      maritalStatus,
      religion,
    } = req.body;

    // Save the form data to the MongoDB database
    await db.collection("formData").insertOne({
      firstName,
      email,
      lastName,
      phoneNumber,
      country,
      postalcode,
      state,
      city,
      address,
      dateofbirth,
      choose,
      signature,
      maritalStatus,
      religion,
    });

    res.status(200).json({ message: "Form data submitted successfully" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
