const users = require("../_data");
const checkAuth = require("../_auth");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const auth = checkAuth(req);
  if (!auth.ok) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  delete users[auth.user_id];
  return res
    .status(200)
    .json({ message: "Account and user successfully removed" });
};
