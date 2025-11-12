const users = require("../_data");

module.exports = async (req, res) => {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method Not Allowed" });

  const { user_id, password, nickname, comment } = req.body || {};
  if (!user_id || !password)
    return res.status(400).json({ message: "user_idとpasswordは必須です" });

  if (users[user_id])
    return res.status(409).json({ message: "既に存在するユーザーです" });

  users[user_id] = { user_id, password, nickname, comment };
  return res.status(201).json(users[user_id]);
};
