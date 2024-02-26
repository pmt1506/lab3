import { accountsDAO } from "../repository/index.js";

//create account

const createAccount = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newAccount = await accountsDAO.createAccount({
      name,
    });
    res.status(200).json({
        message: "Account Created",
        newAccount,
    });
  } catch (error) {
    res.status(500).json({
      message: error.toString(),
    });
  }
};

export default {
  createAccount,
};