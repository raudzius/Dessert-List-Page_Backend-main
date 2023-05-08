const Dessert = require('../schemas/dessertSchema');

const getList = async (req, res) => {
  const desserts = await Dessert.find({});
  res.send(desserts);
};
const getDetails = async (req, res) => {
  const { id } = req.params;
  const dessert = await Dessert.findOne({ _id: id });
  res.send(dessert);
};
const postNewRecord = async (req, res) => {
  const dessert = new Dessert(req.body);
  await dessert.save();
};

module.exports = {
  getList,
  getDetails,
  postNewRecord,
};
