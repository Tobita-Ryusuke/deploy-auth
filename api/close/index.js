const users = require("../_data");

module.exports = async (req, res) => {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method Not Allowed" });

  const { user_id } = req.body || {};
  if (!user_id) return res.status(400).json({ error: "user_idが必要です" });
  if (!users[user_id]) return res.status(404).json({ error: "ユーザーが存在しません" });

  delete users[user_id];
  return res.status(200).json({ message: `${user_id} を削除しました` });
};
