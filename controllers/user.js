// controllers/userController.js
const User = require('../model/qruser');
const otpService = require('../services/otpServices');
const twilio = require('twilio');

const accountSid = 'AC0c98a72e150a3625095e03e9cd6b2f1c';
const authToken = 'ab13c9e8ed469a8a050e7febfce4ff33';
const twilioClient = new twilio(accountSid, authToken);

exports.generateOTP = async (req, res) => {
  const { name, email, phone } = req.body;

  // Check if the phone number exists in the database
  let user = await User.findOne({ phone });

  if (!user) {
    user = new User(req.body);
  }

  // Generate and save OTP to the user in the database
  const generatedOTP = otpService.generateOTP();
  user.otp = generatedOTP;
  await user.save();

  // Send OTP to the user using Twilio (SMS)
  try {
    await twilioClient.messages.create({
      body: `Your OTP is: ${generatedOTP}`,
      from: '8585950024',
      to: `+91${phone}`,
    });
    res.json({ success: true });
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ success: false, message: 'Error sending OTP' });
  }
};


exports.verifyOTP = async (req, res) => {
    const { phone, otp } = req.body;
    const user = await User.findOne({ phone });
  
    if (!user) {
      return res.json({ success: false, message: 'User not found' });
    }
    if (otpService.verifyOTP(user.otp, otp)) {
      res.json({ success: true });
    } else {
      res.json({ success: false, message: 'Incorrect OTP' });
    }
};