module.exports.errorHandler = (err, req, res, next) => {
  if (res.headerSent) {
    return;
  }

  const status = err.status ?? 500;
  const message = err.message ?? 'Servrt Error';

  res.status(status).send({ errors: [{ status, title: message }] });
};
