e("781738");
var r = e("84927"),
  u = /^\s+/;
t.exports = function(t) {
  return t ? t.slice(0, r(t) + 1).replace(u, "") : t
}