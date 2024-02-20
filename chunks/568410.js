var u = t("389832"),
  f = t("488605"),
  o = t("907193"),
  r = t("890305");
e.exports = function(e) {
  return function(n) {
    var t = f(n = r(n)) ? o(n) : void 0,
      a = t ? t[0] : n.charAt(0),
      i = t ? u(t, 1).join("") : n.slice(1);
    return a[e]() + i
  }
}