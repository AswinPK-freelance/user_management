import mongoose from 'mongoose';  // Use import instead of require

export const connect = async () => {
    try {
        // Get the MongoDB URI from environment variables
        const uri = process.env.DB_URL;
        mongoose.set("strictQuery", false);
        await mongoose.connect(
            uri,
            { dbName: process.env.DB_NAME },
            { useNewUrlParser: true, useUnifiedTopology: true }
        );
        console.log(`Connected : ${process.env.DB_NAME}`);
    } catch (error) {
        // Log and return false if there is a database connection error
        console.log("Database connection error \n", error);
        return false;
    }
};
