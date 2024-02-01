n("781738");
var r = n("559494"),
  i = n("43332"),
  o = n("285162"),
  s = n("6906"),
  a = /^\[object .+?Constructor\]$/,
  c = Object.prototype,
  u = Function.prototype.toString,
  l = c.hasOwnProperty,
  d = RegExp("^" + u.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
e.exports = function(e) {
  return !(!o(e) || i(e)) && (r(e) ? d : a).test(s(e))
}