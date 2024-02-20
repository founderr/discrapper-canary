t("781738");
var u = t("509007"),
  f = t("109129"),
  o = t("787191"),
  r = RegExp("['’]", "g");
e.exports = function(e) {
  return function(n) {
    return u(o(f(n).replace(r, "")), e, "")
  }
}