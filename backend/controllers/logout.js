//Require/Imports Statements

//Creating Logout function/method
const handleLogout = (req, res) => {
  res.clearCookie("authToken", {
    httpOnly: true,
    secure: true,
    path: "/",
    sameSite: "strict",
  });

  return res.status(200).json({ msg: "Logout successfully...." });
};

//Export function
module.exports = { handleLogout };
