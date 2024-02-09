n("781738");
var r = n("84927"),
  o = /^\s+/;
e.exports = function(e) {
  return e ? e.slice(0, r(e) + 1).replace(o, "") : e
}