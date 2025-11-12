module.exports = function checkAuth(req) {
  const auth = req.headers.authorization || "";
  if (!auth.startsWith("Basic ")) return { ok: false };

  const decoded = Buffer.from(auth.slice(6), "base64").toString("utf8");
  const [user_id, password] = decoded.split(":");

  if (!user_id || !password) return { ok: false };

  return { ok: true, user_id };
};
