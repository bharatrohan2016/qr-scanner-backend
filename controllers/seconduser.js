const QsecondUser = require('../model/qseconduser')

module.exports.signIn = async (req, res) => {
  console.log(req.body);
  try {
      let user = new QsecondUser(req.body)
      await user.save()
      res.status(200).json('Saved!')
  } catch (error) {
      console.log(error);
      res.status(500).json('Error ', error.message);
  }
}