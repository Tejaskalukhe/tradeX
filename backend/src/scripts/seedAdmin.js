const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const User = require('../models/User');

dotenv.config({ path: path.resolve(__dirname, '../../.env') });
dotenv.config();

const required = ['ADMIN_NAME', 'ADMIN_EMAIL', 'ADMIN_PASSWORD', 'MONGODB_URI'];
const missing = required.filter((key) => !process.env[key]);
if (missing.length > 0) {
  console.error(`Missing required admin seed configuration: ${missing.join(', ')}`);
  process.exit(1);
}

const seedAdmin = async () => {
  await mongoose.connect(process.env.MONGODB_URI);

  const email = process.env.ADMIN_EMAIL.trim().toLowerCase();
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    if (existingUser.role !== 'admin') {
      existingUser.role = 'admin';
      await existingUser.save();
      console.log('Existing account promoted to admin.');
    } else {
      console.log('Admin account already exists. No changes made.');
    }
    return;
  }

  await User.create({
    name: process.env.ADMIN_NAME.trim(),
    email,
    password: process.env.ADMIN_PASSWORD,
    role: 'admin',
    virtualBalance: 100000,
    isActive: true,
  });
  console.log('Admin account created.');
};

seedAdmin()
  .catch((error) => {
    console.error('Admin seed failed:', error.message);
    process.exitCode = 1;
  })
  .finally(async () => {
    await mongoose.disconnect();
  });
