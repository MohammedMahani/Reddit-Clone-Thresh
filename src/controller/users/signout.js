const logout = (req, res) => {
  res.clearCookie('token').json({
    status: 200,
    msg: 'logged out succ',
  });
};

module.exports = logout;
