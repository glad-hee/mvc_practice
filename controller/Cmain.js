const Info = require("../model/loginInfo");

exports.main = (req, res) => {
  res.render("index");
};

exports.loginInfo = (req, res) => {
  const userInfo = Info.userInfo();

  if (req.body.userId == userInfo.id && req.body.userPw == userInfo.pw) {
    res.send({ isLogin: true, userInfo: req.body });
  } else if (
    req.body.userId !== userInfo.id ||
    req.body.userPw !== userInfo.pw
  ) {
    res.send({ isLogin: false });
  }
};
