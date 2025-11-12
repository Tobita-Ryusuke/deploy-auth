const checkAuth = require("../_auth");

module.exports = async (req, res) => {
  const { user_id } = req.query;

  const auth = checkAuth(req);
  if (!auth.ok) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  if (req.method === "GET") {
    return res.status(200).json({ message: "User details by user_id" });
  }

  if (req.method === "PATCH") {
    if (auth.user_id !== user_id) {
      return res.status(403).json({ message: "No permission for update" });
    }

    return res.status(200).json({ message: "User successfully updated" });
  }

  return res.status(405).json({ message: "Method Not Allowed" });
};
