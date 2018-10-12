var exports=(module.exports={});
exports.logout = function (req, res) {
  console.log("authcontroller - exports.signout");
  req.session.destroy(function (err) {
    if (err) {
      throw err;
    }
    res.redirect("/");
  });
};