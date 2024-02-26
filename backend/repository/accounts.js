import Account from "../model/accounts.js";

//create account with name

const createAccount = async ({ name }) => {
  try {
    const newAccount = await Account.create({
      name,
    });
    return newAccount._id.toString();
  } catch (error) {
    throw new Error(error.toString());
  }
};

export default { createAccount };