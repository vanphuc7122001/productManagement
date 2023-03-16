const checkEmpty = (req, res, next) => {
  const { name, amount, price, sale } = req.body;
  if (name && amount && price && sale) {
    next();
  } else {
    res
      .status(400)
      .send("Các trường name && amount && price && sale không được để chống");
  }
};

const checkAmount = (req, res, next) => {
  const amount = req.body.amount;
  if (amount >= 1 && amount <= 100) {
    next();
  } else {
    res.send("Amount must be between 1 and 100");
  }
};

module.exports = {
  checkEmpty,
  checkAmount,
};
