const { validationResult } = require("express-validator");
const userService = require("../_services").user;
const response = require("../_helpers").response;

module.exports = {
  get({ user }, res, next) {
    userService
      .getById(user.sub)
      .then(({ id, email }) =>
        user
          ? res.json({ ...response, data: { id, email } })
          : res.status(400).json({
              ...response,
              success: false,
              error: "User not found",
            })
      )
      .catch((err) => next(err));
  },
  authenticate(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return next(errors.array()[0].msg);

    userService
      .authenticate(req.body)
      .then((user) =>
        user
          ? res.json({ ...response, data: { token: user.token } })
          : res.status(400).json({
              ...response,
              success: false,
              error: "Email or password is incorrect",
            })
      )
      .catch((err) => next(err));
  },
  create(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return next(errors.array()[0].msg);

    userService
      .create(req.body)
      .then(({ id, token }) => res.json({ ...response, data: { id, token } }))
      .catch((err) => next(err));
  },
};
