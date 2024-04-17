var i = n("447479"),
  a = n("658141"),
  l = n("401427"),
  s = RegExp("['’]", "g");
e.exports = function(e) {
  return function(t) {
    return i(l(a(t).replace(s, "")), e, "")
  }
}