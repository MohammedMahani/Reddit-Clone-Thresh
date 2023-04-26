const clientError = (req, res) => {
  res.status(404).json({
    error: true,
    data: {
      msg: '404 Error',
    },
  });
};

module.exports = clientError;
