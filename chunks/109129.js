t("781738");
var u = t("954328"),
  f = t("890305"),
  o = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
  r = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
e.exports = function(e) {
  return (e = f(e)) && e.replace(o, u).replace(r, "")
}