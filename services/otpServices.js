exports.generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

exports.verifyOTP = (savedOTP, enteredOTP) => {
    return savedOTP === enteredOTP;
};
  