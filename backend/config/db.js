import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://gmsmain:SwathiChary@cluster0.gcb36ii.mongodb.net/?appName=Cluster0";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('\n-------------------------------------------------------------');
    console.error('⚠️  MongoDB Connection Warning/Error:');
    console.error(`   ${error.message}`);
    console.error('👉 ACTION REQUIRED: Ensure your current IP address is whitelisted in MongoDB Atlas.');
    console.error('   1. Go to MongoDB Atlas (https://cloud.mongodb.com)');
    console.error('   2. Click "Network Access" under Security');
    console.error('   3. Click "Add IP Address" -> Select "ALLOW ACCESS FROM ANYWHERE" (0.0.0.0/0)');
    console.error('   4. Click "Confirm"');
    console.error('-------------------------------------------------------------\n');
  }
};
