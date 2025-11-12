const users = require("../_data");

module.exports = async (req, res) => {
  const { user_id } = req.query;
  if (!users[user_id]) return res.status(404).json({ error: "ユーザーが存在しません" });

  if (req.method === "GET") {
    return res.status(200).json(users[user_id]);
  }
  if (req.method === "PATCH") {
    const { password, nickname, comment } = req.body || {};
    if (password) users[user_id].password = password;
    if (nickname) users[user_id].nickname = nickname;
    if (comment) users[user_id].comment = comment;
    return res.status(200).json(users[user_id]);
  }
  return res.status(405).json({ error: "Method Not Allowed" });
};
