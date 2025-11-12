const users = require("../_data");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { user_id, password, nickname, comment } = req.body || {};

  if (!user_id || !password) {
    return res.status(400).json({
      message: "Account creation failed",
      cause: "Required user_id and password",
    });
  }

  if (users[user_id]) {
    return res.status(409).json({
      message: "Account creation failed",
      cause: "Already exists",
    });
  }

  users[user_id] = { user_id, password, nickname, comment };
  return res.status(200).json({ message: "Account successfully created" });
};
